const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceBtn = document.getElementById('dice-button');

function displayAdvice(data){
    adviceId.textContent = data.slip.id;
    adviceText.textContent = `“${data.slip.advice}”`;
}






async function getAdvice(){
    try{
        const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
        const data = await  response.json();
        
        displayAdvice(data);
        
        
        

    } catch(error){
        console.error('Error fetching data:', error);
    }
}

diceBtn.addEventListener('click', getAdvice);