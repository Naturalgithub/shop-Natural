<template>
  <div class="index">
    <div style="width:200px; float:left; margin-right:200px;border:solid 1px #333;">
      <div id="color">Frame Color</div>
    </div>
    <div>
      <iframe
        id="child"
        src="http://lsLib.com/lsLib.html"
      ></iframe>
    </div>
  </div>
</template>

<script>
window.onload = function () {
  window.frames[0].postMessage('getcolor', 'http://lslib.com')
}

window.addEventListener('message', function (e) {
  var color = e.data
  document.getElementById('color').style.backgroundColor = color
}, false)
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      msaPage: null,
      text: ''
    }
  },
  created () { },
  mounted () {

  },
  activited () { },
  update () { },
  beforeRouteUpdate () { },
  methods: {

  },
  filter: {},
  computed: {},
  watch: {}
}
</script>

<style lang="less" scoped>
</style>
