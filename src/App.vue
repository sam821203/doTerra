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
@import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap';

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
  --box-shadow-2: 0 8px 16px 0 rgba(0, 0, 0, 0.1);

  /* border-radius */
  --border-radius-md: 6px;
  --border-radius-sm: 2px;
  --border-radius-rounded-btn: 50px;
  --border-radius-circle: 50%;

  /* font-size */
  --header-1: 42px;
  --header-2: 30px;
  --header-3: 18px;
  --header-6: 12px;
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
  letter-spacing: 0.3px;
  color: var(--secondary-400);
}

section:not(.stretch) {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}

h1 {
  font-size: var(--header-1);
}

h2 {
  font-size: var(--header-2);
}

h3 {
  font-size: var(--header-3);
  line-height: 140%;

}

h6 {
  font-size: var(--header-6);
  font-weight: 400;
  color: var(--secondary-100);
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

button {
  border: none;
}

.d-flex {
  display: flex;
}

.mt-xs {
  margin-top: 2%;
}

.mt-sm {
  margin-top: 4%;
}

.mt-md {
  margin-top: 6%;
}

.mt-lg {
  margin-top: 8%;
}

.mt-xl {
  margin-top: 10%;
}

.mt-xxl {
  margin-top: 14%;
}

.mt-3xl {
  margin-top: 18%;
}

.mb-xxs {
  margin-bottom: 1%;
}

.mb-xs {
  margin-bottom: 2%;
}

.mb-sm {
  margin-bottom: 4%;
}

.mb-md {
  margin-bottom: 8%;
}

.mb-xl {
  margin-bottom: 32px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  background: #fff;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.layout--main {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}

.currency {
  margin-right: 4px;
  font-size: 14px;
  font-weight: 400;
}
</style>
