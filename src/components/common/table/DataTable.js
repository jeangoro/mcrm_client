import React, {useEffect, useState} from "react";
import {Card, Row,} from "reactstrap";
import DataGrid, {
    Column,
    FilterRow,
    HeaderFilter,
    Paging,
    Scrolling,
    SearchPanel,
    Selection
} from "devextreme-react/data-grid";
import {TableFilters} from "./filters";
import {BadgeCellRenderer} from "./cellRenderers";
import {CONTACT_ITEMS_COLORS} from "../../constants/contacts";

export const DataTable = ({
                              refData,
                              getDataSource,
                              columns,
                              actionsCellRenderer,
                              filterValues,
                              setFilterValues,
                              filters,
                              className = "contacts-table",
                              colorMapping = CONTACT_ITEMS_COLORS
                          }) => {
    const dataSource = getDataSource(filterValues);
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);
    const isMobile = width <= 768;
    const setFilterValue = (col, value) => {
        setFilterValues({...filterValues, [col]: value});
    };
    return (
        <Row>
            <Card className={className}>
                <TableFilters
                    refData={refData}
                    filters={filters}
                    onFilterValueChanged={setFilterValue}
                />
                <div>
                    <DataGrid
                        dataSource={dataSource}
                        allowColumnReordering
                        rowAlternationEnabled
                        showBorders
                        columnHidingEnabled={isMobile}
                        columnChooser={{enabled: true}}
                        scrolling={{mode: "infinite"}}
                        export={{enabled: true}}
                        remoteOperations={{
                            filtering: false,
                            sorting: false,
                            paging: true,
                        }}
                    >
                        <Selection
                            mode="multiple"
                            selectAllMode="page" />
                        <FilterRow visible/>
                        <HeaderFilter visible/>
                        <SearchPanel visible highlightCaseSensitive/>
                        {columns.map((col) => {
                            const cellRenderer = col.filterType === "set" ? {cellRender: (data) => BadgeCellRenderer(data, colorMapping)} : {};
                            return (
                                <Column
                                    key={col.name}
                                    dataField={col.name}
                                    dataType={col.type}
                                    caption={col.title}
                                    allowFiltering
                                    allowResizing
                                    minWidth={col.minWidth || 150}
                                    {...cellRenderer}
                                />
                            );
                        })}
                        {actionsCellRenderer && <Column
                            caption="Actions"
                            cellRender={actionsCellRenderer}
                            fixed="true"
                            fixedPosition="right"
                            minWidth={80}
                        />}
                        <Paging defaultPageSize={10}/>
                    </DataGrid>
                </div>
            </Card>
        </Row>
    );
};