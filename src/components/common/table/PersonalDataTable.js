import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ButtonGroup, Col, Collapse, DropdownMenu, DropdownToggle, Input, Row, UncontrolledDropdown } from "reactstrap";
import classnames from "classnames";

const PersonalDataTable = ({ Data, Columns }) => {
  const [lefticonCol1, setlefticonCol1] = useState(false);
  const t_lefticonCol1 = () => {
    setlefticonCol1(!lefticonCol1);
  };

  const paginationComponentOptions = {
    rowsPerPageText: "Ligne par page",
    rangeSeparatorText: "sur",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Tout",
  };

  const [columns, setColumns] = useState(Columns);

  const randomId = (length = 6) =>
    Math.random()
      .toString(36)
      .substring(2, length + 2);
  // console.log(randomId(6));

  function updateColumns({ id, value }) {
    let checked = document.getElementById(id).checked;
    if (checked) {
      setColumns(
        columns.map((column) => {
          if (column.id === value) {
            column.omit = false;
            return column;
          } else {
            return column;
          }
        })
      );
    } else {
      setColumns(
        columns.map((column) => {
          if (column.id === value) {
            column.omit = true;
            return column;
          } else {
            return column;
          }
        })
      );
    }
  }

  return (
    <div>
      <Row className="contact-filter-bar">
        <div className="search-input">
          <div className="form-icon">
            <input className="form-control form-control-icon" type="search" name="search" id="search" placeholder="Recherche..." />
            <i className="bx bx-search-alt-2"></i>
          </div>
          <ButtonGroup>
            <UncontrolledDropdown>
              <DropdownToggle tag="button" className="btn btn-light">
                <i className="bx bx-grid-alt"></i> <i className="mdi mdi-chevron-down"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-md p-4">
                <form>
                  {columns.map((column, key) => {
                    let name = column.name.props.children;
                    let id = randomId(6);
                    return (
                      <div className="mb-2" key={key}>
                        <div className="form-check custom-checkbox">
                          <Input onChange={(e) => updateColumns(e.target)} type="checkbox" name={name} value={column.id} checked={!column.omit} className="form-check-input" id={id} />
                          <label className="form-check-label" htmlFor={id}>
                            {name}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </form>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ButtonGroup>

          <button className={classnames("btn btn-sm prive-btn-primary", { collapsed: !lefticonCol1 })} onClick={t_lefticonCol1}>
            <i className="ri-settings-4-line"></i>
          </button>
        </div>
        <select className="form-select" aria-label="Default select example">
          <option>Services </option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option>Leads </option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option>Statut leads </option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option>Date </option>
        </select>
      </Row>

      <Row>
        <Col lg={12}>
          <div className="my-collapse-filter">
            <Collapse isOpen={lefticonCol1} className="accordion-collapse" id="accor_lefticonExamplecollapse1">
              <div className="accordion-body">
                <select className="form-select" aria-label="Default select example">
                  <option>Services </option>
                </select>
                <select className="form-select" aria-label="Default select example">
                  <option>Leads </option>
                </select>
                <select className="form-select" aria-label="Default select example">
                  <option>Statut leads </option>
                </select>
                <select className="form-select" aria-label="Default select example">
                  <option>Date </option>
                </select>
              </div>
            </Collapse>
          </div>
        </Col>
      </Row>

      <div>
        <DataTable columns={columns} data={Data} pagination paginationComponentOptions={paginationComponentOptions} highlightOnHover={true} />
      </div>
    </div>
  );
};

export default PersonalDataTable;
