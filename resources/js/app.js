require('./bootstrap');

window.Vue = require('vue');
Vue.component('todo-component', require('./components/todocomponent.vue').default);
// import Form from './Form'
// window.Form = Form

const vm = new Vue({
    el:'#app',
});