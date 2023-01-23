<script lang="ts">
    export let username: string
    export let continueChat: boolean = false
    export let profilePicture: string = "logo.png"
</script>

<div class="flex m-0 hover:bg-discord-bg-4 items-center">
    <div class={"flex mx-5 my-0 " + (continueChat ? "":"pt-2")}>
        <div class="w-[40px] min-w-[40px] cursor-pointer">
            {#if !continueChat}
            <img src={"img/"+profilePicture} alt="logo" class="rounded-full min-w-[40px]" />
            {/if}
        </div>
        <div class="ml-3 text-discord-text-1">
            {#if !continueChat}
            <p class="font-['ggsans-bold'] hover:underline cursor-pointer">{username}</p>
            {/if}
            <slot name="chat"/>
        </div>
    </div>
</div>