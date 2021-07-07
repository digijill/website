<script>
    import BackgroundGradient from '$lib/BackgroundGradient.svelte';

    export let project;
</script>

<section 
    id={project.id}
    class="fullscreen"
    class:panelColor="{project.panelColor === true}"
>
    <BackgroundGradient />
    <div class="fullscreen center">
        <div class="content smalltext">
            {@html project.text} 
       </div>
    </div>
</section>