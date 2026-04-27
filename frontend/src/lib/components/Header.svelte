<script lang="ts">
    interface Props {
        username?: string;
    }

    const { username = 'KakiKuKeKo' }: Props = $props();
</script>

<header class="bg-gradient-to-br from-green-700 via-green-600 to-green-500 px-5 pt-10 pb-16 relative overflow-hidden">
    <!-- Decorative circles -->
    <div class="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5"></div>
    <div class="absolute top-10 -right-2 w-16 h-16 rounded-full bg-white/5"></div>

    <div class="flex items-center justify-between relative z-10">
        <div>
        <p class="text-green-200 text-xs font-medium tracking-widest uppercase">Welcome!</p>
        <h1 class="text-white text-xl font-bold mt-0.5">{username}</h1>
        </div>
        <div class="w-11 h-11 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-base">{username[0]}</span>
        </div>
    </div>
</header>