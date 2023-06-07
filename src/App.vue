<template>
  <home-page></home-page>
</template>

<script>
import HomePage from './pages/HomePage.vue';

export default {
  components: {
    HomePage
  }
};
</script>

<style>
@import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap';

:root {
  /* 品牌主色 */
  --primary-400: #A94FB7;
  --primary-300: #AE56BA;
  --primary-200: #C688CE;
  --primary-100: #F7EEF8;

  /* 品牌輔助色 */
  --secondary-400: #314659;
  --secondary-300: #6C7A87;
  --secondary-200: #82909C;
  --secondary-100: #C0C7CE;

  /* 警示色系-產品內高度提醒的相關顏色，也用於價格與優惠顯示上 */
  --red-500: #A70012;
  --red-400: #D4949B;
  --red-300: #CDA1A1;
  --red-200: #EDC3B7;
  --red-100: #F8EBE6;

  /* 藍色-主要用於連結 */
  --blue-400: #1964E4;
  --blue-300: #4397E8;
  --blue-200: #8CC0F6;
  --blue-100: #F3F8FE;

  /* 綠色-主要用於成功狀態，或是綠色需要 */
  --green-500: #009D00;
  --green-400: #0AAE40;
  --green-300: #4FB974;
  --green-200: #90C4A0;
  --green-100: #E7F8EC;

  /* 無彩色 */
  --gray-900: #000;
  --gray-400: #D1D1D1;
  --gray-300: #EEE;
  --gray-200: #F9F9F9;
  --gray-100: #FFF;

  /* box-shadow */
  --box-shadow-1: 0 2px 10px 0 rgba(0, 0, 0, 0.08);

  /* border-radius */
  --border-radius-md: 6px;
  --border-radius-sm: 2px;
  --border-radius-rounded-btn: 50px;

  /* font-size */
  --header-1: 30px;
  --header-2: 18px;
}

/* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  padding: 0;
  margin: 0;
  font-size: 100%;
  border: 0;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.4px;
  color: var(--secondary-400);
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote::before, blockquote::after,
q::before, q::after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

p {
  font-size: 14px;
  color: var(--secondary-300);
  line-height: 150%;
}

img {
  max-width: 100%;
  height: auto;
  border: 0;
  vertical-align: middle;
}

input:focus,
textarea:focus {
    outline: none !important;
}

a {
  text-decoration: none;
}

a:active,
a:visited {
  color: var(--secondary-400);
}

.d-flex {
  display: flex;
}

.m-top--xs {
  margin-top: 2%;
}

.m-top--sm {
  margin-top: 4%;
}

.m-top--md {
  margin-top: 6%;
}

.m-top--lg {
  margin-top: 8%;
}

.m-top--xl {
  margin-top: 10%;
}

.m-top--xxl {
  margin-top: 14%;
}

.m-top--3xl {
  margin-top: 18%;
}

.m-bottom--xxs {
  margin-bottom: 1%;
}

.m-bottom--xs {
  margin-bottom: 2%;
}

.m-bottom--sm {
  margin-bottom: 4%;
}

.m-bottom--md {
  margin-bottom: 8%;
}

.m-bottom--xl {
  margin-bottom: 10%;
}

.layout--main {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}

</style>
