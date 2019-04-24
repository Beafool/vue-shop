<template>
  <div id="app">
  <router-view />
  <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  import {reqAddress} from './api'
export default {
   async mounted(){
      const result = await reqAddress('115.36867','23.10038')
     console.log('result',result)
    },

    components:{
      FooterGuide
    }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
