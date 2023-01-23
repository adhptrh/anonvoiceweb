<script lang="ts">
    import { chatData } from "../store"
    let chat: string

    function submit() {
        chatData.set([...$chatData,{
            "username":"i promise i will invite the bot",
            "profilePicture":"pp.png",
            "chats": [
                chat
            ]
        }])
        if (chat == "/help") {
            chatData.set([...$chatData,{
                "username":"Anonymous Bot",
                "profilePicture":"logo.png",
                "chats": [
                    "nope, no commands in this website working for now."
                ]
            }])
        }
        document.getElementsByClassName("chatbox")[0].scrollTop = document.getElementsByClassName("chatbox")[0].scrollHeight
        chat = ""
    }
</script>

<form on:submit|preventDefault={submit} class="flex p-5 bg-discord-bg-3 rounded-b-lg">
    <input
        placeholder="Message @Anonymous Voice (this website is still read-only)"
        class="p-3 px-4 w-full font-['ggsans'] text-white outline-none rounded-md bg-discord-bg-2"
        bind:value={chat}
    />
    <button class="ml-3 bg-discord-blue-1 rounded-full p-4"
        ><svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.6111 10.352L2.01865 1.01387C1.24308 0.624341 0.373511 1.33998 0.606547 2.176L2.51832 9.03454C2.63885 9.46693 3.03273 9.76603 3.4816 9.76603H10.4965C10.8606 9.76603 11.1666 10.0151 11.2532 10.3522C11.1668 10.6891 10.8623 10.938 10.5 10.938H3.31214C2.96335 10.938 2.65721 11.1712 2.56316 11.5086L0.473324 19.0059C0.291379 19.6587 0.966574 20.2185 1.57013 19.9154L20.6111 10.352Z"
                fill="white"
            />
        </svg>
    </button>
</form>