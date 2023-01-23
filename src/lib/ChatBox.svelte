<script lang="ts">
    import Chat from "./Chat.svelte"
</script>

<div class="flex flex-col h-full overflow-y-scroll bg-discord-bg-3">
    <div class="mt-auto" />
    <div class="m-5">
        <img src="img/logo.png" alt="logo" class="rounded-full mb-3" width="80" height="80" />
        <h1 class="text-4xl text-white font-['ggsans-bold']">Anonymous Voice</h1>
        <p class="text-discord-text-3 font-['ggsans']">
            This is the beginning of your direct message history with <span
                class="text-discord-text-3 font-['ggsans-bold']">@Anonymous Voice</span
            >.
        </p>
    </div>
    <Chat username={"Anonymous Voice"}>
        <div slot="chat">
            <p class="font-['ggsans'] text-discord-text-2">sup, welcome to Anonymous Voice Bot Website!</p>
        </div>
    </Chat>
    <Chat username={"Anonymous Voice"}>
        <div slot="chat">
            <p class="font-['ggsans-bold'] text-discord-text-2">Q: What can this bot do?</p>
            <p class="font-['ggsans'] text-discord-text-2">randomly connect you with other discord user by using a voice channel.</p>
        </div>
    </Chat>
    <Chat username={"Anonymous Voice"} continueChat={true}>
        <div slot="chat">
            <p class="font-['ggsans-bold'] text-discord-text-2">Q: Why should i invite this bot?</p>
            <p class="font-['ggsans'] text-discord-text-2">why not?</p>
        </div>
    </Chat>
    <Chat username={"Anonymous Voice"} continueChat={true}>
        <div slot="chat">
            <p class="font-['ggsans-bold'] text-discord-text-2">Q: How to use the bot?</p>
            <p class="font-['ggsans'] text-discord-text-2">simply join a voice channel and then use /join.</p>
        </div>
    </Chat>
    <Chat username={"Anonymous Voice"}>
        <div slot="chat">
            <p class="font-['ggsans'] text-discord-text-2">so what are you waiting for? go invite me by clicking <a class="text-blue-500 underline" href="https://discord.com/api/oauth2/authorize?client_id=979129654923374592&permissions=431710660928&scope=bot%20applications.commands">this link</a>.</p>
        </div>
    </Chat>
</div>