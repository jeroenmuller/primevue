<template>
    <DocSectionText v-bind="$attrs">
        <p>A simple Panel is created with a <i>header</i> property along with the content as children.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex justify-content-center gap-3 mb-3">
            <div class="w-1rem h-1rem border-1 border-circle cursor-pointer" style="background: var(--p-panel-header-background)" @click="changeHeaderBackground()"></div>
            <div class="w-1rem h-1rem border-1 border-circle cursor-pointer" style="background: var(--p-blue-500)" @click="changeHeaderBackground('blue')"></div>
            <div class="w-1rem h-1rem border-1 border-circle cursor-pointer" style="background: var(--p-green-500)" @click="changeHeaderBackground('green')"></div>
            <div class="w-1rem h-1rem border-1 border-circle cursor-pointer" style="background: var(--p-yellow-500)" @click="changeHeaderBackground('yellow')"></div>
        </div>

        <Panel header="Header" :style="theme">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
import PrimeCSS from '@/components/lib/usetheme/primecss';

export default {
    data() {
        return {
            code: {
                basic: `
<Panel header="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
`,
                options: `
<template>
    <div class="card">
        <Panel header="Header">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Panel header="Header">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>
`
            },
            theme: undefined
        };
    },
    methods: {
        changeHeaderBackground(color) {
            if (color) {
                this.theme = PrimeCSS.toVariables({
                    panel: {
                        header: {
                            properties: {
                                background: `var(--p-${color}-500)`,
                                color: color ? '#ffffff' : undefined
                            }
                        }
                    }
                }).value.join('');
            } else {
                this.theme = undefined;
            }
        }
    }
};
</script>
