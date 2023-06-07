import { createApp } from 'vue';
import App from './App.vue';

import BaseButton from './components/UI/BaseButton.vue';
import BasePriceTag from './components/UI/BasePriceTag.vue';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BasePriceTag', BasePriceTag);

app.mount('#app');
