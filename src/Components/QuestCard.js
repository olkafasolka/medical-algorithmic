import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";


const QuestCard = () => (
  <Card title="BARDZO KRWAWI?" style={{ width: 300, background: "lightblue", marginLeft: "30%"}}>
      <Link to="/hemo"><Button style={{marginRight:"5px"}}>TAK</Button></Link>
      <Link to="/walk"><Button>NIE</Button></Link>
  </Card>
);

export default withRouter(QuestCard);
