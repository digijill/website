<script>
    import { onMount } from 'svelte';
    import inView from '$lib/actions/inView.js';

    export let project;
    let imageContainer, heroImage, w, panel;

    const sizeImageContainer = () => {
        imageContainer.style.height = `${w/2}px`;
        heroImage.style.objectFit = "cover";
        heroImage.style.objectPosition = "50% 50%";
    }

    onMount (() => {
        sizeImageContainer();
    })


</script>

<section 
    id={project.id}
    class="standard-margin"
    bind:this="{panel}"
    use:inView
    on:enter={ () => { heroImage.style.filter = "saturate(100%)"; } }
    on:exit={ () => { heroImage.style.filter = "saturate(0)"; } }
>

    {#if project.title}
        <div class="title">
            <h2>{@html project.title }</h2>
        </div>
    {/if}

    <div class="content">
        {#if project.event}
            <div class="event">
                <h3>{@html project.event }</h3>
            </div>
        {/if}

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
        z-index: 10;
    }

    .content {
        position: relative;
        top: -117px;
    }

    .event {
        text-align: right;
        z-index: 10;
    }

    .image-container {
        padding-left: 100px;
        overflow: hidden;
    }

    img {
        display: block;
        width: 100%;
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

    .standard-margin {
        padding-top: 0;
    }
</style>