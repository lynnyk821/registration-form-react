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

    const getStorageItems = () => storage;

    return (
        <StorageContext.Provider value={{ setValue, getValue, getStorageItems }}>
            {children}
        </StorageContext.Provider>
    );
};

export const useStorage = () => useContext(StorageContext);