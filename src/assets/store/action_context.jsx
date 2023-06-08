import { createContext, useContext, useState } from "react";

export const ActionContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useActionContext() {
  return useContext(ActionContext);
}

// eslint-disable-next-line react/prop-types
export function ActionProvider({ children }) {
  const [action, setAction] = useState("");

  const actionContextValue = [action, setAction];

  return (
    <ActionContext.Provider value={actionContextValue}>
      {children}
    </ActionContext.Provider>
  );
}
