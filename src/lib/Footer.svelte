<script>
    import LinkToAnotherPage from '$lib/LinkToAnotherPage.svelte';
    export let footerContent;
    export let linkText;
    export let link;
</script>

<style>

    footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .credits {
			width: 50vw;
        }

    @media screen and (max-width: 960px) {
		.credits {
			width: 40vw;
        }
	}

    @media screen and (max-width: 720px) {
		.credits {
			width: 100%;
            padding-bottom: 1rem;
        }

        footer {
            flex-direction: column;
            justify-content: center;
            align-items: center
        }
	}

</style>

<footer id="footer" class="standard-margin panelColor">
    <div class="credits">
        {@html footerContent}
    </div>
    <LinkToAnotherPage { linkText } {link} />
    <!-- <div>&#169; 2021 Jill Fantauzza</div>
    <div class="made-with">Made with Svelte ❤️</div> -->
</footer>