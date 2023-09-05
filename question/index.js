
// 초기값 설정 
var value_E = 0;
var value_S = 0;
var value_F = 0;
var value_P = 0;

function showCurrentValue(){
    console.log(
        "Current value of E is"+" "+ value_E +
        ", "+"S is"+" "+ value_S+
        ", "+"F is"+" "+ value_F+
        ", "+"P is"+" "+ value_P
    );
}

function openResultPage(){

    const mainpageUrl = "https://butter-cloud.github.io/cereal_test/"
    //ESFP
    if
    (value_E>0 && value_S>0 && value_F>0 && value_P>0)
    {window.open(mainpageUrl+"ESFP","_self")}
    
    //ESFJ
    else if
    (value_E>0 && value_S>0 && value_F>0 && value_P<=0)
    {window.open(mainpageUrl+"ESFJ", "_self")}

    //ESTP
    else if
    (value_E>0 && value_S>0 && value_F<=0 && value_P>0)
    {window.open(mainpageUrl+"ESTP", "_self")}
    
    //ESTJ
    else if
    (value_E>0 && value_S>0 && value_F<=0 && value_P<=0)
    {window.open(mainpageUrl+"ESTJ", "_self")}
    
    //ENFP
    else if
    (value_E>0 && value_S<=0 && value_F>0 && value_P>0)
    {window.open(mainpageUrl+"ENFP", "_self")}
    
    //ENFJ
    else if
    (value_E>0 && value_S<=0 && value_F>0 && value_P<=0)
    {window.open(mainpageUrl+"ENFJ", "_self")}

    //ENTP
    else if
    (value_E>0 && value_S<=0 && value_F<=0 && value_P>0)
    {window.open(mainpageUrl+"ENTP", "_self")}
    
    //ENTJ
    else if
    (value_E>0 && value_S<=0 && value_F<=0 && value_P<=0)
    {window.open(mainpageUrl+"ENTJ", "_self")}

    //ISFP
    else if
    (value_E<=0 && value_S>0 && value_F>0 && value_P>0)
    {window.open(mainpageUrl+"ISFP", "_self")}
    
    //ISFJ
    else if
    (value_E<=0 && value_S>0 && value_F>0 && value_P<=0)
    {window.open(mainpageUrl+"ISFJ", "_self")}

    //ISTP
    else if
    (value_E<=0 && value_S>0 && value_F<=0 && value_P>0)
    {window.open(mainpageUrl+"ISTP", "_self")}
    
    //ISTJ
    else if
    (value_E<=0 && value_S>0 && value_F<=0 && value_P<=0)
    {window.open(mainpageUrl+"ISTJ", "_self")}

    //INFP
    else if
    (value_E<=0 && value_S<=0 && value_F>0 && value_P>0)
    {window.open(mainpageUrl+"INFP", "_self")}
    
    //INFJ
    else if
    (value_E<=0 && value_S<=0 && value_F>0 && value_P<=0)
    {window.open(mainpageUrl+"INFJ", "_self")}
    
    //INTP
    else if
    (value_E<=0 && value_S<=0 && value_F<=0 && value_P>0)
    {window.open(mainpageUrl+"INTP", "_self")}
    
    //INTJ
    else
    {window.open(mainpageUrl+"INTJ", "_self")}
    //end of the 16 types 
}

//Q1 A
document.querySelector(".answerA1").addEventListener("click", function(){
    value_P--;
    document.querySelector(".question1").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="13.4%";
})

//Q1 B
document.querySelector(".answerB1").addEventListener("click", function(){
    value_P++;
    document.querySelector(".question1").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="13.4%";
})

//Q2 A
document.querySelector(".answerA2").addEventListener("click", function(){
    value_S++;
    document.querySelector(".question2").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="20.1%";
})

//Q2 B
document.querySelector(".answerB2").addEventListener("click", function(){
    value_S--;
    document.querySelector(".question2").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="20.1%";
})

//Q3 A
document.querySelector(".answerA3").addEventListener("click", function(){
    value_F++;
    document.querySelector(".question3").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="26.8%";
})

//Q3 B
document.querySelector(".answerB3").addEventListener("click", function(){
    value_F--;
    document.querySelector(".question3").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="26.8%";
})

//Q4 A
document.querySelector(".answerA4").addEventListener("click", function(){
    value_S--;
    document.querySelector(".question4").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="33.5%";
})

//Q4 B
document.querySelector(".answerB4").addEventListener("click", function(){
    value_S++;
    document.querySelector(".question4").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="33.5%";
})

//Q5 A
document.querySelector(".answerA5").addEventListener("click", function(){
    value_F--;
    document.querySelector(".question5").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="40.2%";
})

//Q5 B
document.querySelector(".answerB5").addEventListener("click", function(){
    value_F++;
    document.querySelector(".question5").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="40.2%";
})

//Q6 A
document.querySelector(".answerA6").addEventListener("click", function(){
    value_P++;
    document.querySelector(".question6").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="46.9%";
})

//Q6 B
document.querySelector(".answerB6").addEventListener("click", function(){
    value_P--;
    document.querySelector(".question6").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="46.9%";
})

//Q7 A
document.querySelector(".answerA7").addEventListener("click", function(){
    value_F++;
    document.querySelector(".question7").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="53.6%";
})

//Q7 B
document.querySelector(".answerB7").addEventListener("click", function(){
    value_F--;
    document.querySelector(".question7").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="53.6%";
})

//Q8 A
document.querySelector(".answerA8").addEventListener("click", function(){
    value_P++;
    document.querySelector(".question8").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="60.3%";
})

//Q8 B
document.querySelector(".answerB8").addEventListener("click", function(){
    value_P--;
    document.querySelector(".question8").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="60.3%";
})

//Q9 A
document.querySelector(".answerA9").addEventListener("click", function(){
    value_F++;
    document.querySelector(".question9").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="67%";
})

//Q9 B
document.querySelector(".answerB9").addEventListener("click", function(){
    value_F--;
    document.querySelector(".question9").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="67%";
})

//Q10 A
document.querySelector(".answerA10").addEventListener("click", function(){
    value_S--;
    document.querySelector(".question10").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="73.7%";
})

//Q10 B
document.querySelector(".answerB10").addEventListener("click", function(){
    value_S++;
    document.querySelector(".question10").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="73.7%";
})

//Q11 A
document.querySelector(".answerA11").addEventListener("click", function(){
    value_P--;
    document.querySelector(".question11").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="80.4%";
})

//Q11 B
document.querySelector(".answerB11").addEventListener("click", function(){
    value_P++;
    document.querySelector(".question11").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="80.4%";
})

//Q12 A
document.querySelector(".answerA12").addEventListener("click", function(){
    document.querySelector(".question12").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="87.1%";
})

//Q12 B
document.querySelector(".answerB12").addEventListener("click", function(){
    document.querySelector(".question12").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="87.1%";
})

//Q12 C
document.querySelector(".answerC12").addEventListener("click", function(){
    document.querySelector(".question12").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="87.1%";
})

//Q13 A
document.querySelector(".answerA13").addEventListener("click", function(){
    value_E--;
    document.querySelector(".question13").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="93.8%";
})

//Q13 B
document.querySelector(".answerB13").addEventListener("click", function(){
    value_E++;
    document.querySelector(".question13").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="93.8%";
})

//Q14 A
document.querySelector(".answerA14").addEventListener("click", function(){
    value_S++;
    document.querySelector(".question14").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="100%";
})

//Q14 B
document.querySelector(".answerB14").addEventListener("click", function(){
    value_S--;
    document.querySelector(".question14").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="100%";
})

//Q15 A
document.querySelector(".answerA15").addEventListener("click", function(){
    value_E++;
    document.querySelector(".question15").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="100%";
    openResultPage();
})

//Q15 B
document.querySelector(".answerB15").addEventListener("click", function(){
    value_E--;
    document.querySelector(".question15").style.display="none";
    showCurrentValue();
    document.querySelector(".progress-bar").style.width="100%";
    openResultPage();
})

