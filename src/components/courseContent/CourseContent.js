import React from "react";
import classNames from "classnames";
import { Card } from "antd";
import Cta from '../../components/sections/Cta';


import { SectionSplitProps } from "../../utils/SectionProps";
import { List } from "antd";
import Image from "../elements/Image";

import Hero from "../sections/Hero";
import SectionHeader from "../sections/partials/SectionHeader";
import { useParams } from "react-router-dom";
import { coursesData, isPhone } from "../../assets/constant/constants";
import FeatureCard from "./FeatureCard";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const CourseContent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    "mt-16",
    "mb-16",
    invertMobile && "mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const { id } = useParams();
  const course = coursesData.filter((c) => c.id === id)?.[0];

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <Hero className="illustration-section-01" contentPage />
          <Image
            src={require("./../../assets/images/main_pic.jpeg")}
            alt="Features split 01"
            width={1200}
            height={300}
          />
          <Card
            title={
              <div
                style={{
                  color: "white",
                  fontSize: isPhone ? "30px" : "48px",
                  display: "block",
                  whiteSpace: "pre-wrap",
                }}
              >{`What you'll learn in ${course.title} ?`}</div>
            }
            // bodyStyle={{padding: '10px'}}
            bordered={false}
            style={{
              marginBottom: "20px",
              marginTop: "32px",
              backgroundColor: "#25282C",
              paddingBottom: 10
            }}
          >
            <p
              style={{ fontSize: isPhone ? "18px" :"24px", fontWeight: 500, color: "whiteSmoke" }}
            >
              {course.desc}
            </p>
            {/* <SectionHeader
            data={sectionHeader}
            className="center-content has-bottom-divider"
          /> */}
            <div className={splitClasses}>
              <FeatureCard components={course.components} />
            </div>
          </Card>
          <Cta split  />
        </div>
      </div>
    </section>
  );
};

CourseContent.propTypes = propTypes;
CourseContent.defaultProps = defaultProps;

export default CourseContent;
