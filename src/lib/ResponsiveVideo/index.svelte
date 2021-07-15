<script>
	import { onMount } from 'svelte';
    import PanelHeroVideo from '$lib/PanelHeroVideo/index.svelte';
    import PanelFramedVideo from '$lib/PanelFramedVideo/index.svelte';

    export let project;

    let breakpointCondition1 = "(max-aspect-ratio: 24/10) and (min-aspect-ratio: 18/10)";
    let breakpointCondition2 = "(min-width: 500px)";

    let videoView = null;

    const checkView = () => {
        if (window.matchMedia(breakpointCondition1).matches) {
            videoView = "heroVideo";
        } else if (window.matchMedia(breakpointCondition2).matches) {
            videoView = "framedVideo";
        } else {
            videoView = "mobile";
        }
    }

    onMount(() => {
        checkView();
    });
</script>

{#if (videoView === "heroVideo")}
    <PanelHeroVideo {project} />
{:else if (videoView === "framedVideo")}
    <PanelFramedVideo {project} />
{:else if (videoView === "mobile")}
    <PanelHeroVideo {project} />
{:else}
    <PanelHeroVideo {project} />
{/if}

