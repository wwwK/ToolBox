<template>
  <n-config-provider class="Headers_big_box">
    <nav>
      <ul>
        <li>
          <a href="https://space.bilibili.com/123443918" target="_Blank"
            ><div class="headimg"></div
          ></a>
        </li>
        <li>
          <router-link to="/">
            <n-gradient-text type="success">首页</n-gradient-text>
          </router-link>
        </li>
        <li>
          <router-link to="/tool">
            <n-gradient-text type="success">工具箱</n-gradient-text>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <n-gradient-text type="success">关于本站</n-gradient-text>
          </router-link>
        </li>
        <!-- 后续添加直接使用li就好 -->
        <li></li>
      </ul>
      <div class="tagglePeeling" justify="end">
        <slot></slot>
      </div>
    </nav>
  </n-config-provider>
</template>

<script>
export default {
  name: "BilistHeaders",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.Headers_big_box {
  border-bottom: 1px solid #999;
  min-width: 860px;
}
.headimg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url(../assets/headimg.webp) no-repeat center;
  background-size: 100%, 100%;
}
a {
  text-decoration: none;
  font-size: 16px;
  display: inline-block;
  padding: 0px 10px;
}
.Headers_big_box {
  width: 100%;
  height: 50px;
}
nav {
  width: 90%;
  height: 100%;
  line-height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
ul {
  width: 40%;
  display: flex;
}
li {
  margin-left: 30px;
}
li:first-child {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: -60px;
  margin-right: 160px;
}
li:first-child > a {
  padding: 0 !important;
  margin-top: 5px;
}
</style>