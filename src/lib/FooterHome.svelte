<script>
    import LinkToAnchor from '$lib/LinkToAnchor.svelte';
    export let footerContent;
    export let linkText;
    export let link;
</script>

<footer id="footer" class="panelColor">
    <div class="footer-text">
        {@html footerContent}
    </div>
    <LinkToAnchor { linkText } {link} />
</footer>

<style>

    footer {
        display: flex;
        justify-content: space-between;
        padding: 2rem 6rem;
    }

    @media (max-width: 500px) {
        footer {
            justify-content: center;
            align-items: center;
            flex-direction: column-reverse;
            text-align: center;
        }

        .footer-text {
            margin-top: 1rem;
        }
    }

</style>