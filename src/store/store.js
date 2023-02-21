import {createSignal} from 'solid-js'

const [deckId,setDeckId] = createSignal()
const [cardCount,setCardCount] = createSignal(1)
const [cards,setCards] = createSignal([])
const [cusDeck,setCusdeck] = createSignal()



export{deckId,setDeckId,cardCount,setCardCount,cards,setCards,cusDeck,setCusdeck}