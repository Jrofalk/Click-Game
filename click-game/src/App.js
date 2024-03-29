import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";

//Fix logic so that you dont have to click an image again to present win scenario


class App extends Component {

  state = {
    cards,
    score:  0,
    bestScore: 0,
    clicked: []
  };
  
  gameSet = () => {
    if(this.state.score > this.state.bestScore){
      this.setState({bestScore: this.state.score})
      console.log(this.state.bestScore);
    }
    this.setState({ score: 0});
    this.setState({clicked: []});
  }
  
  selectCard = event => {
    const imageSelected = event.target.id;
    //Evaulates whether the card has been clicked on.
    const isClicked = this.state.clicked.indexOf(imageSelected) > -1;
    
  
    if(isClicked){
      this.gameSet();
      //This sorts the cards.
      this.state.cards.sort(() => Math.random() - 0.5)
    }
    else{
      this.setState({ score: this.state.score + 1 });
      this.setState({clicked: this.state.clicked.concat(imageSelected)})
      this.state.cards.sort(() => Math.random() - 0.5)
      if(this.state.score === 10) {
        this.gameSet();
        
      }
    }
   }

render() {
  return (
    <Wrapper>
      <Title>Rose Tattoo Current Streak:{this.state.score} Best Score:{this.state.bestScore}</Title>
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
