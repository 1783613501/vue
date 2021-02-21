<template>
	<div class="VideoMsg"  style="height: 100%;">
		<div class="nav">
			<ul>
				<li class="l-btn" @click="goback"></li>
			</ul>
		</div>
		<div class="content" v-if="detail.title" style="height: 100%;">
			<div class="header clear">
				<h2><img :src="detail.detail.auth_icon" alt="" /></h2>
				<p>{{detail.detail.auth}}</p>
			</div>
			<div class="cont">
				<h3>{{detail.title}}</h3>
				<div class="time">
					<p>{{detail.detail.time | date}} <span><img src="https://ftp.bmp.ovh/imgs/2021/01/eb4c5a5a3fa182e7.png" alt="" /></span></p>
				</div>
				<div class="aui-title-img"><img :src=detail.title_img alt=""><span class="aui-title-vio"></span></div>
			</div>
		</div>	
		
		<div class="foot-btn">
			<ul>
				<li class="say"><a href="javascript:;">
						<i></i><span>{{detail.say_num}}</span>
					</a></li>
				<li class="zan"><a href="javascript:;">
						<i></i><span>{{detail.good_num}}</span>
					</a></li>
				<li class="xing"><a href="javascript:;">
						<i><img src="https://ftp.bmp.ovh/imgs/2021/01/878432085d8791ab.png" alt="" /></i>
					</a></li>
				<li class="fx"><a href="javascript:;">
						<i><img src="https://ftp.bmp.ovh/imgs/2021/01/4301967bb6681a75.png" alt="" /></i>
					</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	 import '../assets/js/font.js'
	
	
	export default {
		name: 'VideoMsg',
		props: {},
		data() {
			return {
				detail: {}
			}
		},
		components: {},
		beforeMount() {
			
			// console.log('字体');
			
		},
		mounted() {
			// window.location.reload();
			let _id = this.$route.params._id;
			let collectionName = this.$route.query.collectionName;
			console.log(`/api/${collectionName}?_id=${_id}`)
			this.$axios({
				url: `/api/${collectionName}?_id=${_id}`
			}).then(
				res => {
					this.detail = res.data.data[0]
					console.log(this.detail)
				}
			);
		},
		updated() {},
		methods: {
			goback() {
				this.$router.go(-1)
			}
		},
		computed: {}
	}
</script>

<style scoped>
	
	.nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		/* border-bottom: 1px solid #e8eaec; */
		z-index: 99;
	}

	.nav ul {
		width: 6.4rem;
		height: 0.45rem;
		padding-top: 0.15rem;
		margin: 0 auto;
	}

	.nav ul li {
		width: 0.29rem;
		height: 0.31rem;
		background: url(https://ftp.bmp.ovh/imgs/2021/01/ae7ba54f72e0a2e8.png) no-repeat 0 0;
		background-size: 100%;
		margin: 0 0 0 0.38rem;
	}

	.content {
		max-width: 6.4rem;
		margin: 0 auto;
		margin-top: 0.6rem;
		background: #f2f4f5;
		padding-bottom: 0.85rem;
	}

	.content .header {
		padding: 0.39rem 0.28rem 0.15rem 0.28rem;
		height: auto;
		background: none
	}

	.header h2 {
		float: left;
		margin-right: 0.18rem;
	}

	.header p {
		float: left;
		margin-top: 0.18rem;
		font-size: 0.3rem;
	}

	.content .cont {
		padding: 0 0.38rem;
		color: #494d4d;
	}

	.cont h3 {
		font-size: 0.4rem;
		line-height: 0.6rem;
		padding-bottom: 0.25rem;
		border-bottom: 1px solid #494d4d;
	}

	.cont .time {
		height: 0.24rem;
		line-height: 0.24rem;
		margin: 0.26rem 0;
	}

	.time p {
		float: left;
		font-size: 16px;
		position: relative;
	}

	.time span {
		width: 0.33rem;
		height: 0.32rem;
		position: absolute;
		top: -0.02rem;
		right: -0.35rem;
	}

	.time span img {
		width: 100%;
		height: 100%;
	}

	.cont .text-box {
		font-size: 0.25rem;
	}

	.text-box p {
		line-height: 0.45rem;
		margin-bottom: 0.1rem;
		font-size: 16px !important;
	}

	.foot-btn {
		width: 100%;
		height: 0.8rem;
		background: #fff;
		border-top: 1px solid #e8eaec;
		position: fixed;
		left: 0;
		bottom: 0;
	}

	.foot-btn ul {
		width: 6.4rem;
		margin: 0 auto;
		height: 0.52rem;
		margin-top: 0.16rem;
	}

	.foot-btn ul li {
		float: left;
	}

	.foot-btn ul li a {
		width: 100%;
		height: 100%;
		display: block;
	}

	.foot-btn ul .say {
		width: 2.03rem;
		height: 0.52rem;
		border-right: 1px solid #e8eaec;
	}

	.say i {
		width: 0.36rem;
		height: 0.26rem;
		background: url(https://ftp.bmp.ovh/imgs/2021/01/fcd7ad3935dee92d.png) no-repeat 0 0;
		background-size: 100%;
		float: left;
		margin-left: 0.7rem;
		margin-top: 0.13rem;
	}

	.say span {
		height: 0.26rem;
		float: left;
		font-size: 16px;
		line-height: 0.26rem;
		margin-left: 0.16rem;
		margin-top: 0.13rem;
	}

	.foot-btn ul .zan {
		width: 1.86rem;
		height: 0.52rem;
		border-right: 1px solid #e8eaec;
	}

	.zan i {
		width: 0.36rem;
		height: 0.28rem;
		background: url(https://ftp.bmp.ovh/imgs/2021/01/b768077b176b9f4a.png) no-repeat 0 0;
		background-size: 100%;
		float: left;
		margin-left: 0.54rem;
		margin-top: 0.13rem;
	}

	.zan span {
		height: 0.26rem;
		float: left;
		font-size: 16px;
		line-height: 0.26rem;
		margin-left: 0.16rem;
		margin-top: 0.13rem;
	}

	.foot-btn ul .xing {
		width: 1.2rem;
		height: 0.52rem;
		border-right: 1px solid #e8eaec;
	}

	.xing i {
		width: 0.34rem;
		height: 0.24rem;
		margin: 0 auto;
		display: block;
		padding-top: 0.1rem;
	}

	.xing i img {
		width: 100%;
	}

	.foot-btn ul .fx {
		width: 1.25rem;
		height: 0.52rem;
	}

	.fx i {
		width: 0.33rem;
		height: 0.08rem;
		display: block;
		margin: 0 auto;
		padding-top: 0.15rem;
	}

	.fx i img {
		width: 100%;
	}
</style>
