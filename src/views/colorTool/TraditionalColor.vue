<template>
  <div>
    <div class="Ping-box">
      <div class="Ping-right-box">
        <h1>这里是Ping值检测</h1>
        <button @click="GetClick">发送请求</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BilistPingdetect",

  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {
    GetClick() {
      axios
        .get("http://localhost:9000/bi/bilibiliCover", {
          bvid: "BV1KU4y1G7Ew",
        })
        .then((req) => {
          console.log(req);
        });
    },
  },
};
</script>

<style  scoped>
/* .Ping-box {
  width: 100vw;
  height: calc(100vh - 57px);
} */
</style>