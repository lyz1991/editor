export default {
  query (selector) {
    return document.querySelector(selector)
  },
  append (container, tpl) {
    container.appendChild(tpl)
  },
  generateNode (tpl, origin = false) {
    let element = document.createElement('div')
    element.innerHTML = tpl
    return origin ? element.children : element
  },
  isDomList (dom) {
    return dom instanceof HTMLCollection
  }
}
