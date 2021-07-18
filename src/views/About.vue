<template>
  <n-config-provider>
    <div class="about-box">
      <div class="about-nr">
        <n-card>
          <div class="card-nr">
            <n-gradient-text type="info" :size="36">关于本站</n-gradient-text>
            <ul>
              <li>
                <div class="li01">
                  关于创建本站的初衷是因为, 刚学习了vue3后想要做个项目练习,
                  前一段时间也看到尤大推荐的
                  <a target="_brank" href="https://www.naiveui.com/zh-CN"
                    >Naive UI</a
                  >
                  看着也挺不错的,
                  同时呢也再平时写代码的时候经常会用到一些小工具,
                  去一些工具站总是有各种各样的广告, 我这个人还比较喜欢研究,
                  所以我就想着, 我自己做一个吧, 然后写到这里我发现emmm <br />
                  没有 UI 好像好丑, <br />
                  算了算了自己用的,管他丑不丑！
                </div>
              </li>
              <li>
                <div class="li02">
                  <n-alert title="未来发展" type="success">
                    <p>1.本站所有内容功能会再未来一点一点丰富</p>
                    <p>2.本站所有内容全部永久免费使用</p>
                    <p>3.本站永远不会出现广告,永远做一个干净单纯的工具站</p>
                  </n-alert>
                </div>
              </li>
              <li class="error-txt">
                <n-alert title="免责声明" type="error">
                  <p>
                    任何使用本站(指 dushu.work下同)的用户均应仔细阅读本声明。
                  </p>
                  <p>
                    用户可选择不使用本站，但一旦使用本站的任何行为将被视为对本声明全部内容的认可。
                  </p>
                  <p>
                    1、本站尽量采用科学技术手段为您提供尽量完整、真实的多种实用信息，但不保证所提供的各类信息绝对真实、可靠，仅供参考。
                  </p>
                  <p>
                    2、一切因使用本站信息而引致之任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯等及其所造成的损失，本站概不负责，亦不承担任何法律责任。
                  </p>
                  <p>
                    3、任何使用本站提供的信息作为依据而对第三方造成的各类损失，均由信息使用方负责，本站概不负责，亦不承担任何法律责任。
                  </p>
                  <p>
                    4、任何单位或个人认为通过本站提供的内容可能涉嫌侵犯其合法权益，应该及时向本站书面反馈，并提供身份证明、权属证明及详细侵权情况证明，我们在收到上述法律文件后，将会尽快移除被控侵权内容。
                  </p>
                  <p>5、本站任何外链网站的内容均与本站无关。</p>
                </n-alert>
              </li>
            </ul>
          </div>
        </n-card>
      </div>
    </div>
  </n-config-provider>
</template>

<script>
export default {
  name: "ToolboxVueAbout",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.about-box {
  width: 100%;
  min-height: calc(100vh - 57px);
}
.about-nr {
  width: 1000px;
  min-width: 800px;
  height: 800px !important;
  min-height: 800px !important;
  margin: 0 auto;
}
.card-nr {
  width: 100%;
  min-height: 800px;
  padding: 10px 15px;
}
.li01 {
  line-height: 2;
  font-size: 14px;
  border: 1px solid rgba(221, 221, 221, 0.3);
  padding: 5px 10px;
}
.error-txt {
  width: 800px;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
}
.li02 {
  margin-top: 10px;
}
</style>