<template lang='pug'>
  #app
    .ui.container.main-container.rounded-corners-bottom
      main-header
      navigation
      router-view
      main-footer
    br
    br
</template>

<script>
import './assets/js/global.js'

export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './assets/css/global.css';
</style>

<style lang="sass" scoped>
  .main-container
    border: 1px solid white
    padding: 10px 10px 10px 10px
    background-color: white
    border-radius: 10px
    overflow: hidden
</style>
