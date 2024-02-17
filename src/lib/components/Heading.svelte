<script lang="ts">
  export let id: string
</script>

<h1 class="h1 space-y-4" {id}>
  <slot/>
</h1>
<hr>

<style>
  h1 {
    text-align: center;
  }

  hr {
    width: 100%;
    border-top-width: 4px !important;
  }
</style>