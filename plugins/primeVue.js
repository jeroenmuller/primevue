import PrimeVue from '@/components/lib/config/PrimeVue';

import Animate from '@/components/lib/animate/Animate';
import InputGroup from '@/components/lib/inputgroup/InputGroup.vue';
import CodeHighlight from '@/directives/CodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });

    nuxtApp.vueApp.component('InputGroup', InputGroup);
    nuxtApp.vueApp.directive('animate', Animate);
    nuxtApp.vueApp.directive('code', CodeHighlight);
});
