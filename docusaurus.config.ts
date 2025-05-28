import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Ethers.js 教程",
  favicon: "img/favicon.ico",
  scripts: [
    {
      src: "//sdk.51.la/js-sdk-pro.min.js",
      async: true,
      defer: true,
    },
  ],
  // Set the production url of your site here
  url: "https://ethersjs.cn",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xjh22222228", // Usually your GitHub org/user name.
  projectName: "ethers-tutorial", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/xjh22222228/ethers-tutorial",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-live-codeblock"],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Ethers.js v6教程",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "快速上手",
        },
        {
          href: "https://github.com/xjh22222228/ethers-tutorial",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "资源",
          items: [
            {
              label: "ethers.js",
              href: "https://ethers.org/",
            },
            {
              label: "以太坊",
              href: "https://ethereum.org/zh/",
            },
            {
              label: "web3资源",
              href: "https://nav3.cn/#/?id=25",
            },
          ],
        },
        {
          title: "关注",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/xjh22222228/ethers-tutorial",
            },
            {
              label: "Author",
              href: "https://github.com/xjh22222228",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} xiejiahe, All Rights Reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
