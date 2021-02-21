<template>
	<div class="reg">
		<img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png" style="margin-bottom: 50px;margin: 50px auto;">
		<!-- 头部 -->
		    <!-- <div class="header"> -->
		        <h1 style="text-align: center;">账号注册</h1>
				<hr />
		    <!-- </div> -->
		    <!-- 表单 -->
		    <div class="content">
		        <form action="javascript:;">
		            <input type="text" placeholder="账号" v-model="username" class="text" required>
		            <input type="password" placeholder="密码" class="text" v-model="password" required autocomplete="off">
					{{mess}}
		            <p>
		                已有账号？点击此处去
						<router-link to="/login" tag="a">
						登录
						</router-link>
		            </p>
		            <input type="button" value="注册" class="submit" @click="reg">
		        </form>
		    </div>
	</div>

</template>

<script>
	export default {
		name: 'reg',
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
		updated() {
			// console.log(mess)
		},
		methods: {
			reg(){
			        //发送登录请求,成功跳转到登录
			        this.$axios({
			          url:'/api/reg',
			          method:'post',
			          data:{
			            username:this.username,
			            password:this.password,
			          }
			        }).then(
					
						res => {
						if(this.username && this.password){	
			            if(res.data.err === 0){
							// console.log(res.data)
			              this.$router.replace('/login')
			            }else{
			              this.mess=res.data.msg;//跳转到之前
						  this.username = ''
						  this.password = ''
						  // console.log(res.data)
			            }
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
