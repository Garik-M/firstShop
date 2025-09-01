import { createContext } from "react";

export type AddedContextType = {
  added: boolean;
  setAdded: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultValues = {
  added: false,
  setAdded: () => {},
};

export const AddedContext = createContext<AddedContextType>(defaultValues);
