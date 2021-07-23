<script>
    import { onMount } from 'svelte';
    import LinkToAnotherPage from "$lib/LinkToAnotherPage.svelte";
    import ContentSlider from "$lib/ContentSlider.svelte";
    import inView from '$lib/actions/inView.js';

    export let project;
    let imageContainer, heroImage, w, panel;
    let link =  project.link? project.link : null;
    let description =  project.description? project.description : null;
    let description_short =  project.description_short? project.description_short : null;
    let logistics =  project.logistics? project.logistics : null;
    const linkText = "view project";

    const sizeImageContainer = () => {
        imageContainer.style.height = `${w/2}px`;
    }

    onMount (() => {
        sizeImageContainer();
    })


</script>

<section 
    id={project.id}
    class="standard-margin"
    class:zero-top-padding="{!project.panelColor}"
    bind:this="{panel}"
    use:inView
    on:enter={ () => { heroImage.style.filter = "saturate(100%)"; } }
    on:exit={ () => { heroImage.style.filter = "saturate(0)"; } }
>

    {#if project.title}
        <div 
        class="title"
        class:large-title="{project.id === 'oqy' || project.id === 'mapping-migrations'}"
        >
            <h2>{@html project.title }</h2>
        </div>
    {/if}

    <div class:content-block="{!project.panelColor}">
        <div class="image-container" bind:this={imageContainer} bind:clientWidth={w}>
            <img bind:this={heroImage}
                src={project.src} 
                alt={project.alt}
                srcset="{project.src} 2880w, {project.src_small} 500w"
            >
            {#if project.caption}
                <p id="captionPara">{project.caption}</p>
            {/if}
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

    h2 {
        color: white;
        font-family: usual, freight-big-pro, serif;
        font-weight: 900;
        font-style: normal;
        font-family: freight-big-pro, serif;
        font-weight: 700;
        font-style: italic;
        font-size: 3rem;
        letter-spacing: 0.15rem;
    }

    h3 {
        font-size: 2rem;
        color: black;
    }

    .title {
        width: 200px;
        height: 200px;
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
        width: 220px;
        height: 220px;
    }

    .content-block {
        position: relative;
        top: -120px;
        padding-left: 100px;
    }

    .event {
        margin-top: 0.5rem;
    }

    .image-container img {
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
        transition-duration: 1s;
        transition-delay: 1s;
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
</style>