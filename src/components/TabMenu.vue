<template>
  <div class="tab-container">
    <el-tabs v-model="currentTab" @tab-click="handleClick">
      <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
          
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
    props: {
        tabs: {
            type: Array,
            required: true
        },
        activeTab: {
            type: String,
            default: ''
        }
    },
    data() {
      return {
        currentTab: 'PageA',
        
      };
    },
    methods: {
      handleClick(tab, event) {
          console.log(this.$bus)
          this.$bus.$emit('pushTrace', this.currentTab)
          this.$emit('tabClick', this.currentTab)
      }
    },
    created(){
        this.currentTab = this.activeTab || this.tabs[0].name
        console.log(this.tabs)
    }
  };
</script>
