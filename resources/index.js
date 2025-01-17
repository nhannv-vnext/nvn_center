// import './images/user.png';
import './css/index.css';
import Vue from 'vue';
import App from './components/app.vue';
import store from './store/index';

var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
               
console.log(datetime);

var vm = new Vue({
    el: '#app',
    store,
    render: h => h(App)
})