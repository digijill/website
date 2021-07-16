<script>
    import BackgroundGradient from '$lib/BackgroundGradient.svelte';
	import NavBottom from '$lib/NavBottom.svelte';

    export let project;
    let nextSection;

    if (project.nextSection) {
        nextSection = project.nextSection;
    }
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

	{#if (nextSection)}
		<div class="nav-container">
			<NavBottom { nextSection } />
		</div>
	{/if}

</section>

<style>
section {
    background-image: none;
    background-color: #1EB2FF;
    position: relative;
}

.nav-container {
		position: absolute;
		bottom: 2rem;
	}
</style>
