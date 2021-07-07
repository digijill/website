<script>
    import Chevron from '$lib/Chevron.svelte';
    export let nextSection;
</script>
  
<div class="bottom-nav">
    <Chevron { nextSection } />
</div>

<style>

    div.bottom-nav {
        width: 100vw;
        text-align: center;
        position: relative;
        z-index: 10;
    }

</style>