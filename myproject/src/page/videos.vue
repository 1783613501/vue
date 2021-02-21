<template>

	<div class="videos"  style="padding-top:45px; ;">



		<div class="swiper-container swiper1 b-line swiper-container-horizontal swiper-container-free-mode" style="position: fixed;
    z-index: 999;top: 44px;">
			<div class="swiper-wrapper">
				<div class="swiper-slide selected swiper-slide-active" style="width: 247.545px; margin-right: 1px;">
					推荐</div>
				<div class="swiper-slide swiper-slide-next" style="width: 247.545px; margin-right: 1px;">搞笑</div>
				<div class="swiper-slide" style="width: 247.545px; margin-right: 1px;">娱乐</div>
				<div class="swiper-slide" style="width: 247.545px; margin-right: 1px;">美女</div>
				<div class="swiper-slide" style="width: 247.545px; margin-right: 1px;">八卦</div>
				<div class="swiper-slide" style="width: 247.545px; margin-right: 1px;">音乐</div>
			</div>
		</div>

		<div class="swiper-container swiper2 swiper-container-horizontal swiper-container-autoheight" style="margin-top: 40px;">
			<div class="swiper-wrapper" style="height: 558px;" v-if="videos">
				<div class="swiper-slide swiper-no-swiping swiper-slide-active" style="width:100%;">
					<section class="aui-middle-dome"  v-for="(item,index) of videos.slice(0,10)" :key="index">
						<router-link :to="`/videoMsg/${item._id}?collectionName=sp`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<h3 class="aui-title-h3">{{item.title}}</h3>
							<div class="aui-title-img"><img :src=item.title_img alt=""><span class="aui-title-vio"></span></div>
							<div class="aui-title-text clearfix">
								<span class="aui-ban">说说那点事</span>
								<span class="aui-zan"><i></i>{{item.good_num}}</span>
								<span class="aui-lun"><i></i>{{item.say_num}}</span>
							</div>
						</router-link>
					</section>
				</div>
				
				<div class="swiper-slide swiper-no-swiping swiper-slide-next" style="width:100%;">
					<section class="aui-middle-dome"  v-for="(item,index) of videos.slice(10,20)" :key="index">
						<router-link :to="`/videoMsg/${item._id}?collectionName=sp`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<h3 class="aui-title-h3">{{item.title}}</h3>
							<div class="aui-title-img"><img :src=item.title_img alt=""><span class="aui-title-vio"></span></div>
							<div class="aui-title-text clearfix">
								<span class="aui-ban">说说那点事</span>
								<span class="aui-zan"><i></i>{{item.good_num}}</span>
								<span class="aui-lun"><i></i>{{item.say_num}}</span>
							</div>
						</router-link>
					</section>
				</div>
				
				<div class="swiper-slide swiper-no-swiping" style="width:100%;">
					<section class="aui-middle-dome"  v-for="(item,index) of videos.slice(20,30)" :key="index">
						<router-link :to="`/videoMsg/${item._id}?collectionName=sp`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<h3 class="aui-title-h3">{{item.title}}</h3>
							<div class="aui-title-img"><img :src=item.title_img alt=""><span class="aui-title-vio"></span></div>
							<div class="aui-title-text clearfix">
								<span class="aui-ban">说说那点事</span>
								<span class="aui-zan"><i></i>{{item.good_num}}</span>
								<span class="aui-lun"><i></i>{{item.say_num}}</span>
							</div>
						</router-link>
					</section>
				</div>
				
				<div class="swiper-slide swiper-no-swiping" style="width:100%;">
					<section class="aui-middle-dome"  v-for="(item,index) of videos.slice(30,40)" :key="index">
						<router-link :to="`/videoMsg/${item._id}?collectionName=sp`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<h3 class="aui-title-h3">{{item.title}}</h3>
							<div class="aui-title-img"><img :src=item.title_img alt=""><span class="aui-title-vio"></span></div>
							<div class="aui-title-text clearfix">
								<span class="aui-ban">说说那点事</span>
								<span class="aui-zan"><i></i>{{item.good_num}}</span>
								<span class="aui-lun"><i></i>{{item.say_num}}</span>
							</div>
						</router-link>
					</section>
				</div>
				
				<div class="swiper-slide swiper-no-swiping" style="width:100%;">
					<section class="aui-middle-dome"  v-for="(item,index) of videos.slice(40,50)" :key="index">
						<router-link :to="`/videoMsg/${item._id}?collectionName=sp`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<h3 class="aui-title-h3">{{item.title}}</h3>
							<div class="aui-title-img"><img :src=item.title_img alt=""><span class="aui-title-vio"></span></div>
							<div class="aui-title-text clearfix">
								<span class="aui-ban">说说那点事</span>
								<span class="aui-zan"><i></i>{{item.good_num}}</span>
								<span class="aui-lun"><i></i>{{item.say_num}}</span>
							</div>
						</router-link>
					</section>
				</div>
				
				<div class="swiper-slide swiper-no-swiping" style="width:100%;">
					<section class="aui-middle-dome"  v-for="(item,index) of videos.slice(50,60)" :key="index">
						<router-link :to="`/videoMsg/${item._id}?collectionName=sp`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<h3 class="aui-title-h3">{{item.title}}</h3>
							<div class="aui-title-img"><img :src=item.title_img alt=""><span class="aui-title-vio"></span></div>
							<div class="aui-title-text clearfix">
								<span class="aui-ban">说说那点事</span>
								<span class="aui-zan"><i></i>{{item.good_num}}</span>
								<span class="aui-lun"><i></i>{{item.say_num}}</span>
							</div>
						</router-link>
					</section>
				</div>
				
				
			</div>
		</div>
	

	</div>


</template>

<script>
	
	import '../assets/js/swip.js'
	export default {
		name: 'videos',
		props: {},
		data() {
			return {
				videos:null
			}
		},
		components: {},
		mounted() {
			this.getData();
			let Swiper = require('swiper')
			// console.log(document.querySelector('.swiper2'))
			// console.log($)
			$(function() {
				function setCurrentSlide(ele, index) {
					$(".swiper1 .swiper-slide").removeClass("selected");
					ele.addClass("selected");
				}
			
				var swiper1 = new Swiper.Swiper('.swiper1', {
			
					slidesPerView: 5.5,
					paginationClickable: true,
					spaceBetween: 1,
					freeMode: true,
					loop: false,
					onTab: function(swiper) {
						var n = swiper1.clickedIndex;
					}
				});
				swiper1.slides.each(function(index, val) {
					var ele = $(this);
					// console.log(val);
					ele.on("click", function() {
						setCurrentSlide(ele, val);
						swiper2.slideTo(val, 500, false);
					});
				});
			
				var swiper2 = new Swiper.Swiper('.swiper2', {
					direction: 'horizontal',
					loop: false,
					//effect : 'fade',//淡入
					// effect : 'cube',//方块
					// effect : 'coverflow',//3D流
					// effect : 'flip',//3D翻转
					autoHeight: true,
					onSlideChangeEnd: function(swiper) {
						//回调函数，swiper从一个slide过渡到另一个slide结束时执行。
						var n = swiper.activeIndex;
						setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
						swiper1.slideTo(n, 500, false);
					}
				});
			});
		},
		updated() {
			let Swiper = require('swiper')
			$(function() {
				function setCurrentSlide(ele, index) {
					$(".swiper1 .swiper-slide").removeClass("selected");
					ele.addClass("selected");
				}
			
				var swiper1 = new Swiper.Swiper('.swiper1', {
			
					slidesPerView: 5.5,
					paginationClickable: true,
					spaceBetween: 1,
					freeMode: true,
					loop: false,
					onTab: function(swiper) {
						var n = swiper1.clickedIndex;
					}
				});
				swiper1.slides.each(function(index, val) {
					var ele = $(this);
					// console.log(val);
					ele.on("click", function() {
						setCurrentSlide(ele, val);
						swiper2.slideTo(val, 500, false);
					});
				});
			
				var swiper2 = new Swiper.Swiper('.swiper2', {
					direction: 'horizontal',
					loop: false,
					//effect : 'fade',//淡入
					// effect : 'cube',//方块
					// effect : 'coverflow',//3D流
					// effect : 'flip',//3D翻转
					autoHeight: true,
					onSlideChangeEnd: function(swiper) {
						//回调函数，swiper从一个slide过渡到另一个slide结束时执行。
						var n = swiper.activeIndex;
						setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
						swiper1.slideTo(n, 500, false);
					}
				});
			});
		},
		methods: {
			getData() {
				this.$axios({
					url: '/api/sp'
				}).then(
					res => this.videos = res.data.data
				)
			}
		},
		computed: {}
	}
</script>

<style>
	body {
				margin: 0;
				padding: 0;
			}
	
			.container {
				width: 100%;
			}
	
			.swiper1 {
				width: 100%;
				background: #efefef;
			}
	
			.swiper1 .selected {
				color: #ec5566;
			}
	
			.swiper1 .swiper-slide {
				text-align: center;
				font-size: 14px;
				height: 40px;
				display: -webkit-box;
				display: -ms-flexbox;
				display: -webkit-flex;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				-webkit-justify-content: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				-webkit-align-items: center;
				align-items: center;
				cursor: pointer;
			}
	
			.swiper2 {
				width: 100%;
			}
	
			.swiper2 .swiper-slide {
				height: calc(100vh - 50px);
				color: #fff;
				text-align: center;
				box-sizing: border-box !important;
				overflow-x: hidden !important;
			}
</style>
