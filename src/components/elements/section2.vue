<template lang="pug">
  #signup
    .rounded-corners
      h4 The latest from&nbsp;
        strong Better Energy
      p
        | Sign-up to our email newsletter to receive all the latest product news,
        | updateand offers...
      .ui.input.full-width
        input(type='text' placeholder='Enter your email address')
      br
    .custom-button.margin-top--plus-5.float--right
      img(src='../../assets/images/arrowbtn.png')
      span Sign Up
</template>

<script>


export default {
  props: [],
  data () {
    return {

    }
  },
  mounted(){

  },
  methods: {
  }
}
</script>


<style lang="sass" scoped>
  #signup
    padding: 10px
</style>
