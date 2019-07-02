import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";


const StoppingHemo = () => (
  <Card
    title="TAMUJ KRWOTOK!"
    style={{ width: 300, background: "red", marginLeft: "30%" }}
  >
    <h1>1</h1>
    <p>NIEPRZYTOMNY?</p>
    <Button>TAK</Button>

  </Card>
);

export default withRouter(StoppingHemo);
