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
    /* 一开始进来 直接点击菜单 */
    if (node.nodeType == 1 && node.id == editor.id) {
      return true
    }
    while (node = node.parentNode) {
      if (node.nodeType == 1 && node.id == editor.id) {
       return true
      }
    }
    return false
  },
  getNode (range) {
    if (range.nodeType == 1) {
      return range
    }
    return range.parentNode
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
  },
  remove (container, tag) {
    for (let i = 0, len = container.children.length; i < len; i++) {
      if (container.children[i].nodeName.toUpperCase() == tag.toUpperCase()) {
        return container.removeChild(container.children[i])
      }
    }
  }

}
