import React from "react";
import { Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <section className={classes.section_container}>
      <Typography className={classes.section_title} variant="h3">
        {props.title}
      </Typography>
      <Row className={classes.section_wrapper}>{props.children}</Row>
    </section>
  );
};

export default Section;
