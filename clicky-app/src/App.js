import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";

import friends from "./friends.json";


class App extends Component {

  state = {
    score: 0,
    friends,
    clicked: [],
    
};

setClick = event => {
    const character = event.target.alt



    const characterClicked = this.state.clicked.indexOf(character) > -1;

       if (characterClicked) {

            this.setState({
            friends: this.state.friends.sort(function (a, b) {
                return 0.5 - Math.random();
            }),
      clicked: [],
     score: 0
                         });

    //  console.log("nope");
      alert("Sorry u lost!!!!");




    } else {
        this.setState({
                friends: this.state.friends.sort(function (a, b) {
                    return 0.5 - Math.random();
                }),
                clicked: this.state.clicked.concat(character),

                score: this.state.score + 1
            },
            () => {
                if (this.state.score === 9) {


                    alert("You win");


                    this.setState({
                        friends: this.state.friends.sort(function (a, b) {
                            return 0.5 - Math.random();
                        }),
                        clicked: [],
                        score: 0
                    })
                }
            }
        );
    }
}

 


  render() {
    return (
      <Wrapper>
        
        <h3 className="scoring card">
          Clicky Game!
            <br></br>
            <br></br>
           Click on a character, but dont click twice or you lose!
            <br></br>
            <br></br>
            Score: {this.state.score} 
        </h3>

        {this.state.friends.map(friend => (
          <FriendCard
            setClick={this.setClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
  }
  }


export default App;
