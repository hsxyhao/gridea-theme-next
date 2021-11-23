function toHexColor(color, opacity) {
  opacity = opacity || 255;
  if (color.length === 4) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}${opacity.toString(16)}`;
  } else if (color.length === 7) {
    return `${color}${opacity.toString(16)}`;
  }
  return color;
}

const generateOverride = (params) => {
  let result = '';
  let headerClass = 'header'
  let cdn = params.cdn || '';
  let opacity = 100;

  if (!params.enableMobileImg) {
    result += `
    @media (max-width: 767px) {
      .bg-img img {
        display: none;
      }
    }`;
  }

  if (params.opacity) {
    try {
      opacity = parseFloat(params.opacity)
      if (opacity < 0 || opacity > 100) {
        opacity = 85;
        console.warn("Opacity ill，use default value of 0.85");
      }
    } catch(err) {
      console.warn("Opacity parse float error，use default value of 0.85")
    }
  }

  if (opacity < 100) {
    result += `.bg-color .bg-color {
      background: transparent !important;
    }`
  }
  let ratio = parseInt(255 / 100.0 * opacity);

  // 默认配置
  if (!params.bgColor) {
    let bgColor = '';
    if (params.scheme === 'mist') {
        headerClass = 'blog-header'
        result += `.mist .header {
          background-color: #F5F5F3${ratio.toString(16)};
        }`
        bgColor = '#fff';
    } else if (params.scheme === 'muse') {
      bgColor = '#fff';
    } else if (params.scheme === 'pisces') {
      bgColor = '#f9f9f9';
    } else if (params.scheme === 'gemini') {
      bgColor = '#f9f9f9';
    } else {
      bgColor = '#fff';
    }
    bgColor = toHexColor(bgColor, ratio);
    result += `body {
      background-color: ${bgColor} !important;
    }`
  } else {
    result += `body {
      background-color: ${params.bgColor};
    }`
  }

  // 布局
  if (params.viewportWidth) {
    result += 
      `.${headerClass} {
        width: ${params.viewportWidth};
        margin: 0 auto;
      }

      .main-continer {
        width: ${params.viewportWidth};
        margin: 0 auto;
      }
    `
  }

  if (params.fontFamily) {
    result += 
    `@font-face {
      font-family: '${params.fontFamily}';
      src: url('${cdn}/media/fonts/${params.fontFamily}.ttf');
    }
    * {
        font-family: '${params.fontFamily}';
    }
    .katex-block *{
      font-family: 'KaTeX_Main';
    }
    `
  }

  if (params.fontSize && params.fontSize !== '') {
    result += `
    .post-body {
      font-size: ${params.fontSize}px !important
    }
    `
  }

  // 颜色
  if (params.fontColor) {
    result += `body {
      color: ${params.fontColor};
    }
    .next-md-body {
      color: ${params.fontColor};
    }
    .next-md-body h1, .next-md-body h2 {
      border-bottom-color: ${params.fontColor};
    }`
  }

  if (params.timeLineColor) {
    let color = toHexColor(params.timeLineColor, ratio);
    result += `
    .archive-timeline-box::after, .tag-timeline-wrapper::after {
      background: ${color};
    }`
  }

  if (params.titleColor) {
    result += `h1, h2, h3, h4, h5, h6 {
      color: ${params.titleColor};
    }
    
    .archive-timeline-title::before {
      background-color: ${params.titleColor};
    }
    
    .post-title-link::before {
      background-color: ${params.titleColor};
    }
    
    .node-title::before {
      background-color: ${params.titleColor};
    }`
  }

  if (params.linkColor) {
    result += `a {
      color: ${params.linkColor};
    }
    
    .next-md-body a, .friends-box a  {
      color: ${params.linkColor};
    }`
  }

  if (params.linkHoverColor) {
    result += `a:hover {
      color: ${params.linkHoverColor};
    }
    
    .archive-timeline-box .tag-node:hover::before {
      background-color: ${params.linkHoverColor};
    }
    
    .markdownIt-TOC a:hover {
      color: ${params.linkHoverColor};
      border-bottom-color: ${params.linkHoverColor};
    }

    .next-md-body a:hover, .friends-box a:hover {
      color: ${params.linkHoverColor};
      border-bottom-color: ${params.linkHoverColor};
    }`
  }
  
  if (params.mobileMenuBtnColor) {
    result += `.nav-toggle .line {
      background-color: ${params.mobileMenuBtnColor} !important;
    }`;
  } else {
    result += `
    .nav-toggle .line {
      background-color: ${params.mobileMenuBtnColor} !important;
    }`;
  }

  if (params.menuColor) {
    if (params.scheme === 'muse') {
      result += `.nav-item a {
        color: ${params.menuColor};
      }
      .nav-item-active a {
        color: ${params.menuColor};
        border-bottom: 1px solid ${params.menuColor} !important;
      }`
    } else {
      result  +=  `
      .nav-item a {
        color:  ${params.menuColor};
      }`
    }
  }

  if (params.menuHoverColor) {
    if (params.scheme === 'muse') {
      result += `.nav-item a:hover {
        color: ${params.menuHoverColor};
        border-bottom: 1px solid ${params.menuHoverColor} !important;
      }`
    } else {
      result += `.nav-item a:hover {
        color: ${params.menuHoverColor};
      }`
    }
  }

  if (params.menuActiveColor) {
    let color = toHexColor(params.menuActiveColor, ratio);
    result += `.nav-item-active {
      background: ${color};
    }

    .nav-item:hover {
      background: ${color};
      color: rgba(0, 0, 0, 0.98);
    }`
  }

  // 特性
  if (params.imgFillet) {
    // copy from juejin
    result += `.site-author-image {
      border-radius: 50%;
    }
    .site-author-image:hover {
      transform: rotate(666turn);
      transition-delay: 1s;
      transition-property: all;
      transition-duration: 59s;
      transition-timing-function: cubic-bezier(.34,0,.84,1);
    }`;
  }

  if (params.sideIsRight) {
    if (params.scheme === 'pisces' || params.scheme === 'gemini') {
      result += `.pisces .blog-header, .gemini .blog-header {
        right: 0;
      }`
  
      result += `
      .pisces .section-layout-wrapper, .gemini .section-layout-wrapper {
        flex-direction: row-reverse !important;
      }`
  
      result +=  `.pisces .sidebar, .gemini .sidebar {
        right: 0;
      }`
    } else {
      result += `.muse .sidebar, .mist .sidebar {
        right: 0 !important;
        left: auto !important;
      }
      .drawer-box {
        right: 30px !important;
        left: auto !important;
      }
      `
    }
  }

  // 目录
  if (params.indexColor) {
    result += `.markdownIt-TOC a {
      color: ${params.indexColor};
      border-bottom-color: ${params.indexColor};
    }`
  } else {
    let colorStr = '#000';
    if (params.scheme === 'mist' || params.scheme === 'muse') {
      colorStr = '#fff';
    }
    result += `.markdownIt-TOC a {
      color: ${colorStr};
      border-bottom-color: ${colorStr};
    }`
  }

  if (params.indexHoverColor) {
    result += `.markdownIt-TOC a:hover {
      color: ${params.indexHoverColor};
      border-bottom-color: ${params.indexHoverColor};
    }`
  } else {
    let colorStr = '#000';
    if (params.scheme === 'mist' || params.scheme === 'muse') {
      colorStr = '#fff';
    }
    result += `.markdownIt-TOC a:hover {
      color: ${colorStr};
      border-bottom-color: ${colorStr};
    }`
  }

  if (params.indexActiveColor) {
    result += `.active-current > a {
      color: ${params.indexActiveColor} !important;
      border-bottom-color: ${params.indexActiveColor} !important;
    }
    .sidebar-title-active {
      color: ${params.indexActiveColor};
      border-bottom-color: ${params.indexActiveColor};
    }
    .sidebar-title-item:hover {
      color: ${params.indexActiveColor} !important;
    }
    .active-show > a {
      color: ${params.indexActiveColor};
      border-bottom-color: ${params.indexActiveColor};
    }
    .active-hidden > a {
      color: ${params.indexActiveColor};
      border-bottom-color: ${params.indexActiveColor};
    }`
  } else {
    result += `.active-current > a {
      color: #fc6423 !important;
      border-bottom-color: #fc6423 !important;
    }
    .sidebar-title-active {
      color: #fc6423 !important;
      border-bottom-color: #fc6423 !important;
    }
    .sidebar-title-item:hover {
      color: #fc6423 !important;
    }
    .active-show > a {
      color: #fc6423;
      border-bottom-color: #fc6423;
    }
    .active-hidden > a {
      color: #fc6423;
      border-bottom-color: #fc6423;
    }`
  }
  // 赞赏

  if (params.enableReward) {
    if (params.rewardBgColor) {
      result += `.reward-btn-text {
        background-color: ${toHexColor(params.rewardBgColor, ratio)} !important;
      }`
    }
  }

  // 魔改
  if (params.postSectionBgColor) {
    let color = toHexColor(params.postSectionBgColor, ratio);
    result += `.bg-color {
      background-color: ${color};
    }`
  } else {
    result += `.bg-color {
      background-color: #ffffff${ratio.toString(16)};
    }`
  }

  if (params.radius) {
    result += `
    .gemini .blog-header, .gemini .sidebar-wrapper, .gemini .article-wrapper, .gemini .post, .gemini .page, .gemini .section, .gemini .section-box, .gemini .sidebar-box, .gemini .friends-section {
      border-radius: ${params.radius}px;
    }
    .pisces .blog-header, .pisces .sidebar-wrapper, .pisces .article-wrapper, .pisces .section, .pisces .sidebar-box, .pisces .friends-section {
      border-radius: ${params.radius}px;
    }`
  }

  if (params.bgSiteMetaColor) {
    let color = params.bgSiteMetaColor;
    result += `
    .site-meta {
      background: ${color} !important;
    }
    .head-top-line {
      background: ${color};
    }`;
  } else {
    result += `
    .head-top-line {
      background: #222;
    }`;
  }

  // 加载
  if (params.loadAnimationStyle) {

    let color = params.bgSiteMetaColor || '#222';
    if (params.loadAnimationStyle.includes('pace-theme-minimal.css')) {
      result += `
      .pace .pace-activity {
        border-top-color: ${color} !important;
        border-left-color: ${color} !important;
      }
      .pace .pace-progress {
        background-color: ${color} !important;
      }
      .pace-running .head-top-line {
        background: transparent;
      }`;
    } else if (params.loadAnimationStyle.includes('pace-theme-center-simple.css')) {
      result += `
      .pace {
        border: 1px solid ${color} !important;
      }
      .pace .pace-progress {
        background: ${color} !important;
      }`;
    } else if (params.loadAnimationStyle.includes('pace-theme-center-radar.css')) {
      result += `.pace .pace-activity {
        border-color: ${color} transparent transparent;
      }
      .pace .pace-activity:before {
        border-color: ${color} transparent transparent;
      }`
    } else if (params.loadAnimationStyle.includes('pace-theme-bounce.css') || params.loadAnimationStyle.includes('pace-theme-corner-indicator.css')) {
      result += `.pace .pace-activity {
        background: ${color} !important;
      }`
    } else if (params.loadAnimationStyle.includes('pace-theme-big-counter.css')) {
      result += `
      .pace .pace-activity {
        border-top-color: ${color} !important;
        border-left-color: ${color} !important;
      }
      .pace-running .head-top-line {
        background: transparent;
      }`;
    } else if (params.loadAnimationStyle.includes('pace-theme-center-circle.css')) {
      result += `.pace .pace-progress {
        background: ${color} !important;
      }`
    } else if (params.loadAnimationStyle.includes('pace-theme-loading-bar.css')) {
      result += `.pace .pace-activity {
        box-shadow: inset 0 0 0 2px ${color}, inset 0 0 0 7px #FFF !important;
      }
      .pace .pace-progress {
        background: ${color} !important;
        color: ${color} !important;
      }`
    }
  }

  if (params.bgTitleColor) {
    let color = toHexColor(params.bgTitleColor, ratio);
    result += `
    .brand {
  
    }
    `
  } else {
    result += `
    .brand {
      background: transparent;
    }
    `
  }

  if (params.bgTitleFontSize) {
    if (params.scheme === 'mist') {
      result += `.site-title {
        transform: scale(${params.bgTitleFontSize});
      }`
    } else {
      result += `
      .brand {
        font-weight: bold;
        transform: scale(${params.bgTitleFontSize});
      }`
    }
  }

  if (params.blogTitleColor) {
    let color = toHexColor(params.blogTitleColor, ratio);
    result += `.main-title, .brand {
      color: ${params.blogTitleColor} !important;
    }
    .mist .site-title i {
      background: ${color};
    }`
  }

  if (params.cssStr) {
    result += params.cssStr;
  }

  if (params.blur) {
      result += `.bg-img img {
        filter: blur(${params.blur}px)
      }`
  }

  // 看板娘
  if (params.scale) {
    let scale = params.scale;
    if (scale < 0 || scale > 1) {
      scale = 1;
    }
    result += `.box-scale > #landlord {
      transform: scale(${scale});
    }`
  }

  if (params.bgImg && params.scheme === 'gemini') {
    result += `.box-shadow-wrapper {
      padding: 10px;
    }`
  }

  if (!params.shadow) {
    result += `.box-shadow-wrapper {
      box-shadow: none !important;
    }`
  }

  if (params.cursorDefault) {
    result += `body {
      cursor: url('${cdn}/media/curs/${params.cursorDefault}.cur'), default;
    }`
  } else {
    result += `body {
      cursor: default;
    }`
  }

  if (params.cursorLink) {
    result += `a {
      cursor: url('${cdn}/media/curs/${params.cursorLink}.cur'), pointer !important;
    }`
  } else {
    result += `a {
      cursor: pointer;
    }`
  }

  if (params.cursorText) {
    result += `input, textarea, code {
      cursor: url('${cdn}/media/curs/${params.cursorText}.cur'), text !important;
    }`
  } else {
    result += `input, textarea, code {
      cursor: text;
    }`
  }

  if (params.cursorCopy) {
    result += `code > span.copy-code {
      cursor: url('${cdn}/media/curs/${params.cursorCopy}.cur'), text !important;
    }`
  } else {
    result += `code > span.copy-code {
      cursor: pointer;
    }`
  }
  
  if (params.cursorZoomin) {
    result += `.post img {
      cursor: url('${cdn}/media/curs/${params.cursorZoomin}.cur'), zoom-in !important;
    }`
  } else {
    result += `.post img {
      cursor: zoom-in;
    }`
  }


  if (params.cursorZoomout) {
    result += `.post img {
      cursor: url('${cdn}/media/curs/${params.cursorZoomout}.cur'), zoom-out !important;
    }`
  } else {
    result += `.post img {
      cursor: zoom-out;
    }`
  }

  return result;
}

module.exports = generateOverride
