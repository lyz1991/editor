import Editor from './modules/core/editor'
require('./less/editor.less')
new Editor('#editor', '#config', {
  menus: ['formatBlock', 'bold', 'italic', 'strike',
    'horizontal', 'color', 'BackColor', 'href', 'upload','face', 'font', 'undo', 'quote', 'publish'],
  change () {

  },
  extend: {
    underline: {
      name: 'underline',
      index:2,
      tpl: '<li name="underline" class="tipright" content="下划线"><i class="i-underline"></i> </li>',
      events: [{
        type: 'click'
      }]
    }
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