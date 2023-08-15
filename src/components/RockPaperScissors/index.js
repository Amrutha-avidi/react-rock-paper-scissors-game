import {Component} from 'react'
import {
  MainContainer,
  RulesContainer,
  ScoreBoard,
  ScoreBoardHead,
  ScoreBoardHeadCon,
  ScoreContainer,
  ScoreContainerScore,
  ScoreContainerHead,
} from './styledComponents'

import PopUpComponent from '../PopUpComponent'
import GameResult from '../GameResult'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    isShow: true,
    score: 0,
    message: 'YOU WON',
    newArray: [choicesList[0], choicesList[1]],
  }

  resetGame = () => this.setState({isShow: true})

  updateResult = (user, opponent) => {
    if (user.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (user.id === 'PAPER') {
      switch (opponent.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  opponentChoice = id => {
    const {score} = this.state
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]
    const user = choicesList.filter(eachItem => eachItem.id === id)
    const result = this.updateResult(user[0], opponent)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      newArray: [user[0], opponent],
      message: result,
      isShow: false,
    })
  }

  render() {
    const {isShow, score, message, newArray} = this.state
    return (
      <MainContainer>
        <ScoreBoard>
          <ScoreBoardHeadCon>
            <ScoreBoardHead>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </ScoreBoardHead>
          </ScoreBoardHeadCon>
          <ScoreContainer>
            <ScoreContainerHead>Score</ScoreContainerHead>
            <ScoreContainerScore>{score}</ScoreContainerScore>
          </ScoreContainer>
        </ScoreBoard>
        <GameResult
          choicesList={choicesList}
          isShow={isShow}
          message={message}
          newArray={newArray}
          resetGame={this.resetGame}
          opponentChoice={this.opponentChoice}
        />
        <RulesContainer>
          <PopUpComponent />
        </RulesContainer>
      </MainContainer>
    )
  }
}
export default RockPaperScissors
