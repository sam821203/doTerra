<template>
  <home-page></home-page>
</template>

<script>
import HomePage from './pages/HomePage.vue';

export default {
  components: {
    HomePage
  }
}
</script>

<style>
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
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
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

.m-bottom--xl {
  margin-bottom: 10%;
}

img {
  max-width: 100%;
  height: auto;
  border: 0;
  vertical-align: middle;
}

.layout--main {
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}
</style>
