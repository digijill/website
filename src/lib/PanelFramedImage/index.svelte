<script>
    export let project;
</script>

<section 
    id={project.id}
    class="standard-margin"
>
    <div class="image-container">
        <img
            src={project.src} 
            alt={project.alt}
            srcset="{project.src} 2880w, {project.src_small} 500w"
        >
    </div>
    {#if project.caption}
        <p id="captionPara">{project.caption}</p>
    {/if}
</section>

<style>

    .image-container {
        width: 100%;
    }

    .image-container img {
        overflow: hidden;
    }

    img {
        display: block;
        width: 100%;
        max-width: 100%;
    }

    p {
        font-size: calc(12px + .5vw);
        line-height: 1.55;
        margin-top: 0.5rem;
    }

</style>