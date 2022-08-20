import { createApp } from 'vue'
import './style.css'
import Restaurant from './Restaurant.vue'
import router from './router'

const app = createApp(Restaurant)
app.use(router)
app.mount('#app')
