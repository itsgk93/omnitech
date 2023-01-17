import React from "react";
import { Radio, Tabs } from "antd";

const FeatureCard = (props) => {
  const { components } = props;

  return (
    <div>
      {components.map((c) => {
        return (
          <div>
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
export default FeatureCard;
