<script context="module">

export async function load({ page, fetch }) {
		const url = `/data/project_files/${page.params.id}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					projectDescr: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Oops. Could not load ${url}`)
		};
	}
</script>

<script>
    import PanelFullBleed from '$lib/PanelFullBleed/index.svelte';
    import PanelFullText from '$lib/PanelFullText/index.svelte';
    import PanelFramedImage from '$lib/PanelFramedImage/index.svelte';
    import PanelHeroVideo from '$lib/PanelHeroVideo/index.svelte';
    import PanelHeroImage from '$lib/PanelHeroImage/index.svelte';
    import PanelSplit from '$lib/PanelSplit/index.svelte';
    import Footer from '$lib/Footer.svelte';
	import Cursor from '$lib/Cursor.svelte';
    import { onMount } from 'svelte';

    let breakpointCondition = "(max-width: 1000px)";
	let flag = true;

    export let projectDescr;
    let { id, title, summary, content, footerContent, linkText, link } = projectDescr;

	const checkView = () => {
        let view = window.matchMedia(breakpointCondition);
        if (view.matches) {
            flag = false;
        } else {
            flag = true;
        }
    }

	onMount(() => {
        checkView();
    });

</script>

{#if flag}
	<Cursor />
{/if}

<div class="wrapper background-pattern">

    {#each content as project}
        {#if (project.format == "hero-video")}
            <PanelHeroVideo {project} />
        {:else if (project.format == "hero-image")}
            <PanelHeroImage {project} />
        {:else if (project.format == "full-text")}
            <PanelFullText {project} />
        {:else if (project.format == "full-bleed")}
            <PanelFullBleed {project} />
        {:else if (project.format == "framed-image")}
            <PanelFramedImage {project} />
        {:else if (project.format == "split")}
            <PanelSplit {project} />
        {/if}
    {/each}

    <Footer {footerContent} {linkText} {link} />
</div>




