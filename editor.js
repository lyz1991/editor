import Editor from './modules/core/editor'
require('./less/icon.less')
new Editor('#editor', '#config', {
  formatBlock: true,
  bold: true,
  italic: true,
  strike: true,
  horizontal: true
})
new Editor('#editor1', '#config1', {
  bold: true,
  italic: true,
  strike: true,
  horizontal: true,
  formatBlock: true
})