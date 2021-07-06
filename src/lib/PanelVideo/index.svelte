<script>
    export let project;
    let {format, id, poster, src, caption} = project;
</script>

<section 
    id={id}
    class="panel center standard-margin"
    class:panelColor="{project.panelColor === true}"
>
    <video
        { poster }
        { src }
        controls>
        <track kind="captions">
    </video>

	<div class="controls">
		<div class="info">
			{caption}
		</div>
	</div>

</section>

<style>
	.controls {
		/* position: absolute;
		bottom: 0; */
		width: 100%;
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
        padding-top: 0.5rem;
	}

	video {
		width: 100%;
	}
</style>