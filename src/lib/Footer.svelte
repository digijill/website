<script>
    import LinkToAnotherPage from '$lib/LinkToAnotherPage.svelte';
    export let footerContent;
    export let linkText;
    export let link;
</script>

<footer id="footer" class="standard-margin">
    <div class="credits">
        {@html footerContent}
    </div>
    <LinkToAnotherPage { linkText } {link} />
</footer>

<style>

    footer {
        display: flex;
        justify-content: space-between;
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