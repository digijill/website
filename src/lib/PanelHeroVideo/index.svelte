<script>
	import NavBottom from '$lib/NavBottom.svelte';

    export let project;
    let {format, id, title, event, poster, src, nextSection} = project;
</script>

<section 
    id={id}
    class="panel center"
    class:panelColor="{project.panelColor === true}"
>

    <video class="hero-video" style="background-image: url({ poster })"
        { poster }
        { src }
		autoplay
		muted
		loop>
        <track kind="captions">
    </video>

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
</style>