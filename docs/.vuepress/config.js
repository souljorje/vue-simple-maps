const path = require('path');

const themeColor = '#3eaf7c';

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'vue-simple-maps',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentation for the vue-simple-maps',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: themeColor }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', {
      rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png',
    }],
    ['link', {
      rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png',
    }],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#3a0839' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/souljorje/vue-simple-maps',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Edit page on GitHub',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'Examples',
        link: '/examples/',
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/getting-started',
        ],
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          '/api/',
        ],
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/examples/',
          '/examples/markers',
          '/examples/zoom-and-drag',
          '/examples/projections-and-maps',
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    ['vuepress-plugin-code-copy', {
      color: themeColor,
    }],
  ],

  alias: {
    '#': path.resolve(process.cwd()),
    '@': path.resolve(process.cwd(), 'src'),
  },
};
