import Editor from './modules/core/editor'
require('./less/editor.less')
new Editor('#editor', '#config', {
  menus: ['formatBlock', 'bold', 'italic', 'strike',
    'horizontal', 'color', 'BackColor', 'href', 'face', 'font', 'undo'],
  change () {
    console.log('ajax')
  }
})