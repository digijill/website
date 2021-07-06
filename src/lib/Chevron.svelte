<script>
    import { onMount } from 'svelte';
    let nextSectionEl;
    export let text;
    export let nextSection;

    const scrollToSection = () => {
        nextSectionEl.scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
        });
    }

    onMount(() => {
        nextSectionEl = document.getElementById(nextSection);
    })
</script>

<div class="active-group" on:pointerup = { scrollToSection }>

    <p>{ text }</p>
  
    <svg
        class="chevron"
        width="48"
        height="20"
        viewBox="0 0 40 20" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        d="M24.5,1.1l-12,12L1.1,1.1"
        stroke="white"
        stroke-width="4.25"
        stroke-linecap="square"
        stroke-linejoin="square" />
    </svg>

</div>

<style>

p {
    margin-top: 4rem;
    font-weight: 400;
}

</style>