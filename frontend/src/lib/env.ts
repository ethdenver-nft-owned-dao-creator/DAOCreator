export const env = {
	NETWORK_ID: Number(import.meta.env.VITE_NETWORK_ID || 1),
	ETHEREUM_NODE_URI: String(import.meta.env.VITE_ETHEREUM_NODE_URI || ''),
	ETHERSCAN_BASE_URI: String(import.meta.env.VITE_ETHERSCAN_BASE_URI || ''),
	WALLET_CONNECT_BRIDGE_URI: String(import.meta.env.VITE_WALLET_CONNECT_BRIDGE_URI || ''),
	NFT_CONTRACT_ADDRESS: String(import.meta.env.VITE_NFT_CONTRACT_ADDRESS || ''),

	ALCHEMY_API_KEY_MAINNET: String(import.meta.env.VITE_ALCHEMY_API_KEY_MAINNET || ''),
	ALCHEMY_API_KEY_RINKEBY: String(import.meta.env.VITE_ALCHEMY_API_KEY_RINKEBY || ''),

	POCKET_NETWORK_PORTAL_ID: String(import.meta.env.VITE_POCKET_NETWORK_PORTAL_ID || ''),
	POCKET_NETWORK_SECRET_KEY: String(import.meta.env.VITE_POCKET_NETWORK_SECRET_KEY || ''),
	POCKET_NETWORK_PUBLIC_KEY: String(import.meta.env.VITE_POCKET_NETWORK_PUBLIC_KEY || ''),

	// ETHERSCAN_API_KEY: '',
	// INFURA_PROJECT_ID: '',
}