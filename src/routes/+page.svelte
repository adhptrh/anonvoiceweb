<script lang="ts">
	import ChatBox from '$lib/ChatBox.svelte';
	import '../app.css';
    import InputBox from "../lib/InputBox.svelte"
	import Title from '../lib/Title.svelte';
	export const prerender = true;
</script>

<div class="flex flex-col h-screen w-screen fixed bg-discord-bg-3">
	<Title/>
	<ChatBox/>
	<InputBox/>
</div>
