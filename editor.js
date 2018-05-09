import Editor from './modules/core/editor'
require('./less/editor.less')
new Editor('#editor', '#config', {
  menus: ['formatBlock', 'bold', 'italic', 'strike',
    'horizontal',  'upload', 'color', 'BackColor', 'href', 'face', 'font', 'undo', 'quote', 'publish'],
  change () {

  },
  publish () {
    document.querySelector('#content').innerHTML = document.querySelector('#editor').innerHTML
    document.querySelector('#editor').innerHTML = ''
  }
})