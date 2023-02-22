import { shuffleAndCreateNewDeck, drawCardsFromDeck, } from "~/api/card";
import { createSignal,onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { For, Show } from "solid-js";
const [deckId, setDeckId] = createSignal();
const [cards, setCards] = createSignal([]);
const [dealer, setDealer] = createSignal([]);
const [p1, setP1] = createSignal([]);
const [p2, setP2] = createSignal([]);
const [result,setResult] = createSignal('lll');
const [score, setScore] = createStore({
  dealer: 0,
  p1: 0,
  p2: 0,
});
function blackJack() {
  const createDeck = async () => {
    await shuffleAndCreateNewDeck(1).then((res) => {
      console.log(res);
      setDeckId(res.data.deck_id);
    });
  };
  onMount(()=>{
    createDeck()
    selectCards()
  })
  const addSumOFFaceValue = (data) => {
    var sum = 0;
    data().map((card) => {
      var faceCardValue;
      if (
        card.value === "KING" ||
        card.value === "QUEEN" ||
        card.value === "JACK"
      ) {
        faceCardValue = 10;
      } else if (card.value === "ACE") {
        faceCardValue = 1;
      } else {
        faceCardValue = card.value;
      }

      sum += Number(faceCardValue);
    });
    console.log(sum);

    return sum;
  };

  const hit = (pName) => {
    console.log('hit', pName);
    drawCardsFromDeck(deckId(), 1).then((res) => {
        console.log(res.data.cards[0])
           if(pName ==='p1'){
        setP1([...p1(), res.data.cards[0]]);

      }
      else if(pName ==='p2'){
        setP2([...p2(), res.data.cards[0]]);
      }
      else {
        console.log("please choose player Name")
      }
      console.log(p1());
      setScore("p1", addSumOFFaceValue(p1));
      setScore("p2", addSumOFFaceValue(p2));
    });
  };

  const selectCards = async () => {
    drawCardsFromDeck(deckId(), 3).then((res) => {
      console.log(res.data.cards);
      // setCards([res.data.cards[0]])
      setCards([...cards(), res.data.cards[0]]);
      setP1([...p1(), res.data.cards[1]]);
      setP2([...p2(), res.data.cards[2]]);
      const s = addSumOFFaceValue(cards);
      console.log(s);
      addSumOFFaceValue(p1);
      addSumOFFaceValue(p2);
      setScore("dealer", addSumOFFaceValue(cards));
      setScore("p1", addSumOFFaceValue(p1));
      setScore("p2", addSumOFFaceValue(p2));
      console.log(score);
    });
  };

  const show = () => {
    console.log("show")
    if(JSON.stringify(score.dealer)>JSON.stringify(score.p1) & JSON.stringify(score.dealer)>JSON.stringify(score.p2)){
        setResult('Dealer won')
        return "Dealer won"
        
    }
    else if(JSON.stringify(score.dealer)===JSON.stringify(score.p1) || JSON.stringify(score.dealer)===JSON.stringify(score.p2)){
        setResult('Draw')
        return "Draw"

    }
    else if(JSON.stringify(score.p1)<=16){
        setResult('Value shoub be grater than 16 so pick the card')
        return "Value shoub be grater than 16 so pick the card"
        
    }
    else if(JSON.stringify(score.p2)<=16){
        setResult('Value shoub be grater than 16 so pick the card')

        return "Value shoub be grater than 16 so pick the card"
    }
    else {
        return "nothig"
    }

  }

  return (
    <div>
        <p>result :{result()}</p>
      <button onClick={()=>{hit('p1')}}>Player1</button>
      <button onClick={()=>{hit('p2')}}>Player2</button>
      <button onClick={show}>Show</button>

      <p>{JSON.stringify(score)}</p>
      <h2>blackJack</h2>
      <button onClick={createDeck}>createDeck</button>
      <button onClick={selectCards}>selectCards</button>
      <h1>Dealer :{JSON.stringify(score.dealer)}</h1>
    
      <Show
        when={JSON.stringify(score.dealer)<21}
        fallback={<h1>Dealer lossed and opponents won the game</h1>}
      >
        <For each={cards()}>
        {(item) => {
          return <img src={item.image} />;
        }}
      </For>
        
      </Show>
      <h1>Player 1:{JSON.stringify(score.p1)}</h1>
      <Show
        when={JSON.stringify(score.p1)<21}
        fallback={<h1>Looser</h1>}
      >
        <For each={p1()}>
        {(item) => {
          return <img src={item.image} />;
        }}
      </For>
        
      </Show>
      
      <h1>Player 2 : {JSON.stringify(score.p2)}</h1>


      <Show
        when={JSON.stringify(score.p2)<21}
        fallback={<h1>Looser</h1>}
      >
        <For each={p2()}>
        {(item) => {
          return <img src={item.image} />;
        }}
      </For>
        
      </Show>
    </div>
  );
}

export default blackJack;
