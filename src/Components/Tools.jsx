import React, { useRef } from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vscode from "../images/vscode.png";
import postman from "../images/postman.png";
import slack from "../images/slack.png";
import { motion, useInView } from "framer-motion";
function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 1,
  });
  return (
    <Row  ref={ref} style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">VsCode</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 ,transform:isInView ? 'translateX(0px)' :'translateX(200px)'}}
            transition={{ duration: 0.5, transition: "cubic-bezier(0.17, 0.55, 0.55, 1)", delay: isInView ? 0.4 : 0 }}>
          <img src={vscode} alt="vscode pic" className="skills" />
          </motion.div>
        </Col>
        
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Postman</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 0.25 : 0 }}>
          <img src={postman} alt="postman pic" className="skillsPost" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Slack</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 ,transform:isInView ? 'translateX(0px)' :'translateX(-200px)'}}
            transition={{ duration: 0.5, transition: "cubic-bezier(0.17, 0.55, 0.55, 1)", delay: isInView ? 0.4 : 0 }}>
          <img src={slack} alt="slack pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Tools;
