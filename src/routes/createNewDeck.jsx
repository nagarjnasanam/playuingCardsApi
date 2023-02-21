// import { json } from "solid-start"
import axios from 'axios'
import { newDeck,shuffleDeckCardswithDeckId,drawCardsFromDeck,reshuffleCards,reshuffleAvailableCards,customDeck} from '~/api/card'
import {deckId,setDeckId,cards,setCards} from '../store/store.js'
import { For } from 'solid-js'
function createNewDeck() {

    const deck = async()=>{
        // AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H
        // const list = ['AS','2S','KS','AD','2D','KD']
        // const list = ['AS','KS']
        //  await fetch('https://deckofcardsapi.com/api/deck/new/').then(res=>console.log(res))
        //  await axios.get('https://deckofcardsapi.com/api/deck/new/').then(res=>console.log(res.data))
        await newDeck().then((res)=>{
            console.log("success",res.data.deck_id)
            setDeckId(res.data.deck_id)
        })
    }

    const shuffleCardsWithDeck = async()=>{
        await shuffleDeckCardswithDeckId(deckId(), 1).then((res)=>{
            console.log("success",res)
            
        })
    }

    const selectCardsFromDeck = async()=>{
        drawCardsFromDeck(deckId(),10).then((res)=>{
            console.log("success",res.data.cards)
            setCards(res.data.cards)
        })
    }

    const reshuffle = async()=>{
        reshuffleCards(deckId()).then((res)=>{
            console.log("reshuffle",res)
        })
    }

    const reshuffleCardsAvl = async()=>{
        reshuffleAvailableCards(deckId()).then(res=>{console.log("reshuffleAvalilable",res)})
    }
    const personalDeck = async()=>{
        const list = ['AS','2S','KS','AD','2D','KD']
       await  customDeck(list).then(res=>{
        console.log(res)
       })
    }
    return (
        <div>
            <h2>createNewDeck</h2>
            <button onClick={deck}>createNew</button>
            <p>{deckId()}</p>
            <button onClick={shuffleCardsWithDeck}>Shuffle</button>
            <button onClick={selectCardsFromDeck}>selectCards</button>
            <button onClick={reshuffle}>reshuffle</button>
            <button onClick={reshuffleCardsAvl}>reshuffleCards</button>
            <button onClick={personalDeck}>personalDeck</button>
            <div>
                <For each={cards()}>
                    {
                        (item)=>{
                            return <div>
                                <img src={item.image} />
                            </div>
                        }
                    }

                </For>

            </div>
        </div>
    )
}

export default createNewDeck;