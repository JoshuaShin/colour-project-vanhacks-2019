// Update firebase with user's information from authentication and user's score
function readDatabase() {
    const cardRoot = firebase.database().ref().child('cards/');
    var count = 0;
    cardRoot.once('value').then((snapshot) => {
        let list = snapshot.val();
        for (this.x in list) {
            count += 1;
        }
        addCards(count);
    })

}


function addCards(numOfCards){
    let cardId = numOfCards + 1;
    const cardRoot = firebase.database().ref().child('cards/' + cardId);

    var cardObj = {};
    cardObj.color = getColor();
    cardObj.message = getMessage();

    cardRoot.set(cardObj);

}

function getColor(){
    return "123456";
}

function getMessage(){
    return "hi";
}

readDatabase();