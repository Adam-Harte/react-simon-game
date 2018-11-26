import React from 'react';

const Button = (props) => {
   const classes = ['Button', props.btnType].join(' ');
   return (
      <button className={classes} onClick={props.clicked}>{props.children}</button>
   );
};

export default Button;