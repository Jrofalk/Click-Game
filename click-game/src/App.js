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

gameLoss = () => {
  if(this.state.score > this.state.bestScore){
    this.setState({bestScore: this.state.score})
    console.log(this.state.bestScore);
  }
  this.state.cards.forEach(card => {
    card.count = 0;
  });
  this.setState({ score: 0});


}

selectCard = event => {
   for(let i=0; i<cards.length; i++){
     if(cards[i].count === 0){
      cards[i].count = cards[i].count + 1;
      this.setState({ score: this.state.score + 1 });
     }
     else{
       this.gameLoss();
     }
   }
  
}

render() {
  return (
    <Wrapper>
      <Title>Cards Current Streak:{this.state.score} Best Score:{this.state.bestScore}</Title>
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
