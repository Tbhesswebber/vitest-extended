// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/palenight");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "vitest-extended",
  tagline: "Additional Vitest matchers",
  url: "https://jest-extended.jestcommunity.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/tbhesswebber/vitest-extended",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.svg",
      metadata: [
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      navbar: {
        title: "Vitest Extended",
        logo: {
          alt: "Vitest Extended Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs",
            position: "left",
            label: "Docs",
            activeBaseRegex: "/docs(/+)$",
          },
          {
            to: "/docs/matchers",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/tbhesswebber/vitest-extended",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.npmjs.com/package/vitest-extended",
            label: "npm",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting started",
                to: "/docs/getting-started/install",
              },
              {
                label: "Matchers",
                to: "/docs/matchers",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/tbhesswebber/vitest-extended",
              },
              {
                label: "npm",
                href: "https://www.npmjs.com/package/vitest-extended",
              },
              {
                label: "Vitest",
                href: "https://vitest.dev/",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023${
          new Date().getFullYear() > 2023 ? " - " + new Date().getFullYear() : ""
        } vitest-extended. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "0G1WPXJO0X",
        apiKey: "b51f7a01acc0ba8e5d1dff3c1cd898e0",
        indexName: "vitest-extended-docs",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
