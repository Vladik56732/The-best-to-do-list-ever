const list = document.querySelector('.list')
const storageMass = [
    {
        text: 'Какой-то текст1',
        checked: false,
        children: [],
    },
    {
        text: 'Какой-то текст2',
        checked: false,
        children: [],
    },
    {
        text: 'Какой-то текст3',
        checked: false,
        children: [],
    },
]

storageMass.forEach(item => {
    createBlock(list, 1, item)
})

function createBlock(rootElement, level, item) {
    const lvl1 = document.createElement('div')
    if (level == 1) {
        lvl1.className = `lvl${level}`
    } else {
        lvl1.className = 'lvl'
    }
    rootElement.append(lvl1)

    const content = document.createElement('div')
    content.className = 'content'
    lvl1.append(content)

    const lvl1Text = document.createElement('p')
    lvl1Text.setAttribute('contenteditable', true)
    lvl1Text.innerHTML = item.text
    content.append(lvl1Text)

    const controls = document.createElement('div')
    controls.className = 'controls'
    content.append(controls)

    const lvl1Plus = document.createElement('p')
    lvl1Plus.className = 'plus'
    lvl1Plus.innerHTML = '+'
    controls.append(lvl1Plus)

    lvl1Plus.addEventListener('click', () => {
        item.children.push({
            text: 'Какой-то текст',
            checked: false,
            children: [],
        })
        createBlock(lvl1, 2, item.children[item.children.length])
    })

    const lvl1Del = document.createElement('p')
    lvl1Del.className = 'del'
    lvl1Del.innerHTML = '&times;'
    controls.append(lvl1Del)

    lvl1Del.addEventListener('click', () => {
        lvl1.remove()
    })
}
