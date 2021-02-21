import Vue from 'vue';
import VueRouter from 'vue-router';



Vue.use(VueRouter);//安装插件



import Home from '../page/home.vue';
import Videos from '@/page/videos.vue'
import Login from '../page/login.vue'
import Messages from '../page/messages.vue'
import My from '../page/my.vue'
import Reg from '../page/reg.vue'
import Search from '../page/search.vue'
import VideoMsg from '../page/videoMsg.vue'
import NoPage from '../page/nopage.vue'
// console.log(Home)
let routes = [
	{path:'/home',component:Home},
	{path:'/videos',component:Videos},
	{path:'/login',component:Login},
	{path:'/messages/:_id?',component:Messages},
	{path:'/my',component:My},
	{path:'/reg',component:Reg},
	{path:'/search',component:Search},
	{path:'/videoMsg/:_id?',component:VideoMsg},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
];

export default new VueRouter({
	routes,
	mode:'history'
})