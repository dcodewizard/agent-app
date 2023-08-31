import React, { useEffect, useRef } from 'react';
import Button from '../Shared/Button';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ showModal, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (showModal) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showModal, onClose]);

  if (!showModal) {
    return null;
  }

  return (
    <div className='modal show'>
      <div className='modal-content' ref={modalRef}>
        {children}
        <Button
          className='btn btn-danger closeButton'
          buttonText=''
          icon={<CloseFullscreenIcon />}
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default Modal;
