<script>
  export let project;
</script>

<section 
    id={project.id}
    class="panel split standard-margin"
    class:panelColor="{project.panelColor === true}"
>
    <img
        src={project.src} 
        alt={project.alt}
        srcset="{project.src} 2880w, {project.src_small} 500w"
    >
    <div class="text">
        {@html project.text}
    </div>
</section>

<style>

    img {
        display: block;
        width: 50vw;
        height: auto;
        margin: 0 4rem 0 0;
    }

    div.text {
        width: 40vw;
    }

    @media screen and (max-width: 960px) {
        .split {
            flex-direction: column;
            justify-content: center;
        }

        img {
            margin: 0;
        }

        div.text {
            width: 50vw;
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 800px) {

        img {
            width: 70vw;
        }

        div.text {
            width: 70vw;;
        }
    }

    @media screen and (max-width: 500px) {
        img {
            padding: 0;
            width: 100%;
        }

        div.text {
            width: 100%;
        }
    }

</style>