<script>
    import BackgroundGradient from '$lib/BackgroundGradient.svelte';
    import NavBottom from '$lib/NavBottom.svelte';
</script>

<section class="fullscreen">
    <BackgroundGradient />
    <div class="fullscreen center">
        <div class="content">
            <p>Hi, my name is <span class="emphasize">Jill Fantauzza</span> and this is my <span class="emphasize">portfolio</span>. I am a versatile <span class="emphasize">digital artist, designer, and programmer</span>. If you'd like me to help you with your next digital experience, geospatial visualization, or data visualization, <a href="mailto:fantauzza@protonmail.ch"><span class="emphasize italic">let's talk!</span></a></p>
        </div>
        <NavBottom nextSection = "deai" />
    </div>
</section>

<style>
    div.center {
        height: 100vh;
        justify-content: center;
    }

    .content {
        max-width: 80vw;
        font-size: 4vw;
        text-transform: none;
        font-weight: 300;
        line-height: 1.4;
    }

    p {
        font-family: usual, sans-serif;
        font-weight: 300;
        font-style: normal;
    }

    h3 {
        /* text-align: right; */
        margin-left: 2.5rem;
    }
</style>