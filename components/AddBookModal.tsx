import React, { useState } from 'react';
import { Modal } from './common/Modal';
import { Button } from './common/Button';
import { Book, BookCondition, ListingType, User } from '../types';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: Omit<Book, 'id' | 'seller' | 'createdAt' | 'imageUrl'>) => void;
}

export const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState<BookCondition>(BookCondition.GOOD);
  const [listingType, setListingType] = useState<ListingType>(ListingType.SALE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook({ title, author, isbn, price: listingType === ListingType.LEND ? 0 : price, condition, listingType });
    // Reset form and close
    setTitle('');
    setAuthor('');
    setIsbn('');
    setPrice(0);
    setCondition(BookCondition.GOOD);
    setListingType(ListingType.SALE);
    onClose();
  };
  
  const InputField: React.FC<{label: string, id: string, type?: string, value: string | number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean, disabled?: boolean}> = ({label, id, type="text", value, onChange, required=true, disabled=false}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <input type={type} id={id} name={id} value={value} onChange={onChange} required={required} disabled={disabled} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm disabled:bg-gray-100 transition-shadow duration-200 focus:shadow-md"/>
    </div>
  );

  const SelectField: React.FC<{label: string, id: string, value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, children: React.ReactNode}> = ({label, id, value, onChange, children}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <select id={id} name={id} value={value} onChange={onChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm rounded-md transition-shadow duration-200 focus:shadow-md">
            {children}
        </select>
    </div>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add a New Textbook">
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Book Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <InputField label="Author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <InputField label="ISBN" id="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
        
        <div className="grid grid-cols-2 gap-4">
            <SelectField label="Listing Type" id="listingType" value={listingType} onChange={(e) => setListingType(e.target.value as ListingType)}>
                {Object.values(ListingType).map(lt => <option key={lt} value={lt}>{lt}</option>)}
            </SelectField>
            <SelectField label="Condition" id="condition" value={condition} onChange={(e) => setCondition(e.target.value as BookCondition)}>
                {Object.values(BookCondition).map(c => <option key={c} value={c}>{c}</option>)}
            </SelectField>
        </div>
        
        <InputField label="Price (₹)" id="price" type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} disabled={listingType === ListingType.LEND} />
        
        <div className="pt-2 flex justify-end space-x-2">
            <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="primary">Add Book</Button>
        </div>
      </form>
    </Modal>
  );
};