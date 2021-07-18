<template>
  <div>
    <div class="MD5-nr">
      <n-card>
        <n-tabs type="line" class="line">
          <n-tab-pane name="MD5add" tab="MD5加密">
            <div class="MD5add">
              <n-spin :show="state.show">
                <n-input
                  v-model:value="state.value"
                  type="input"
                  size="large"
                  placeholder="请输入加密内容"
                />
              </n-spin>
              <br />
              <n-button @click="MD5add" dashed>加密</n-button>
              <br />
              <br />
              <n-card closable v-show="state.md5show" @close="Card_Over">
                <n-result
                  v-show="state.md5show"
                  :status="state.md5_OK ? 'success' : 'error'"
                  :title="state.md5_OK ? '成功' : '错误'"
                  :description="state.message"
                >
                  <template #footer>
                    {{ state.md5value }}
                  </template>
                </n-result>
              </n-card>
            </div>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import md5 from "js-md5";
export default {
  name: "ToolboxVueMd5encryption",
  setup() {
    const state = reactive({
      value: "",
      show: false,
      message: "",
      md5_OK: true,
      md5show: false,
      md5value: "",
    });
    function MD5add() {
      state.show = !state.show;
      if (state.value == "") {
        state.message = "您输入为空";
        state.md5_OK = false;
      } else {
        state.message = "加密完成";
        state.md5value = md5(state.value);
        state.md5_OK = true;
      }
      state.md5show = true;
      state.show = !state.show;
    }
    function Card_Over() {
      state.md5show = !state.md5show;
    }
    return {
      state,
      MD5add,
      Card_Over,
    };
  },
};
</script>

<style  scoped>
.MD5-nr {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
}
.line {
  width: 80%;
  margin: 0 auto;
}
.MD5add {
  width: 80%;
  margin: 10px auto;
  text-align: center;
}
</style>