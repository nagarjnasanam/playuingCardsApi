// import { json } from "solid-start"
import axios from 'axios'
import { customDeck } from '~/api/card'
function createNewDeck() {

    const deck = async()=>{
        // AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H
        const list = ['AS','2S','KS','AD','2D','KD']
        // const list = ['AS','KS']
        //  await fetch('https://deckofcardsapi.com/api/deck/new/').then(res=>console.log(res))
        //  await axios.get('https://deckofcardsapi.com/api/deck/new/').then(res=>console.log(res.data))
        await customDeck(list)
    }
    return (
        <div>
            <h2>createNewDeck</h2>
            <button onClick={deck}>createNew</button>
        </div>
    )
}

export default createNewDeck;