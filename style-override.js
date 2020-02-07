const generateOverride = (params) => {
  let result = '';
  let headerClass = 'header'
  // 默认配置
  if (!params.bgColor) {
    let bgColor = '';
    if (params.scheme === 'mist') {
        headerClass = 'blog-header'
        result += `.mist .header {
          background-color: #F5F5F3;
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
      src: url('/media/fonts/${params.fontFamily}.ttf');
    }
    * {
        font-family: '${params.fontFamily}';
    }`
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
    result += `
    .archive-timeline-box::after, .tag-timeline-wrapper::after {
      background: ${params.fontColor};
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

  if (params.postSectionBgColor) {
    result += `.bg-color {
      background-color: ${params.postSectionBgColor};
    }`
  } else {
    result += `.bg-color {
      background-color: transparent;
    }`
  }

  if (params.linkColor) {
    result += `a {
      color: ${params.linkColor};
    }
    
    .next-md-body a, .friends-box a  {
      color: ${params.linkColor};
      border-bottom: 1px solid ${params.linkColor};
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
    result += `.nav-item-active {
      background: ${params.menuActiveColor};
    }

    .nav-item:hover {
      background: ${params.menuActiveColor};
      color: rgba(0, 0, 0, 0.98);
    }`
  }

  // 特性
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

  // 魔改

  if (params.opacity) {
    let opacity = 0.85;
    try {
      opacity = parseFloat(params.opacity) / 100.0
      if (opacity < 0 || opacity > 1) {
        opacity = 0.85;
        console.warn("Opacity ill，use default value of 0.85");
      }
    } catch(err) {
      console.warn("Opacity parse float error，use default value of 0.85")
    }
    if (params.scheme === 'pisces' || params.scheme === 'gemini') {
      // 首页 阅读页 归档 标签
      result += `.site-nav, .sidebar-wrapper, .section-box, .sidebar-box, .site-nav, .blog-header {
        opacity: ${opacity};
      }`
    } else if (params.scheme === 'muse'){
      // 首页 阅读页 归档 标签
      result += `.header {
        opacity: ${opacity};
        background-color: #fff;
      }
      .muse.section-layout {
        opacity: ${opacity};
      }`
    } else {
      // 首页 阅读页 归档 标签
      result += `.section-layout {
        opacity: ${opacity} !important;
      }`
    }
  }

  if (params.headerImg) {
    if (params.scheme === 'muse') {
      result += `
        .header-box {
          background-image: url(${params.headerImg});
          background-attachment: fixed;
        }
        .muse .blog-header {
          padding: 50px 0 0 !important;
          background-color: transparent !important;
          overflow: unset !important;
        }
        .site-nav ul {
          background: rgba(255,255,255,0.65);
          box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.15);
          padding: 10px 100px !important;
        }
        .site-nav {
          margin: 40px 0 0 !important;
        }
        .muse.section-layout {
          padding: 0px !important;
          background-color: transparent !important;
        }
        .muse .post {
          padding: 20px 40px !important;
          -webkit-box-shadow: 0 0 50px rgba(202,203,203,0.5);
          -moz-box-shadow: 0 0 5px rgba(202,203,204,0.5);
        }
      `;
    } else if (params.scheme === 'pisces' || params.scheme === 'gemini') {
      result += `.site-meta {
        background: transparent !important;
        background-image: url(${params.headerImg}) !important;
      }`;
    }
    
  }

  if (params.bgSiteMetaColor) {
    result += `
      .site-meta {
        background: ${params.bgSiteMetaColor} !important;
      }`;
  }

  if (params.siteMetaImg) {
    result += `.sidebar {
      background-image: url(${params.siteMetaImg}) !important;
    }
    .sidebar-item-box a {
      color: #eee;
    }
    .friends-title {
      color: #eee;
      border-top: 1px dotted #fff;
    }
    .friends-box a {
      color: #eee;
      border-bottom: 1px solid #eee;
    }
    .toc-wrapper a {
      color: #eee;
      border-bottom: 1px solid #eee;
    }
    .sidebar-title-item {
      color: #eee;
    }
    `
  }

  if (params.bgTitleColor) {
    result += `
    .brand {
      background: ${params.bgTitleColor} !important;
    }
    `
  } else {
    result += `
    .brand {
      background: transparent !important;
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
    result += `.main-title {
      color: ${params.blogTitleColor};
    }
    .mist .site-title i {
      background: ${params.blogTitleColor};
    }`
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
  
  return result;
}

module.exports = generateOverride