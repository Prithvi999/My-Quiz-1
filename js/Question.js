class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput('Enter Your Name Here....');
   //Create a input box to enter the number
     this.input2 = createInput("Your Answer")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question1 = createElement("h3");
    this.answer1 = createElement("h7");
    this.answer2 = createElement("h7");
    this.answer3 = createElement("h7");
    this.answer4 = createElement("h7");



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    this.question1.hide();
    this.answer1.hide();
    this.answer2.hide();
    this.answer3.hide();
    this.answer4.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question1.html("Question: How many countries are there in the world?");
    this.question1.position(250, 100);

    this.answer1.html("A: 195");
    this.answer1.position(250, 150);
    this.answer2.html("B: 221");
    this.answer2.position(250, 175);
    this.answer3.html("C: 134");
    this.answer3.position(250, 200);
    this.answer4.html("D: 232");
    this.answer4.position(250, 225);
    this.message.html("Thank You, You're answer has been submitted...")
    this.message.position(15000, 0)
    this.input2.position(450, 350)



    this.input1.position(250, 350);
    this.button.position(410, 400);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
this.message.position(220, 430);
    })


  }
}
