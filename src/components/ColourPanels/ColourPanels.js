import React from 'react';

import './ColourPanels.css';

const ColourPanels = (props) => {
   return (
      <div className={props.colour} onClick={props.clicked}></div>
   );
};

export default ColourPanels;