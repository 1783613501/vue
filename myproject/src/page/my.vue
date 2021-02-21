<template>
	<div class="my" style="height: 100%; background-color: rgb(225, 230, 215);">
		<section class="aui-content" id="user-info">
			<div class="aui-list aui-media-list aui-list-noborder aui-bg-info" style="padding:14px 0">
				<div class="aui-list-item aui-list-item-middle" style="background-image:none">
					<div class="aui-media-list-item-inner ">
						<div class="aui-list-item-media" style="width:3rem;line-height: 65px;text-align: center;color:#fff">
							<img :src=$route.query.user.auth_icon class="aui-img-round">
							<span>{{$route.query.user.nikename}}同学</span>
						</div>
						<!-- <div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-text text-white aui-font-size-18" style="></div>	
						</div> -->
					</div>
				</div>
				<div class="aui-row aui-clear-cl ">
					<div class="aui-col-xs-4 aui-border-r">
						<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-newest.html">
							<div class="aui-clear-cl1">{{$route.query.user.active}}</div>
							<div class="aui-gird-lable aui-font-size-12">动态</div>
						</a>
					</div>
					<div class="aui-col-xs-4 aui-border-r">
						<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-follow.html">
							<div class="aui-clear-cl1">433545</div>
							<div class="aui-gird-lable aui-font-size-12">关注</div>
						</a>
					</div>
					<div class="aui-col-xs-4">
						<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-fans.html" se_prerender_url="complete">
							<div class="aui-clear-cl1">{{$route.query.user.fans}}</div>
							<div class="aui-gird-lable aui-font-size-12">粉丝</div>
						</a>
					</div>
				</div>
			</div>
		</section>
		<section class="aui-content aui-content-size">
			<div class="aui-grid" style="background-color: rgb(225, 230, 215);">
				<div class="aui-row">
					<div class="aui-col-xs-3">
						<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-subscribe.html">
							<i class="aui-iconfont aui-icon-mail aui-text-info"></i>
							<div class="aui-grid-label">订阅</div>
						</a>
					</div>
					<div class="aui-col-xs-3">
						<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-collection.html">
							<i class="aui-iconfont aui-icon-like aui-text-warning"></i>
							<div class="aui-grid-label">收藏</div>
						</a>
					</div>
					<div class="aui-col-xs-3">
						<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-post.html">
							<i class="aui-iconfont aui-icon-pencil aui-text-warning"></i>
							<div class="aui-grid-label">跟帖</div>
						</a>
					</div>
					<div class="aui-col-xs-3">
						<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-read.html">
							<i class="aui-iconfont aui-icon-date aui-text-info"></i>
							<div class="aui-grid-label">阅读</div>
						</a>
					</div>

				</div>
			</div>
		</section>
		<div class="aui-he" style="background-color: rgb(225, 230, 215);"></div>
		<section class="aui-content" style="padding-bottom:50px;">
			<ul class="aui-list aui-list-in " style="background-image: none; background-color: rgb(225, 230, 215);">
				<li class="aui-list-item" style="background-image:none">
					<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-info.html">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-location aui-text-info"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">我的消息</div>
						</div>
					</a>
				</li>
				<div class="aui-he" style="background-color: rgb(225, 230, 215);"></div>
				<li class="aui-list-item" style="background-image:none">
					<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-newest.html">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-like aui-text-danger"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">最新动态</div>
						</div>
					</a>
				</li>
				<div class="aui-he" style="background-color: rgb(225, 230, 215);"></div>
				<li class="aui-list-item" style="background-image:none">
					<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-off.html">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-image aui-text-info"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">离线阅读</div>
						</div>
					</a>
				</li>
				<div class="aui-he" style="background-color: rgb(225, 230, 215);"></div>
				<li class="aui-list-item" style="background-image:none">
					<a href="https://shop108012643.taobao.com/">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-cart aui-text-info"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">积分商城</div>
							<div class="aui-list-item-right aui-black">0元好物在这里</div>
						</div>
					</a>
				</li>
				<div class="aui-he" style="background-color: rgb(225, 230, 215);"></div>
				<li class="aui-list-item" style="background-image: none">
					<a href="http://demos.sucaihuo.com/modals/36/3619/demo/my-feedback.html">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-cert aui-text-warning"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">意见反馈</div>
						</div>
					</a>
				</li>
				<div class="aui-he" style="background-color: rgb(225, 230, 215);"></div>
				
				<li class="aui-list-item" style="background-image: none">
					<a href="javascript:;" @click="outlogin">
						<div class="aui-list-item-label-icon">
							<i class="aui-iconfont aui-icon-cert aui-text-warning"></i>
						</div>
						<div class="aui-list-item-inner aui-list-item-arrow">
							<div class="aui-list-item-title aui-black">退出登录</div>
						</div>
					</a>
				</li>
				<div class="aui-he" style="background-color: rgb(225, 230, 215);"></div>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		beforeRouteEnter(to,from,next){
		      // console.log(1)
		      axios({
		        url:'/api/user'
		      }).then(
		        res=>{
		          // console.log(2)
		          if(res.data.err===0){
		            // console.log(3)
		            to.query.user = res.data.data;
		            next()
		            // next(_this=>_this.user=res.data.data)
		          }else{
		            // console.log(4)
		            next('/login')
		          }
		        }
		      )
		    },
		name: 'my',
		props: {},
		data() {
			return {

			}
		},
		components: {},
		mounted() {
			
			
		},
		updated() {},
		methods: {
			 outlogin(){
			        window.localStorage.removeItem('user')
			        this.$router.replace('/login')
			      }
		},
		computed: {}
	}
</script>

<style>

</style>
