<template>
    <div class="page">
        <h1>页面C</h1>
        <tab-menu :activeTab="activeTab" :tabs="tabs" @tabClick="tabClick" />
        <div v-for="tab in tabs" :key="tab.name">
            <span v-if="activeTab===tab.name">文本内容 - {{tab.name}}</span>
        </div>
    </div>
</template>

<script>
import TabMenu from '../components/TabMenu'
export default {
    components: {
        TabMenu
    },
    methods: {
        tabClick(activeTab){
            this.activeTab = activeTab
        }
    },
    data() {
        return {
            activeTab: 'c1',
            tabs: [
                {
                    label: '组件C1',
                    name: 'c1'
                },
                {
                    label: '组件C2',
                    name: 'c2'
                },
                {
                    label: '组件C3',
                    name: 'c3'
                }
            ]
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
