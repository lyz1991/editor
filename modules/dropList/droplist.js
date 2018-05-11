import S from '../selections/selection'
import cmd from '../cmd/cmd'
export default class DropList {
  constructor (list,  container, editor, name) {
    let frag = document.createDocumentFragment()
    let ul = document.createElement('ul')
    ul.className = 'eleContainer'
    frag.appendChild(ul)
    for (let i = 0, len = list.length; i < len; i++) {
      let li = document.createElement('li')
      li.setAttribute('value', list[i].value)
      li.innerHTML = list[i].html
      ul.appendChild(li)
    }
    container.appendChild(frag)
    this.bind(ul, editor, name)
  }
  bind (el, editor, name) {
    el.addEventListener('click', function (e) {
      e.currentTarget.style.display = 'none'
      e.stopPropagation()
      S.saveRange(editor.orirange)
      cmd.do(name, e.target.getAttribute('value'), editor)
    })
  }
}