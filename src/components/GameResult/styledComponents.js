import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
`
export const ItemButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  width: 150px;
  height: 150px;
`
export const ItemImage = styled.img`
  width: 150px;
  height: 150px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ResultHead = styled.p`
  color: #ffffff;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border-width: 0px;
  border-radius: 7px;
  font-family: 'Bree Serif';
  width: 130px;
  height: 40px;
  margin-left: 25px;
`
