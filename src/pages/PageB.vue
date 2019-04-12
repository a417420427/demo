<template>
    <div class="page">
        <h1>页面B</h1>
        <tab-menu :tabs="tabs" @tabClick="tabClick"/>
        <div :is="activeTab"></div>
    </div>
</template>

<script>
import TabMenu from '../components/TabMenu'
import ComponentA from '../components/ComponentA'
import ComponentB from '../components/ComponentB'
import ComponentC from '../components/ComponentC'
export default {
    data() {
        return {
            activeTab: 'ComponentA',
            tabs: [
                {
                    label: '组件A',
                    name: 'ComponentA'
                },
                {
                    label: '组件B',
                    name: 'ComponentB'
                },
                {
                    label: '组件C',
                    name: 'ComponentC'
                }
            ]
        }
    },
    components: {
        ComponentA,
        ComponentB,
        ComponentC,
        TabMenu
    },
    methods: {
        tabClick(activeTab) {
            this.activeTab = activeTab
        }
    }
}
</script>


<style lang="scss" scoped>
    .page {
        border: 1px solid #eee;
        width: 400px;
        height: 400px;
    }
</style>
