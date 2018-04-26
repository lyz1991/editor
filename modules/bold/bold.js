export default {
  tpl: '<button>加粗</button>',
  active: false,
  onClick (e, state, value) {
    return document.execCommand('bold', value)
  }
}