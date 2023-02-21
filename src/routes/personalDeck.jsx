import { newDeck,shuffleDeckCardswithDeckId,drawCardsFromDeck,reshuffleCards,reshuffleAvailableCards,customDeck} from '~/api/card'
import {deckId,setDeckId,cards,setCards,cusDeck,setCusdeck} from '../store/store.js'
function personalDeck() {
    const personalDeck = async()=>{
        const list = ['AS','2S','KS','AD','2D','KD']
       await  customDeck(list).then(res=>{
        console.log(res)
        setCusdeck(res.data.deck_id)
       })
    }
    return (
        <div>
            <p>{cusDeck()}</p>
            <h2>personalDeck</h2>
            <button onClick={personalDeck}>personalDeck</button>

        </div>
    )
}

export default personalDeck;