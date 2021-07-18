import { createApp } from 'vue'
import App from './App.vue'
import router from '../routers/index.js';
import naive from 'naive-ui';
import store from '../store/index.js';
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
// import Axios from 'axios';


const app = createApp(App);

app.use(router);
app.use(naive);
app.use(store)
app.mount('#app');
