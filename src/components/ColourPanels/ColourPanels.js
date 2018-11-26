import React from 'react';

import './ColourPanels.css';

const ColourPanels = (props) => {
   const classes = ['Panel', props.colour].join(' ');
   return (
      <div className={classes} onClick={props.clicked}></div>
   );
};

export default ColourPanels;