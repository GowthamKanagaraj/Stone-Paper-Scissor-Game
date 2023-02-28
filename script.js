//variables
const userScoreEl=document.querySelector('.user-score')
const compScoreEl=document.querySelector('.comp-score')
const userChoiceEl=document.querySelector('.user-choice')
const compChoiceEl=document.querySelector('.comp-choice')
const resultEl=document.querySelector('.result')




let userScore=0;
let compScore=0;
//computer function
const getCompChoice=function()
{
    const randomNumber=Math.floor(Math.random()*3)+1;
    if(randomNumber===1)
    {
        return 'rock';
    }
    else if(randomNumber===2)
    {
        return 'paper';
    }
    else if(randomNumber===3)
    {
        return 'scissors';
    }
};

//user choice
const getUserChoice=function(userBtn)
{
    const users=userBtn;
    const comps=getCompChoice();

    const result=getResult(users,comps);

    if(result==='WON'){
        userScore=userScore+1;
    }
    else if(result==='LOST'){
        compScore=compScore+1;
    }
    userScoreEl.innerText=userScore;
    compScoreEl.innerText=compScore;
    userChoiceEl.innerText=`user Selected ${users}`;
    compChoiceEl.innerText=`comp Selected ${comps}`;
    resultEl.innerText=`The result ${result}`;
};

//get result function
const getResult=function(user,comp)
{
    if(user==='rock'){
        if(comp==='rock')
        {
            return 'DRAW';
        }
        else if(comp==='paper')
        {
            return'WON';
        }
        else if(comp==='scissors')
        {
            return 'LOST';
        }
    }

    if(user==='paper')
    {
        if(comp==='rock')
        {
            return'WON';
        }
        else if(comp==='paper')
        {
            return'DRAW';
        }
        else if(comp==='scissors')
        {
            return'LOST';
        }
    }

    if(user==='scissors')
    {
        if(comp==='rock')
        {
            return'LOST';
        }
        else if(comp==='paper')
        {
            return'WON';
        }
        else if(comp==='scissors')
        {
            return'DRAW';
        }
    }
}