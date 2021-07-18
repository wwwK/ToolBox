<template>
  <n-config-provider :theme="theme">
    <n-card>
      <div class="big-box">
        <div class="nav-box">
          <Headers>
            <n-space>
              <a href="javaScript:void(0);" class="color_a" @click="color_btn"
                ><n-gradient-text type="success">换肤</n-gradient-text></a
              >
            </n-space>
          </Headers>
        </div>
        <div class="nr-box">
          <!-- <keep-aleve> -->
          <router-view></router-view>
          <!-- </keep-aleve> -->
        </div>
      </div>
    </n-card>
  </n-config-provider>
</template>

<script>
import background from "./assets/background.js";
import Headers from "../src/views/Headers.vue";
import { onMounted, ref } from "vue";
import { darkTheme } from "naive-ui";
export default {
  name: "App",
  components: {
    Headers,
  },
  setup() {
    onMounted(() => {
      background;
    });
    return {
      darkTheme,
      theme: darkTheme,
      theme_null: ref(null),
    };
  },
  methods: {
    color_btn() {
      if (this.theme == null) {
        this.theme = darkTheme;
        console.log(this.theme);
      } else {
        this.theme = this.theme_null;
        console.log(this.theme);
      }
    },
  },
};
</script>

<style>
html,
body {
  font-size: 16px;
  height: 100vh;
  min-height: 800px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: skyblue;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.color_a {
  font-size: 16px;
}
.n-card__content {
  padding: 0px !important;
}
.nav-box {
  padding: 5px;
  padding-bottom: 0px;
}
</style>
