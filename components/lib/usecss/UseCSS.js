import { useStyle } from 'primevue/usestyle';
import { ref } from 'vue';
import PrimeCSS from './primecss';

export function useCSS(name, options = {}) {
    const stylesRef = ref(undefined);
    const variablesRef = ref(undefined);

    const load = (_theme = {}, _options = {}) => {
        const { styles, variables } = PrimeCSS.generate({ [name]: _theme[name] }, options);

        stylesRef.value = useStyle(styles.rule, { name: `${name}-styles`, ..._options });
        variablesRef.value = useStyle(variables.rule, { name: `${name}-variables`, ..._options });
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
