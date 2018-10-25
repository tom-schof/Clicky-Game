import React, {Component} from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SimpsonsCard from "./components/SimpsonsCard";
import Simpsons from "./Simpsons.json";
import Title from "./components/Title";

import Wrapper from "./components/Wrapper";


class App extends Component {
  // Setting this.state.Simpsons to the Simpsons json array
  state = {
    Simpsons,
    score: 0,
    highScore: 0,
    correctGuess: "",
    clicked: []
  };

   // This shuffle is based on the Fisher-Yates shuffle and was found at https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });

    if (this.state.score >= this.state.highScore){
      this.setState({ highScore: this.state.highScore + 1 });
    }
  };


  registerClick = id => {
    // gets the character by ID
    const character = this.state.Simpsons.filter(Simpson => Simpson.id === id)[0];
   

    if (character.clicked === true){
      this.setState({correctGuess: "D'Oh! You guessed wrong"});
      this.setState({score: 0});
      this.state.Simpsons.map(Simpson => Simpson.clicked = false);
      console.log(Simpsons);

    }else{
      this.setState({correctGuess: "Woo Hoo! You guessed right!"});
      this.handleIncrement();
      character.clicked = true;
      console.log(Simpsons);

    }
    
    const simpsonsShuffle = this.shuffle(Simpsons);
    // Set this.state.Simpsons equal to the new Simpsons array
    this.setState({ simpsonsShuffle });
  };

  

  // Map over this.state.Simpsons and render a SimpsonCard component for each Simpson object
  render() {
    return (
      

      <Wrapper>
      <Navbar score= {this.state.score}
    highScore= {this.state.highScore}
    correctGuess= {this.state.correctGuess} />
      <Title>The Simpsons</Title>
      <Header/>
        
        {this.state.Simpsons.map(Simpson => (
          <SimpsonsCard
            registerClick={this.registerClick}
            id={Simpson.id}
            key={Simpson.id}
            name={Simpson.name}
            image={Simpson.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

