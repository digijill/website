<script>
    export let linkText;
    export let link;
</script>
  
<a href={link}>
    <div class="button another-page-button">
        <p>{ linkText }</p>
    </div>
</a>

<style>

    .button.another-page-button {
        display: inline-block;
        text-align: center;
        color: white;
        background-color: black;
    }

</style>