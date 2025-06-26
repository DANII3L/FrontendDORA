import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Company {
  id: number;
  razonSocial: string;
  identificacionFiscal: string;
}

interface CompanyContextType {
  company: Company | null;
  setCompanyInfo: (companyData: Company) => void;
  clearCompanyInfo: () => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }
  return context;
};

export const CompanyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    const savedCompany = localStorage.getItem('company');
    if (savedCompany) {
      setCompany(JSON.parse(savedCompany));
    }
  }, []);

  const setCompanyInfo = (companyData: Company) => {
    setCompany(companyData);
    localStorage.setItem('company', JSON.stringify(companyData));
  };

  const clearCompanyInfo = () => {
    setCompany(null);
    localStorage.removeItem('company');
  };

  return (
    <CompanyContext.Provider value={{ company, setCompanyInfo, clearCompanyInfo }}>
      {children}
    </CompanyContext.Provider>
  );
}; 