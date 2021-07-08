<script>
    import inView from '$lib/actions/inView.js';

    export let description, description_short, logistics;
    let projectButtonActive = false;
</script>

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
    <div 
        class="button project-info-button"
        on:pointerup="{() => projectButtonActive = !projectButtonActive}">
        <p>quick info
            <span class="open-close-button">+</span>
        </p>
    </div>
</div>

<style>

    .project-info {
        width: 100vw;
        max-height: 100vh;
        position: absolute;
        bottom: 0;
        left: calc(165px - 100vw);
        transition: left 1s;
    }

    .project-info.active {
        max-height: none;
    }

    .project-info-text-block {
        display: inline-block;
        width: calc(100vw - 165px);
        padding: 4rem;
        background-color: #1EB2FF;
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

   .project-info-button, .project-button {
        display: inline-block;
        position: absolute;
        bottom: 60px;
        width: 165px !important;
        text-align: center;
        background-color: #1EB2FF;
        font-weight: 400;
    }

    .project-info-button p, .project-button p {
        line-height: 2rem;
        padding-bottom: 8px;
        margin: 0.5rem 0;
    }

    .project-button p {
        margin: 1rem 0 0.5rem 0;
    }

    .project-info-button span {
        color: white;
        font-size: 2rem;
        position: relative;
        top: 0.4rem;
    }

    .project-info.active {
        left: 0;
        /* background-color: #1EB2FF; */
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

        .project-button {
            left: 2rem;
        }
    }

    @media (max-width: 700px) {

        .active .project-info-text-block {
            width: 100%;
        }

        .active .project-info-button {
            right: 2rem;
            bottom: 0;
        }
    }

    @media (max-width: 650px) {
        .project-info-text-block {
            padding: 2rem 2rem 4rem 2rem;
            background-color: #1EB2FF;
        }

        div.logistics {
            width: 100%;
        }
    }

    @media (max-height: 450px) {

        .project-info-text-block {
            overflow-y: scroll;
        }
    }

    @media (max-width: 550px) and (max-height: 580px) {
        .description {
            width: 100%;
        }
    }

</style>