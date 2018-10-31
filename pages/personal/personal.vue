<template>
	<view :style="'min-height:'+height+'px'">
		<view class="swiper-item">个人中心</view>
		<!-- <page-tabber></page-tabber> -->
	</view>
</template>

<script>
	import pageTabber from '../common/tabber.vue';
	export default {
		data: {
			height: 0,
		},
		components: {
			pageTabber
		},
		methods:{
		},
		mounted(){
			uni.getSystemInfo({
				success:res=>{
					this.height = res.screenHeight-52;
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	
</style>