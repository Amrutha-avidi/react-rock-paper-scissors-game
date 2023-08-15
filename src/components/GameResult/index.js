import {
  GameContainer,
  ItemButton,
  ItemImage,
  ResultContainer,
  ResultHead,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {
    choicesList,
    isShow,
    newArray,
    message,
    resetGame,
    opponentChoice,
  } = props

  const showGame = () => (
    <GameContainer>
      {isShow && (
        <>
          <ItemButton
            type="button"
            data-testid="rockButton"
            onClick={() => opponentChoice(choicesList[0].id)}
          >
            <ItemImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </ItemButton>
          <ItemButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => opponentChoice(choicesList[1].id)}
          >
            <ItemImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </ItemButton>
          <ItemButton
            type="button"
            data-testid="paperButton"
            onClick={() => opponentChoice(choicesList[2].id)}
          >
            <ItemImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </ItemButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultContainer>
            <ResultHead>YOU</ResultHead>
            <ItemImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultHead>OPPONENT</ResultHead>
            <ItemImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultHead>{message}</ResultHead>
            <PlayAgainButton type="button" onClick={resetGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultContainer>
        </>
      )}
    </GameContainer>
  )

  return showGame()
}
export default GameResult
