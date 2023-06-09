import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Container fluid>
        <Row className={classes.rest_appBar}>
          <Col sm={4}>
            <NavLink to="home" className={classes.nav_link}>
              LOGO
            </NavLink>
          </Col>
          <Col sm={4}>
            <NavLink to="listing" className={classes.nav_link}>
              Restaurant Listing
            </NavLink>
          </Col>
          <Col sm={4}>
            <NavLink
              to="add-new"
              className={`${classes.nav_link} ${classes.nav_button}`}
            >
              Add New
            </NavLink>
          </Col>
        </Row>
      </Container>
    </AppBar>
  );
};
export default Header;
