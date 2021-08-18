<script>
  import Footer from '../components/navigation/footer.svelte';
  import Nav from '../components/navigation/nav.svelte';
</script>

<svelte:head>
  <!-- Font Awesome -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    rel="stylesheet"
  />
  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    rel="stylesheet"
  />
  <!-- MDB -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css"
    rel="stylesheet"
  />
</svelte:head>

<Nav />
<div class="container">
  <slot />
</div>
<Footer />

<style>
  * {
    /* margin: 0;
    padding: 0; */
    box-sizing: border-box;
  }
</style>
