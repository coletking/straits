// Modal.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../Model/prodduct';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    onDelete: () => void;
    item: Product;
   // ID to navigate to for editing
    children: React.ReactNode;
  }
  
  const Modal: React.FC<ModalProps> = ({ show, onClose, onDelete, item, children }) => {
     const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/product/edit/${item.id}`); // Navigate to the edit page with the post ID
      };
    
      if (!show) {
        return null;
      }
    

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
      <div className="bg-white rounded-lg m-2  shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold">Product Information</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="p-2">{children}</div>
        <div className="flex justify-end p-4 border-t">
          <button
            onClick={onDelete} // Call the onDelete function
            className="bg-red-500 text-white rounded px-4 py-2 mr-2"
          >
            Delete Post
          </button>
          <button
            onClick={handleEdit} // Navigate to the edit page
            className="bg-blue-500 text-white rounded px-4 py-2 mr-2"
          >
            Edit Post
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 rounded px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
