<script>
    import BackgroundGradient from '$lib/BackgroundGradient.svelte';
    import NavBottom from '$lib/NavBottom.svelte';
</script>

<section id="intro" class="fullscreen">
    <BackgroundGradient />
    <div class="fullscreen center">
        <div class="content">
            <p>Hi, my name is <span class="emphasize">Jill Fantauzza</span> and this is my <span class="emphasize">portfolio</span>. I am a versatile digital artist, designer, and programmer. If you'd like me to help you with your next digital experience, geospatial visualization, or data visualization, <a href="mailto:digijill@protonmail.ch"><span class="emphasize italic">let's talk!</span></a></p>
        </div>
        <NavBottom nextSection = "flock" />
    </div>
</section>

<style>
    .content {
        margin-bottom: 3rem;
    }
</style>