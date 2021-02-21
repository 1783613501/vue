import fillzero from './fillzero.js'
export default time => {
  let d = new Date();
  d.setTime(time);
  
  return `${fillzero(d.getFullYear())}年${fillzero(d.getMonth()+1)}月${fillzero(d.getDate())}日 ${fillzero(d.getHours())}:${fillzero(d.getMinutes())}:${fillzero(d.getSeconds())}`
}