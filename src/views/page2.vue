<template>
  <div>
    <button @click="go">返回P1</button>
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