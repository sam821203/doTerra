import { createApp } from 'vue';
import App from './App.vue';

import BaseButton from './components/UI/BaseButton.vue';
import BasePrice from './components/UI/BasePrice.vue';
import BasePoint from './components/UI/BasePoint.vue';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BasePrice', BasePrice);
app.component('BasePoint', BasePoint);

app.mount('#app');
