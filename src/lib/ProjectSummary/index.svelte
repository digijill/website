<script>
    import BackgroundGradient from '$lib/BackgroundGradient.svelte';
    import NavBottom from '$lib/NavBottom.svelte';

    export let title;
    export let summary;
</script>

<section id="intro" class="fullscreen">
    <BackgroundGradient />
    <div class="fullscreen center">
        <div class="content">
            {@html summary}
        </div>
        <NavBottom text = "scroll to view work" nextSection = "flock" />
    </div>
</section>