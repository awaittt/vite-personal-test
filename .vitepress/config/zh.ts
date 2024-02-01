import { defineConfig ,type DefaultTheme} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vite-personal-test/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/vite-personal-test/logo.png",
      },
    ],
  ],
  rewrites:{ '/vite-personal-test':'/wirte' },
  title: "个人小屋",
  description: "生活点滴记录文档",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
   
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "React", link: "/src/front/react/index" },
          { text: "Vue", link: "/src/front/vue/index" },
          { text: "微信小程序", link: "/src/front/wechat/index" },
          { text: "鸿蒙os", link: "/src/front/hongmeng/index" },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "vitepress", link: "/src/others/vitepress/index" }
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/awaittt" }],

    footer: {
      copyright: "烂车才需要备胎，闲人才养鱼",
    },
    outline:{
      label:'本页内容'
    },
    lastUpdated:{
      text:'最后更新于',
      formatOptions:{
        dateStyle:'short',
        timeStyle:'medium'
      }
    },
    editLink:{
      pattern:'https://www.douyin.com/',
      text:'🐂🍺'
    }
  },
});
