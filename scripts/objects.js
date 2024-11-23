class Element {
    constructor(tag, classes, text='') {
        this.elem = document.createElement(tag)
        for (let cls of classes) {
            elem.classList.add(cls)
        }

        this.elem.innerHTML = text
        return this.elem
    }

    appendElement(tagname, classname, text) {
        let elem = document.createElement(tagname);
        elem.classList.add(classname)
        if (text) {
            elem.innerText = text
        }
        this.obj.append(elem);
        return new Element(`.${classname}`)
    }
}

class Question {
    constructor(name) {
        this.name = name
    }

    createQuestion() {
        console.log
    }

    oneChoiceRange() {
        markup = '<ul>\
                        <li>\
                            <label>\
                                <span>Text</span>\
                                <input type="radio" name="">\
                            </label>\
                        </li>\
                    </ul>'
        let elem = addElement('div', 'cls', markup)
        e
    }
}