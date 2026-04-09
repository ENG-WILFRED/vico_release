import { createContext, useContext, useState, ReactNode } from "react";

interface SubscribeContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const SubscribeContext = createContext<SubscribeContextType | undefined>(undefined);

export function SubscribeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <SubscribeContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe() {
  const context = useContext(SubscribeContext);
  if (!context) {
    throw new Error("useSubscribe must be used within SubscribeProvider");
  }
  return context;
}
