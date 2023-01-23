<script lang="ts">
	import ChatBox from '$lib/ChatBox.svelte';
	import '../app.css';
    import InputBox from "../lib/InputBox.svelte"
	import Title from '../lib/Title.svelte';
</script>

<svelte:head>
	<title>Anonymous Voice Discord Bot</title>
</svelte:head>

<div class="flex justify-center h-screen fix100vh bg-discord-bg-5 ">
	<div class="flex flex-col h-screen fix100vh w-screen fixed bg-discord-bg-3 lg:max-w-2xl shadow-md">
		<Title/>
		<ChatBox/>
		<InputBox/>
	</div>
</div>

<style>
	body {
		min-height: 100vh;
		min-height: -webkit-fill-available;
	}
	html {
		height: -webkit-fill-available;
	}
	.fix100vh {
		min-height: -webkit-fill-available;
	}
</style>