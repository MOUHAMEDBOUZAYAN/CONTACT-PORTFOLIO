import { Col } from "react-bootstrap";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="icon-projects">
              <a href={link} target="_blank"><img src={navIcon4} alt="Icon" /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}