export default {
  query (selector) {
    return document.querySelector(selector)
  },
  append (container, children) {
    container.appendChild(children)
  },
  isDomList (dom) {
    return dom instanceof HTMLCollection
  },
  getRangeInContainer (editor, range) {
    if (!range) {
      return
    }
    let node = range.commonAncestorContainer
    while (node = node.parentNode) {
      if (node.nodeType == 1 && node.id == editor.id) {
       return true
      }
    }
    return false
  }
}
