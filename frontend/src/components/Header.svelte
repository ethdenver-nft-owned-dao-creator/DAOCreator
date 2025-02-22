<script context="module">
	export const ssr = false
</script>


<script lang="ts">
	// Constants/types
	import { _ } from 'svelte-i18n'

	type Link = {
		title: string,
		link: string
	}

	const navLinks = [
		{
			title: $_('Create'),
			link: '/create',
		},
		{
			title: $_('Browse'),
			link: '/browse',
		},
		{
			title: $_('Manage'),
			link: '/manage',
		},
	] as Link[]


	// Stores
	import { page } from '$app/stores'

	import { locale } from 'svelte-i18n'


	// Images
	import projectLogo from '../assets/project-logo.svg'


	// Components
	import ConnectAccount from './ConnectAccount.svelte'
	import NetworkSelect from './NetworkSelect.svelte'


	// Styles/animations
	import { scale } from 'svelte/transition'
</script>


<header class="column row-tablet">
	<nav class="column row-tablet">
		<div class="header-left row">
			<a sveltekit:prefetch class:active={$page.url.pathname === '/'} href="/" class="logo">
				<img src={projectLogo} alt={$_('PROJECT_NAME')}/>
			</a>
		</div>

		<div class="stack">
			<ul class="column row-tablet nav-links">
				{#each navLinks as {title, link}}
					<li>
						<a sveltekit:prefetch href={link} class:active={$page.url.pathname === link}>
							{title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>

	<div class="header-right row">
		<NetworkSelect />

		<ConnectAccount />

		<div class="burger" role="button" tabIndex={0} on:mousedown={(e) => document.activeElement?.blur?.()}>
			<span class="burger-icon"></span>
		</div>
	</div>
</header>


<style>
	header {
		font-size: 1.125em;
		padding: 0 var(--header-padding);

		/* background: linear-gradient(var(--background-color-0), transparent); */
		background-color: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(5px);

		transition: 0.2s;
	}
	@supports not (backdrop-filter: blur(0)) {
		header {
			/* background: linear-gradient(var(--background-color-2), transparent); */
			background: var(--background-color-1);
		}
	}

	nav {
		gap: 1.5rem;
	}

	ul.nav-links a {
		font-size: 16px;
		font-weight: 600;
		text-decoration: underline;
		color: #FF8A01;
		text-align: center;
		line-height: 1.5;
	}

	ul.nav-links {
		margin: 0 15px;
	}

	.header-left {
		justify-content: start;
		gap: 1.25rem;
	}

	.header-right {
		font-size: 15px;
	}

	.logo {
		font-size: 2em;
	}

	.logo img {
		height: 60%;
	}
	.logo > :global(*) {
		/* border-radius: 50%; */
		overflow: hidden;
	}


	ul {
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: var(--header-height);
		align-items: center;

		text-decoration: none;
	}
	nav a:not(:hover):not(.active) {
		color: var(--text-color);
		color: #07a6ca;
		/* text-rendering: geometricPrecision;
		color: rgba(227, 197, 255, 0.4); */
	}
	nav ul a {
		padding: 0 1.3rem;
	}
	nav a svg {
		margin-left: 0.5ch;
	}

	a.active {
		font-weight: 700;
	}

	.logo {
		transition: 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.logo:hover, .logo:focus {
		filter: brightness(1.05) drop-shadow(0 0.05rem 0.05rem var(--accent-color));
		transform: rotate(-0.6deg) scale(1.075);
		transition: 0.2s, transform 0.25s cubic-bezier(0.2, 2, 0.66, 1);
	}
	.logo:active {
		filter: brightness(0.98) drop-shadow(0 0.1rem 0.15rem rgba(0, 0, 0, 0.1));
		transition: 0.25s cubic-bezier(0.2, 1.25, 0.5, 1);
		transform: rotate(0.2deg) scale(0.98);
		cursor: none;
	}

	@media (max-width: 40rem) {
		header {
			overflow: hidden;

			-webkit-mask-image: linear-gradient(to top, transparent, white 1em);
			mask-image: linear-gradient(to top, transparent, white 1em);
		}

		header:focus-within:not(:focus) {
			-webkit-backdrop-filter: blur(8px);
			backdrop-filter: blur(8px);
			height: 100vh;
		}
		@supports not (backdrop-filter: blur(0)) {
			header:focus-within:not(:focus) {
				background: linear-gradient(transparent -200%, var(--background-color-1));
			}
		}

		.logo {
			justify-self: start;
		}

		ul {
			grid-auto-flow: row;
		}
		header:focus-within ul {
			visibility: visible;
		}

		nav ul a {
			font-size: 2em;
			height: 1.55em;
			font-weight: 700;
		}

		.header-right {
			position: absolute;
			display: flex;
			align-items: center;
			height: 0;
			right: var(--header-padding);
			top: calc(var(--header-height) / 2);
			gap: 1em;
		}
	}

	.burger {
		display: none;
	}
	@media (max-width: 40rem) {
		.burger {
			display: flex;
			align-items: center;
			height: 1em;
		}
		.burger-icon, .burger-icon::before, .burger-icon::after {
			content: '';
			border-radius: 2px;
			width: 22px;
			height: 3px;
			background-color: currentColor;
			transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		}
		.burger-icon::before {
			position: absolute;
			transform: translateY(-8px);
		}
		.burger-icon::after {
			position: absolute;
			transform: translateY(8px);
		}

		header:focus-within .burger-icon {
			background-color: transparent;
		}
		header:focus-within .burger-icon::before {
			transform: rotate(-45deg) scaleX(1.3);
		}
		header:focus-within .burger-icon::after {
			transform: rotate(45deg) scaleX(1.3);
		}

		header:focus-within .burger {
			pointer-events: none;
		}

		header:focus-within ~ :global(*) {
			transform: scale(0.9);
		}
	}
</style>
