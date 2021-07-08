<script>
    import BackgroundGradient from '$lib/BackgroundGradient.svelte';

    export let project;
</script>

<section 
    id={project.id}
    class="fullscreen"
>
    <BackgroundGradient />
    <div class="fullscreen center">
        <div class="content smalltext">
            {@html project.text} 
       </div>
    </div>
</section>

<style>
section {
    background-image: none;
    background-color: #1EB2FF;
}
</style>
