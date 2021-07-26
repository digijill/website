<script>
    import LinkToAnotherPage from "$lib/LinkToAnotherPage.svelte";
    import ContentSlider from "$lib/ContentSlider.svelte";
    import inView from '$lib/actions/inView.js';

    export let project;
    let heroImage;
    let link =  project.link? project.link : null;
    let description =  project.description? project.description : null;
    let description_short =  project.description_short? project.description_short : null;
    let logistics =  project.logistics? project.logistics : null;
    const linkText = "view project";

</script>

<section 
    id={project.id}
    class="standard-margin zero-top-padding"
    use:inView
    on:enter={ () => { heroImage.style.filter = "saturate(100%)"; } }
    on:exit={ () => { heroImage.style.filter = "saturate(0)"; } }
>

    {#if project.title}
        <div 
        class="title"
        class:large-title="{project.id === 'oqy' || project.id === 'mapping-migrations' || project.id === 'us-of-voronoi'}"
        >
            <h2>{@html project.title }</h2>
        </div>
    {/if}

    <div class="content-block">
        <div class="image-container">
            <img bind:this={heroImage}
                src={project.src} 
                alt={project.alt}
                srcset="{project.src} 2880w, {project.src_small} 500w"
            >
        </div>
        <div class="under-image">
            {#if project.event}
                <div class="event">
                    <h3>{@html project.event }</h3>
                </div>
            {/if}
            {#if (link)}
                <div class="button-position">
                    <LinkToAnotherPage { linkText } { link  } />
                </div>
            {/if}
            {#if (description)}
                <div class="button-position">
                    <ContentSlider { description } { description_short } { logistics } />
                </div>
            {/if}
        </div>
    </div>
</section>

<style>

    h3 {
        color: black;
    }

    .title {
        width: 12.5rem;
        height: 12.5rem;
        background-color: black;
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 30;
    }

    .large-title {
        width: 13rem;
        height: 13rem;
    }

    .content-block {
        position: relative;
        top: -7.4rem;
        padding-left: 6.25rem;
    }

    .image-container {
        position: relative;
        width: 100%;
        padding-top: 50%; /* 2:1 Aspect Ratio */
        margin-bottom: 0.6rem;
    }

    .image-container img {
        position: absolute;
        top: 0;
        overflow: hidden;
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        filter: saturate(0);
        transition-property: filter;
        transition-duration: 0.5s;
        transition-delay: 0.5s;
    }

    p {
        font-size: 1rem;
        text-align: left;
        margin-top: 0.5rem;
        width: 100%;
    }

    .under-image {
        display: flex;
        justify-content: space-between;
    }

    .zero-top-padding {
        padding-top: 0;
    }

    /* @media screen and (max-width: 1100px) {


    }

    @media screen and (max-width: 500px) {
        h2 {
            font-size: 9vw;
        }

        .title {
            width: 33.3vw;
            height: 33.3vw;
        }

        .large-title {
            width: 40vw;
            height: 40vw;
        }

        .content-block {
            top: -16vw;
            padding-left: 16vw;
        }
    } */
</style>