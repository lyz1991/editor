import Editor from './modules/core/editor'
require('./less/editor.less')
new Editor('#editor', '#config', {
  menus: ['formatBlock', 'bold', 'italic', 'strike',
    'horizontal', 'color', 'BackColor', 'href', 'upload','face', 'font', 'undo', 'quote', 'publish'],
  change () {

  },
  publish () {
    document.querySelector('#content').innerHTML = document.querySelector('#editor').innerHTML
    document.querySelector('#editor').innerHTML = ''
  }
})