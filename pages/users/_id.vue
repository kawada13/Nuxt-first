<template>
  <div>
    User ID: {{userId}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id
    }
  },
}
</script>

<style>

</style>