const env = document.currentScript.getAttribute('env')

document.addEventListener('DOMContentLoaded', function () {
  let variant = sessionStorage.getItem('variant') || 'checkbox'
  document.querySelector('a.link.' + variant).classList.add('active')
  const locale = getQueryVariable('lang') ?? 'en-US'
  loadWidget(variant, locale)
})

function getQueryVariable(variable) {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')
    if (pair[0] === variable) {
      return pair[1]
    }
  }

  return undefined
}

function switchWidget(event) {
  document.querySelectorAll('a.link').forEach((element) => element.classList.remove('active'))
  const variant = event.target.innerText.toLowerCase().replace(/ /g, '')
  sessionStorage.setItem('variant', variant)
  window.location.reload()
}

function loadWidget(variant, locale) {
  const parent = document.querySelector('#widget-container')

  const widget = document.createElement('div')
  widget.setAttribute('id', `widget-${variant}`)
  widget.dataset.locale = locale
  parent.appendChild(widget)

  const script = document.createElement('script')
  if (env === 'production') {
    script.src = `widgets/widget-${variant}.iife.js`
  } else {
    script.type = 'module'
    script.src = `/src/${variant}.jsx`
  }
  document.body.appendChild(script)
}

const links = document.querySelectorAll('a.link')
links.forEach(function (link) {
  link.addEventListener('click', (event) => switchWidget(event))
})
