<script>
    import { onMount } from 'svelte';
    let nextSectionEl;
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
  
    <svg
        class="chevron"
        width="48"
        height="20"
        viewBox="0 0 40 20" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        on:pointerup = { scrollToSection }
    >
        <path
        d="M24.5,1.1l-12,12L1.1,1.1"
        stroke="white"
        stroke-width="4.25"
        stroke-linecap="square"
        stroke-linejoin="square" />
    </svg>

<style>

    /* .chevron {
        transition: transform 0.3s cubic-bezier(0.13, 0.9, 0.17, 0.95);
    }

    .chevron:hover {
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    } */
</style>