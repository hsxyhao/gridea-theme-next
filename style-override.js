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
    console.log(123)
    result += 
    `@font-face {
      font-family: '${params.fontFamily}';
      src: url('/media/fonts/${params.fontFamily}.ttf');
    }
    * {
        font-family: '${params.fontFamily}';
    }`
  }

  return result;
}

module.exports = generateOverride