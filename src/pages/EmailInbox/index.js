import React from 'react';
import { Container } from 'reactstrap';
import EmailToolbar from './EmailToolbar';
import withAuthProtected from "../../routes/withAuthProtected";
import {ROLE_MAILBOX} from "../../routes/roles";

const MailInbox = () => {
  document.title="Mailbox";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>                
                    <div className="email-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                        {/* <EmailSidebar /> */}
                        <EmailToolbar />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withAuthProtected(MailInbox, [ROLE_MAILBOX]);
