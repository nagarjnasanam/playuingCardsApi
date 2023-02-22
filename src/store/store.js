import {createSignal} from 'solid-js'
import { createStore } from 'solid-js/store'

const [deckId,setDeckId] = createSignal()
const [cardCount,setCardCount] = createSignal(1)
const [cards,setCards] = createSignal([])
const [cusDeck,setCusdeck] = createSignal()
const [cardata,setCardData] = createStore({
 data:[{namse:'nah'}],
 deckCount:1,
 noOfCardsSelected:1,
 piles:[]
})






export{deckId,setDeckId,cardCount,setCardCount,cards,setCards,cusDeck,setCusdeck,cardata,setCardData}