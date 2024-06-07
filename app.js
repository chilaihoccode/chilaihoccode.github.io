const questions = [
    {
        question : 'Khái niệm nào sau đây là định nghĩa chính xác nhất về an ninh phi truyền thống?',
        answers : [
            {text : " An ninh phi truyền thống là sự an toàn của một quốc gia trước các mối đe dọa quân sự từ bên ngoài.", correct: false},
            {text : "An ninh phi truyền thống là sự an toàn của một quốc gia trước các mối đe dọa phi quân sự, chẳng hạn như thiên tai, dịch bệnh và bất ổn kinh tế.", correct: true},
            {text : "An ninh phi truyền thống là sự an toàn của một quốc gia trước các mối đe dọa từ các tác nhân phi nhà nước, chẳng hạn như nhóm khủng bố và tội phạm có tổ chức.", correct: false},
            {text : "Cả A, B và C đều đúng.", correct: false},
        ]
    },
    {
        question : 'Mối đe dọa an ninh phi truyền thống nào sau đây có khả năng gây ra hậu quả nghiêm trọng nhất?',
        answers : [
            {text : " Thiên tai", correct: false},
            {text : "Dịch bệnh", correct: false},
            {text : "Bất ổn kinh tế", correct: true},
            {text : "Tất cả các lựa chọn trên đều có khả năng gây ra hậu quả nghiêm trọng.", correct: false},
        ]
    },
    {
        question : 'Biện pháp nào sau đây không hiệu quả để giảm thiểu tác động của các mối đe dọa an ninh phi truyền thống:',
        answers : [
            {text : "Tăng cường quân sự", correct: false},
            {text : "Phát triển cơ sở hạ tầng", correct: false},
            {text : "Cấm du lịch", correct: true},
            {text : "Thúc đẩy phát triển kinh tế", correct: false},
        ]
    },
    {
        question : 'Biện pháp nào sau đây là quan trọng nhất để xây dựng khả năng phục hồi quốc gia trước các mối đe dọa an ninh phi truyền thống:',
        answers : [
            {text : "Nâng cao nhận thức của người dân về các mối đe dọa.", correct: false},
            {text : "Phát triển hệ thống cảnh báo sớm và ứng phó khẩn cấp.", correct: false},
            {text : "Đầu tư vào nghiên cứu khoa học và công nghệ.", correct: false},
            {text : "Tất cả các biện pháp trên đều quan trọng.", correct: true},
        ]
    },
    {
        question : 'Quốc gia nào sau đây dễ bị tổn thương nhất bởi các mối đe dọa an ninh phi truyền thống?',
        answers : [
            {text : "Các nước đều dễ bị tổn thương ", correct: true},
            {text : "Các nước đang phát triển", correct: false},
            {text : "Các nước phát triển ", correct: false},
            {text : "Các quốc gia đảo nhỏ", correct: false},
        ]
    },

]

const titleElement = document.querySelector('h2')
const questionTitle = document.querySelector('.question-title')
const answerDiv = document.querySelector('.container-answer')
const btnNext = document.querySelector('.btn-next')

let currentIndex = 0

const handleQuiz = {
    renderQuestion : function () {
        this.resetElement()
        questionTitle.innerText = `${currentIndex + 1} . ${questions[currentIndex].question}`
        this.handleQuestionClick()
    },
    resetElement : function () {
        btnNext.style.display = 'none';
        while(answerDiv.firstChild) {
            answerDiv.removeChild(answerDiv.firstChild)
        }
    },
    handleQuestionClick : function () {
        questions[currentIndex].answers.forEach((item,index) => {
            const btn = document.createElement('button')
            btn.classList.add('btn-answer')
            btn.innerHTML = item.text
            answerDiv.append(btn)
            console.log(item)
            if(item.correct) {
                btn.dataset.correct = item.correct
            }
            btn.addEventListener('click',this.showResult)
        })
    },
    showResult : function (e) {
        const btnSelected = e.target
        if(btnSelected.dataset.correct) {
            btnSelected.classList.add('correct')
        }else{
            btnSelected.classList.add('incorrect')
        }
        Array.from(answerDiv.children).forEach(btn => {
            if(btn.dataset.correct == 'true') {
                btn.classList.add('correct')
            }else {
                btn.disabled = true
            }
            btnNext.style.display = 'block'
        })
    },
    handleNextQuestion : function () {
        btnNext.addEventListener('click',() => {
            currentIndex ++
            if(currentIndex < questions.length) {
                this.renderQuestion()
            }else {
                titleElement.innerText = 'Thank for watching'
                this.resetElement()
                questionTitle.innerText = ''

            }
        })
    },
    start : function () {
        this.renderQuestion()
        // this.handleQuestionClick()
        this.handleNextQuestion()
    }
}

handleQuiz.start()