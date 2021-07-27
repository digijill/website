<script>
	import NavBottom from '$lib/NavBottom.svelte';

    export let project;
    let {format, id, title, event, src, src_small, alt, nextSection, panelColor} = project;

</script>

<section 
    id={id}
    class="panel"
    class:panelColor="{project.panelColor === true}"
>

	<img 
		src={project.src} 
		alt={project.alt} 
		srcset="{project.src} 2880w, {project.src_small} 1000w"
		class:seeingearth="{id === 'seeingearth-temperature'}"
		class:seeingearthco2="{id === 'seeingearth-co2'}"
	>

	<div class="headline bleed-padding">
        {#if (title)}
            <h1>{@html title}</h1>
        {/if}
        {#if (event)}
            <h3>{@html event}</h3>
        {/if}
    </div>

	{#if (nextSection)}
		<div class="nav-container">
			<NavBottom { nextSection } />
		</div>
	{/if}

</section>

<style>
	h1 {
		color: white;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
	}

	.seeingearth, .seeingearthco2 {
		object-position: center bottom;
	}

	.nav-container {
		position: absolute;
		bottom: 2rem;
	}

</style>