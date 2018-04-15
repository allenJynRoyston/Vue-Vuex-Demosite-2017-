<template lang="pug">
  div
    img.rounded-corners-top.full-width(src='../../assets/images/we_pay_you.png')
    div.rounded-corners-bottom.site--green.full-width.margin-top--minus-5
      .ui.grid
        .eleven.wide.column.text
          h1 take control of your energy bills
        .column
          .custom-button.margin-top--plus-5
            img(src='../../assets/images/arrowbtn.png')
            span Join now
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
  h1
    text-align: right

</style>
