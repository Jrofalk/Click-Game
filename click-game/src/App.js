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
  this.setState({ score: this.state.score + 1 });
}

render() {
  return (
    <Wrapper>
      <Title>Cards {this.state.score}</Title>
      {this.state.cards.map(card => (
        <Card
          selectCard={this.selectCard}
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
