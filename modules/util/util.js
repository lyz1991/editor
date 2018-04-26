export default {
  query (selector) {
    return document.querySelector(selector)
  },
  append (container, tpl) {
    container.appendChild(tpl)
  },
  generateNode (tpl) {
    let element = document.createElement('div')
    element.innerHTML = tpl
    return element
  }
}
