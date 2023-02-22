// import { json } from "solid-start"
import axios from "axios";
import {
  newDeck,
  shuffleDeckCardswithDeckId,
  drawCardsFromDeck,
  reshuffleCards,
  reshuffleAvailableCards,
  customDeck,
  shufflePile,
  createPileAddCards,
  pileCardsList
} from "~/api/card";
import {
  deckId,
  setDeckId,
  cards,
  setCards,
  cardata,
  setCardData,
} from "../store/store.js";
import { For } from "solid-js";
function createNewDeck() {
  const deck = async () => {
    // AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H
    // const list = ['AS','2S','KS','AD','2D','KD']
    // const list = ['AS','KS']
    //  await fetch('https://deckofcardsapi.com/api/deck/new/').then(res=>console.log(res))
    //  await axios.get('https://deckofcardsapi.com/api/deck/new/').then(res=>console.log(res.data))
    await newDeck().then((res) => {
      console.log("success", res);
      setDeckId(res.data.deck_id);
      console.log(cardata.data);

      setCardData("data", () => [
        {
          deckId: res.data.deck_id,
          remaining: res.data.remaining,
          shuffled: res.data.shuffled,
        },
      ]);
      console.log(cardata.data);
    });
  };

  const shuffleCardsWithDeck = async () => {
    await shuffleDeckCardswithDeckId(deckId(), 1).then((res) => {
      console.log("success", res);
      setCardData("data", () => [
        {
          deckId: res.data.deck_id,
          remaining: res.data.remaining,
          shuffled: res.data.shuffled,
        },
      ]);
    });
  };

  const selectCardsFromDeck = async () => {
    drawCardsFromDeck(deckId(), 5).then((res) => {
      console.log("success", res);
      setCards(res.data.cards);
      setCardData("data", 0, "remaining", res.data.remaining);
      if (res.data.remaining == 0) {
        console.log("no cards remaining");
      }
    });
  };

  const reshuffle = async () => {
    reshuffleCards(deckId()).then((res) => {
      console.log("reshuffle", res);
      setCardData("data", () => [
        {
          deckId: res.data.deck_id,
          remaining: res.data.remaining,
          shuffled: res.data.shuffled,
        },
      ]);
    });
  };

  const reshuffleCardsAvl = async () => {
    reshuffleAvailableCards(deckId()).then((res) => {
      console.log("reshuffleAvalilable", res);
      setCardData("data", () => [
        {
          deckId: res.data.deck_id,
          remaining: res.data.remaining,
          shuffled: res.data.shuffled,
        },
      ]);
    });
  };
  const personalDeck = async () => {
    const list = ["AS", "2S", "KS", "AD", "2D", "KD"];
    await customDeck(list).then((res) => {
      console.log(res);
    });
  };

  const createPile = async () => {
    // const list = ["AS", "2S", "KS", "AD", "2D", "KD"];
    const list = cards().map(card=>{
        return card.code
    });
    console.log(list);
    await createPileAddCards(deckId(), "Nagarjuna",list).then((res) => {
      console.log(res);
      const data= res.data
      setCardData("piles", () => [data]);
    
    });
    console.log(cardata.piles)
  };

  const shufflepile = async ()=>{
    await shufflePile(deckId(),'Nagarjuna').then((res) => {
        console.log(res);
    })
  }
  const pileCardList = async ()=>{
    await pileCardsList(deckId(),'Nagarjuna').then((res) => {
        console.log(res);
    })
  }
  return (
    <div>
      <h2>createNewDeck</h2>
      <input
        type="text"
        placeholder="enter number of decks"
        onChange={(e) => {
          console.log(e.target.value);
          setCardData("deckCount", Number(e.target.value));
        }}
      />
      <input
        type="text"
        placeholder="selectNumber of Cards"
        onChange={(e) => {
          console.log(e.target.value);
          setCardData("noOfCardsSelected", Number(e.target.value));
        }}
      />
      <p>{JSON.stringify(cardata.data)}</p>
      <p>{JSON.stringify(cardata.deckCount)}</p>
      <p>{JSON.stringify(cardata.noOfCardsSelected)}</p>
      <p>{JSON.stringify(cardata.piles)}</p>
      
      <button onClick={deck}>createNew</button>
      <p>{deckId()}</p>
      <button onClick={shuffleCardsWithDeck}>Shuffle</button>
      <button onClick={selectCardsFromDeck}>selectCards</button>
      <button onClick={reshuffle}>reshuffle</button>
      <button onClick={reshuffleCardsAvl}>reshuffleCards</button>
      <button onClick={personalDeck}>personalDeck</button>
      <button onClick={createPile}>createPile</button>
      <button onClick={shufflepile}>shufflepile</button>
      <button onClick={pileCardList}>pileCardList</button>
      <div>
        <For each={cards()}>
          {(item) => {
            return (
              
                <img src={item.image} />
              
            );
          }}
        </For>
      </div>
    </div>
  );
}

export default createNewDeck;
