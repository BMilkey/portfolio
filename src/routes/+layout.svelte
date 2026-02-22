<script lang="ts">
    import favicon from '#lib/assets/favicon.svg';
    import type { LayoutProps } from './$types';
    import '$lib/styles/global.scss';

    let { children }: LayoutProps = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Onest:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
    />
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
