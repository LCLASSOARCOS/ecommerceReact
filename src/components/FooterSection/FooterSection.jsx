import React, { useState } from 'react';
import classes from './FooterSection.module.css'

const FooterSection = ({ title, items }) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleSection = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className={expanded ? `${classes.ayudaFooter} ${classes.expanded}` : classes.ayudaFooter}>
        <h4 onClick={toggleSection}>{title}</h4>
        {expanded && (
          <div className={classes.items}>
            {items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}
      </div>
    );
  };
  export default FooterSection
  