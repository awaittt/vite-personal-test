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
    nav: nav(),
    sidebar: {
      '/src/others/vitepress/guide/':{base:'/src/others/vitepress/guide/',items:sidebarVitepressGuide()},
      '/src/others/vitepress/reference/':{base:'/src/others/vitepress/reference/',items:sidebarVitepressReference()},
    },
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


function nav(): DefaultTheme.NavItem[] {
  return [
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
        { text: "vitepress", link: "/src/others/vitepress/guide/what-is-vitepress" }
      ],
    },
  ]
}

function sidebarVitepressGuide(): DefaultTheme.SidebarItem[] {
  return [{
    text:'简介',
    collapsed:false,
    items:[
      {text:'什么是 VitePress？',link:'what-is-vitepress'},
      {text:'快速开始',link:'getting-started'},
      {text:'路由',link:'routing'},
      {text:'部署',link:'deploy'},
    ]
  },
  {
    text:'写作',
    collapsed:false,
    items:[
      {text:'Markdown 拓展',link:'markdown'},
      {text:'资源处理',link:'asset-handling'},
      {text:'frontmatter',link:'frontmatter'},
      {text:'在 Markdown 使用 Vue',link:'using-vue'},
      {text:'国际化',link:'i18n'},
    ]
  },{
    text:'自定义',
    collapsed:false,
    items:[
      {text:'自定义主题',link:'custom-theme'},
      {text:'拓展默认主题',link:'extending-default-theme'},
      {text:'构建时数据加载',link:'data-loading'},
      {text:'SSR 兼容性',link:'ssr-compat'},
      {text:'连接 CMS',link:'cms'},
    ]
  },{
    text:'实验性功能',
    collapsed:false,
    items:[
      {text:'MPA 模式',link:'mpa-mode'},
      {text:'sitemap',link:'sitemap-generation'},
    ]
  },
  {
    text:'配置和 API 参考',base:'vitepress/reference/',link:'site-config'
  }

]
}

function sidebarVitepressReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "API 参考",
      collapsed: false,
      items: [
        { text: "vitepress", link: "api/vitepress" },
        { text: "theme", link: "api/theme" },
      ],
    },
  ]
}