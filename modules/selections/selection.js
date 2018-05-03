export default {
  saveRange (range) {
    if (!range) {
      return
    }
    let sc = window.getSelection()
    sc.removeAllRanges()
    sc.addRange(range)
  }
}