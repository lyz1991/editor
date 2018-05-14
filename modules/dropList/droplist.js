import S from '../selections/selection'
import cmd from '../cmd/cmd'
import {$} from '../util/dom'
export default class DropList {
  constructor (opt,  container, editor) {
    let frag = document.createDocumentFragment()
    let ul = document.createElement('ul')
    ul.className = 'eleContainer'
    frag.appendChild(ul)
    if (opt.title) {
      let title = document.createElement('p')
      title.innerHTML = opt.title
      ul.appendChild(title)
    }
    for (let i = 0, len = opt.list.length; i < len; i++) {
      let li = document.createElement('li')
      li.appendChild(opt.list[i].elem)
      ul.appendChild(li)
    }
    container.appendChild(frag)
    this.bind(editor, opt.list)
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