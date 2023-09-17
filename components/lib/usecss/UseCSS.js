import { useStyle } from 'primevue/usestyle';
import { ref } from 'vue';
import PrimeCSS from './primecss';

export function useCSS(name, options = {}) {
    const stylesRef = ref(undefined);
    const variablesRef = ref(undefined);

    const load = (_theme = {}, _options = {}) => {
        const { styles, variables } = PrimeCSS.generate({ [name]: _theme[name] }, options);

        stylesRef.value = useStyle(styles.css, { name: `${name}-styles`, ..._options });
        variablesRef.value = useStyle(variables.css, { name: `${name}-variables`, ..._options });

        stylesRef.value.load();
        variablesRef.value.load();
    };

    const unload = () => {
        stylesRef.value?.unload();
        variablesRef.value?.unload();
    };

    return {
        unload,
        load
    };
}
