import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./component/pages/Home";
import Screen from "./screen/Screen";

interface ContextType {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | undefined>(undefined);

function App() {
  const [editMode, setEditMode] = useState(false);

  const contextValue = {
    editMode,
    setEditMode,
  };

  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
        <Screen>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Screen>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
