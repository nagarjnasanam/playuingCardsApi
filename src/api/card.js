import axios from "axios";

export const newDeck = async()=>{
   const data=  await axios.get('https://deckofcardsapi.com/api/deck/new/')
   return data
    
}

export const shuffleAndCreateNewDeck = async(deckCount)=>{
     const data =await axios.get(` https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckCount}`)
     return data
    
}

export const shuffleDeckCardswithDeckId = async(DeckId,deckCount)=>{
   const data= await axios.get(` https://deckofcardsapi.com/api/deck/${DeckId}/shuffle/?deck_count=${deckCount}`)
   return data
}

export const drawCardsFromDeck = async(DeckId,noOfCards)=>{
    const data=await axios.get(`https://deckofcardsapi.com/api/deck/${DeckId}/draw/?count=${noOfCards}`)
    return data
   
}
export const reshuffleCards = async(DeckId)=>{
   const data= await axios.get(`https://deckofcardsapi.com/api/deck/${DeckId}/shuffle/`)
     return data
   
}
export const reshuffleAvailableCards = async(DeckId)=>{
  const data=  await axios.get(`https://deckofcardsapi.com/api/deck/${DeckId}/shuffle/??remaining=true`)
  return data

   
}
export const customDeck = async(cardList)=>{
   const data= await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${cardList}`)
   return data

   
}
export const createPileAddCards = async(deckId,pileName,cardList)=>{
   const data= await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/add/?cards=${cardList}`)
   return data
   
}
export const shufflePile = async(deckId,pileName)=>{
    const data=await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/shuffle/`)
    return data
   
}
export const pileCardsList = async(deckId,pileName)=>{
   const data = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/list/`)
   return data
   
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



