import {createContext, useCallback, useRef, useState} from 'react';

export const DevExtremeDataGridContext = createContext({});

export const DevExtremeDataGridProvider = ({children}) => {

    const storeRef = useRef();
    const dataGridRef = useRef();
    const dataRef = useRef(new Map());
    const [dataFilter, setDataFilter] = useState(null);
    const canRemoteCallRef = useRef(true);
    const keyExprRef = useRef("");
    const refreshDataGridRef = useCallback((data, deleted) => {
            canRemoteCallRef.current = false
            if (deleted) {
                dataRef.current.delete(data[keyExprRef.current]);
            } else {
                dataRef.current.set(data[keyExprRef.current], data);
            }
            dataGridRef.current.instance.refresh();
        },
        [dataGridRef, dataRef, canRemoteCallRef, keyExprRef]
    );

    return (
        <DevExtremeDataGridContext.Provider value = {{dataFilter, setDataFilter, storeRef, dataGridRef, dataRef, canRemoteCallRef, refreshDataGridRef, keyExprRef}}>
            {children}
        </DevExtremeDataGridContext.Provider>
    )
}