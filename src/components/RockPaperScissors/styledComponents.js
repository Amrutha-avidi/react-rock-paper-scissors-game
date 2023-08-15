import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  background-size: cover;
  padding: 50px;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  align-self: flex-end;
`

export const ScoreBoard = styled.div`
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const ScoreBoardHeadCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreBoardHead = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
  margin: 0px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 140px;
  width: 140px;
  padding: 10px;
  border-radius: 20px;
`
export const ScoreContainerHead = styled.p`
  font-family: 'Bree Serif';
  font-size: 30px;
  margin-bottom: 0px;
`
export const ScoreContainerScore = styled.p`
  font-family: 'Roboto';
  font-size: 40px;
  margin-bottom: 20px;
`
