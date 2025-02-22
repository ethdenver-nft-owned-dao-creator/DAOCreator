<script lang="ts">
	// Constants/types
	import { _ } from 'svelte-i18n'
	import { type VaultConfig, type VaultStatus, type VaultPosition, MetadataType, VaultType, vaultTypeInfo, yieldStrategyInfo, GovernanceType, YieldStrategy } from '../lib/vaultConfig'
	import { type Network, networkIcons, networksByChainID, mainnetForTestnet, networkColors } from '$lib/networks'
	import { BigNumber } from 'ethers'
	
	
	// External state
	type T = $$Generic<VaultType>
	
	export let vaultConfig: VaultConfig<T>

	export let vaultStatus: VaultStatus

	export let vaultPosition: VaultPosition

	export let isRotatable = false


	// Internal state

	let isDeployed: boolean
	$: isDeployed = !!vaultStatus


	let isShowingIndividualPosition: boolean
	$: isShowingIndividualPosition = !!vaultPosition


	let network: Network
	$: network = networksByChainID[vaultConfig.chainId]

	let metadata
	$: metadata = isShowingIndividualPosition
		? [
			vaultConfig.yieldStrategy !== YieldStrategy.None && [
				{ icon: '🏦', label: 'Yield Strategy', displayType: MetadataType.String, value: yieldStrategyInfo[vaultConfig.yieldStrategy].label },
			],
			{ icon: '💰', label: 'Balance', displayType: MetadataType.TokenBalance, value: vaultPosition.balance },
			vaultConfig.yieldStrategy !== YieldStrategy.None && [
				{ icon: '💸', label: 'Yield Earned', displayType: MetadataType.TokenBalance, value: vaultPosition.yieldEarned },
			],
		].filter(Boolean).flat()
		: [
			vaultConfig.yieldStrategy !== YieldStrategy.None && [
				{ icon: '🏦', label: 'Yield Strategy', displayType: MetadataType.String, value: yieldStrategyInfo[vaultConfig.yieldStrategy].label },
			],
			vaultConfig.type === VaultType.Degen && [
				{ icon: '💸', label: 'Dividend', displayType: MetadataType.Percent, value: vaultConfig.config.dividend },
				{ icon: '🎰', label: 'Jackpot', displayType: MetadataType.Percent, value: vaultConfig.config.jackpot },
				{ icon: '🏦', label: 'Treasury', displayType: MetadataType.Percent, value: vaultConfig.config.treasury },
				{ icon: '⏱', label: 'Deadline', displayType: MetadataType.Date, value: vaultConfig.config.deadline },
			],
			vaultConfig.type === VaultType.DAO && vaultConfig.config.governanceType === GovernanceType.MultiSignature && [
				{ icon: '🗳', label: 'Governance Type', displayType: MetadataType.String, value: vaultConfig.config.governanceType },
				{ icon: '📝', label: 'Minimum Signatures', displayType: MetadataType.String, value: vaultConfig.config.minimumSignatures },
				{ icon: '✍️', label: 'Signers', displayType: MetadataType.String, value: vaultConfig.config.signers.filter(Boolean).length },
			],
			vaultConfig.type === VaultType.DAO && vaultConfig.config.governanceType === GovernanceType.TokenVoting && [
				{ icon: '🗳', label: 'Governance Type', displayType: MetadataType.String, value: vaultConfig.config.governanceType },
				{ icon: '👋', label: 'Quorum', displayType: MetadataType.Percent, value: vaultConfig.config.quorum },
			],
			vaultConfig.type === VaultType.Charity && [
				{ icon: '🤲', label: 'Recipient', displayType: MetadataType.Address, value: vaultConfig.config.recipientAddress },
				{ icon: '🍰', label: 'Yield to Recipient', displayType: MetadataType.Percent, value: vaultConfig.config.recipientYieldPercent },
				{ icon: '💰', label: 'Payout Type', displayType: MetadataType.String, value: vaultConfig.config.payoutType },
			]
		].filter(Boolean).flat()


	// Components
	import Address from './Address.svelte'
	import Container from './Container.svelte'
	import TokenBalance from './TokenBalance.svelte'
	// import PieChart from './PieChart.svelte'
	// import Icon from './Icon.svelte'


	// Images
	import websiteIcon from '../assets/icons/website.svg'
	import twitterIcon from '../assets/icons/twitter.svg'
	import discordIcon from '../assets/icons/discord.svg'

	import cardBack from '../assets/card-faces/card-back.svg'

	import cardFaceFrog from '../assets/card-faces/frog.svg'
	import cardFaceGift from '../assets/card-faces/gift.svg'
	import cardFaceVote from '../assets/card-faces/voting-box.svg'
	import cardFaceVault from '../assets/card-faces/vault.svg'
	import cardFaceFrogShadow from '../assets/card-faces/frog-shadow.svg'
	import cardFaceGiftShadow from '../assets/card-faces/gift-shadow.svg'
	import cardFaceVoteShadow from '../assets/card-faces/vote-shadow.svg'
	import cardFaceVaultShadow from '../assets/card-faces/vault-shadow.svg'


	// Styles/animations
	import { fade, scale } from 'svelte/transition'
	import { flip } from 'svelte/animate'
</script>


<!-- <svg class="vault-container" viewBox="-100 -100 600 866.666" xmlns="http://www.w3.org/2000/svg">
	<foreignObject x="-100" y="-100" width="600" height="866.666"> -->
<svg class="vault-container" viewBox="0 0 400 666.666" xmlns="http://www.w3.org/2000/svg">
	<foreignObject x="0" y="0" width="400" height="666.666">
		<article
			class="vault stack"
			class:isShowingIndividualPosition
			class:isRotatable
			style="
				--card-back-image: url({cardBack});

				--vault-type-color: {vaultTypeInfo[vaultConfig.type]?.color ?? ''};

				--vault-token-color: {{
					'ETH': '#627eea',
					'DAI': '#faba34',
					'USDC': '#2775c9',
					'USDT': '#26a17b',
					'MATIC': '#8248e5',
					'AVAX': '#f9273c',
					'skETH': 'red',
					'CELO': '#fbcc5c',
				}[vaultConfig.tokens[0]?.symbol] ?? ''};

				--vault-network-color: {networkColors[networksByChainID[vaultConfig.chainId]?.slug] ?? networkColors[mainnetForTestnet[networksByChainID[vaultConfig.chainId]?.slug]?.slug] ?? ''};
			"
		>
			<div class="back card"></div>

			<div class="front card">
				<Container class="column">
					<header class="row">
						<div class="row">
							<div class="stack">
								{#key vaultConfig.chainId}
									<div class="network" transition:scale>
										<img src={networkIcons[vaultConfig.chainId]} width="14"/>
									</div>
								{/key}
							</div>

							{#if vaultConfig.about.name}
								<h2 class="align-start" transition:scale>{vaultConfig.about.name}</h2>
							{/if}
						</div>

						<span class="token-balance">
							{#if !isDeployed}
								<TokenBalance
									balance={vaultConfig.config.initialLiquidity.amount}
									erc20Token={vaultConfig.tokens[0]}
								/>
							{:else}
								<!-- {#if isShowingIndividualPosition}
									<TokenBalance
										balance={vaultPosition.balance}
										erc20Token={vaultConfig.tokens[0]}
									/>
									/
								{/if} -->
								<TokenBalance
									balance={vaultStatus.totalBalance}
									erc20Token={vaultConfig.tokens[0]}
								/>
							{/if}
						</span>
					</header>

					<div class="stack">
						<figure class="illustration-wrapper card stack centered">
							{#key vaultConfig.type}
								{#if vaultConfig.type}
									<!-- svelte-ignore a11y-missing-attribute -->
									<img
										class="illustration"
										src={
											isDeployed // isShowingIndividualPosition
												? {
													[VaultType.Standard]: cardFaceVault,
													[VaultType.Charity]: cardFaceGift,
													[VaultType.DAO]: cardFaceVote,
													[VaultType.Degen]: cardFaceFrog,
												}[vaultConfig.type]
												: {
													[VaultType.Standard]: cardFaceVaultShadow,
													[VaultType.Charity]: cardFaceGiftShadow,
													[VaultType.DAO]: cardFaceVoteShadow,
													[VaultType.Degen]: cardFaceFrogShadow,
												}[vaultConfig.type]
										}
										transition:scale
									/>
								{/if}
							{/key}
						</figure>
					</div>

					<div class="vault-type-info row">
						<div class="stack centered">
							<span class="token-id row centered">{isShowingIndividualPosition ? vaultStatus.tokenId : 'V'}</span>
							<svg class="text-path" width="50" height="50" viewBox="-1.5 -1.5 3 3">
								<defs>
									<!-- <path id="c" d="m -1, 0 a 1,1 0 0,1 2,0 a 1,1 0 0,1 -2,0 "/> -->
									<!-- <path id="c" d="m -1,0 a 1,1 0 0,1 2,0 a 1,1 0 0,1 -2,0 "/> -->
									<path id="c" d="
										M-1,0
										A1,1,0,1,1,1,0 A1,1,0,1,1,-1,0
										A1,1,0,1,1,1,0 A1,1,0,1,1,-1,0
									"/>
								</defs>
								<text fill="currentColor" style="font-size: 0.66px; letter-spacing: 0.15px">
									<textPath xlink:href="#c">
										<!-- EDITION -->
										{$_(isShowingIndividualPosition ? 'POSITION' : 'VAULT')}
										<!-- <animate additive="sum" attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite" /> -->
									</textPath>
								</text>
							</svg>
						</div>
						
						<div class="stack">
							{#key vaultConfig.type}
								<div class="vault-type row centered" transition:scale={{ start: 0.33 }}>
									{$_(vaultTypeInfo[vaultConfig.type]?.label) ?? $_('???')}
								</div>
							{/key}
						</div>

						<div class="yield-strategy stack">
							{#key vaultConfig.yieldStrategy}
								{#if vaultConfig.yieldStrategy !== YieldStrategy.None}
									<img src={yieldStrategyInfo[vaultConfig.yieldStrategy]?.icon} width="32" height="32" transition:scale />
								{/if}
							{/key}
						</div>

						<!-- {#if vaultConfig.type === VaultType.Degen}
							<PieChart data={[
								{ amount: vaultConfig.config.jackpot, label: 'Jackpot' },
								{ amount: vaultConfig.config.dividend, label: 'Dividend' },
								{ amount: vaultConfig.config.treasury, label: 'Treasury' },
							]} />
						{/if} -->
					</div>

					<Container isOpen={metadata.length}>
						<div class="metadata column" style="--l: {metadata.length}">
							<!-- {#key vaultConfig.type} -->
							{#each metadata as { icon, label, displayType, value }, i (label)}
								<div class="card row" in:scale={{ delay: i * 100 }} out:scale animate:flip>
									<div class="row">
										<!-- <img src={icon} width="20" height="20" /> -->
										<span class="metadata-icon">{$_(icon)}</span>
										<span class="label">{$_(label)}</span>
									</div>

									<div class="stack align-end">
										{#key value}
											<span class="value" transition:scale={{ start: 0.3 }}>
												{#if displayType === MetadataType.TokenBalance}
													<TokenBalance balance={value} erc20Token={vaultConfig.tokens[0]} />
												{:else if displayType === MetadataType.Date}
													<span>{value} seconds</span>
													<!-- <Countdown toTimestamp={value} /> -->
												{:else if displayType === MetadataType.Percent}
													<span>{value}%</span>
												{:else if displayType === MetadataType.Address}
													<Address network={networksByChainID[vaultConfig.chainId]} address={value} linked={false} />
												{:else if displayType === MetadataType.String}
													<!-- <span>{$_(value)}</span> -->
													{value ?? ''}
												{/if}
											</span>
										{/key}
									</div>
								</div>
							{/each}
							<!-- {/key} -->
						</div>
					</Container>

					<Container isOpen={vaultConfig.about.description}>
						<p class="description align-start" transition:scale>{vaultConfig.about.description}</p>
					</Container>

					<Container class="column" isOpen={vaultConfig.about.website || vaultConfig.about.twitter || vaultConfig.about.discord}>
						<div class="row centered icons-row">
							
							{#each
								[
									{ label: 'Website', link: vaultConfig.about.website, icon: websiteIcon },
									{ label: 'Twitter', link: vaultConfig.about.twitter, icon: twitterIcon },
									{ label: 'Discord', link: vaultConfig.about.discord, icon: discordIcon }
								].filter(({ link }) => link)
								as
								{ label, link, icon } (label)
							}
								<a class="icon button round" href={link.includes('://') ? link : 'https://' + link} target="_blank" rel="nofollow" in:scale animate:flip>
									<!-- {$_(label)} -->
									<img src={icon} alt={label} width="22" />
								</a>
							{/each}
						</div>
					</Container>
				</Container>
			</div>
		</article>
	</foreignObject>
</svg>


<style>
	.vault-container {
		width: 400px;
		height: 666.666px;
		transition: 1s;
		perspective: 1000px;
		transform-style: preserve-3d;
		filter: drop-shadow(0 1px 0.5em var(--background-color-4));
	}
	
	.vault {
		/* DYNAMICALLY OVERRIDABLE */
		--card-back-image: url();
		--vault-type-color: var(--background-color-2);
		--vault-token-color: var(--background-color-2);
		--vault-network-color: var(--background-color-2);
		--vault-card-border-width: 0.5em;

		font-size: 16px;
		/* position: absolute; */
		--grid-gap: 1rem;

		transition: 1s;
		/* transform-origin: left; */

		animation: FlipIn 1.25s 0.5s ease-in-out backwards;
	}
	@keyframes FlipIn {
		from {
			transform: scale(0.5) rotateY(0.5turn);
		}
	}
	.vault-container:is(:hover, :focus) .vault.isRotatable {
		transform: rotateY(0.5turn);
		/* transform: translateZ(-200px) rotateY(0.5turn) translateZ(-200px); */
		/* transform-origin: center; */
	}

	.vault > .card {
		backface-visibility: hidden;
		transition: 1s;
		min-height: 450px;
	}
	.vault > .card.back {
		background: black var(--card-back-image) center / cover no-repeat;
		transform: rotateY(0.5turn);
	}
	.vault > .card.front {
		background-color: var(--background-color-white);
		background-image:
			linear-gradient(
				225deg,
				var(--vault-token-color) -10%,
				transparent 30%
			),
			linear-gradient(
				135deg,
				var(--vault-network-color, var(--vault-type-color)) -20%,
				var(--vault-type-color) 40%,
				var(--vault-type-color)
			);
		overflow-y: auto;
		max-height: calc(100vh - var(--header-height) - 4rem);
		padding: 1.5rem;
		/* transform: translateZ(1px); */
	}
	.vault > .card.front::before {
		content: '';
		position: absolute;
		inset: var(--vault-card-border-width);
		background-color: rgba(255, 255, 255, 0.94);
		background-color: rgba(255, 255, 255, 0.85);
		border-radius: calc(var(--card-radius) - var(--vault-card-border-width));
	}

	header {
		--grid-gap: 2em;
		/* align-items: start; */
	}
	.network {
		display: flex;
		justify-content: center;
		align-items: center;
		background: radial-gradient(rgba(255, 255, 255, 0.9), var(--vault-network-color) 1200%);
		width: 1.25em;
		height: 1.25em;
		border-radius: 50%;
		overflow: hidden;
		transform: scale(3) translateZ(1px);
		z-index: 1;
		box-shadow:
			0 0 0 0.75px rgba(200, 200, 200, 0.7) inset,
			0 0 0 0.75px var(--vault-network-color) inset,
			0 0 0.5px var(--vault-network-color, var(--background-color-3));
		/* filter: drop-shadow(0 0 1px var(--vault-network-color, var(--background-color-3))); */
		align-self: start;
	}
	.network img {
		border-radius: 0.1em;
	}
	h2 {
		font-size: 1.1em;
		line-height: 1.2;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.token-balance {
		text-align: right;
	}

	.illustration-wrapper {
		background-color: var(--vault-type-color);
		border: rgba(0, 0, 0, 0.3) 0.25em solid;
		transition: 0.3s;
		border-radius: 5px;
		height: 15em;
	}
	.illustration {
		aspect-ratio: 1.5;
		animation: Float 6s infinite ease-in-out;
		height: 12em;
	}
	@keyframes Float {
		0%, 100% { transform: translateY(3px) rotate(-0.5deg) }
		25%, 75% { transform: scale(1.03) }
		50% { transform: translateY(-3px) rotate(0.5deg) }
	}

	/* .silhouette {
		fill: black;
	} */

	.yield-strategy {
		/* display: flex; */
		padding: 0.5rem;
	}

	.description {
		/* font-size: 0.85em; */
		font-size: 0.75em;
		font-weight: 300;
		letter-spacing: 0.03em;
		opacity: 0.7;

		padding: 0 0.5em;
		word-break: break-word;

		font-size: 0.7em;

		line-height: 1.4;
		max-height: calc(4 * 1.4em);
		overflow-y: auto;
	}

	.vault-type-info {
		grid-template-columns: auto 1fr auto;
		margin-left: -0.5em;
		margin-right: -0.5em;
	}

	.vault-type-info .token-id {
		font-size: 0.85em;
		font-weight: 600;
		background-color: black;
		border-radius: 50%;
		width: 1.66em;
		height: 1.66em;
		color: #fff;
	}
	.vault-type-info .text-path {
		animation: Spin 10s linear infinite;
	}
	@keyframes Spin {
		to { transform: rotate(1turn) }
	}

	.vault-type-info .vault-type {
		padding: 0.5em;
		border-radius: 4px;
		border: 0;
		background: radial-gradient(50% 50% at 50% 50%, #D2C26E 0%, #DEB60D 100%);
		font-weight: 800;
		tab-size: 6;
		white-space: pre;
	}

	.metadata {
		--grid-gap: 0.5rem;
		align-content: center;

		overflow-y: auto;
		max-height: 200px;
		font-size: clamp(0.75em, 0.2em + 3em / var(--l), 0.9em);
	}
	.metadata > * {
		/* padding: 0.85em; */
		padding: 0.66em;
		border: none;
		background-color: rgba(0, 0, 0, 0.05);
		box-shadow:
			0 0 0 1.5px rgba(230, 230, 230, 0.9) inset,
			0 0 0 1.5px var(--vault-type-color) inset;
	}
	.metadata > * > .row {
		--grid-gap: 0.5rem;
	}
	.metadata-icon {
		font-size: 1.2em;
		margin: -0.075rem;
	}
	.metadata .label {
		font-weight: 600;
		opacity: 0.9;
	}
	.metadata .value {
		display: block;
		overflow: hidden;
		line-height: 1.2;
		text-overflow: ellipsis;
		opacity: 0.8;
		text-align: right;
		transform-origin: right;
		font-size: 0.93em;
	}

	/* .metadata > * { transition: zoom 0.3s; } */
	/* .metadata > * { transition: font-size 0.3s; } */
	/* .metadata > :first-child:nth-last-child(1), .metadata > :first-child:nth-last-child(1) ~ * { --l: 1; }
	.metadata > :first-child:nth-last-child(2), .metadata > :first-child:nth-last-child(2) ~ * { --l: 2; }
	.metadata > :first-child:nth-last-child(3), .metadata > :first-child:nth-last-child(3) ~ * { --l: 3; }
	.metadata > :first-child:nth-last-child(4), .metadata > :first-child:nth-last-child(4) ~ * { --l: 4; }
	.metadata > :first-child:nth-last-child(5), .metadata > :first-child:nth-last-child(5) ~ * { --l: 5; }
	.metadata > :first-child:nth-last-child(6), .metadata > :first-child:nth-last-child(6) ~ * { --l: 6; }
	.metadata > :first-child:nth-last-child(7), .metadata > :first-child:nth-last-child(7) ~ * { --l: 7; }
	.metadata > :first-child:nth-last-child(8), .metadata > :first-child:nth-last-child(8) ~ * { --l: 8; } */
	/* .metadata > * {
		zoom: clamp(0.85, 3 / var(--l), 1);
		font-size: calc(1em * clamp(0.85, 3 / var(--l), 1));
	} */

	.icons-row {
		--grid-gap: 2.5em;
	}
	.icon {
		border-radius: 50%;
		width: 34px;
		height: 34px;
		/* border: 2px solid var(--background-color-charity); */
		border: none;
		background-color: rgba(255, 255, 255, 0.5);
		box-shadow:
			0 0 0 2px rgba(200, 200, 200, 0.4),
			0 0 0 2px var(--vault-type-color);
		padding: 0;
		transition: 0.3s;

		/* Transition out */
		left: 50%;
	}
	.icon img {
		margin: auto;
	}
</style>