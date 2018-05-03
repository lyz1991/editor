import Editor from './modules/core/editor'
require('./less/icon.less')
new Editor('#editor', '#config', {
  formatBlock: true,
  bold: true,
  italic: true,
  strike: true,
  horizontal: true,
  color: true
})