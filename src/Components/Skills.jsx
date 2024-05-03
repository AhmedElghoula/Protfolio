import React, { useRef } from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import node from "../images/node.png";
import python from "../images/Pythonsvg.png";
import react from "../images/React.png";
import next from "../images/nextjs.png";
import mongo from "../images/mongodb.png";
import mysql from "../images/MySQL.png";
import redis from "../images/redis.png";
import sass from "../images/sass.png";
import git from "../images/git.png";
import js from "../images/JavaScript.png";
import redux from "../images/redux.png";
import Postgresql from "../images/Postgresql.png";
import java from "../images/java.png";
import elastic from "../images/elastic.png";


import { SiDjango } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 1,
  });

  return (
    <Row ref={ref} style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top" className="shake-tooltip">Django</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 0.25 : 0 }}
          >
            <SiDjango className="skill" />
          </motion.div>
        </Col>
      </OverlayTrigger>

      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Node js</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 0.45 : 0 }}
          >
            <img src={node} alt="node pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Next js</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 0.65 : 0 }}
          >
            <img src={next} alt="next pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">React js</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 0.85 : 0 }}
          >
            <img src={react} alt="react pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Redux</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 1.05 : 0 }}
          >
            <img src={redux} alt="redux pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Git</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 1.25 : 0 }}
          >
            <img src={git} alt="git pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">ElasticSearch</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 1.45 : 0 }}
          >
            <img src={elastic} alt="elastic pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">MongoDb</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 1.65 : 0 }}
          >
            <img src={mongo} alt="mongo pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Redis</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 1.85 : 0 }}
          >
            <img src={redis} alt="redis pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">MySQL</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 2 : 0 }}
          >
            <img src={mysql} alt="mysql pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">PostgreSql</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 2.1 : 0 }}
          >
            <img src={Postgresql} alt="Postgresql pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">JAVA</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 2.2 : 0 }}
          >
            <img src={java} alt="java pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">JavaScript</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 2.3 : 0 }}
          >
            <img src={js} alt="js pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Python</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 2.4 : 0 }}
          >
            <img src={python} alt="node pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Sass</Tooltip>}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: isInView ? 2.5 : 0 }}
          >
            <img src={sass} alt="sass pic" className="skills" />
          </motion.div>
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Skills;
