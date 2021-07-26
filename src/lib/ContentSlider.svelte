<script>
    import inView from '$lib/actions/inView.js';

    export let description, description_short, logistics;
    let projectButtonActive = false;
</script>

<div 
    class="button project-info-button"
    class:active = {projectButtonActive}
    on:pointerup="{() => projectButtonActive = !projectButtonActive}">
    <p class="no-wrap">quick info
        <span class="open-close-button">+</span>
    </p>
</div>

<div 
    class="project-info" 
    class:active = {projectButtonActive}
    use:inView
    on:exit={ () => {
        projectButtonActive = false;
    }   }
    >
    <div class="project-info-text-block">
        <div class="description">{@html description}</div>
        <div class="logistics">{@html logistics}</div>
        <div class="description-short">{@html description_short}</div>
    </div>
</div>

<style>

    .project-info {
        width: 90vw;
        max-height: 100vh;
        position: absolute;
        bottom: -10px;
        left: -100vw;
        transition: left 1s;
        z-index: 10;
    }

    .project-info.active {
        max-height: none;
    }

    .project-info-text-block {
        display: inline-block;
        color: white;
        background-color: black;
        padding-bottom: 4rem;
    }

    .description {
        display: inline-block;
        width: 50%;
        padding-right: 1.5rem;
        vertical-align: top;
    }

    .logistics {
        display: inline-block;
        width: 48%;
        vertical-align: top;
        padding-left: 1.5rem;
    }

    .button span {
        color: white;
        font-size: calc(16px + 0.8vmax);
        position: relative;
        top: 3px;
        line-height: 0;
    }

    .project-info.active {
        left: 0;
    }

    .open-close-button {
        display: inline-block;
        transition: transform 1s;
    }

    .active .open-close-button {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    .description-short {
        display: none;
        padding-bottom: 3rem;
    }

    .button {
        position: relative;
        z-index: 20;
        margin-top: 0.4rem;
    }

    .active .project-info-button {
            left: 6rem;
            bottom: 0;
        }

    @media (max-width: 1260px) {
        .description, .logistics {
            width: 100%;
            padding: 0;
        }
    }

    @media (max-width: 1025px) {
        .description, .logistics {
            display: none;
        }

        .description-short {
            display: block;
        }
    }

    @media (max-width: 768px) {

        .project-info-text-block {
            padding: 2rem;
        }
    }

    @media (max-width: 700px) {

        .active .project-info-text-block {
            width: 100%;
        }
    }

    @media (max-width: 650px) {
        .project-info-text-block {
            padding: 2rem 2rem 4rem 2rem;
        }

        div.logistics {
            width: 100%;
        }
    }

    @media (max-height: 500px) {

        .project-info-text-block {
            overflow-y: scroll;
        }
    }

</style>