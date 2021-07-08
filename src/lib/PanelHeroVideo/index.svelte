<script>
	import { onMount } from 'svelte';
	import NavBottom from '$lib/NavBottom.svelte';

    export let project;
    let {format, id, title, event, poster, poster_sm, src, src_sm, nextSection} = project;
	let breakpointCondition = "(max-width: 500px)";
	let flag = false;

	const checkView = () => {
        let view = window.matchMedia(breakpointCondition);
        if (view.matches) {
            flag = true;
        } else {
            flag = false;
        }
    }

    onMount(() => {
        checkView();
    });
</script>

<section 
    id={id}
    class="panel center"
    class:panelColor="{project.panelColor === true}"
>

	{#if flag}
		<video class="hero-video" style="background-image: url({ poster_sm })"
			poster = { poster_sm }
			src = { src_sm }
			autoplay
			muted
			loop>
			<track kind="captions">
		</video>
	{:else}
		<video class="hero-video" style="background-image: url({ poster })"
			class:carboncurve="{id === 'carboncurve-hero'}"
			{ poster }
			{ src }
			autoplay
			muted
			loop>
			<track kind="captions">
		</video>
	{/if}

	<div class="headline bleed-padding">
        {#if (title)}
            <h2>{@html title}</h2>
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
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
	}

	.hero-video {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 50%;
	}

	.nav-container {
		position: absolute;
		bottom: 2rem;
	}

	video.carboncurve {
		object-position: 0 0;
	}
</style>