<script>
    import Chevron from '$lib/Chevron.svelte';
    export let nextSection;
</script>
  
<div class="bottom-nav">
    <p class="text">scroll to view work</p>
    <Chevron { nextSection } />
</div>

<style>
    p.text {
        margin-top: 4rem;
    }

    div.bottom-nav {
        width: 100vw;
        text-align: center;
        position: relative;
        z-index: 10;
    }
</style>