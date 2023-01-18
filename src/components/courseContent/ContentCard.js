import React from "react";
import { Card } from "antd";
import { coursesContentData } from "../../assets/constant/courseContent";
import { isPhone } from "../../assets/constant/constants";

const ContentCard = ({ title, desc, id }) => {
  const featureDesc = (courseId) =>
    coursesContentData.filter((course) => course.id === courseId);

  return (
    // <div className="site-card-border-less-wrapper">
    <Card
      title={
        <div style={{ color: "darkBlue", fontSize: isPhone ? "22px" : "26px",  display: "block", whiteSpace: 'initial' }}>
          {title}
        </div>
      }
    //   bodyStyle={{padding}}
      bordered
      hoverable
      style={{ marginBottom: "20px", backgroundColor: "white" }}
    >
      <p style={{ fontSize: isPhone ? "16px" : 20, fontWeight: 500 }}>{desc}</p>
      <ul itemType="none" style={{ marginLeft: isPhone ? 0: 20, marginBottom: 0 }}>
        {featureDesc?.(id)?.[0]?.content?.map((feature) => {
          const featureSets = feature.includes("#");
          if (featureSets) {
            return (
              <ul
                itemType="none"
                style={{ listStyle: "none", margin: 0, marginBottom: 8,  }}
              >
                <li
                  style={{
                    fontSize: isPhone ? "14px" : 18,
                    margin: 0,
                    whiteSpace: "pre-wrap",
                  }}
                >{`-  ${feature.slice(1)}`}</li>
              </ul>
            );
          } else
            return (
              <li
                style={{
                  color: "#1c1d1f",
                  fontSize: isPhone ? "16px" : 18,
                  fontWeight: 400,
                  margin: 0,
                  marginBottom: 8,
                }}
              >
                {feature}
              </li>
            );
        })}
      </ul>
    </Card>
    // </div>
  );
};

export default ContentCard;
