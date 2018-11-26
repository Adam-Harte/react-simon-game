import React, { Component } from 'react';

import './GameBoard.css';

import ColourPanel from '../../components/ColourPanels/ColourPanels';
import button from '../../components/Button/Button';

class GameBoard extends Component {

   lightup = (item) => {
      let panel = document.querySelectorAll(".Panel")[item];
      panel.classList.add('lightup');
      setTimeout(() => {
         panel.classList.remove('lightup');
      }, 500);
   }

   handlePanelClick = (panel) => {
      console.log(panel + 'clicked!');
      this.lightup(panel);
   }

   render() {
      return (
         <div className='GameBoard'>
            <ColourPanel colour='Green' clicked={() => this.handlePanelClick(0)} />
            <ColourPanel colour='Red' clicked={() => this.handlePanelClick(1)} />
            <ColourPanel colour='Yellow' clicked={() => this.handlePanelClick(2)} />
            <ColourPanel colour='Blue' clicked={() => this.handlePanelClick(3)} />
         </div>
      );
   }
}

export default GameBoard;