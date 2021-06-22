import React from 'react';
import CompanyProfile from '../layouts/CompanyProfile/CompanyProfile';
import ACompanyJobAdvertisements from '../layouts/CompanyProfile/ACompanyJobAdvertisements';
import { useParams } from 'react-router';
export default function Company() {
    let {id}=useParams();


    return (
        <div>
            <CompanyProfile id={id}/>
            <ACompanyJobAdvertisements id={id}/>
        </div>
    )
}
