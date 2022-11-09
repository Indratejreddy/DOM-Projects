const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];


function createFaq(faqData) {

  let faqElement = document.createElement("div");
 

  faqElement.classList.add("faq");  // created div with class faq
  faqElement.style.backgroundColor = "white"; 
  faqData.forEach(element => {
    faqElement.append(createFaqHeader(element));

  });

  document.querySelector(".accordian_body").appendChild(faqElement);

}

function createFaqHeader(element){
  //creating div element with faqHeader as class
  let faqHeaderElement = document.createElement("div");
  faqHeaderElement.classList.add("faq_Header");

  let firstChildDiv = document.createElement("div");
  firstChildDiv.style.display = "flex";
  firstChildDiv.style.justifyContent = "space-between";
  faqHeaderElement.append(firstChildDiv);

  faqHeaderElement.style.marginTop = "20px";
  faqHeaderElement.style.padding = "10px";
  faqHeaderElement.style.borderRadius = "10px";
  faqHeaderElement.style.backgroundColor="#4caf50";
  createH3Element(firstChildDiv,element.question);
  createShowButton(faqHeaderElement,firstChildDiv);
  createFaqAnswer(faqHeaderElement,element.answer);
  
 

 return faqHeaderElement;
}
 


function createH3Element(faqHeaderElement,question){
//creating h3 element and appending to faqHeader div element
let h3Element = document.createElement("h3");
h3Element.textContent = question;
faqHeaderElement.append(h3Element);

}

function createShowButton(faqHeaderElement,firstChildDiv){
 //creating div element with show_btn as class and appending to faqHeader div element
let button = document.createElement("div");
button.classList.add("show_btn");
button.addEventListener("click",()=>{
  let showAnswer = true;
  if(showAnswer){
    faqHeaderElement.querySelector(".hidden").style.display ="block";
    showAnswer = false;
  }else{
    faqHeaderElement.querySelector(".hidden").style.display ="hidden";
    showAnswer = true;
  }
})
firstChildDiv.append(button);

}


function createFaqAnswer(faqHeaderElement,answer){
  let answerParentDiv = document.createElement("div");
  answerParentDiv.classList.add("hidden");

  let answerElement = document.createElement("p");
  answerElement.textContent = answer;
  answerParentDiv.append(answerElement);
  faqHeaderElement.append(answerParentDiv);
}

createFaq(faqData);
