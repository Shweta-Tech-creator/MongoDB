import React from 'react';
import { Book, ListingType } from '../types';
import { Button } from './common/Button';
import { UserIcon, InformationCircleIcon } from './icons';

interface BookCardProps {
  book: Book;
}

const conditionColorMap = {
  'New': 'bg-green-100 text-green-800',
  'Like New': 'bg-blue-100 text-blue-800',
  'Good': 'bg-yellow-100 text-yellow-800',
  'Fair': 'bg-orange-100 text-orange-800',
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const isFree = book.listingType === ListingType.LEND || book.price === 0;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col border border-gray-100">
      <div className="overflow-hidden">
        <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${conditionColorMap[book.condition]}`}>
                    {book.condition}
                </span>
                <span className={`text-xs font-semibold uppercase tracking-wider ${book.listingType === ListingType.LEND ? 'text-purple-600' : 'text-indigo-600'}`}>
                    {book.listingType}
                </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">{book.title}</h3>
            <p className="text-sm text-gray-600 mt-1">by {book.author}</p>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                <UserIcon className="h-4 w-4 text-gray-400"/>
                <span>Listed by: <strong>{book.seller.name}</strong></span>
            </div>
             <div className="flex items-center text-xs text-gray-500 mb-4 space-x-2">
                <InformationCircleIcon className="h-4 w-4 text-gray-400"/>
                <span>ISBN: {book.isbn}</span>
            </div>
             <div className="flex justify-between items-center">
                 <p className="text-2xl font-extrabold text-gray-800">
                    {isFree ? 'Free' : `₹${book.price.toLocaleString('en-IN')}`}
                 </p>
                <Button variant="primary" className="rounded-full text-xs px-3 py-1.5">
                    Contact Seller
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};