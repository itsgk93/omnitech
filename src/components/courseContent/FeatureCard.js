import React from "react";
import ContentCard from "./ContentCard";

const FeatureCard = (props) => {
  const { components } = props;

  return (
    <div>
      {components.map((c) => {
        return <ContentCard title={c.title} desc={c.desc} id={c.id} />;
      })}
    </div>
  );
};
export default FeatureCard;
