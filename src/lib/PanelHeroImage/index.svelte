<script>
	import NavBottom from '$lib/NavBottom.svelte';

    export let project;
    let {format, id, title, event, src, src_small, alt, nextSection, panelColor} = project;
</script>

<section 
    id={id}
    class="panel center"
    class:panelColor="{project.panelColor === true}"
>

	<img 
		src={project.src} 
		alt={project.alt} 
		srcset="{project.src} 2880w, {project.src_small} 1000w"
	>

	<div class="headline bleed-padding">
        {#if (title)}
            <h2>{@html title}</h2>
        {/if}
        {#if (event)}
            <h3>{@html event}</h3>
        {/if}
    </div>
	<div class="nav-container">
		<NavBottom { nextSection } />
	</div>

</section>

<style>
	.nav-container {
		position: absolute;
		bottom: 2rem;
	}
</style>