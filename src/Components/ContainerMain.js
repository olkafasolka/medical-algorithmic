import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Card, Button } from "antd";
import "antd/dist/antd.css";
import posed from "react-pose";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
export default  () => (
      <Container>
        <Card
          style={{
            width: 300,
            background: this.props.backgroundColor,
            marginLeft: "30%",
            border: "none",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.10s",
            borderRadius: "25px",
            fontFamily: "sans-serif, Evogria"
          }}
        >
          <h1 style={{ fontSize: 25, color: this.props.fontColor }}>
            {this.props.title}
          </h1>
          <p style={{ color: this.props.fontColor }}>
            {this.props.description}
          </p>
          <Link to={this.props.linkYes}>
            <Button style={{ marginRight: "5px" }}>TAK</Button>
          </Link>
          <Link to={this.props.linkNo}>
            <Button style={{ marginRight: "5px" }}>NIE</Button>
          </Link>
          <Link to={this.props.return}>
            <Button style={{ marginRight: "5px" }}>Powrót</Button>
          </Link>
          <Link to={this.props.back}>
            <Button style={{ marginTop: "5px" }}>Od początku</Button>
          </Link>
        </Card>
      </Container>
    );


