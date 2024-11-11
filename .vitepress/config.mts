import { defineConfig } from "vitepress";

const enThemeConfig = {
  nav: [
    { text: "Home", link: "/" },
    { text: "Guide", link: "/guide" },
    { text: "Extension", link: "/extension" },
    { text: "Appearance", link: "/appearance" },
  ],
  sidebar: {
    "/guide/": [
      {
        text: "Quick Start",
        items: [
          { text: "Configuration", link: "/guide/configuration" },
          { text: "Contribution", link: "/guide/contribution" },
        ],
      },
      {
        text: "Cloud Services",
        items: [
          { text: "Google", link: "/guide/google" },
          { text: "Microsoft", link: "/guide/microsoft" },
          { text: "Huawei", link: "/guide/huawei" },
          { text: "AWS", link: "/guide/aws" },
        ],
      },
    ],
    "/extension/": [
      {
        text: "Core",
        items: [
          { text: "Rooms", link: "/extension/rooms" },
          { text: "Events", link: "/extension/events" },
          { text: "Users", link: "/extension/users" },
          { text: "Filters", link: "/extension/filters" },
          { text: "Storage", link: "/extension/storage" },
        ],
      },
      {
        text: "Capabilities",
        items: [
          { text: "Login", link: "/extension/login" },
          { text: "Telecom", link: "/extension/telecom" },
          { text: "Friends", link: "/extension/friends" },
          { text: "Sports", link: "/extension/sports" },
          { text: "Location", link: "/extension/location" },
          { text: "Pushers", link: "/extension/pushers" },
          { text: "Wallet", link: "/extension/wallet" },
        ],
      },
    ],
    "/appearance/": [
      {
        text: "Theme",
        items: [
          { text: "Color", link: "/appearance/color" },
          { text: "Typography", link: "/appearance/typography" },
          { text: "Shapes", link: "/appearance/shapes" },
        ],
      },
      {
        text: "Component",
        items: [
          { text: "User", link: "/appearance/user" },
          { text: "Room", link: "/appearance/room" },
          { text: "Message", link: "/appearance/message" },
          { text: "File", link: "/appearance/file" },
        ],
      },
      {
        text: "Layout",
        items: [
          { text: "Header", link: "/appearance/header" },
          { text: "Editable", link: "/appearance/editable" },
          { text: "Searchable", link: "/appearance/searchable" },
          { text: "Settings", link: "/appearance/settings" },
        ],
      },
    ],
  },
  socialLinks: [
    { icon: "github", link: "https://github.com/tsurumi-yizhou/Messenger" },
  ],
};

const frThemeConfig = {
  nav: [
    { text: "Accueil", link: "/fr/" },
    { text: "Guide", link: "/fr/guide" },
    { text: "Extension", link: "/fr/extension" },
    { text: "Apparence", link: "/fr/appearance" },
  ],
  sidebar: {
    "/fr/guide/": [
      {
        text: "Démarrage rapide",
        items: [
          { text: "Configuration", link: "/fr/guide/configuration" },
          { text: "Participer", link: "/fr/guide/contribution" },
        ],
      },
      {
        text: "Services Cloud",
        items: [
          { text: "Google", link: "/fr/guide/google" },
          { text: "Microsoft", link: "/fr/guide/microsoft" },
          { text: "Huawei", link: "/fr/guide/huawei" },
          { text: "AWS", link: "/fr/guide/aws" },
        ],
      },
    ],
    "/fr/extension/": [
      {
        text: "Coeur",
        items: [
          { text: "Salons", link: "/fr/extension/rooms" },
          { text: "Evenements", link: "/fr/extension/events" },
          { text: "Personnes", link: "/fr/extension/users" },
          { text: "Filters", link: "/fr/extension/filters" },
          { text: "Stockage", link: "/fr/extension/storage" },
        ],
      },
      {
        text: "Capabilities",
        items: [
          { text: "Connexion", link: "/fr/extension/login" },
          { text: "Appel", link: "/fr/extension/telecom" },
          { text: "Amis", link: "/fr/extension/friends" },
          { text: "Sportif", link: "/fr/extension/sports" },
          { text: "Position", link: "/fr/extension/location" },
          { text: "Pousser", link: "/fr/extension/pushers" },
          { text: "Payer", link: "/fr/extension/wallet" },
        ],
      },
    ],
    "/fr/appearance/": [
      {
        text: "Theme",
        items: [
          { text: "Couleur", link: "/fr/appearance/color" },
          { text: "Typographie", link: "/fr/appearance/typography" },
          { text: "Formes", link: "/fr/appearance/shapes" },
        ],
      },
      {
        text: "Composant",
        items: [
          { text: "Utilisateur", link: "/fr/appearance/user" },
          { text: "Chambre", link: "/fr/appearance/room" },
          { text: "Messsage", link: "/fr/appearance/message" },
          { text: "Document", link: "/fr/appearance/file" },
        ],
      },
      {
        text: "Combine",
        items: [
          { text: "Tete", link: "/fr/appearance/header" },
          { text: "Modifiable", link: "/fr/appearance/editable" },
          { text: "Consultable", link: "/fr/appearance/searchable" },
          { text: "Parametres", link: "/fr/appearance/settings" },
        ],
      },
    ],
  },
};

const zhThemeConfig = {
  nav: [
    { text: "首页", link: "/zh/" },
    { text: "指引", link: "/zh/guide" },
    { text: "拓展", link: "/zh/extension" },
    { text: "界面", link: "/zh/appearance" },
  ],
  sidebar: {
    "/zh/guide/": [
      {
        text: "快速开始",
        items: [
          { text: "配置", link: "/zh/guide/configuration" },
          { text: "贡献", link: "/zh/guide/contribution" },
        ],
      },

      {
        text: "第三方云服务",
        items: [
          { text: "Google", link: "/zh/guide/google" },
          { text: "Microsoft", link: "/zh/guide/microsoft" },
          { text: "Huawei", link: "/zh/guide/huawei" },
          { text: "AWS", link: "/zh/guide/aws" },
        ],
      },
    ],
    "/zh/extension/": [
      {
        text: "核心功能",
        items: [
          { text: "房间", link: "/zh/extension/rooms" },
          { text: "事件", link: "/zh/extension/events" },
          { text: "用户", link: "/zh/extension/users" },
          { text: "过滤器", link: "/zh/extension/filters" },
          { text: "存储", link: "/zh/extension/storage" },
        ],
      },
      {
        text: "能力",
        items: [
          { text: "登录", link: "/zh/extension/login" },
          { text: "电信", link: "/zh/extension/telecom" },
          { text: "好友", link: "/zh/extension/friends" },
          { text: "运动", link: "/zh/extension/sports" },
          { text: "位置", link: "/zh/extension/location" },
          { text: "推送", link: "/zh/extension/pushers" },
          { text: "支付", link: "/zh/extension/wallet" },
        ],
      },
    ],
    "/zh/appearance/": [
      {
        text: "主题",
        items: [
          { text: "颜色", link: "/zh/appearance/color" },
          { text: "排版", link: "/zh/appearance/typography" },
          { text: "形状", link: "/zh/appearance/shapes" },
        ],
      },
      {
        text: "组件",
        items: [
          { text: "用户", link: "/zh/appearance/user" },
          { text: "房间", link: "/zh/appearance/room" },
          { text: "消息", link: "/zh/appearance/message" },
          { text: "文件", link: "/zh/appearance/file" },
        ],
      },
      {
        text: "布局",
        items: [
          { text: "标题栏", link: "/zh/appearance/header" },
          { text: "编辑状态", link: "/zh/appearance/editable" },
          { text: "搜索状态", link: "/zh/appearance/searchable" },
          { text: "设置", link: "/zh/appearance/settings" },
        ],
      },
    ],
  },
};

export default defineConfig({
  title: "Messenger Doc",
  description: "General Instant Messaging App",
  themeConfig: enThemeConfig,
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    fr: {
      label: "Français",
      lang: "fr",
      themeConfig: frThemeConfig,
    },
    zh: {
      label: "汉语",
      lang: "zh",
      themeConfig: zhThemeConfig,
    },
  },
});
