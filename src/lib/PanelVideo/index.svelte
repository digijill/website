<script>
    export let project;
    let {format, id, poster, src, caption} = project;
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
</style>