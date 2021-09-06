class WebComponent extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({ 'mode': 'open' })
    }
}

customElements.define('web-comp', WebComponent)


export const createPositionedElement = (doc, tag, pos) => {
    const el            = document.createElement(tag)

    el.style.position   = 'absolute'
    el.style.left       = pos.left + 'px'
    el.style.top        = pos.top + 'px'
    el.style.width      = pos.width + 'px'
    el.style.height     = pos.height + 'px'

    return el
}



const webComp1      = await createPositionedElement(document, 'web-comp', { left : 50, top : 50, width : 200, height : 200 })

webComp1.style.backgroundColor   = 'red'
document.body.appendChild(webComp1)

const el = webComp1.shadowRoot.elementFromPoint(10, 10)

console.log("Element from point: ", el)

if (el === webComp1)
    console.log("PASS")
else
    console.log("FAIL")
