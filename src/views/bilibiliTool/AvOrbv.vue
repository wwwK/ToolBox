<template>
  <div>
    <n-alert title="声明:" type="warning" closable>
      转换算法来自于知乎大佬
      <a
        target="_blank"
        href="https://www.zhihu.com/question/381784377/answer/1099438784"
      >
        @mcfx
      </a>
    </n-alert>
    <!-- 卡片盒子 -->
    <div id="big-box">
      <n-tabs type="line">
        <n-tab-pane name="oasis" tab="AV号转换BV号">
          <div class="AV-BV">
          <n-gradient-text type="info">
            <h2>AV号转换BV号</h2>
          </n-gradient-text>
          <br />
          <n-spin :show="state.AvShow">
            <n-input
              v-model:value="state.AvValue"
              type="input"
              size="large"
              placeholder="请输入AV号,注意不要带字母!"
            />
          </n-spin>
          <n-button @click="AvClick">GO!</n-button>
          <!-- 结果页,外面还要包裹一层卡片 -->
          <n-card
            v-show="state.AvShow"
            closable
            @close="Av_over"
            style="width: 30%; margin: 0 auto"
          >
            <n-result
              v-show="state.AvShow"
              :status="state.Av_Ok ? 'success' : 'error'"
              :title="state.Av_Ok ? '成功' : '错误'"
              description="如果出现 BV1xx411c7mX 请检查您输入的AV号"
            >
              <template #footer>
                {{ state.AvResult }}
              </template>
            </n-result>
          </n-card>
        </div>
        </n-tab-pane>
        <n-tab-pane name="jay chou" tab="BV号转换AV号">
          <div class="BV-AV">
          <n-gradient-text type="info">
            <h2>BV号转换AV号</h2>
          </n-gradient-text>
          <br />
          <!-- 查询状态的框 -->
          <n-spin :show="state.BvShow">
            <n-input
              v-model:value="state.BvValue"
              type="input"
              size="large"
              placeholder="请输入BV号,注意不要带字母!"
            />
          </n-spin>
          <n-button @click="BvClick">GO!</n-button>
          <!-- 结果页,外面还要包裹一层卡片 -->
          <n-card
            v-show="state.BvShow"
            closable
            @close="Bv_over"
            style="width: 30%; margin: 0 auto"
          >
            <n-result
              v-show="state.BvShow"
              :status="state.Bv_Ok ? 'success' : 'error'"
              :title="state.Bv_Ok ? '成功' : '错误'"
              description="如果出现 BV1xx411c7mX 请检查您输入的AV号"
            >
              <template #footer>
                {{ state.BvResult }}
              </template>
            </n-result>
          </n-card>
        </div>
        </n-tab-pane>
      </n-tabs>
      
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { BVturnAV, AVturnBV } from "../../filter/AvOrbv.js";
export default {
  name: "ToolboxVueAvorbv",
  setup() {
    const state = reactive({
      AvValue: "",
      AvShow: false,
      AvResult: "",
      Av_Ok: true,
      BvValue: "",
      BvShow: false,
      BvResult: "",
      Bv_Ok: true,
    });
    // AV
    function AvClick() {
      // 点击后先让spin加载
      state.AvShow = !state.AvShow;
      // 调用计算方法 赋值给结果
      state.AvResult = AVturnBV(state.AvValue);
    }
    function Av_over() {
      // 成功后关闭 spin 和 卡片
      state.AvShow = !state.AvShow;
    }
    // BV
    function BvClick() {
      // 点击后先让spin加载
      state.BvShow = !state.BvShow;
      // 调用计算方法 赋值给结果
      state.BvResult = BVturnAV(state.BvValue);
    }
    function Bv_over() {
      // 成功后关闭 spin 和 卡片
      state.BvShow = !state.BvShow;
    }
    return {
      state,
      AvClick,
      Av_over,
      BvClick,
      Bv_over,
    };
  },
};
</script>

<style  scoped>
#big-box {
  width: 80%;
  margin: 20px auto;
  min-width: 500px;
  text-align: center;
}
.AV-BV,
.BV-AV {
  width: 80%;
  margin: 20px auto;
  text-align: center;
}
</style>