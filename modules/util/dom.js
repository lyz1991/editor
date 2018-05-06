function generateHtml(selector) {
  let div = document.createElement('div')
  div.innerHTML = selector
  return div.children
}
class jQ {
  constructor (selector) {
    this.selector = selector
    let result
    if (selector instanceof jQ) {
      return selector
    }
    const nodeType = selector.nodeType
    if (nodeType == 1) {
      result = [selector]
    }
    if (typeof selector == 'string') {
      if (selector.indexOf('<') == 0) {
        result = generateHtml(selector)
      } else {
        result = document.querySelectorAll(selector)
      }
    }
    for (let i = 0, len = result.length; i < len; i++) {
      this[i] = result[i]
    }
  }
  children (tag) {
    for (let i = 0, len = this[0].children.length; i < len; i++) {
      if (tag.toUpperCase() == this[0].children[i].nodeName) {
        return this[0].children[i]
      }
    }
    return {}
  }
}
export let $ = selector => new jQ(selector)