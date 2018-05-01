import S from '../selections/selection'
export default class DropList {
  constructor (list,  container, editor) {
    let frag = document.createDocumentFragment()
    let ul = document.createElement('ul')
    ul.style.display = 'none'
    frag.appendChild(ul)
    for (let i = 0, len = list.length; i < len; i++) {
      let li = document.createElement('li')
      li.setAttribute('value', `<h${i+1}>`)
      li.innerHTML = list[i].html
      ul.appendChild(li)
    }
    container.appendChild(frag)
    this.bind(ul, editor)
  }
  bind (el, editor) {
    el.addEventListener('click', function (e) {
      e.stopPropagation()
      S.saveRange(editor.orirange)
      document.execCommand('formatBlock', false, e.target.getAttribute('value'))
    })
  }
}