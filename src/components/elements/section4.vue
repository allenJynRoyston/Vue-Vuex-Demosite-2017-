<template lang="pug">
  div
    br
    h3 Why switch to Better energy
    p Get peace of mind knowing your'e chosen the right company to supply your energy.  Here's why...
    .ui.grid(v-for='{title, text} in pointdata')
      .two.wide.column
        img(src='../../assets/images/blue-arrow.png')
      .fourteen.wide.column
        p
          strong {{title}}&nbsp;
          span {{text}}
    br
    .custom-button
      img(src='../../assets/images/arrowbtn.png')
      span Join now
</template>

<script>


export default {
  props: [],
  data () {
    return {
      pointdata: [
        {title: 'Best Overal Company', text: 'for the 6th conservective time.'},
        {title: 'Best Value for Money', text: 'as awarded by uSwitch, compared to all other major energy supplies in the UK*.'},
        {title: 'Best for Customer Service', text: '- No wonder that our customers numbers have gone from 5 million to 9 million customers in just 5 years'},
        {title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma...'},
        {title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma...'},
        {title: 'Lorem ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma...'},
      ]
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
