<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data() {
    return {

    }
  },
  created() {
    // 除特殊情况外，不建议使用小程序的生命周期钩子
  },
  onReady() {
    // 监听页面初次渲染完成
    // 小程序 onReady 后，才能去触发 vue mounted 生命周期
  },
  mounted() {},
  methods: {},
  computed: {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  onLoad(query) {
    // 监听页面加载
    // query 参数获取
  },
  onShow() {
    // 监听页面显示
    // this.$root.$mp.query可获取参数
  },
  onHide() {
    // 监听页面隐藏
  },
  onUnload() {
    // 监听页面卸载
  },
  onPullDownRefresh() {
    // 监听用户下拉动作
  },
  onReachBottom() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage() {
    // 用户点击右上角分享
  },
  onPageScroll() {
    // 页面滚动
  },
  onTabItemTap() {
    // 当前是 tab 页时，点击 tab 时触发
  }
}
</script>
<style scoped src="./index.css">
</style>
