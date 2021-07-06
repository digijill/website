<script>

    import { onMount } from 'svelte';

    let cursor;
    let m = { x: 0, y:0 };

    onMount(() => {
        cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            m.x = e.pageX;
            m.y = e.pageY;

            cursor.setAttribute("style", "top: " + m.y +"px; left: "+ m.x +"px;");
        })

    })

</script>


<div class="cursor"></div>

<style>
    .cursor {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        z-index: 11000;
        background-color: var(--text-color);
        opacity: 0.5;
        pointer-events: none;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
    }

</style>