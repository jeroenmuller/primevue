<template>
    <div :class="cx('root')" v-bind="ptm('root')" data-pc-name="inputgroup">
        <template v-for="(slotName, index) in startSlots" :key="'start_' + index">
            <span :class="cx('addon')" v-bind="ptm('addon')">
                <slot :name="slotName" />
            </span>
        </template>
        <slot />
        <template v-for="(slotName, index) in endSlots" :key="'end_' + index">
            <span :class="cx('addon')" v-bind="ptm('addon')">
                <slot :name="slotName" />
            </span>
        </template>
    </div>
</template>

<script>
import BaseInputGroup from './BaseInputGroup.vue';

export default {
    name: 'InputGroup',
    extends: BaseInputGroup,
    data() {
        return {
            startSlots: null,
            endSlots: null
        };
    },
    mounted() {
        // console.log(this.$slots);

        const defaultSlotIndex = Object.keys(this.$slots).findIndex((key) => key === 'default');

        this.startSlots = [];
        this.endSlots = [];

        Object.keys(this.$slots).forEach((key, index) => {
            if (index < defaultSlotIndex) {
                this.startSlots.push(key);
            } else if (index > defaultSlotIndex) {
                this.endSlots.push(key);
            }
        });
    }
};
</script>
