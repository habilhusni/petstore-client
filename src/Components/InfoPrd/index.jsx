import React from "react";
import { Tabs } from "antd";
import "./index.css";

const { TabPane } = Tabs;

const InfoPrd = () => (
  <Tabs tabBarGutter={16} size="large" type="card">
    <TabPane className="tabpane" tab="Description" key="1">
      Description
    </TabPane>
    <TabPane className="tabpane" tab="Feeding Instructions" key="2">
      Feeding Instruction
    </TabPane>
    <TabPane className="tabpane" tab="Nutritional Info" key="3">
      Nutritional Info
    </TabPane>
  </Tabs>
);

export default InfoPrd;
