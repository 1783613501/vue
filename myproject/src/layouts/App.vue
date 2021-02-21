<template>
  <div id="app" style="height: 100%;">
    <Header v-if="$root.bNav"></Header>
	<Loading v-show="$root.bLoading"></Loading>
	<router-view></router-view>
	<Footer v-show="$root.bFoot"></Footer>
  </div>
</template>

<script>

import Header from '../components/head.vue'
import Footer from '../components/foot.vue'
import Loading from '../components/loading.vue'


// import axios from '../plugins/axios.js'


export default {
  name: 'app',
  components: {
    Header,Footer,Loading
  },
   watch:{
      $route:{
        handler(newValue){
          let path = newValue.path;
          if(/home|videos/.test(path)){
            this.$root.bNav=this.$root.bFoot=true;
          }
          if(/login|reg|messages|search|videoMsg/.test(path)){
            this.$root.bNav=this.$root.bFoot=false;
          }
          if(path.includes('my')){
            this.$root.bNav=false;
            this.$root.bFoot=true;
          }
        },
        immediate: true //首次运行
      }
    },
  mounted(){
	 // this.$axios.get('http://localhost:3333/api/home').then(
		// res=>console.log(res.data)
	 // )
	 // axios.get('/api/home').then(
		// res=>console.log(res.data)
	 // )
  }
}
</script>

<style>
	
</style>
