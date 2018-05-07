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
    editor.orirange = range
    this.saveRange(range)
  }
}