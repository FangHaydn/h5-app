<template>
  <div>
    <p @click="go">WORLD</p>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    go(){
      this.$router.back()
    }
  }
}
</script>

<style>

</style>