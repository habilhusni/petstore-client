import React, { Component } from "react";
import Viewer from "react-viewer";
import { Col, Row } from "antd";

import img from "../../../assets/body-image/dog-1.jpg";
import img2 from "../../../assets/body-image/dog-2.jpg";
import img3 from "../../../assets/body-image/dog-3.jpg";

// const { Panel } = Collapse;

class LeftSidePrd extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <Col span={12}>
        <Row className="image-view">
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "50px 0",
            }}
          >
            <div
              style={{
                width: 400,
                height: 400,
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                cursor: "pointer",
              }}
              onClick={() => {
                this.setState({ visible: true });
              }}
            />
            <Viewer
              visible={this.state.visible}
              onClose={() => {
                this.setState({ visible: false });
              }}
              images={[
                { src: img, alt: "" },
                { src: img2, alt: "" },
                { src: img3, alt: "" },
              ]}
              attribute={false}
            />
          </Col>
        </Row>
        {/* <Row>
          <Col span={24}>
            <Collapse>
              <Panel
                showArrow={false}
                header="This is panel header with no arrow icon"
                key="2"
              >
                <p>Helo</p>
              </Panel>
            </Collapse>
          </Col>
        </Row> */}
      </Col>
    );
  }
}

export default LeftSidePrd;
