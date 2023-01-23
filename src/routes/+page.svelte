<script lang="ts">
	import ChatBox from '$lib/ChatBox.svelte';
	import '../app.css';
    import InputBox from "../lib/InputBox.svelte"
	import Title from '../lib/Title.svelte';
</script>

<svelte:head>
	<title>Anonymous Voice Discord Bot</title>
</svelte:head>

<div class="flex flex-col h-screen w-screen fixed bg-discord-bg-3">
	<Title/>
	<ChatBox/>
	<InputBox/>
</div>
