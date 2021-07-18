<template>
  <div class="no-box">
    <div class="no-nr">
      <n-result
        status="404"
        title="404 资源不存在"
        description="生活总归带点荒谬"
      >
        <template #footer>
          <n-button type="error" ghost>
            <router-link to="/">找点乐子吧</router-link>
          </n-button>
        </template>
      </n-result>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbox404",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.no-box {
  width: 100%;
  min-height: calc(100vh - 57px);
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: skyblue;
}
</style>