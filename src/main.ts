import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axiosPlugin } from './plugins/axios';
import 'vant/lib/index.css';

// vant 组件
import { Overlay } from 'vant';
import { Loading } from 'vant';

import './assets/icon/iconfont.css';

const app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(Overlay);
    app.use(Loading);
    app.use(axiosPlugin);

    app.mount('#app');
