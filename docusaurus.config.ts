import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Bluefin",
  tagline: "Bluefin Documentation Resources",
  favicon: "img/favicon.ico",

  url: "https://docs.projectbluefin.io/",
  baseUrl: "/",

  future: {
    experimental_faster: true,
  },

  // GitHub pages deployment config.
  organizationName: "ublue-os",
  projectName: "bluefin",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Disables the landing page
          routeBasePath: "/",
          editUrl: "https://github.com/ublue-os/bluefin-docs/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "H1LI1VATRI",
      // Public API key: it is safe to commit it
      apiKey: "201fbeeb537ae90f533bedcb5a73230b",
      indexName: "projectbluefin",
      contextualSearch: true,
      searchPagePath: "search",
    },
    announcementBar: {
      id: 'announcement',
      content:
        'Keep up with the latest by <a href="https://universal-blue.discourse.group/tag/bluefin-news">following the announcements feed!</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    metadata: [
      {
        name: "keywords",
        content:
          "documentation, bluefin, universalblue, linux, gnome, podman, docker, cloudnative",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],

    // Social card that shows up on discord when you share it
    image: "img/meta.png",
    navbar: {
      title: "Bluefin",
      logo: {
        alt: "Bluefin",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "baseSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://projectbluefin.io/",
          label: "Website",
          position: "right",
        },
        {
          href: "https://community.projectbluefin.io/",
          label: "Community",
          position: "right",
        },
        {
          href: "https://feedback.projectbluefin.io/",
          label: "Feedback",
          position: "right",
        },
        {
          href: "https://github.com/ublue-os/bluefin",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Universal Blue",
          items: [
            {
              label: "Aurora",
              href: "https://getaurora.dev",
            },
            {
              label: "Bazzite",
              href: "https://bazzite.gg/",
            },
            {
              label: "uCore",
              href: "https://github.com/ublue-os/ucore",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Answer Overflow",
              href: "https://www.answeroverflow.com/c/1072614816579063828",
            },
            {
              label: "Discord",
              href: "https://discord.gg/WEu6BdFEtp",
            },
            {
              label: "Forum",
              href: "https://community.projectbluefin.io/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ublue-os/bluefin",
            },
            {
              label: "Documentation on GitHub",
              href: "https://github.com/ublue-os/bluefin-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project Bluefin and Universal Blue`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
