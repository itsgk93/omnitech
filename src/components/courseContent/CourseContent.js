import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import { List } from "antd";
import SectionHeader from "../sections/partials/SectionHeader";
import { useParams } from "react-router-dom";
import { coursesData } from "../../assets/constant/constants";
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
  const sectionHeader = {
    title: course.title,
    paragraph: course.desc,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content has-bottom-divider"
          />
          <div className={splitClasses}>
            {/* <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              dataSource={course.components}
              renderItem={(item) => (
                <List.Item style={{ paddingLeft: "0px" }}>
                  <div >
                  <div style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>{item.title}</div>
                  {/* <div>{item.desc}</div> */}
                  {/* </div>
                </List.Item> */}
              {/* )}
            /> */} 
            <FeatureCard components={course.components} />
          </div>
        </div>
      </div>
    </section>
  );
};

CourseContent.propTypes = propTypes;
CourseContent.defaultProps = defaultProps;

export default CourseContent;
