import Editor from './modules/core/editor'
require('./scss/editor.scss')
new Editor('#editor', '#config', {
  menus: ['formatBlock', 'bold', 'italic', 'strike',
    'horizontal', 'color', 'BackColor', 'href', 'upload','face', 'font', 'undo', 'quote', 'publish'],
  change () {

  },
  imgupload (result, files) {
   console.log(result)
    console.log(files)
  },
  publish () {
    document.querySelector('#content').innerHTML = document.querySelector('#editor').innerHTML
    document.querySelector('#editor').innerHTML = ''
  }
})