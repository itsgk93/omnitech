import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "../sections/partials/SectionHeader";
import Course from "../sections/Courses";

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

  const sectionHeader = {
    title: "DevOps",
    paragraph:
      "DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary to agile software development; several DevOps aspects came from the agile way of working.",
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
            {/* {coursesData.map((course) => (
              <Course
                id={course.id}
                title={course.title}
                desc={course.desc}
                components={course.components}
                image={require(`../../assets/images/${course.image}`)}
              />
            ))} */}
            Hello
          </div>
        </div>
      </div>
    </section>
  );
};

CourseContent.propTypes = propTypes;
CourseContent.defaultProps = defaultProps;

export default CourseContent;
