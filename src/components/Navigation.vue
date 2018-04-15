<template lang="pug">
  div
    #nav-bar.ui.menu
      .header.item(v-for='{name, link} in navdata' v-bind:class='{true: "active", false: "inactive"}[link === $route.path]')
        a
          router-link(v-bind:to="link") {{name}}
      br
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      navdata: [
        {name: 'Home', link: '/'},
        {name: 'Plan benefits', link: '/plan'},
        {name: 'Getting started', link: '/getting-started'},
        {name: 'Easy actions', link: '/easy-actions'},
        {name: 'Low-cost measures', link: '/low-cost-measures'},
        {name: 'Join now', link: '/join-now'}
      ],
    }
  },
  created:function(){

  },
  methods: {

  }
}
</script>


<style lang="sass" scoped>
  .ui.menu
    background: linear-gradient(#81a2cb, #255d9e)

  /*  NORMAL */
  .header.item
    background: linear-gradient(#81a2cb, #255d9e)
    a
      color: white

  /*  ACTIVE */
  .header.item.active
    background: linear-gradient(#b4c8e0, #88a7cc)
    a
      color: #255d9e

  /* HOVER */
  .header.item:hover
    background: linear-gradient(#d7e2f0, #c3d4e6)
    a
      color: #255d9e

</style>
