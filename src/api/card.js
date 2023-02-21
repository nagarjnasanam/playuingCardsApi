import axios from "axios";

export const newDeck = async()=>{
     await axios.get('https://deckofcardsapi.com/api/deck/new/').then(res=>console.log(res.data))
    
}

export const shuffleAndCreateNewDeck = async(deckCount)=>{
     await axios.get(` https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckCount}`).then(res=>console.log(res.data))
    
}

export const shuffleDeckCardswithDeckId = async(DeckId,deckCount)=>{
    await axios.get(` https://deckofcardsapi.com/api/deck/${DeckId}/shuffle/?deck_count=${deckCount}`).then(res=>console.log(res.data))
   
}

export const drawCardsFromDeck = async(DeckId,noOfCards)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${DeckId}/draw/?count=${noOfCards}`).then(res=>console.log(res.data))
   
}
export const reshuffleCards = async(DeckId)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${DeckId}/shuffle/`).then(res=>console.log(res.data))
   
}
export const reshuffleAvailableCards = async(DeckId)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${DeckId}/shuffle/??remaining=true`).then(res=>console.log(res.data))
   
}
export const customDeck = async(cardList)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${cardList}`).then(res=>console.log(res.data))
   
}
export const createPileAddCards = async(deckId,pileName,cardList)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/add/?cards=${cardList}`).then(res=>console.log(res.data))
   
}
export const shufflePile = async(deckId,pileName)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/shuffle/`).then(res=>console.log(res.data))
   
}
export const pileCardsList = async(deckId,pileName)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/list/`).then(res=>console.log(res.data))
   
}
export const drawCardsFromPile = async(deckId,cardsList)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/<<pile_name>>/draw/?cards=${cardsList}`).then(res=>console.log(res.data))
   
}
export const returnPileCardsToDeck = async(deckId,pileName)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/return`).then(res=>console.log(res.data))
   
}
export const returnSpecificPileCardsToDeck = async(deckId,pileName,cardList)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/return/?cards=${cardList}`).then(res=>console.log(res.data))
   
}
export const returnAllDeckCards = async(deckId)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/return/`).then(res=>console.log(res.data))
   
}
export const returnSpecificCardsToDeck = async(deckId,cardList)=>{
    await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/return/?cards=${cardList}`).then(res=>console.log(res.data))
   
}



