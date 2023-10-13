//TODO create report list page. Likely use cards for the reports?

import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AppNavbar from "./AppNavbar";
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/api/carts')
            .then(response => response.json())
            .then(data => {
                setReports(data._embedded.carts);
                setLoading(false);
            })
    }, []);
    // TODO redo reports so it returns reports instead of carts. Need at least two reports. Possibly sales in the last day,
    // sales by item in the last month, and sales by item in the last year
    const reportList = reports.map(report => {
        return <Card
            style={{
                width: '18rem',
                margin: "3px"
            }}
        >
            <CardBody >
                <CardTitle tag="h5">
                    {report.name}
                </CardTitle>
                <CardText>
                    {report.description}
                </CardText>
                <Button >
                    View
                </Button>
            </CardBody>
        </Card>
    });

    return(
        <div>
            <AppNavbar/>
            {reportList}
        </div>
    )
};

export default Reports;