import {Popup} from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  RulesButton,
  PopUpContent,
  Rules,
  CloseButton,
  RulesImage,
} from './styledComponents'

const PopUpComponent = () => (
  <div className="popup-container">
    <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
      {close => (
        <>
          <PopUpContent>
            <CloseButton type="button" onClick={() => close()}>
              <RiCloseLine />
            </CloseButton>
            <Rules>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </Rules>
          </PopUpContent>
        </>
      )}
    </Popup>
  </div>
)
export default PopUpComponent
