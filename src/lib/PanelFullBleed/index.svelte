<script>
  import LinkToAnotherPage from "$lib/LinkToAnotherPage.svelte";
  import ContentSlider from "$lib/ContentSlider.svelte";
  import inView from '$lib/actions/inView.js';

  export let project;
  let panel, headline;
  let link =  project.link? project.link : null;
  let description =  project.description? project.description : null;
  let description_short =  project.description_short? project.description_short : null;
  let logistics =  project.logistics? project.logistics : null;
  const linkText = "view project";
</script>

<section 
    id={project.id}
    class="panel"
    class:background-pattern="{project.id === 'oqy'}"
    bind:this="{panel}"
    use:inView
    on:enter={ () => { headline.style.opacity = 1; } }
    on:exit={ () => { headline.style.opacity = 0; } }
>
    <img 
        src={project.src} 
        alt={project.alt} 
        srcset="{project.src} 2880w, {project.src_small} 1000w"
        class:contain="{project.id === 'oqy'}"
        class:bottom-left="{project.id === 'flock-mak-salle'}"
        class:seeingearth="{project.id === 'seeingearth'}"
        class:carboncurve="{project.id === 'carboncurve'}"
        class:gamelab="{project.id === 'game-lab'}"
    >

    <div class="headline bleed-padding" bind:this="{headline}">
        {#if (project.title)}
            <h2>{@html project.title}</h2>
        {/if}
        {#if (project.event)}
            <h3>{@html project.event}</h3>
        {/if}
    </div>

    {#if (link)}
        <div class="button-position bleed-padding">
            <LinkToAnotherPage { linkText } { link  } />
        </div>
    {/if}

    {#if (description)}
        <div class="button-position bleed-padding">
            <ContentSlider { description } { description_short } { logistics } />
        </div>
    {/if}

</section>

<style>

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