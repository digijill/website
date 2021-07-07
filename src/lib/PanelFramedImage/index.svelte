<script>
    export let project;
    let imgEl;

    const sizeCaption = () => {
        let captionSize = `${imgEl.width}px`;
        if (project.caption) {
            let size = document.getElementById("captionPara");
            size.style.width = captionSize;
        }
    }

</script>

<section 
    id={project.id}
    class="panel center standard-margin"
    class:panelColor="{project.panelColor === true}"
>
    <div class="container">
        <img
            bind:this={imgEl} 
            on:load={sizeCaption}
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

    .container {
        display: flex;
        max-width: 800px;
        flex-flow: column;
        justify-items: center;
    }

    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        object-position: 50% 50%;
    }

    p {
        font-size: 1rem;
        text-align: left;
        margin-top: 0.5rem;
    }
</style>