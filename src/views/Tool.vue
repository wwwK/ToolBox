<template>
  <div>
    <div class="tool-big-box">
      <!-- 左边的路由盒子 -->
      <div class="tool-left-box">
        <ToolBox></ToolBox>
      </div>
      <!-- 右边的展示区域盒子 -->
      <div class="tool-right-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ToolBox from "../views/toolBox.vue";
export default {
  name: "BilistTool",

  components: { ToolBox },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.tool-big-box {
  width: 100%;
  min-height: calc(100vh - 57px);
  display: flex;
  flex-direction: row;
}
.tool-left-box {
  flex: 1;
  border-right: 1px solid #ddd;
}
.tool-right-box {
  flex: 5;
  min-width: 300px;
}
</style>