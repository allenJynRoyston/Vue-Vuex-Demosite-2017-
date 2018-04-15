<template lang="pug">
  div
    br
    h3 Get rewarded for saving energy with Better Energy
    p Take control of your gas and electricy - we make lowering your dual fuel or electricy bills easy, with
      | helpful energy saving tools and advice, as well as giving you over £100 worth of rewards, and a FREE energy monitor
      | worth £45.
    br
    .ui.top.attached.tabular.menu
      a.item(v-for='tab in tabs' @click='tabstate=tab.title' v-bind:class="{true: 'active'}[tabstate === tab.title]") {{tab.title}}

    .ui.bottom.attached.active.tab.segment
      .inner-tab(v-if='tabstate === "Start"')
        .ui.grid
          .ui.column.six.wide
            img(src='../../assets/images/infographic.png')
          .ui.column.ten.wide(style='padding-left: 20px')
            .ui.grid(v-for='{text} in listData')
              .ui.column.one.wide
                img(src='../../assets/images/greenbtn.png')
              .ui.column.fourteen.wide
                a.link-blue &nbsp; {{text}}
      .inner-tab(v-if='tabstate === "Savings"')
        h3 Savings Tab
      .inner-tab(v-if='tabstate === "Home"')
        h3 Home Tab
      .inner-tab(v-if='tabstate === "Renew"')
        h3 Renew
</template>

<script>


export default {
  props: [],
  data () {
    return {
      tabstate: null,
      tabs: [
        {title: 'Start'},
        {title: 'Savings'},
        {title: 'Home'},
        {title: 'Renew'}
      ],
      listData: [
        {text: "We pay for your rewards using less energy"},
        {text: "FREE energy monitor worth $$$"},
        {text: "Reduce your energy usage by 20% - save $$$ and get $$$ reward"},
        {text: "Chgose paperless billing - $10"},
        {text: "Replace your old boiler - 20"}
      ]
    }
  },
  created:function(){
    this.tabstate = this.tabs[0].title
  },
  methods: {
  }
}
</script>


<style lang="sass" scoped>
  .tabular.menu .item
    background-color: #b9cd14
    margin-bottom: 10px
    margin-right: 10px
    border-radius: 5px
    color: white
    font-size: 16px
    font-weight: bold
  .tab.segment
    background-color: #b9cd14
  .inner-tab
    background-color: #f5f7d9
    padding: 20px
  .link-blue
    color: #2f70a5
    font-weight: bold
    curor: pointer

  .item.active
    background: linear-gradient(#e5eeab, #b9cd14)!important
    color: white!important
  .item:hover
    background: linear-gradient(#7c9ec8, #003e7f)!important

</style>
