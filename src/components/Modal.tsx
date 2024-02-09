import React from "react";
interface Country {
  code: string;
  name: string;
  emoji: string;
}

interface ModalProps {
  country: Country;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ country, onClose }) => {
    const handleModalClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      event.stopPropagation();
    };
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <p className="name">Thank you Konzek you clicked on</p>
        <h2 className="name"> {country.name}</h2>
        <p className="name">Please Employ me</p>
      </div>
    </div>
  );
};

export default Modal;
