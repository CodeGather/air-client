<template>
		<div class="container">
			<view class="canvasView">
				<view class="title">饼图示例</view>
				<mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" />
			</view>
		</div>
</template>

<script>
	import * as echarts from '../../common/echarts/echarts.simple.min.js';
	import mpvueEcharts from '../../common/echarts/src/echarts.vue';
	function getPieOption() {
			return {
				animation: false,
				backgroundColor: '#F8F8F8',
				color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
				series: [{
					label: {
						normal: {
							fontSize: 14
						}
					},
					type: 'pie',
					center: ['50%', '50%'],
					radius: [0, '60%'],
					data: [{
						value: 55,
						name: '北京'
					}, {
						value: 20,
						name: '武汉'
					}, {
						value: 10,
						name: '杭州'
					}, {
						value: 20,
						name: '广州'
					}, {
						value: 38,
						name: '上海'
					}],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 2, 2, 0.3)'
						}
					}
				}]
			}
		}
	export default {
		data() {
			return {
				echarts,
				pieInit: function (canvas, width, height) {
					let pieChart = echarts.init(canvas, null, {
						width: width,
						height: height
					})
					canvas.setChart(pieChart)

					pieChart.setOption(getPieOption())
					return pieChart
				},
			}
		},
		components: {
			mpvueEcharts
		},
		onLoad: function () {
			// this.newsitems = this.randomfn()
		},
		onUnload:function(){
			this.scrollLeft = 0,
			this.isClickChange = false,
			this.currentTab = 0;
		},
		methods: {
		},
		mounted(){
			uni.getSystemInfo({
				success:res=>{
					this.height = res.screenHeight;
				}
			})
		}
	}
	
	
</script>

<style lang="less">
	
	page,
	view {
		display: flex;
	}
	page {
		min-height: 100%;
	}
	
	.index {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}

	.index-bd {
		width: 750upx;
		height: 100%;		
		min-height: 100%;
	}

	.swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 64upx;
		height: 64upx;
	}


	.swiper-tab-list {
		font-size: 30upx;
		width: 150upx;
		display: inline-block;
		text-align: center;
		color: #777777;
	}

	.on {
		color: #FF0000;
		border-bottom: 5upx solid #FF0000;
	}

	.tab-list {
		width: 100%;
		height: 90upx;
		line-height: 90upx;
		text-align: left;
		border-bottom: 2upx solid #EFEFF4;
	}
	
		.title {
			margin-left: 30upx;
			color: #8f8f94;
		}
	
		.container {
			padding-bottom: 30upx;
			box-sizing: border-box;
		}
	
		.container,
		.canvasView {
			flex: 1;
			flex-direction: column;
		}
</style>