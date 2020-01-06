const generateOverride = (params) => {
  let result = '';
  console.log(`params: ${JSON.stringify(params)}`)
  
  if (params.viewportWidth && params.viewportWidth !== '960px') {
    result += `
      .viewport {
        width: ${params.viewportWidth};
      }
    `
  }
  console.log(`result: ${result}`)
  return result;
}

module.exports = generateOverride