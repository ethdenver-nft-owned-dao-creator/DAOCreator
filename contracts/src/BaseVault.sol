// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./tokens/ERC721.sol";
import "./tokens/ERC20.sol";
import "./interfaces/IStrategy.sol";

contract BaseVault is ERC721 {

    // #########################
    // ##                     ##
    // ##      Structs        ##
    // ##                     ##
    // #########################

    struct Deposits {
        uint256 amount;
        uint256 tracker; //sum of delta(deposit) * yeildPerDeposit
    }

    // #########################
    // ##                     ##
    // ##       State         ##
    // ##                     ##
    // #########################

    // tokenID => Deposits
    mapping(uint256 => Deposits) public deposits;

    //sum of yeild/totalDeposits
    uint256 public yeildPerDeposit;
    uint256 public totalDeposits;
    uint256 SCALAR = 1e10;

    uint256 public depositedToStrat;
    
    ERC20 immutable vaultToken;

    // strategy to earn yeild on vault reserves
    // strats are hardcoded at 50% of totalDeposits
    IStrategy strat;

    // #########################
    // ##                     ##
    // ##     Constructor     ##
    // ##                     ##
    // #########################

    constructor(
        ERC20 _vaultToken,
        address strategy,
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
        vaultToken = _vaultToken;
        strat = IStrategy(strategy);
    }

    // #########################
    // ##                     ##
    // ##     User Facing     ##
    // ##                     ##
    // #########################

    function mintNewNFT(uint256 amount) external virtual returns (uint256) {

        uint256 id = currentId;

        deposits[id].amount = amount;
        deposits[id].tracker += amount * yeildPerDeposit;
        totalDeposits += amount;

        //ensure token reverts on failed
        vaultToken.transferFrom(msg.sender, address(this), amount);

        require(id == _mint(msg.sender, id));
        return id;

    }

    function depositToId(uint256 amount, uint256 id) external virtual {

        // trusted contract
        require(msg.sender == ownerOf[id]);

        deposits[id].amount += amount;
        deposits[id].tracker += amount * yeildPerDeposit;
        totalDeposits += amount;

        //ensure token reverts on failed
        vaultToken.transferFrom(msg.sender, address(this), amount);
        
    }

    // Burns NFT and withdraws all claimable token + yeild
    function burn(uint256 id) external virtual  {

        uint256 claimable = withdrawableById(id);
        withdrawFromId(claimable, id);

        _burn(id);

    }

    // TODO: potentially remove this?
    function withdrawFromId(uint256 amount, uint256 id) public virtual  {

        require(msg.sender == ownerOf[id]);
        require(amount <= withdrawableById(id));

        //trusted contract
        uint256 balanceCheck = vaultToken.balanceOf(address(this));

        // trusted contract
        if (amount > balanceCheck) {

            withdrawFromStrat(
                amount - balanceCheck,
                id
            );
            
        }

        deposits[id].amount -= amount;
        deposits[id].tracker -= amount * yeildPerDeposit;

        vaultToken.transfer(msg.sender, amount);

    }

    function withdrawableById(uint256 id) public view virtual returns (uint256) {

        uint256 yield = yeildPerId(id);

        // claimable may be larger than total deposits but never smaller
        uint256 claimable = vaultToken.balanceOf(address(this)) + depositedToStrat;
        uint256 claimId = (claimable * deposits[id].amount) / totalDeposits;

        return claimId + yield;

    }

    // #########################
    // ##                     ##
    // ##      Strategy       ##
    // ##                     ##
    // #########################

    function setStrategy(address addr) internal virtual {

        strat = IStrategy(addr);

    }

    //total possible deposited to strat is currently set at 50%
    function initStrat() public {

        require(address(strat) != address(0), "No Strategy");

        // 50% of total deposits
        uint256 half = (totalDeposits * 5000) / 10000;
        uint256 depositable = half - depositedToStrat;

        depositedToStrat += depositable;
        
        vaultToken.approve(address(strat), depositable);
        strat.deposit(depositable);

    }

    //internal, only called when balanceOf(address(this)) < withdraw requested
    // depositedToStrat = total withdrawn - yeild of msg.sender
    function withdrawFromStrat(uint256 amountNeeded, uint256 forID) internal {

        uint256 userYield = yeildPerId(forID);

        // needed for OoP
        uint256 toSubtract = amountNeeded - userYield;
        depositedToStrat -= toSubtract;

        strat.withdrawl(amountNeeded);

    }

    // #########################
    // ##                     ##
    // ##       Yeild         ##
    // ##                     ##
    // #########################

    // gets yeild from strategy contract
    //possbily call this before new mints?
    function adjustYeild() public virtual {

        require(address(strat) != address(0), "No Strategy");

        uint256 totalInStrat = strat.withdrawlableVaultToken();
        uint256 totalYield = totalInStrat - depositedToStrat;

        yeildPerDeposit += (totalYield * SCALAR) / totalDeposits;

    }

    function yeildPerId(uint256 id) internal view returns (uint256) {

        uint256 pre = deposits[id].amount * yeildPerDeposit / SCALAR;
        return pre - deposits[id].tracker / SCALAR;

    }

    // #########################
    // ##                     ##
    // ##  MetaData Override  ##
    // ##                     ##
    // #########################

    function tokenURI(uint256 id) public view override returns (string memory) {
            
    }


}