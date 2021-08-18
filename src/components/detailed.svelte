<script>
  export let kurs;
  export let points;
  export let info;
  export let exempel;
</script>

<div class="educate">
  <h6>{kurs}</h6>
  <p>{points} YH-poäng</p>
  <p>{info}</p>
  <p />
  {#if exempel}
    <a href={exempel}><i class="far fa-eye" /></a>
  {/if}
</div>

<style>
  .educate {
    margin-bottom: 1rem;

    padding: 1rem;
  }
  .educate:not(:last-child) {
    border-bottom: 1px solid rgba(77, 71, 71, 0.2);
  }
</style>
