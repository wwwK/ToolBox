<template>
  <div>
    <n-alert title="友情提醒:" type="warning" closable>
      目前不支持使用av号,请先使用av号转bv号
    </n-alert>
    <div class="Cover-box">
      <!-- 内容区域 -->
      <div class="Cover-nr">
        <n-h1>
          <n-text type="primary">bilibili封面提取</n-text>
        </n-h1>
        <n-spin :show="state.show">
          <n-input
            type="input"
            v-model:value="state.value"
            size="large"
            placeholder="请输入bv号"
          />
        </n-spin>
        <br />
        <n-button @click="videoClick">GO</n-button>
        <!-- 分割线 分割线下面展示照片 -->
        <n-divider />
        <div v-if="state.GetOK">
          <n-skeleton height="717px" width="1146px" style="margin: auto" />
        </div>
        <div v-else>
          <img :src="state.img" alt="" />
        </div>
      </div>
      <!-- 请求错误所展示的模态框 -->
      <n-modal v-model:show="state.showModal">
        <n-card
          style="width: 600px"
          title="Error"
          :bordered="false"
          size="huge"
        >
          <template #header-extra></template>
          <n-gradient-text :size="24" type="warning" style="padding-left: 40px">
            <h3>
              {{ state.GetErrMisage }}
            </h3>
          </n-gradient-text>
          <br />
          <br />
          <template #footer> 点击空白处消失 </template>
        </n-card>
      </n-modal>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "@vue/reactivity";
import { ifcode } from "../../filter/VidCoverErr.js";
// import { GetbilibiliCover } from "../API";
export default {
  name: "BilistVideocover",

  data() {
    const state = reactive({
      img: "",
      show: false,
      value: "",
      showModal: false,
      GetErrMisage: "",
      GetOK: "",
    });
    function videoClick() {
      // 开始请求就将 padding 展示出来
      state.show = !state.show;
      // 将骨架框也展示出来
      state.GetOK = true;
      axios
        .get("/api", {
          params: {
            bvid: state.value,
          },
        })
        .then((data) => {
          // 请求成功就将 padding 删除
          state.show = !state.show;
          // 请求成功后拿到返回值
          // 判断返回值类型是否是数据请求成功
          let code = data.data.code;
          // 使用我们的返回值过滤器
          let ifcodemsg = ifcode(code);
          if (!ifcodemsg.open) {
            // 设置我们的错误信息
            state.GetErrMisage = ifcodemsg.msg;
            // 如果有问题就将模态框弹出
            state.showModal = !state.showModal;
            // 如果出错就不展示骨架框
            state.GetOK = "";
          } else {
            // 先隐藏骨架框
            state.GetOK = false;
            // 如果没有错误我们需要让照片展示出来
            // 这中间需要使用一个在线图片处理拼接url
            // 但是这个不能直接放在 state.img中因为打开页面就会出现访问错误
            state.img = "https://images.weserv.nl/?url=" + data.data.data.pic;
          }
        })
        .catch((err) => {
          // 如果有错误就直接展示错误
          state.GetErrMisage = err;
          // 如果有问题就将模态框弹出
          state.showModal = !state.showModal;
        });
    }
    return {
      state,
      videoClick,
    };
  },
};
</script>

<style  scoped>
.Cover-box {
  margin-top: 10px;
}
.Cover-nr {
  width: 80%;
  min-width: 500px;
  margin: 0 auto;
  text-align: center;
}
</style>