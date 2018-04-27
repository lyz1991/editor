export default {
  name: 'bold',
  active: false,
  onClick (e, state, value) {
    return document.execCommand('bold', value)
  }
}