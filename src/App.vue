<template>
  <div id="app">
    <div class="currentTrace">
      {{ trace }} 
    </div>
    <tab-menu :tabs="tabs" :activeTab="$route.name" @tabClick="tabClick"/>
    <router-view/>
  </div>
</template>

<script>
import TabMenu from './components/TabMenu'
export default {
  name: 'App',
  data(){
    return {
      tabs: [
            {
                label: '页面A',
                name: 'PageA'
            },
            {
                label: '页面B',
                name: 'PageB'
            },
            {
                label: '页面C',
                name: 'PageC'
            }
        ]
    }
  },
  computed: {
    trace() {
      return this.$bus.trace
    }
  },
  components: {
    TabMenu
  },
  methods: {
    tabClick(activeName){
      this.$router.push({ name: activeName })
    }
  }
}
</script>

<style>

</style>
