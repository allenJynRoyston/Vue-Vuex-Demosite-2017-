<template lang="pug">
  div
    a.pointer
      router-link(to="/")
        img(src='../assets/images/logo.png')
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return {

    }
  },
  created: function () {

  },
  methods: {

  }
}
</script>


<style lang="sass" scoped>
  .pointer
    cursor: pointer
  img
    margin-bottom: 10px
</style>
