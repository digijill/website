<script>

    import { onMount } from 'svelte';

    let breakpointCondition = "(min-width: 1000px)";
    let display = "none";
    let top = 0;
    let left = 0;

    const checkViewForCursor = () => {
        let view = window.matchMedia(breakpointCondition);

        function trackCursor(e) {
            left = e.pageX;
            top = e.pageY;
        }

        if (view.matches) {
            display = "block";
            document.addEventListener('mousemove', trackCursor);

        } else {
            display = "none";
            document.removeEventListener('mousemove', trackCursor);
        }
    }

    onMount(() => { checkViewForCursor() })

</script>

<svelte:window on:resize={ checkViewForCursor } />

<div class="cursor" style = "display: { display }; left: { left }px; top: { top }px;"></div>

<style>
    .cursor {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        z-index: 11000;
        background-color: var(--text-color);
        opacity: 0.5;
        pointer-events: none;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }

</style>