<template>
	<div @click="go">
P1
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
			go() {
				this.$router.push('p2')
			}
		}
	}
</script>

<style>
</style>
