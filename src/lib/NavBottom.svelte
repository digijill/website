<script>
    import Chevron from '$lib/Chevron.svelte';
    export let nextSection;
</script>
  
<div class="bottom-nav">
    <Chevron { nextSection } />
</div>

<style>

    div.bottom-nav {
        z-index: 10;
    }

</style>