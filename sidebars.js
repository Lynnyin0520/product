/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const fs = require('fs')

const generateItem = (menu) => {
  const getCategory = []
  let dir = fs.readdirSync(`docs/${menu}`)
  dir.forEach(dirname => {
    const isFile = fs.statSync(`docs/${menu}/${dirname}`).isFile()
    if(isFile){
      let fileName = dirname.replace(/(\.md|\.mdx)$/i, '')
      let menuFile = `${menu}/${fileName}`
      getCategory.push(menuFile)
    }
  })
  return getCategory
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually
  sms: [
    ...generateItem("sms"),
    {
      type: 'category',
      label: 'Getting Started',
      items: [{
        type: 'autogenerated',
        dirName: 'sms/started'
      }]
    }
  ],
  sdk: [
    ...generateItem("sdk"),
    {
      type: 'category',
      label: 'SDK',
      items: [{
        type: 'autogenerated',
        dirName: 'sdk/package'
      }]
    }
  ],
  api: [
    ...generateItem('api'),
    {
      type: 'category',
      label: 'API',
      items: [{
        type: 'autogenerated',
        dirName: 'api/list'
      }]
    }
  ],
  legal: [{
    type: 'category',
    label: 'Legal',
    items: [{
      type: 'autogenerated',
      dirName: 'legal'
    }]
  }]
};

module.exports = sidebars;