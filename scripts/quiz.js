class Quiz {
    constructor() {
        this.quiz = document.querySelector('.procedure__quiz');
        this.mainSelect = this.quiz.querySelector('.procedure__select_main');
        this.mainOptions = this.quiz.querySelectorAll('.procedure__option_main');
        this.subSelect;
        this.subOptions = [];
        this.questionnaire;
        this.classesSubSelect = ['procedure__select', 'procedure__select_sub']
        this.classesSubOptions = ['procedure__option', 'procedure__option_sub']
        this.classesQuestionnaire = ['procedure__widget', 'questionnaire']
        this.data = tempRequestJson()
        this.main(this)
    }

    

    createSubcat = (cat) => {
        if (this.subSelect) {
            this.subSelect.remove()
        }
        let option;
        this.subSelect = addElement('select', this.classesSubSelect)
        
        for (let opt of this.data[cat.target.value].subcat) {
            option = addElement('option', this.classesSubOptions, opt.rebose_name)
            this.subOptions.push(option)
            this.subSelect.append(option)
        }
        this.quiz.append(this.subSelect)
    }

    createQuiz() {
        let quest = new Question(tempRequestData())
        let container = addElement('div', this.classesQuestionnaire)
        
    }

    main(obj) {
        let title = document.querySelector('.procedure__title');
        for (let option of this.mainOptions) {
            option.addEventListener('click', this.createSubcat)
        }
        if (this.subSelect) {
            for (let option of this.subOptions) {
                option.addEventListener('click', this.createSubcat)
            }
        }
        // title.addEventListener('click', obj.create_subcat)
    }


}