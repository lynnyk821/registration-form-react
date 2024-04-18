import React, { createContext, useContext, useState } from 'react';

const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
    const [storage, setStorage] = useState({});

    const setValue = (key, value) => {
        setStorage(prevStorage => ({ ...prevStorage, [key]: value }));
    };

    const getValue = (key) => {
        return storage[key];
    };

    return (
        <StorageContext.Provider value={{ setValue, getValue }}>
            {children}
        </StorageContext.Provider>
    );
};

export const useStorage = () => useContext(StorageContext);