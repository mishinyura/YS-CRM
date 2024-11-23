class Quiz {
    constructor() {
        this.quiz = document.querySelector('.procedure__quiz');
        this.mainSelect = this.quiz.querySelector('.procedure__select_main');
        this.mainOptions = this.quiz.querySelectorAll('.procedure__option_main');
        this.subSelect;
        this.subOptions = [];
        this.questionnaire;
        this.classesSubSelect = ['procedure__select', 'procedure__select_sub'];
        this.classesSubOptions = ['procedure__option', 'procedure__option_sub'];
        this.classesQuestionnaire = ['procedure__widget', 'questionnaire'];
        this.data = tempRequestJson();
    }

    createQuiz(value) {
        // let quest = new Question(tempRequestData('complaint'))
        console.log(this.classesQuestionnaire)
        let container = addElement('div', this.classesQuestionnaire)
        this.quiz.append(container)
    }

    createSubcat = (cat) => {
        if (this.subSelect) {
            this.subSelect.remove()
        }
        let option;
        window.subSelect = addElement('select', this.classesSubSelect)
        
        for (let opt of this.data[cat.target.value].subcat) {
            option = addElement('option', this.classesSubOptions, opt.rebose_name)
            this.subOptions.push(option)
            this.subSelect.append(option)
        }
        this.quiz.append(this.subSelect)
        this.eventInit()
        // for (let opt of this.subOptions) {
        //     opt.addEventListener('click', this.createQuiz)
        // }
        return this.subSelect
    }

}

/**
 * База должна вернуть дерево состоящее из id и типа вопроса
 */