<template>
  <div class="items">
    {{ id }}
  </div>
</template>

<style scoped>
  .items {
    padding: 10px;
    background-color: #3b9bb3;
  }
  p {
    font-weight: bold;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px 15px;
    color: #fff;
  }
  a {
    text-decoration: none;
  }
</style>

<script>

  export default {
    props: ["id"],
  }

</script>

