import Editor from './modules/core/editor'
require('./less/icon.less')
new Editor('#editor', '#config', {
  menus: ['formatBlock', 'bold', 'italic', 'strike', 'horizontal', 'color', 'BgColor'],
  change () {
    console.log('ajax')
  }
})