// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "We are ready to help you",
  tagline:
    "Discover solutions and tips in our FAQ to enhance your journey with PINTAR",
  favicon: "assets/favicon.png",

  // Set the production url of your site here
  url: "https://help.stg.pintar.co.id",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pintar-Community", // Usually your GitHub org/user name.
  projectName: "help.stg.pintar.co.id", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "id",
    locales: ["en", "id"],
    localeConfigs: {
      id: {
        label: "Bahasa Indonesia",
        htmlLang: "id-ID",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/Pintar-Pemenang-Asia/help.pintar.co/blob/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/Pintar-Pemenang-Asia/help.pintar.co/blob/main/',
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
      // Replace with your project's social card
      image: "assets/Pintar-Logogram-Red-Cutout.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Pintar Logo",
          src: "assets/Pintar-Logotype-Red-Cutout.png",
        },
        items: [
          { to: "/", label: "Home", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "enterprise",
            position: "left",
            label: "Enterprise",
          },
          {
            type: "docSidebar",
            sidebarId: "opportunity",
            position: "left",
            label: "Opportunity",
          },
          {
            type: "docSidebar",
            sidebarId: "degrees",
            position: "left",
            label: "Degrees",
          },
          {
            type: "docSidebar",
            sidebarId: "skills",
            position: "left",
            label: "Skills",
          },
          {
            type: "docSidebar",
            sidebarId: "prakerja",
            position: "left",
            label: "Prakerja",
          },
          {
            type: "docSidebar",
            sidebarId: "lms",
            position: "left",
            label: "LMS",
          },
          {
            type: "docSidebar",
            sidebarId: "userprofile",
            position: "left",
            label: "User Profile",
          },
          {
            type: "docSidebar",
            sidebarId: "others",
            position: "left",
            label: "Others",
          },
          {
            type: "docSidebar",
            sidebarId: "faq",
            position: "left",
            label: "FAQ",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            type: "localeDropdown",
            position: "right",
          },
          // {
          //   type: "html",
          //   position: "right",
          //   value:
          //     "<a class='button-login' href='https://pintar.co/id/home/auth'>Login</>",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "PINTAR",
            items: [
              {
                label: "Tentang Kami",
                href: "https://pintar.co/id/about-us?type=ABOUT_US",
              },
              {
                label: "Snacks",
                href: "https://pintar.co/id/snacks",
              },
              {
                label: "Promosi",
                href: "#",
              },
              {
                label: "Acara",
                href: "#",
              },
              {
                label: "Karier",
                href: "#",
              },
            ],
          },
          {
            title: "PRODUK",
            items: [
              {
                label: "Korporasi",
                href: "https://enterprise.pintar.co/",
              },
              {
                label: "Kuliah",
                href: "https://degrees.pintar.co/",
              },
              {
                label: "Opportunity",
                href: "#",
              },
              {
                label: "Kursus",
                href: "https://skills.pintar.co/",
              },
              {
                label: "Prakerja",
                href: "https://skills.pintar.co/prakerja",
              },
            ],
          },
          {
            title: "Connect with us",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/pintar_co/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/@PINTAR_CO",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@pintar_co",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/pintarco/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PT. PINTAR PEMENANG ASIA.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
