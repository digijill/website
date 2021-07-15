<script>
	import NavBottom from '$lib/NavBottom.svelte';

    export let project;
    let {format, id, title, event, poster, poster_sm, src, src_sm, nextSection} = project;

	export let widthRatio = 2;
    export let heightRatio = 1;

    let clientWidth;
    let clientHeight;

    let contentWidth;
    let contentHeight;

    $: contentWidth = Math.min(clientWidth, clientHeight * (widthRatio / heightRatio));
    $: contentHeight = Math.min(clientHeight, clientWidth * (heightRatio / widthRatio));
</script>

<section 
    id={id}
    class="panel"
    class:panelColor="{project.panelColor === true}"
>

	<div class = "bleed-padding">
		{#if (project.title)}
			<h2>{@html project.title}</h2>
		{/if}
		{#if (project.event)}
			<h3>{@html project.event}</h3>
		{/if}
	</div>

	<div class="container" bind:clientWidth bind:clientHeight>
		<div style="width: {contentWidth}px; height: {contentHeight}px">
			<video 
				style="background-image: url({ poster });"
				poster = { poster }
				src = { src }
				autoplay
				muted
				loop>
				<track kind="captions">
			</video>
		</div>
	</div>

	{#if (nextSection)}
		<div class="nav-container">
			<NavBottom { nextSection } />
		</div>
	{/if}

</section>

<style>

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 60vh;
	}

	.nav-container {
		position: absolute;
		bottom: 2rem;
	}
</style>