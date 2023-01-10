import React from "react";
import Pill from "./Pill";
import { List, Button } from "antd";
import { NavLink } from "react-router-dom";

const CourseDesc = ({ description, components, id }) => (
  <div>
    <div className="mb-32">{description}</div>

    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={components}
      //   style={{marginRight: '10px'}}
      renderItem={(item) => (
        <List.Item style={{ paddingLeft: "0px" }}>
          <div>
            <Pill title={item.title} desc={item.desc} />
          </div>
        </List.Item>
      )}
    />
    <div style={{ display: "flex", justifyContent: "end" }}>
      {" "}
      <NavLink to={`course`}>
        <Button type="primary">View Course Content</Button>
      </NavLink>
    </div>
  </div>
);

export default CourseDesc;
