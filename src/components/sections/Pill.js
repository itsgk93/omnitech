import React from 'react';
import { Button, Popover } from 'antd';

const contentComp = (desc) => (
  <div>
    <p>{desc}</p>
  </div>
);

const Pill = ({title, desc}) => (
  <Popover content={contentComp(desc)} title={title} style={{width: "90%"}} >
    <Button type="default" style={{width: window.innerWidth < 500 ? window.innerWidth * .75 : 200}}>{title}</Button>
  </Popover>
);

export default Pill;