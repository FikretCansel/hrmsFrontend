import React from "react";
import { Jumbotron, Button} from 'reactstrap';
import { Link } from "react-router-dom";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home">
      <Jumbotron>
        <h1 className="display-3">İşBul.com</h1>
        <p className="lead">
          Hayalinizdeki işi işBul.com da bulun.
        </p>
        <hr className="my-2" />
        <p>
        1000 den fazla iş ilanı ile
        </p>
        <p className="lead">
          <Link to="/jobAdvertisement"><Button color="primary">Hemen Başla</Button></Link>
        </p>
      </Jumbotron>
    </div>
  );
}
