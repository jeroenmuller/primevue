import PrimeVue from '@/components/lib/config/PrimeVue';

import DocApiSection from '@/components/doc/DocApiSection';
import DocComponent from '@/components/doc/DocComponent';
import DocSectionCode from '@/components/doc/DocSectionCode';
import DocSectionNav from '@/components/doc/DocSectionNav';
import DocSections from '@/components/doc/DocSections';
import DocSectionText from '@/components/doc/DocSectionText';
import CodeHighlight from '@/components/layout/CodeHighlight';
import DevelopmentSection from '@/components/layout/DevelopmentSection';
import { usePassThrough } from '@/components/lib/passthrough/index.js';
import Tailwind from '@/components/lib/passthrough/tailwind/index.js';

const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: true }
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, unstyled: true, pt: CustomTailwind });

    nuxtApp.vueApp.directive('code', CodeHighlight);

    nuxtApp.vueApp.component('DocSections', DocSections);
    nuxtApp.vueApp.component('DocSectionText', DocSectionText);
    nuxtApp.vueApp.component('DocSectionCode', DocSectionCode);
    nuxtApp.vueApp.component('DocSectionNav', DocSectionNav);
    nuxtApp.vueApp.component('DocApiSection', DocApiSection);
    nuxtApp.vueApp.component('DocComponent', DocComponent);

    nuxtApp.vueApp.component('DevelopmentSection', DevelopmentSection);
});
