// 用mockjs模拟生成数据
var Mock = require('mockjs');

let rm = Mock.Random;

// 首页
let mapData = n => {
  
  let data = [];
  
  for(var i=0;i<=n;i++){
    data.push({
      "id":1000 + i,
      "_id":1000 + new Array(20).fill('0').join('') + i,
      title:"@ctitle(8,12)",
      say_num:rm.integer(1000,9999),
	  good_num:rm.integer(1000,9999),
	  title_img:rm.image('113x75',rm.color(),rm.cword(1)),
      detail:{
		time:"@integer(1511197952100,1611197952100)",  
        auth_icon:rm.image('50x50',rm.color(),rm.cword(1)),
        auth:"@cname",
        content: function(){
          let result='';
          for(var i=0;i<(Math.random()+1)*10;i++){
            result += '<p>' + Mock.Random.cparagraph(3,6) + '</p>'
          }
          return result;
        }
      }
    })
  }
  
  return data;
}


// 视频页

let mapData2 = n => {
  
  let data = [];
  
  for(var i=0;i<=n;i++){
    data.push({
      "id":1000 + i,
      "_id":1000 + new Array(20).fill('0').join('') + i,
      title:"@ctitle(8,12)",
      say_num:rm.integer(1000,9999),
      good_num:rm.integer(1000,9999),
	  title_img:rm.image('345x204',rm.color(),rm.cword(4)),
      detail:{
		time:"@integer(1511197952100,1611197952100)",  
        auth_icon:rm.image('50x50',rm.color(),rm.cword(1)),
        auth:"@cname",
      }
    })
  }
  
  return data;
}

// 搜索页
let mapData3 = n => {
  
  let data = [];
  
  for(var i=0;i<=n;i++){
    data.push({
      "id":1000 + i,
      "_id":1000 + new Array(20).fill('0').join('') + i,
      title:"@ctitle(8,12)",
      say_num:rm.integer(1000,9999),
	  good_num:rm.integer(1000,9999),
	  title_img:rm.image('113x75',rm.color(),rm.cword(1)),
      detail:{
		time:"@integer(1511197952100,1611197952100)",  
        auth_icon:rm.image('50x50',rm.color(),rm.cword(1)),
        auth:"@cname",
        content: function(){
          let result='';
          for(var i=0;i<(Math.random()+1)*10;i++){
            result += '<p>' + Mock.Random.cparagraph(3,6) + '</p>'
          }
          return result;
        }
      }
    })
  }
  
  return data;
}



//编程型(app.js) 需要的是一个对象
module.exports = Mock.mock({
  'home':mapData(100), 
  "sp":mapData2(100),
  "search":mapData3(80),
  "user":{
    "_id":1000 + new Array(20).fill('0').join(''),
    auth_icon:rm.image('50x50',rm.color(),rm.cword(1)),
    nikename:'@cname',
    fans:'@integer(100,10000)',
    follow:'@integer(100,10000)',
	active:'@integer(100,10000)'
  }
})