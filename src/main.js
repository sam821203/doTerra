import { createApp } from 'vue';
import App from './App.vue';

import store from './store/index.js';

import BaseButton from './components/UI/BaseButton.vue';
import BasePrice from './components/UI/BasePrice.vue';
import BasePoint from './components/UI/BasePoint.vue';
import BaseLike from './components/UI/BaseLike.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseImage from './components/UI/BaseImage.vue';
import BaseSelect from './components/UI/BaseSelect.vue';
import BaseIcon from './components/UI/BaseIcon.vue';

const app = createApp(App);

app.use(store);

app.component('BaseButton', BaseButton);
app.component('BasePrice', BasePrice);
app.component('BasePoint', BasePoint);
app.component('BaseLike', BaseLike);
app.component('BaseCard', BaseCard);
app.component('BaseImage', BaseImage);
app.component('BaseSelect', BaseSelect);
app.component('BaseIcon', BaseIcon);

app.mount('#app');
