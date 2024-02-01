import React from "react";

const AuthFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Mobility CRM.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AuthFooter;
