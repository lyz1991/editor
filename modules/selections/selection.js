export default {
  saveRange (range) {
    let sc = window.getSelection()
    sc.removeAllRanges()
    sc.addRange(range)
  }
}