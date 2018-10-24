<template>
	<view>
		<swiper :style="'min-height:'+height+'px;width:'+width+'px'" :current="active" duration="0" @change="swiperChange">
			<swiper-item>
				<view class="swiper-item">分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析分析</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background-color: #20D785;">发布</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background-color: #307DCA;">我的</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data: {
			active: 0,
			height: 0,
			width: 0
		},
		methods:{
			swiperChange(e) {
				this.active = e.detail.current;
			}
		},
		mounted(){
			uni.getSystemInfo({
				success:res=>{
					this.height = res.screenHeight;
					this.width = res.screenWidth;
				}
			})
		},
		methods: {
			itemClick: function(e){
				this.active = e;
				console.log(122)
				uni.switchTab({
					url: 'pages/index/index'
				});
			}
		}
	}
</script>

<style lang="less">
	@import "../../common/icon.css";
	@tabWidth:100%/3;
	@mainColor:#20D785;
	@auxColor:#929292;
	@whiColor:#ffffff;
	.swiper-item {
		display: flex;
		width: 100%;
		height: 100%;
		text-align: center;
		background-color: @whiColor;
		justify-content: center;
		align-items: center;
	}
	/* 底部导航样式 */ 
	.tab {
		position: fixed;
		z-index: 999;
		height: 100px;
		width: 100%;
		bottom: 0;
		background-color: @whiColor;
		display: flex;
		border-top: #CCCCCC 2px solid;
		/* 底部导航子选项 */ 
		& .item {
			width: @tabWidth;
			color: @auxColor;
			font-size: 24px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			/* 导航中间凸起部分 */ 
			&:nth-child(2) {
				& .uni-icon {
					border-radius: 50%;
					font-size: 100px;
					margin-top:-40px;
					background: @whiColor;
					padding:5px;
					// box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 1), 0 5px 8px 0 rgba(0, 0, 0, .14), 0 1px 14px 0 rgba(0, 0, 0, .12);
				}
				& .text {
					font-size: 24px;
					padding-top: 36px;
				}
			}
			&.active {
				color: @mainColor!important;
			}
		}
	}
</style>