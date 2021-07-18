<template>
  <div class="home-big-box">
    <div class="home-banner-box">
      <div class="home-banner-nr">
        <h1>欢迎使用站长工具站</h1>
        <h3 style="height: 133px">
          <keep-alive>
            <span style="font-size: 38px; user-select: none"
              >年少不惧岁月长,彼方尚有荣光在</span
            >
          </keep-alive>
        </h3>
        <div class="home-banner-btn-box">
          <n-button type="success">
            <a style="color: #fff" href="https://github.com/">github store</a>
          </n-button>
          <n-button type="success">
            <router-link style="color: #fff" to="/tool">开始使用</router-link>
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BilistHome",
  data() {
    return {
      Height: "",
      visibilityClass: "hidden",
    };
  },
  methods: {
    itemClick() {
      this.item = !this.item;
    },
  },
  watch: {},
};
</script>

<style  scoped>
html,
body {
  height: 100%;
}
.home-big-box {
  width: 100%;
  height: calc(100vh - 57px);
}
.home-banner-box {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../public/back1.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.home-banner-nr {
  position: absolute;
  width: 800px;
  height: 400px;
  text-align: center;
  line-height: 133px;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  z-index: 10;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.home-banner-nr::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(../../public/back1.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: blur(8px);
  z-index: -1;
}
.home-banner-nr > h1 {
  font-size: 3rem;
}
.home-banner-nr > h3 {
  font-size: 2rem;
}
.home-banner-btn-box {
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
/* .content_text_chuxian {
  animation: chuxian 1.5s;
}
.content_text_xiaoshi {
  animation: xiaoshi 1s;
} */
</style>