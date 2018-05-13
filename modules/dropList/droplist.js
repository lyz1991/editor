import S from '../selections/selection'
import cmd from '../cmd/cmd'
import {$} from '../util/dom'
export default class DropList {
  constructor (list,  container, editor, name) {
    let frag = document.createDocumentFragment()
    let ul = document.createElement('ul')
    ul.className = 'eleContainer'
    frag.appendChild(ul)
    for (let i = 0, len = list.length; i < len; i++) {
      let li = document.createElement('li')
      li.appendChild(list[i].elem)
      ul.appendChild(li)
    }
    container.appendChild(frag)
    this.bind(editor, list)
  }
  bind (editor, list) {
    list.forEach(function (ls) {
      ls.elem.addEventListener('click', function (e) {
        $(e.currentTarget).parentsUntil('ul').style.display = 'none'
        e.stopPropagation()
        S.saveRange(editor.orirange)
        ls.onclick()
      })
    })
  }
}