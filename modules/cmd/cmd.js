export default {
  do (name, value,  editor) {
    document.execCommand(name, false, value)
    editor.change && editor.change(false)
  }
}