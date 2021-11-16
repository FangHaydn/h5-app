<template>
	<div>
		<h1>404 not found</h1>
		<button type="button" @click="gop1">go p1</button>
	</div>
</template>

<script>
export default {
	methods: {
		gop1(){
			this.$router.push('/p1')
		}
	}
}
</script>

<style>
</style>
