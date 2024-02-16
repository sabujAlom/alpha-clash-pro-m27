// function play(){
//     const homeScreen =document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     //show the playground-------------
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
    
// }
function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your randdom alphabet' alphabet)

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
