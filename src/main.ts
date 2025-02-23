import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

import router from './router';

import ElementPlus from 'element-plus';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faLocation,
  faPeopleGroup,
  faCheck,
  faHand,
  faUser,
  faRightFromBracket,
  faHouse,
  faClipboard,
  faClock,
  faIdCard,
  faShuffle,
  faRotate,
  faUserTie,
  faUserGraduate,
  faList,
  faPlus,
  faMagnifyingGlassPlus,
  faCircleCheck,
  faCircleXmark,
  faFile,
  faQuestionCircle,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
  faLocation,
  faPeopleGroup,
  faCheck,
  faHand,
  faUser,
  faRightFromBracket,
  faHouse,
  faClipboard,
  faClock,
  faIdCard,
  faShuffle,
  faRotate,
  faUserTie,
  faUserGraduate,
  faList,
  faPlus,
  faMagnifyingGlassPlus,
  faCircleCheck,
  faCircleXmark,
  faXmark,
  faFile,
  faQuestionCircle,
);

createApp(App).use(pinia).use(router).use(ElementPlus).component('font-awesome-icon', FontAwesomeIcon).mount('#app');