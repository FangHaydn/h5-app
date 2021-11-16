<template>
	<div>
		<div class="item" v-for="item in list" :key="item.name" @click="submit(item.func)">
			<span>{{ item.name }}</span>
			<img class="arrow" :src="require('../assets/back.png')" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		components: {},
		data() {
			return {
				list: [{
						name: "P2页面",
						func: "go"
					},
					{
						name: "摄像头",
						func: "camera"
					},
					// { name: "定位", func: "location" },
				],
			};
		},
		created() {},
		methods: {
			submit(func) {
				this[func]();
			},
			go() {
				this.$router.push("p2");
			},
			camera() {
				var cmr = plus.camera.getCamera();
				cmr.captureImage();
			},
		},
	};
</script>

<style lang="css">
	.item {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		border-bottom: 1px solid #EEE;
	}

	.arrow {
		width: 20px;
		height: 20px;
		transform: rotate(180deg);
	}
</style>
