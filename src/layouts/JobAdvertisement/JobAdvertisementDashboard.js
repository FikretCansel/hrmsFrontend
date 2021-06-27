import React from 'react'
import {Row,Col} from "reactstrap"
import JobAdvertisementList from "../../pages/JobAdvertisementList";
import JobAdvertisementFilter from "./JobAdvertisementFilter";
import { Route } from 'react-router';
import JobAdvertisementDetail from '../../pages/JobAdvertisementDetail';


function JobAdvertisementDashboard() {
    return (
        <div>
            <Row>
                <Col xs="3">
                    <JobAdvertisementFilter/>
                </Col>
                <Col xs="9">
                    <Route exact path="/jobAdvertisement" component={JobAdvertisementList}/>
                    <Route path="/jobAdvertisement/detail/:id" component={JobAdvertisementDetail}/>
                    <Route path="/jobAdvertisement/list" component={JobAdvertisementList}/>
                </Col>
            </Row>
            
        </div>
    )
}
export default JobAdvertisementDashboard;