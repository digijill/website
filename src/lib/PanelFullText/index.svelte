<script>
    export let project;
</script>

<section 
    id={project.id}
    class="fullscreen"
>
    <div class="fullscreen center">
        <div class="content smalltext">
            {@html project.text} 
       </div>
    </div>

</section>

<style>

    section {
        background-color: black;
        color: white;
    }

</style>
