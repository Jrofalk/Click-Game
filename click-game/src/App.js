import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {

state = {
  cards,
  score:  0,
  bestScore: 0
};

selectCard = event => {

}

render() {
  return (
    <Wrapper>
      <Title>Cards</Title>
      {this.state.cards.map(card => (
        <Card
          id={card.id}
          key={card.id}
          image={card.image}
        />
      ))}
    </Wrapper>
  );
}



}

export default App;
