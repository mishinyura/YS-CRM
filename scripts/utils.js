const pr = (data) => {
    console.log(`INFO: Type(${typeof(data)}) | Data(${data})`)
}

async function request(path) {
    let response = await fetch(path).then( async res => {
        // if (!res.ok) {
        //     throw new Error(`HTTP error! Status: ${res.status}`)
        // }
        let data = await res.json()
        console.log(data)
        return data
        // return res.json()
    })
    
    return await response
}

const tempRequestData = (question) => {
    let complaintTask = {

    }
    let complaintApp = {

    }
    switch(question) {
        case 'complaint/task': return complaintTask; break;
        case 'complaint/app': return complaintApp; break;
        default: return NaN
    }
    
}

const tempRequestJson = () => {
    let data = {
        "complaint": {
            "rebose_name": "Претензия",
            "subcat": [
                {
                    "name": "task",
                    "rebose_name": "Задание"
                },
                {
                    "name": "app",
                    "rebose_name": "Приложение"
                },
                {
                    "name": "service",
                    "rebose_name": "Сервис Яндекс Смены"
                },
                {
                    "name": "employee",
                    "rebose_name": "Сотрудник"
                }
            ]
        },
        "documents": {
            "rebose_name": "Документы",
            "subcat": [
                {
                    "name": "photo_control",
                    "rebose_name": "Фотоконтроль"
                }
            ]    
        },
        "payments": {
            "rebose_name": "Платежи",
            "subcat": [
                {
                    "name": "payment_task",
                    "rebose_name": "Выплата за задание",
                }
            ]
        },
        "incident": {
            "rebose_name": "ЧП",
            "subcat": [
                {
                    "name": "conflict_job",
                    "rebose_name": "Конфликт на задании",
                }
            ]
        }
    }
    return data
}


function addElement(tag, classes, text='') {
    /**adds an element to the DOM, sets its 
     * classes and contents if necessary.
     * @param  {String} tag     HTML tag name
     * @param  {Object} classes List class html element
     * @param  {String} text    innerHTML element. Default empty
     * @return {undefined}      undefined
     */
    pr(classes)
    let elem = document.createElement(tag)
    try{
        for (let cls of classes) {
            elem.classList.add(cls)
        }
    } catch (ex) {
        console.log(`Error message: ${ex.message}\nStack:\n${ex.stack}`)
    }

    elem.innerHTML = text
    return elem
}
