
import React, { useState } from 'react';
import { Modal } from './common/Modal';
import { Button } from './common/Button';
import { BookRequest } from '../types';

interface AddRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRequest: (request: Omit<BookRequest, 'id' | 'requester' | 'createdAt'>) => void;
}

export const AddRequestModal: React.FC<AddRequestModalProps> = ({ isOpen, onClose, onAddRequest }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddRequest({ title, author });
    setTitle('');
    setAuthor('');
    onClose();
  };

  const InputField: React.FC<{label: string, id: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}> = ({label, id, value, onChange}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <input type="text" id={id} name={id} value={value} onChange={onChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Textbook">
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Book Title" id="req-title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <InputField label="Author" id="req-author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        
        <div className="pt-2 flex justify-end space-x-2">
            <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary">Submit Request</Button>
        </div>
      </form>
    </Modal>
  );
};
