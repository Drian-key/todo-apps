import { createContext, useContext, useState } from "react";

export const StatusContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useStatusContext() {
  return useContext(StatusContext);
}

// eslint-disable-next-line react/prop-types
export function StatusProvider({ children }) {
  const [status, setStatus] = useState("all");

  const statusContextValue = [status, setStatus];

  return (
    <StatusContext.Provider value={statusContextValue}>
      {children}
    </StatusContext.Provider>
  );
}
