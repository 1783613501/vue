<template>
	<div class="login">
		<img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png" style="margin-bottom: 50px;margin: 50px auto;">
		<!-- 头部 -->
		    <!-- <div class="header"> -->
		        <h1 style="text-align: center;">账密登录</h1>
				<hr />
		    <!-- </div> -->
		    <!-- 表单 -->
		    <div class="content">
		        <form action="javascript:;">
		            <input type="text" placeholder="手机号" v-model="username" class="text" required>
		            <input type="password" placeholder="密码" v-model="password" class="text" required>
		            <p>
		                还没有账号？点击此处立即
						<router-link to="/reg" tag="a">
						注册
						</router-link>
		                
		            </p>
		            <input type="button" value="登录" class="submit" @click="loging">
		        </form>
		    </div>
	</div>

</template>

<script>
	export default {
		name: 'login',
		props: {},
		data() {
			return {
				username: '',
				password: '',
				mess: '', //错误信息
			}
		},
		components: {},
		mounted() {
			
		},
		updated() {},
		methods: {
			loging() {
				//发送登录请求,成功种token，跳转到之前,c
				this.$axios({
					url: '/api/login',
					params: {
						username: this.username,
						password: this.password,
					}
				}).then(
					res => {
						if (res.data.err === 0) {
							//种token
							window.localStorage.setItem('user', JSON.stringify(res.data))
							//跳转到之前
							if (this.$route.query.p) {
								this.$router.replace(this.$route.query.p)
							} else {
								this.$router.replace('/my')
							}
						} else {
							this.mess = res.data.msg; //跳转到之前
						}
					}
				)
			}
		},
		computed: {}
	}
</script>

<style scoped>
	*{
	    box-sizing: border-box;
	}
	html,body{
	    height: 100%;
	}
	body{
	    display: flex;
	    flex-direction: column;
	    
	}
	.header{
	    height: 44px;
	    background: red;
	    font-size: 16px;
	    color: #ffffff;
	    text-align: center;
	    line-height: 44px;
	}
	.content{
	    display: flex;
	    flex-direction: column;
	}
	.content form{
	    height: 204px;
	    width: 91%;
	    display: flex;
	    margin: auto;
	    margin-top: 5%;
	    flex-direction: column;
	    justify-content: space-between;
	}
	
	.text{
	    height: 33.5px;
	    border-bottom: 1px solid #7f7f7f;
	}
	.submit{
	    height: 44px;
	    background: red;
	    color: #ffffff;
	}
	.content p{
	    
	    color: #999999;
	    font-size: 11.5px;
	   
	}
	.content p a{
	    text-decoration: underline;
	    color: red;
	}
</style>
