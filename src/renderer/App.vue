<template>
    <div>
        <el-button type="">按钮</el-button>
        <img class="test"
             :src="require('@/assets/icon.jpg')"
             alt="">
        <p>1.0.6</p>
    </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "electron",
  props: {},
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.test {
  width: 100px;
  height: 100px;
}
</style>
