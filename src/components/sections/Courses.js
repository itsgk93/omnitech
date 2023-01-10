import React from "react";
import Feature from "./Feature";
import classNames from "classnames";
import CourseTile from "./CourseTile";

const Course = ({
  course,
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
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  return (
    <div className="container">
      <div className={innerClasses}>
        <div className={tilesClasses}>
          <CourseTile
            id={course.id}
            title={course.title}
            desc={course.desc}
            components={course.components}
            image={require(`../../assets/images/${course.image}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
