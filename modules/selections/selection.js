export default {
  saveRange (range) {
    if (!range) {
      return
    }
    let sc = window.getSelection()
    sc.removeAllRanges()
    sc.addRange(range)
  },
  createRange (node, iscontent = false, editor) {
    const range = document.createRange()
    if (iscontent) {
      range.selectNode(node)
    } else {
      range.selectNodeContents(node)
    }
    range.collapse(iscontent)
    editor.orirange = range
    this.saveRange(range)
    range.detach()
  },
  initRange (editor) {
    /*有hr，最后一个是<p><br></p>*/
    const range = document.createRange()
    if (editor.container.lastChild.innerHTML.trim() == '<br>'
      && editor.container.lastChild.previousSibling
      && editor.container.lastChild.previousSibling.nodeName == 'HR') {
      range.selectNode(editor.container.lastChild.previousSibling.previousSibling)
    } else {
      range.selectNode(editor.container.lastChild)
    }

    range.collapse(true)
    editor.orirange = range
    this.saveRange(range)
    range.detach()
  }
}