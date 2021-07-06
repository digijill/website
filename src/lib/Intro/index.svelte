<script>
    import BackgroundGradient from '$lib/BackgroundGradient.svelte';
    import NavBottom from '$lib/NavBottom.svelte';
</script>

<section id="intro" class="fullscreen">
    <BackgroundGradient />
    <div class="fullscreen center">
        <div class="content">
            <p>Hi, my name is <span class="emphasize">Jill Fantauzza</span> and this is my <span class="emphasize">portfolio</span>. I am a versatile <span class="emphasize">digital artist, designer, and programmer</span>. If you'd like me to help you with your next digital experience, geospatial visualization, or data visualization, <a href="mailto:fantauzza@protonmail.ch"><span class="emphasize italic">let's talk!</span></a></p>
        </div>
        <NavBottom text = "scroll to view work" nextSection = "flock" />
    </div>
</section>