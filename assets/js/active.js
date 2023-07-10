
	$( document ).ready(function(  ) {
        const questions = [{
            question: "Neeraj Chopra won India’s first-ever Olympic Gold Medal in which of the following sports?",
            answers: [
                { text: "400m Hurdle", correct: false },
                { text: "Long Jump", correct: false },
                { text: "Javelin Throw", correct: true },
                { text: "High Jump", correct: false }
            ]
         
        },
        {
            question: "Name the 1st woman cricketer to appear at 6 Cricket World Cups?",
            answers: [
                { text: "Jhulan Goswami", correct: false},
                { text: "Smriti Mandhana", correct: false },
                { text: "Harmanpreet Kaur", correct: false },
                { text: "Mithali Raj", correct: true }
            ]
         
        },
        {
            question: "The term Googly is associated with which sports?",
            answers: [
                { text: "Football", correct: false },
                { text: "High Jump", correct: false },
                { text: "Cricket", correct: true },
                { text: "Badminton", correct: false }
            ]
         
        },
        {
            question: "Who is the highest wicket taker in Test cricket?",
            answers: [
                { text: "R Ashwin", correct: false },
                { text: "Muttiah Muralitharan", correct: true },
                { text: "Ashish Nehra", correct: false },
                { text: "Jasprit Bumrah", correct: false }
            ]
         
        },
        {
            question: "After how many Year’s FIFA World Cup held?",
            answers: [
                { text: "2 Years", correct: false },
                { text: "3 Years", correct: false },
                { text: "Every Year", correct: false },
                { text: "4 Years", correct: true }
            ]
         
        }
        ]; 
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");


        let currentQuestionIndex = 0 ;
        let score = 0;
        function startQuiz(){
            currentQuestionIndex =0 ;
            score = 0;
            nextButton.innerHTML = 'Next';
            showQuestion();
        }
        function showQuestion(){
            resetState();
            let currentQuestion = questions[currentQuestionIndex] ;
            let questionNo = currentQuestionIndex +1;
            questionElement.innerHTML = questionNo + "." + currentQuestion.question;
            currentQuestion.answers.forEach( answer =>{
                const button = document.createElement("button");
                button.innerHTML = answer.text;
                button.classList.add("btn");
                answerButtons.appendChild(button);
                if(answer.correct){
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectAnswer);
            });
        }
        function resetState(){
            const title = document.getElementById("title");
            title.innerHTML  = 'Sports Quiz';
            nextButton.style.display= "none";
            while (answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }
        function selectAnswer(e){
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
                score++;
            }
            else
                selectedBtn.classList.add("incorrect");
            Array.from(answerButtons.children).forEach(button=>{
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
        }
        function showScore(){
            resetState();
            const thankyou = document.getElementById("thank-you");
            const title = document.getElementById("title");
            title.innerHTML  = 'Congratulations';
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "play Again";
            nextButton.style.display = "block";
        }
        function handleNextButton(){
            currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
                showQuestion();
            }else{
                showScore();
            }
        }
        nextButton.addEventListener("click" , ()=>{
            if(currentQuestionIndex < questions.length)
                handleNextButton();
            else{
                startQuiz();
            }
        })
        startQuiz();
    });



    
 