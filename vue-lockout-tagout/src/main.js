

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from './store'



const app = createApp(App)
const store = createStore();
app.use(store)
app.mount('#app')