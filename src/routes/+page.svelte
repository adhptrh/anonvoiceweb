<script lang="ts">
	import ChatBox from '$lib/ChatBox.svelte';
	import '../app.css';
    import InputBox from "../lib/InputBox.svelte"
	import Title from '../lib/Title.svelte';
	import { onMount } from 'svelte';
	onMount(async () => {
		const documentHeight = () => {
			
			const doc = document.documentElement
			doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
		}
		window.addEventListener('resize', documentHeight)
		documentHeight()
	})
</script>

<svelte:head>
	<title>Anonymous Voice Discord Bot</title>
	<meta name="description" content="A discord bot that randomly connect you with other discord user across discord servers by using a voice channel."/>
	<meta name="author" content="rynx"/>
	<meta name="keywords" content="discord, bot, discord bot, anonymous voice, anonymous voice discord bot"/>
	<meta property="og:title" content="Anonymous Voice Discord Bot" />
	<meta property="og:description" content="A discord bot that randomly connect you with other discord user across discord servers by using a voice channel." />
	<meta property="og:image" content="https://anonvoice.vercel.app/img/logo.png" />
</svelte:head>


<div class="flex h-screen justify-center bg-discord-bg-5">
	<div class="fixed flex max-h-full h-full w-full md:py-8 flex-col md:max-w-2xl">
		<div class="flex flex-col h-full shadow-lg">
			<Title/>
			<ChatBox/>
			<InputBox/>
		</div>
	</div>
</div>
