import { useState } from "react";
import { AddedContext } from "Context/added/AddedContext";

type AddedProviderProps = {
  children: React.ReactNode;
};

export const AddedProvider = ({ children }: AddedProviderProps) => {
  const [added, setAdded] = useState<boolean>(false);

  return (
    <AddedContext.Provider value={{ added, setAdded }}>
      {children}
    </AddedContext.Provider>
  );
};