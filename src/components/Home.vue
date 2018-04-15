<template lang="pug">
  div
    br
    br
    .ui.grid.container
      #left.ten.wide.column
        section-one
      #right.six.wide.column.site--gradient--yellow-to-green.site--green-outline.rounded-corners
        section-two
      .ten.wide.column
        section-three
      .six.wide.column
        section-four
</template>

<script>
export default {
  name: 'home',
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
  #right
    height: 235px

  #left
    padding: 0px 10px 0px 0px
</style>
