import { css } from "styled-components";

export const FontFace = css`
  /* inter-200 - latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    src: local(""), url("/fonts/inter/inter-v8-latin-200.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/inter/inter-v8-latin-200.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* inter-regular - latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: local(""),
      url("/fonts/inter/inter-v8-latin-regular.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/inter/inter-v8-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* inter-600 - latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    src: local(""), url("/fonts/inter/inter-v8-latin-600.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/inter/inter-v8-latin-600.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* inter-700 - latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    src: local(""), url("/fonts/inter/inter-v8-latin-700.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/inter/inter-v8-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* inter-900 - latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    src: local(""), url("/fonts/inter/inter-v8-latin-900.woff2") format("woff2"),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url("/fonts/inter/inter-v8-latin-900.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;