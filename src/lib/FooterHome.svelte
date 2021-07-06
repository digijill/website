<script>
    import LinkToAnchor from '$lib/LinkToAnchor.svelte';
    export let footerContent;
    export let linkText;
    export let link;
</script>

<footer id="footer" class="panelColor">
    {@html footerContent}
    <LinkToAnchor { linkText } {link} />
</footer>

<style>

    footer {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
    }

</style>