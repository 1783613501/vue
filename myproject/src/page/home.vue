<template>
	<div class="home" style="padding-top:45px; padding-bottom:49px;">
		<div class="swiper-container swiper1 b-line swiper-container-horizontal swiper-container-free-mode" style="position: fixed;
    z-index: 999;top: 44px;">
			<div class="swiper-wrapper">
				<div class="swiper-slide selected swiper-slide-active" style="width:67.545px; margin-right: 1px;">
					推荐</div>

				<div class="swiper-slide swiper-slide-next" style="width:67.545px; margin-right: 1px;">热点</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">社会</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">娱乐</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">军事</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">科技</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">体育</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">财经</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">国际</div>
				<div class="swiper-slide" style="width:67.545px; margin-right: 1px;">时尚</div>
			</div>
		</div>
		<div class="swiper-container swiper2 swiper-container-horizontal swiper-container-autoheight" style="margin-top: 40px;">
			<div class="swiper-wrapper" style="height: 100%;">
				<div class="swiper-slide swiper-no-swiping swiper-slide-active" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(0,10)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title" v-if="(index%5 != 0) && (index != 0)">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line" v-if="index<=4">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img"  v-if="index%5 != 0">
								<img :src=item.title_img alt="">
							</div>
							
							
							
							<div class="aui-middle-dome-list-box" v-if="index%5 == 0">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-list">
									<ul class="clearfix">
										<li>
											<img :src=item.title_img alt="">
										</li>
										<li>
											<img :src=item.title_img alt="">
										</li>
										<li>
											<img :src=item.title_img alt="">
										</li>
									</ul>
								</div>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-title">星见娱乐</span>
										<span class="aui-title">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							
							
							
							
						</router-link>
					</section>
					
					
					
					
					
					
				</div>
				
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(30,41)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
							</div>
						</router-link>
					</section>
				</div>
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(31,41)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
							</div>
						</router-link>
					</section>
				</div>
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(41,51)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
							</div>
						</router-link>
					</section>
				</div>
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(51,61)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
							</div>
						</router-link>
					</section>
				</div>
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(61,71)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
							</div>
						</router-link>
					</section>
				</div>
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(71,81)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
							</div>
						</router-link>
					</section>
				</div>
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(81,91)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a" data-action-label="click-a"
						 data-tag="news">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
							</div>
						</router-link>
					</section>
				</div>
				<div class="swiper-slide swiper-no-swiping" style="width: 100%;" v-if="home">
					<section v-for="(item,index) of home.slice(91,101)" :key="index" class="aui-middle-dome">
						<router-link :to="`/messages/${item._id}?collectionName=home`" class="aui-middle-dome-a" tag="a">
							<div class="aui-middle-dome-title">
								<h3>{{item.title}}</h3>
								<div class="aui-middle-dome-text">
									<div class="clearfix">
										<span class="aui-top box-line">置顶</span>
										<span class="aui-title">央视网新闻</span>
										<span class="aui-comment">评论 {{item.say_num}}</span>
									</div>
								</div>
							</div>
							<div class="aui-middle-dome-img">
								<img :src=item.title_img alt="">
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
		name: 'home',
		props: {},
		data() {
			return {
				home: null

			}
		},
		components: {},

		updated() {},
		methods: {
			getData() {
				this.$axios({
					url: '/api/home'
				}).then(
					res => {
						// console.log()
						this.home = (res.data.data)
						// console.log(this.home)
					}

				)

			}
		},
		mounted() {
			this.getData();
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
		computed: {},
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
		}
	}
</script>

<style>
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
