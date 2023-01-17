import React from "react";
import { coursesContentData } from "../../assets/constant/courseContent";

const FeatureCard = (props) => {
  const { components } = props;

  console.log(coursesContentData);
  const featureDesc = (courseId) =>
    coursesContentData.filter((course) => course.id === courseId);
  console.log(featureDesc("git"));
  return (
    <div>
      {components.map((c) => {
        return (
          <div>
            <h2 ><u>{c.title}</u></h2>
            <p>{c.desc}</p>
            <ul itemType="bullet" style={{marginLeft: 20, }}>{featureDesc?.(c.id)?.[0]?.content?.map((feature) => <li>{feature}</li>)}</ul>
          </div>
        );
      })}
    </div>
  );
};
export default FeatureCard;
