<template>
  <div class="index">
    <textarea
      name="text"
      id=""
      cols="30"
      rows="10"
      v-model="text"
    >
    </textarea>
    <button @click="btn">发送</button>
    <!-- 打开新页面 -->
    <a href="http://localhost:7777/#/"></a>

  </div>
</template>

<script>

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
    window.addEventListener('message', function (e) {
      this.msaPage = e.source
      this.text = e.data
    })
  },
  activited () { },
  update () { },
  beforeRouteUpdate () { },
  methods: {
    btn () {
      this.msaPage && this.msaPage.postMessage(this.text, '*')
    }
  },
  filter: {},
  computed: {},
  watch: {}
}
</script>

<style lang="less" scoped>
</style>
