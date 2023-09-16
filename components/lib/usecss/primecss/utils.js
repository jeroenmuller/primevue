const Utils = {
    object: {
        isEmpty(value) {
            return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
        },
        isNotEmpty(value) {
            return !this.isEmpty(value);
        },
        isFunction(value) {
            return !!(value && value.constructor && value.call && value.apply);
        },
        isObject(value, empty = true) {
            return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
        },
        isArray(value, empty = true) {
            return Array.isArray(value) && (empty || value.length !== 0);
        },
        isString(value, empty = true) {
            return typeof value === 'string' && (empty || value !== '');
        },
        isNumber(value) {
            return !isNaN(value);
        },
        toFlatCase(str) {
            // convert snake, kebab, camel and pascal cases to flat case
            return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
        },
        toKebabCase(str) {
            // convert snake, camel and pascal cases to kebab case
            return this.isString(str)
                ? str
                      .replace(/(_)/g, '-')
                      .replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '-' + c.toLowerCase()))
                      .toLowerCase()
                : str;
        },
        findLast(arr, callback) {
            let item;

            if (this.isNotEmpty(arr)) {
                try {
                    item = arr.findLast(callback);
                } catch {
                    item = [...arr].reverse().find(callback);
                }
            }

            return item;
        },
        getItemValue(obj, ...params) {
            return this.isFunction(obj) ? obj(...params) : obj;
        },
        getOptionValue(options, key = '', params = {}) {
            const fKeys = this.toFlatCase(key).split('.');
            const fKey = fKeys.shift();

            return fKey
                ? this.isObject(options)
                    ? this.getOptionValue(this.getItemValue(options[Object.keys(options).find((k) => this.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                    : undefined
                : this.getItemValue(options, params);
        },
        test(regex, str) {
            if (regex) {
                const match = regex.test(str);

                regex.lastIndex = 0;

                return match;
            }

            return false;
        },
        toValue(value) {
            return this.isObject(value) && value.hasOwnProperty('value') ? value.value : value;
        },
        getVariableValue(value, prefix = '', excludedKeyRegexes = []) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value.trim();

                if (this.test(regex, val)) {
                    const _val = val.replaceAll(regex, (v) => {
                        const path = v.replace(/{|}/g, '');
                        const keys = path.split('.').filter((_v) => !excludedKeyRegexes.some((_r) => this.test(_r, _v)));

                        return `var(--${prefix}-${this.toKebabCase(keys.join('-'))})`;
                    });

                    const calculationRegex = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
                    const cleanedVarRegex = /var\([^)]+\)/g;

                    return this.test(calculationRegex, _val.replace(cleanedVarRegex, '0')) ? `calc(${_val})` : _val;
                }

                return val;
            } else if (this.isNumber(value)) {
                return value;
            }

            return undefined;
        },
        getComputedValue(obj = {}, value) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value.trim();

                return this.test(regex, val) ? val.replaceAll(regex, (v) => this.getOptionValue(obj, v.replace(/{|}/g, ''))) : val;
            } else if (this.isNumber(value)) {
                return value;
            }

            return undefined;
        },
        setProperty(properties, key, value) {
            if (this.isString(key, false)) {
                properties.push(`\n\t${key}: ${value};`);
            }
        },
        mergeProperties(properties1, properties2 = []) {
            this.isArray(properties1) && properties1.push(...properties2);
        },
        getRule(selector, properties) {
            if (selector) {
                return `${selector} {${properties}\n}\n`;
            }

            return '';
        }
    },
    style: {
        getBoxShadow(value = {}, prefix = '', excludedKeyRegexes) {
            const _value = Utils.object.toValue(value);
            const _prefix = `--${prefix}-box-shadow`;

            if (!Utils.object.isString(_value)) {
                const shadows = [_value].flat().reduce(
                    (acc, v, i) => {
                        const { x, y, spread, color, blur, type } = v;
                        const px = `${_prefix}-${i}`;
                        const variables = {
                            [`${px}-x`]: x,
                            [`${px}-y`]: y,
                            [`${px}-blur`]: blur,
                            [`${px}-spread`]: spread,
                            [`${px}-color`]: color,
                            ...(type === 'innerShadow' && { [`${px}-type`]: 'inset' })
                        };

                        let val = '';

                        Object.entries(variables).forEach(([_k, _v], _i) => {
                            val += `${_i === 0 ? '' : ' '}var(${_k})`;
                            Utils.object.setProperty(acc['variables'], _k, Utils.object.getVariableValue(_v, prefix, excludedKeyRegexes));
                        });

                        acc['values'].push(val);

                        return acc;
                    },
                    {
                        values: [],
                        variables: []
                    }
                );

                return {
                    styles: [`\n\tbox-shadow: ${shadows.values.join(', ')};`],
                    variables: shadows.variables
                };
            }

            return {
                styles: [`\n\tbox-shadow: var(--${_prefix});`],
                variables: [`\n\t--${_prefix}: ${Utils.object.getVariableValue(value, _prefix, excludedKeyRegexes)}`]
            };
        }
    }
};

export default Utils;
