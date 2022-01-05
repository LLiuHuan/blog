import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from './router';
import 'virtual:windi.css';
import './assets/styles/index.scss';

const app = createApp(App);

// 挂载路由
setupRouter(app);
// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
