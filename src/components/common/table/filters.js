import React from 'react';
import {DateBox, SelectBox, TagBox} from "devextreme-react";

export const TableFilters = ({refData, filters, onFilterValueChanged, defaultValue}) => (
    <div className="d-flex justify-content-end">
        {filters.map((col) => {
            switch (col.filterType) {
                case "tags":
                    return (
                        <TagBox
                            defaultValue={defaultValue && defaultValue[col.name]}
                            multiline={false}
                            label={col.title}
                            labelMode="floating"
                            key={col.name}
                            dataSource={refData[col.name] || []}
                            displayExpr="text"
                            valueExpr="value"
                            showDropDownButton
                            onValueChanged={({value}) => {
                                onFilterValueChanged(col.name, value);
                            }}
                            width="200"
                        />
                    );
                case 'select':
                    return (<SelectBox
                        key={col.name}
                        label={col.title}
                        displayExpr="text"
                        valueExpr="value"
                        labelMode="floating"
                        defaultValue={defaultValue && defaultValue[col.name]}
                        onValueChanged={({value}) => {
                            onFilterValueChanged(col.name, value);
                        }}
                        dataSource={refData[col.name] || []}/>)
                case "date":
                    return (
                        <DateBox
                            label={col.title}
                            labelMode="floating"
                            key={col.name}
                            placeholder={col.text}
                            displayFormat={"dd/MM/yyyy"}
                            onValueChanged={(value) => onFilterValueChanged(col.name, value)}
                        />
                    );
                default:
                    return null;
            }
        })}
    </div>
);

