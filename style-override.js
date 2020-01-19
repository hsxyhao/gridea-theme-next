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
      background-color: ${bgColor};
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
      }
  }

  // 目录
  if (params.hoverColor) {
    result += `.markdownIt-TOC a:hover {
      color: ${params.hoverColor};
      border-bottom-color: ${params.hoverColor};
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
      result += `.site-nav, .sidebar-wrapper, .section-box, .sidebar-box, .site-nav {
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
      result += `
      .mist .header{
        background-color: transparent;
      }
      .blog-header {
        opacity: ${opacity};
        background-color: #fff;
      }
      .section-layout.mist {
        opacity: ${opacity};
      }`
    }
  }

  if (params.headerImg) {
    if (params.scheme === 'muse') {
      result += `
        .header-box {
          background-image: url(${params.headerImg});
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
          background: rgba(255,255,255,0.9) none repeat scroll !important;
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
      background: ${params.bgTitleColor};
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
    result += `
    .brand {
      font-weight: bold;
      transform: scale(${params.bgTitleFontSize});
    }
    `
  }

  return result;
}

module.exports = generateOverride