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
  },
  insertAfter(newElement, targetElement){
    let parent = targetElement.parentNode
    if(parent.lastChild == targetElement){
      parent.appendChild(newElement);
    }else{
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  },
  trim (str) {
    return str.trim()
  }

}
