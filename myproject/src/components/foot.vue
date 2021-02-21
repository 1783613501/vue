<template>
  
	  <div class="aui-bar aui-bar-tab foot" id="footer" style=" background:#efefef;font-size: 16px;">
	  		<!-- <div class=" " tapmode=""> -->
			<router-link to="/home" tag="div" class="home aui-bar-tab-item" active-class="aui-active">
				<a href="javascript:;">
	  				<div class="aui-bar-tab-label" >首页</div>
	  			</a>
			</router-link>
	  		
			
			<router-link to="/videos" tag="div" class="videos aui-bar-tab-item" active-class="aui-active">
				<a href="javascript:;">
					<div class="aui-bar-tab-label" >视频</div>
				</a>
			</router-link>	
			
			<router-link to="/my" tag="div" class="my aui-bar-tab-item" active-class="aui-active">
				<a href="javascript:;">
					<div class="aui-bar-tab-label" >我的</div>
				</a>
			</router-link>
	  	</div>
  
</template>

<script>
  export default {
    name:'foot',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
		let footer = document.querySelectorAll('.aui-bar-tab-item')
		// console.log(footer);
		footer.forEach((v,k)=>{
			
			v.onclick=function(){
				v.classList.add('aui-active')
				
				k !=0 && footer[k-1].classList.remove('aui-active')
				k !=footer.length-1 && footer[k+1].classList.remove('aui-active')
				k ==footer.length-1 && footer[0].classList.remove('aui-active')
				k ==0 && footer[footer.length-1].classList.remove('aui-active')
			}
		})
	},
    updated(){},
    methods:{},
    computed:{
    }
  }
</script>


<style>
	
</style>