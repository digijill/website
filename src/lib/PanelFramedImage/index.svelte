<script>
    export let project;
</script>

<section 
    id={project.id}
    class="standard-margin"
    class:panelColor="{project.panelColor === true}"
>
    <div class="image-container">
        <img
            src={project.src} 
            alt={project.alt}
            srcset="{project.src} 2880w, {project.src_small} 500w"
        >
        {#if project.caption}
            <p id="captionPara">{project.caption}</p>
        {/if}
    </div>
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
        max-width: 100%;
        width: 100%;
        height: auto;
    }

    p {
        font-size: 1rem;
        text-align: left;
        margin-top: 0.5rem;
        width: 100%;
    }
</style>