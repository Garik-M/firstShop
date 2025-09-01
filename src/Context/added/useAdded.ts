import { useContext } from "react";
import { AddedContext } from "Context/added/AddedContext";

export const useAdded = () => {
  const context = useContext(AddedContext);
  return context;
};
