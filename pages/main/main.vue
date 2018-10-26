<template>
	<view>
		<swiper class="swiper" :style="'min-height:'+height+'px'" :current="active" duration="0" @change="swiperChange">
			<!-- 第一页进度页面 -->
			<swiper-item class="page-one">
				<scroll-view id="tab-bar" class="swiper-tab" scroll-x :scroll-left="scrollLeft">
					<block v-for="(tab,index) in tabs" :key="tab.id">
						<view :class="['swiper-tab-list',currentTab==index ? 'on' : '']" :id="tab.id" :data-current="index" @tap="swichNav">{{tab.name}}</view>
					</block>
				</scroll-view>
				<swiper :current="currentTab" class="swiper-box" duration="300" @change="bindChange">
					<block v-for="(tab,index1) in newsitems" :key="index1">
						<swiper-item>
							<scroll-view class="index-bd" scroll-y @scrolltolower="loadMore(index1)">
								<block v-for="(newsitem,index2) in tab" :key="index2">
									<view class="tab-item">{{newsitem.name}}-{{newsitem.label}}</view>
								</block>
							</scroll-view>
						</swiper-item>
					</block>
				</swiper>
			</swiper-item>
			<!-- 第二页分析页面 -->
			<swiper-item class="page-two" catchtouchmove="stopTouchMove">
				<swiper :style="'min-height:'+(height-100)+'px'" :vertical="true">
					<swiper-item class="page-two-item">
						<div class="container">
							<view class="canvasView" style="width:400upx;height:400upx">
								<view class="title">数据分析</view>
								<mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" />
								<mpvue-echarts :echarts="echarts" :onInit="DiugInit" canvasId="Diug" @tap="echartclick"/>
							</view>
						</div>
					</swiper-item>
					<swiper-item class="page-two-item">
						<div class="container">
							<view class="canvasView">
								<view class="title">第二页</view>
							</view>
						</div>
					</swiper-item>
					<swiper-item class="page-two-item">
						<div class="container">
							<view class="canvasView">
								<view class="title">第三页</view>
							</view>
						</div>
					</swiper-item>
        </swiper>
			</swiper-item>
			<!-- 第三页我的页面 -->
			<swiper-item>
				<view class="swiper-item" style="background-color: #307DCA;">我的</view>
			</swiper-item>
		</swiper>
		<view class="tab">
			<view :class="active==0?'item active':'item'" @tap="active=0">
				<view>
					<view class="uni-icon uni-icon-home"></view>
				</view>
				<view>进度</view>
			</view>
			<view :class="active==1?'item active':'item'" @tap="active=1">
				<view>
					<view class="uni-icon uni-icon-plus-filled"></view>
				</view>
				<!-- <view class="text">发布</view> -->
			</view>
			<view :class="active==2?'item active':'item'" @tap="active=2">
				<view>
					<view class="uni-icon uni-icon-person"></view>
				</view>
				<view>我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as echarts from '../../common/echarts/echarts.simple.min.js';
	import mpvueEcharts from '../../common/echarts/src/echarts.vue';
	function getPieOption() {
		return {
			animation: false,
			backgroundColor: '#ffffff',
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
	
	function getDiug(){
		return {  
			title : {  
				text: '公里总里程',   
				x:'left',
				textStyle:{
					color:'#ccc',
					fontSize:25
				}
			},  
			tooltip : {  
				trigger: 'item',  
				formatter: "{a} <br/>{b} : {c} KM"  
			},    
			calculable : true,  
			series : [{  
				name:'公里总里程',  
				type:'pie',  
				radius: ['30%', '60%'], //饼图的内圈
				center: ['50%', '50%'], //饼图的位置 
				label:{                 //饼图图形上的文本标签
					normal:{
						show:true,
						position:'inner',   //标签的位置
						textStyle : {
							fontWeight : 300 ,
							fontSize : 12     //文字的字体大小
						},
						formatter:'{d}%'    //显示的文字格式当前为百分比
					}
				},
				data:[  
					{value:50,name:'高速50KM',itemStyle:{normal:{color:'#FE0000'}}},  
					{value:150,name:'一级150KM',itemStyle:{normal:{color:'#F29700'}}},  
					{value:150,name:'二级150KM',itemStyle:{normal:{color:'#02B0ED'}}}, 
					{value:100,name:'三级100KM',itemStyle:{normal:{color:'#55E87D'}}},
					{value:50,name:'四级50KM',itemStyle:{normal:{color:'#FFE200'}}},
				]
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
				DiugInit: function (canvas, width, height) {
					let pieChart = echarts.init(canvas, null, {
						width: width,
						height: height
					})
					canvas.setChart(pieChart)

					pieChart.setOption(getDiug())
					return pieChart
				},
				active: 0,
				height: 0,
				width: 0,
				title: 'tabbar',
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				tabs: [{
					name: '关注',
					id: 'guanzhu'
				}, {
					name: '推荐',
					id: 'tuijian'
				}, {
					name: '体育',
					id: 'tiyu'
				}, {
					name: '热点',
					id: 'redian'
				}, {
					name: '财经',
					id: 'caijing'
				}, {
					name: '娱乐',
					id: 'yule'
				}],
				newsitems: [],
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				}
			}
		},
		components: {
			mpvueEcharts
		},
		onLoad: function () {
			this.newsitems = this.randomfn()
		},
		onUnload:function(){
			this.scrollLeft = 0,
			this.isClickChange = false,
			this.currentTab = 0;
		},
		methods: {
			echartclick: function(){
				console.log(1111)
			},
			goBrowser() {
				// #ifdef APP-PLUS
				plus.runtime.openURL("https://github.com/F-loat/mpvue-echarts");
				// #endif
				// #ifdef MP-WEIXIN
				uni.showModal({
					content:"请复制链接在浏览器里打开",
					showCancel:false
				})
				// #endif
			},
			/* 防止第二页侧滑动 */
			stopTouchMove: function() { 
				return false;
			},
			tap: function(e) {
				// 解决view层不同步的问题
				this.x = this.old.x
				this.y = this.old.y
				this.$nextTick(function() {
						this.x = 30
						this.y = 30
				})
			},
			onChange: function(e) {
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			},
			/* 窗口滑动改变tabber样式 */ 
			swiperChange: function(e) {
				this.active = e.detail.current;
				
			},
			/* 第一页处理事件 */
			bindChange: async function (e) {
				let index = e.target.current;
				if (this.isClickChange) {
					this.currentTab = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getWidth("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;

				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getWidth(this.tabs[i].id);
					width += result.width;
				}

				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getWidth(this.tabs[index].id),
					nowWidth = nowElement.width;

				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.currentTab = index; //一旦访问data就会出问题
			},
			/* 得到元素的宽高 */
			getWidth: function (id) { 
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						if (id === 'tab-bar') {
							console.log("id=", id, "数据:", data)
						}
						res(data);
					}).exec();
				})
			},
			/* 点击tab-bar */
			swichNav: async function (e) { 
				if (this.currentTab === e.target.dataset.current) {
					return false;
				} else {
					let tabBar = await this.getWidth("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.currentTab = e.target.dataset.current
				}
			},
			/* 加载更多数据 */
			loadMore: function (e) {
				let last = this.newsitems[e][this.newsitems[e].length - 1].label,
					name = this.newsitems[e][this.newsitems[e].length - 1].name;
				for (let i = 1; i <= 10; i++) {
					this.newsitems[e].push({
						name: name,
						label: i + last
					});
				}
			},
			/* 处理虚假数据 */
			randomfn:function() {
				let ary = [];
				for (let i = 0, length = this.tabs.length; i < length; i++) {
					let aryItem = [];
					for (let j = 1; j <= 20; j++) {
						aryItem.push({
							name: this.tabs[i].name,
							label: j
						});
					}
					ary.push(aryItem);
				}
				return ary;
			}
		},
		mounted(){
			uni.getSystemInfo({
				success:res=>{
					this.height = res.screenHeight-52;
				}
			})
		}
	}
	
	
</script>

<style lang="less">
	@import "../../common/icon.css";
	@tabWidth:100%/3;
	@mainColor:#20D785;
	@auxColor:#929292;
	@whiColor:#ffffff;
	page{
		display: flex;
		min-height: 100%;
	}
	.swiper{
		width: 750upx;
		& .page-one{ /* 第一页样式 */ 
			& .swiper-tab { /* 头部样式 */
				width: 100%;
				white-space: nowrap;
				line-height: 90upx;
				height: 90upx;
				& .swiper-tab-list {
					font-size: 30upx;
					width: 150upx;
					display: inline-block;
					text-align: center;
					color: #777777;
				}
				& .on {
					color: #FF0000;
					border-bottom: 5upx solid #FF0000;
				}
			}
			& .swiper-box{  /* 内容列表样式 */
				& .tab-item {
					width: 100%;
					height: 90upx;
					line-height: 90upx;
					text-align: left;
					border-bottom: 2upx solid #EFEFF4;
				}
				& .index-bd {
					width: 750upx;
					height: 100%;		
					min-height: 100%;
				}
			}
		}
		& .page-two{
			padding: 36upx;
			box-sizing: border-box;
			& .page-two-item{
				background: @whiColor;
				border-radius: 20upx;
				height: 980upx!important;
			}
			& .container {
				padding-bottom: 30upx;
				box-sizing: border-box;
				flex: 1;
				flex-direction: column;
				& .canvasView{
					display: flex;
					flex: 1;
					flex-direction: column;
				}
			}
			& .container,
			& .canvasView {
				flex: 1;
				flex-direction: column;
			}
		}
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
					border-top: #CCCCCC 2px solid;
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
	// 	.swiper-item {
	// 		display: flex;
	// 		width: 100%;
	// 		height: 100%;
	// 		text-align: center;
	// 		background-color: @whiColor;
	// 		justify-content: center;
	// 		align-items: center;
	// 	}
</style>