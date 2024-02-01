import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_FINANCE} from "../../routes/roles";
//Import Breadcrumb

    const Finances = () => {
        document.title = "Finances | Mes Finances ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Mes finances" pageTitle="Finances"/>
                        </div>
                        <div>
                            write Html code or structure de mes finances ici
                        </div>
                    </Container>
                </div> 
            </>
        );
    }

export default withAuthProtected(Finances, [ROLE_FINANCE]);