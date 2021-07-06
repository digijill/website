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
        background-color: #1EB2FF;
        font-weight: 400;
    }

    .button.another-page-button p {
        line-height: 2rem;
        padding-bottom: 8px;
        margin: 1rem 2rem 0.5rem 2rem;
    }

</style>