import Vue from 'vue'
import App from './layouts/App.vue'

// 引入视口字体比例控制 ,main里面的操作会优化
import './assets/css/base.css'

import './assets/css/home.css'
import './assets/css/aui.css'
import './assets/css/swiper-3.2.7.min.css'

// console.log(111)

// import './assets/js/font.js'
import './assets/js/jquery.js'
import './assets/js/swip.js'

import router from './plugins/router.js'
import './plugins/axios.js'



import './filters'

// Vue.config.productionTip = false

let vm=new Vue({
	data:{
	    bNav:true,
	    bFoot:true,
	    bLoading:false
	  },
  render: h => h(App),
  router
}).$mount('#app')

export default vm;
