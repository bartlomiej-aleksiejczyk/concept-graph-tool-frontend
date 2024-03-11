import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LocalStorageService } from './localStorageService';
import { PersistanceService } from './PersistanceService';
import { ApiService } from './apiServices';

type PersistenceContextType = {
  dataService: PersistanceService | null;
};

const PersistenceContext = createContext<PersistenceContextType>({ dataService: null });

interface PersistenceProviderProps {
  children: ReactNode;
}

export const PersistenceProvider: React.FC<PersistenceProviderProps> = ({ children }) => {
    const useLocalStorage = true;
    const [dataService] = useState<PersistanceService>(useLocalStorage ? new LocalStorageService() : new ApiService());

    return (
        <PersistenceContext.Provider value={{ dataService }}>
            {children}
        </PersistenceContext.Provider>
    );
};

export const usePersistence = (): PersistenceContextType => useContext(PersistenceContext);
