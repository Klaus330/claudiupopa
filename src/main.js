import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { component as VueCodeHighlight } from 'vue-code-highlight';

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueCodeHighlight)

app.mount('#app')
