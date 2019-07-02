import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";


const Walk = () => (
    <Card title="CHODZI?" style={{ width: 300, background: "lightblue", marginLeft: "30%"}}>
        <Button style={{marginRight:"5px"}}>TAK</Button>
        <Button>NIE</Button>
    </Card>
);

export default withRouter(Walk);
