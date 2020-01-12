const generateOverride = (params) => {
  let result = '';
  let headerClass = 'header'
  if (params.scheme === 'mist') {
    headerClass = 'blog-header'
  }
  if (params.viewportWidth) {
    result += `
      .${headerClass} {
        width: ${params.viewportWidth};
        margin: 0 auto;
      }

      .main-continer {
        width: ${params.viewportWidth};
        margin: 0 auto;
      }
    `
  }
  return result;
}

module.exports = generateOverride