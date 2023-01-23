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
</svelte:head>

<div class="flex justify-center h-screen bg-discord-bg-5 ">
	<div class="flex flex-col h-full w-full fixed bg-discord-bg-3 lg:max-w-2xl shadow-md">
		<Title/>
		<ChatBox/>
		<InputBox/>
	</div>
</div>