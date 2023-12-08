import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

// Custom hook pour facilement importer le contexte de la messagerie tout en gérant l'erreur potentielle
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("You should use <WellRoundedUi /> around you app.");
  return context;
};

// Contexte de la messagerie permettant d'utiliser les différentes informations dans les enfants
export function AppContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = () => {
    setToasts([...toasts, { title, text }]);
  };

  return (
    <AppContext.Provider value={{ toasts, setToasts, addToast }}>
      {children}
      <div id="toasts-container">
        {toasts.map(({ title }) => (
          <p>{title}</p>
        ))}
      </div>
    </AppContext.Provider>
  );
}
