<script>
	import projects from '../data/projects.json';
	import Intro from '$lib/Intro/index.svelte';
	import PanelFullBleed from '$lib/PanelFullBleed/index.svelte';
	import Footer from '$lib/FooterHome.svelte';
	import Cursor from '$lib/Cursor.svelte';

	const projectList = Object.values(projects);

	const footerContent = "<p>Site handmade with Sveltekit<br />&#169; Jill Fantauzza 2021</p>";
	const linkText = "back to top";
	const link = "#intro";
</script>

<svelte:head>
	<title>from Jill</title>
</svelte:head>

<Cursor />

<Intro />

{#each projectList as project}
	<PanelFullBleed {project} />
{/each}

<Footer {footerContent} {linkText} {link} />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>