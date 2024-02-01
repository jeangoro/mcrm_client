import React from 'react';
import { Container } from "reactstrap";
import BreadCrumb from "../../components/common/BreadCrumb";
import {ROLE_AGENDA} from "../../routes/roles";
import withAuthProtected from "../../routes/withAuthProtected";
//Import Breadcrumb

    const Agenda = () => {
        document.title = "Agenda | Prise de rendez-vous ";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <div className="float-left">
                            <BreadCrumb title="Prise de rendez vous" pageTitle="Agenda "/>
                        </div>
                        <div>
                            write Html code or structure mes prises de rendez vous ici
                        </div>
                    </Container>
                </div>
            </>
        );
    }

export default withAuthProtected(Agenda, [ROLE_AGENDA]);