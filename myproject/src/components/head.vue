<template>
	<!-- <div class=""> -->
	<div class="aui-header v-header container">
		<div class="aui-header-box clearfix">
			<div class="aui-header-logo">
				<router-link to="/home" tag="a">
					<img src="//sf1-scmcdn2-tos.pstatp.com/mobile_list/image/wap_logo@3x_581de69e.png" alt="">
				</router-link>
			</div>
			<router-link to="/search" tag="div" class="my aui-header-sou" style="height: 100%;width: 1.5rem;padding-top: 0;">
				<a href="javascript:;" style="display: block;width: 18px;height: 18px; margin: 13px auto;">
					<img src="https://ftp.bmp.ovh/imgs/2021/01/6a00b0635f138d37.png" style="width: 100%; " alt="">
				</a>
			</router-link>
			
				
			
		</div>
		

	</div>
	<!-- </div> -->
</template>

</script>
<script>
	export default {
		name: 'v-header',
		props: {},
		data() {
			return {

			}
		},
		components: {},
		updated() {},
		methods: {},
		computed: {}
	}
</script>

<style>
	
</style>
