import React, { Component } from 'react';

import './GameBoard.css';

import ColourPanel from '../../components/ColourPanels/ColourPanels';
import button from '../../components/Button/Button';

class GameBoard extends Component {

   componentDidMount() {
      const sequence = this.generateSequence();
      let i = 0;
      let playSequence = setInterval(() => {
         this.lightup(sequence[i]);
         i++;
         if (i >= sequence.length) {
            clearInterval(playSequence);
         }
      }, 500);
   }

   getRandomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
   }

   generateSequence = () => {
      const seq = [];

      for (let i = 0; i < 24; i++) {
         seq.push(this.getRandomNum(0, 4));
      }

      console.log(seq);

      return seq;
   }

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