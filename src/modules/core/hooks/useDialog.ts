import { useState } from "react";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((open) => !open);
  };

  return {
    isOpen,
    handleToggle,
    handleOpenChange: setIsOpen,
    handleDialogOpen,
    handleDialogClose,
  };
};

export { useDialog };
