<template>
	<div class="search">
		<div class="aui-searchbar" id="search" style="border-bottom:1px solid #ddd;height: 1rem;">
			<div style="background:none;padding-right:0;width: 0.5rem;height: 0.5rem;" @click="back">
				<img src="https://ftp.bmp.ovh/imgs/2021/01/b33d1423d0e5dc3b.png" style="width: 100%;" />
			</div>
			<div class="aui-searchbar-input aui-border-radius" tapmode="">
				
				<input type="search" placeholder="请输入关键字..." id="search-input" style="position: relative;
    top: -30px;" @input="searchData()" v-model="sec">
				<ul v-if="secs" style="position: absolute;top: 24px;left: -40px;background-color: white;font-size: 16px;z-index: 9999;width: 285px;border: 2px solid #0000EE;border-radius: 3%;border-top: none;">
					<li v-for='(item,index) of secs' class="b-line">
						<em>{{index}}.</em>
						<!-- <a href="http://demos.sucaihuo.com/modals/36/3619/demo/news-page.html"></a> -->
						<router-link :to="`/messages/${item._id}?collectionName=search`" tag="a" style="color: #000000;">
							{{item.title}}
						</router-link>
					</li>
				</ul>
			</div>
			<div class="aui-searchbar-cancel" tapmod="" style="color:#FF5E53; font-size:14px; padding-right:10px;">搜索</div>
		</div>
		<div class="aui-search">
			<div class="aui-search-box">
				<h4 class="b-line" style="font-size: 25px;">热门搜索</h4>
				<ul v-if="searchMsg">
					<li class="b-line" v-for='(item,index) of searchMsg' v-if="index==0">
						<em style="color:#FF5E53">1.</em>
						<!-- <a href="http://demos.sucaihuo.com/modals/36/3619/demo/news-page.html"></a> -->
						<router-link :to="`/messages/${item._id}?collectionName=search`" tag="a">
							{{item.title}}
						</router-link>
					</li>
					<li class="b-line" v-for='(item,index) of searchMsg' v-if="index==1">
						<em style="color:#FF8D20">2.</em>
						<router-link :to="`/messages/${item._id}?collectionName=search`" tag="a">
							{{item.title}}
						</router-link>
					</li>
					<li class="b-line" v-for='(item,index) of searchMsg' v-if="index==2">
						<em style="color:#3CC51E">3.</em>
						<router-link :to="`/messages/${item._id}?collectionName=search`" tag="a">
							{{item.title}}
						</router-link>
					</li>
					<li class="b-line" v-for='(item,index) of searchMsg.slice(3,10)'>
						<em>{{index+4}}.</em>
						<router-link :to="`/messages/${item._id}?collectionName=search`" tag="a">
							{{item.title}}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'search',
		props: {},
		data() {
			return {
				searchMsg: null,
				sec:'',
				secs:''
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {
			back() {
				this.$router.go(-1)
			},
			getData() {
				this.$axios({
					url: '/api/search'
				}).then(
					res => {
						// console.log()
						this.searchMsg = (res.data.data)
						// console.log(this.searchMsg)
					}

				)

			},
			searchData(){
				// console.log(this.searchMsg)
				let arr = [];
				setTimeout(()=>{
					this.searchMsg.forEach((v,k)=>{
					// console.log(v.title);
					
					if(v.title.indexOf(this.sec) != -1){
						
						arr.push(v);
						
					}
					// this.sec = arr
					
					})
					this.secs = arr
					console.log(this.secs);
				},1000)
				
				
			}
		},
		mounted() {
			this.getData();
		},
		computed: {}
	}
</script>

<style>
	.aui-btn {
		display: inline-block;
		width: 40px;
		height: 40px;
	}

	h2[class=b-line] {
		padding-bottom: 0.625rem !important;
		border-bottom: none !important;
	}
</style>
