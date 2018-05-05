import Editor from './modules/core/editor'
require('./less/editor.less')
new Editor('#editor', '#config', {
  menus: ['formatBlock', 'bold', 'italic', 'strike', 'horizontal', 'color', 'BgColor', 'href', 'face'],
  change () {
    console.log('ajax')
  }
})