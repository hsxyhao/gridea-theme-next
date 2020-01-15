const generateOverride = (params) => {
  let result = '';
  let headerClass = 'header'
  if (params.scheme === 'mist') {
    headerClass = 'blog-header'
  }
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

  if (params.sideIsRight) {
    if (params.scheme === 'pisces' || params.scheme === 'gemini') {
        result += `.pisces .blog-header, .gemini .blog-header {
          right: 0;
        }`
    
        result += `
        .pisces .section-layout-wrapper, .gemini .section-layout-wrapper {
          flex-direction: row-reverse;
        }`
    
        result +=  `.pisces .sidebar, .gemini .sidebar {
          right: 0;
        }`
      }
  }

  if (params.pageBgColor) {
    result += `body {
      background-color: ${params.pageBgColor}
    }`

    if (params.scheme === 'mist') {
      result += `.mist .header {
        background-color: transparent !important;
      }`
    }
  }

  return result;
}

module.exports = generateOverride