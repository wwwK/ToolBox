<template>
  <div>
    <n-collapse
      default-expanded-names="1"
      accordion
      class="list-box"
      arrow-placement="right"
    >
      <!-- 循环渲染仓库中的列表信息,这样以后加需求就可以直接再仓库增加就可以了 -->
      <n-collapse-item
        :name="toollist.name"
        v-for="toollist in $store.state.ToolList"
        :key="toollist.id"
        :title="toollist.title"
        class="list-for-box"
      >
        <div v-for="data in toollist.data" :key="data.id">
          <router-link :to="data.to">
            {{ data.title }}
          </router-link>
          <div class="hr"></div>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script>
import background from "../assets/background.js";
import { onMounted } from "vue";
export default {
  name: "BilistToolbox",
  setup() {
    onMounted(() => {
      background;
    });
  },
};
</script>

<style  scoped>
.list-box {
  margin-top: 20px;
  font-size: 26px;
  min-width: 300px;
  padding-left: 10px;
}
.list-for-box {
  font-size: 0.7em;
}
.hr {
  width: 100%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 2px;
  background-color: rgba(221, 221, 221, 0.3);
  color: rgba(221, 221, 221, 0.3);
}
</style>