import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
//Import Breadcrumb

    const Support = () => {
        document.title = "Support | Agence ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Support" pageTitle="Agence"/>
                        </div>
                        <div>
                            write Html code or structure de mes supports agnece ici
                        </div>
                    </Container>
                </div>
            </> 
        );
    }

export default Support;