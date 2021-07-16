<script>
    import inView from '$lib/actions/inView.js';
    import LinkToAnotherPage from "$lib/LinkToAnotherPage.svelte";

    let headline;
    const linkText = "view project";
    const link = "/projects/cartography"

</script>

<section 
    class="panel center"
    use:inView
    on:enter={ () => { headline.style.opacity = 1; } }
    on:exit={ () => { headline.style.opacity = 0; } }
>

    <div class="grid-wrapper">

        <div class="image-container">
            <img src="/images/projects/cartography/3d_terrain_4.jpg">
        </div>
        <div class="image-container">
            <img src="/images/TOPP.jpg">
        </div>
        <div class="image-container">
            <img src="/images/projects/seeingearth/temperature.jpg">
        </div>
        <div class="image-container">
            <img src="/images/projects/cartography/gebco_08_rev_elev_D1_grey_geo.png">
        </div>
        <div class="image-container">
            <img src="/images/projects/cartography/SOS2.jpg">
        </div>
        <div class="image-container">
            <img src="/images/projects/cartography/extent2_faults.png">
        </div>
        <div class="image-container">
            <img src="/images/projects/cartography/clean_topo_elevation_extent2.png">
        </div>
        <div class="image-container">
            <img src="/images/projects/cartography/globe_night.jpg">
        </div>
        <div class="image-container">
            <img src="/images/projects/seeingearth/co2.jpg">
        </div>

    </div>

<div class="headline bleed-padding" bind:this="{headline}">
    <h2>Cartography</h2>
    <h3>Sketches from Projects</h3>
</div>

<div class="button-position bleed-padding">
    <LinkToAnotherPage { linkText } { link  } />
</div>

</section>

<style>

    .grid-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 33.3vh;
        background-color: white;
        padding: 0.25rem;
    }

    .grid-wrapper div {
        object-fit: cover;
        object-position: center center;
        margin: 0.25rem;
    }

    img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }

    img.contain {
        object-fit: contain;
    }

    img.bottom-left {
        object-position: 100% 100%;
    }

    .headline {
        opacity: 0;
        transition: opacity 3s;
    }

    .button-position {
        position: absolute;
        left: 0;
        bottom: 2rem;
    }

    @media screen and (max-width: 500px) {
        .seeingearth {
            object-position: 60% 100%;
        }

        .carboncurve {
            object-position: 50% 60%;
        }

        .gamelab {
            object-position: right;
        }
    }

    @media screen and (max-width: 420px) {
        img.bottom-left {
            object-position: 70% 100%;
        }
    }

</style>