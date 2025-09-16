import React from 'react';
import { BookRequest } from '../types';
import { Button } from './common/Button';

interface RequestCardProps {
  request: BookRequest;
}

export const RequestCard: React.FC<RequestCardProps> = ({ request }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500 flex justify-between items-center transition-all duration-200 hover:shadow-lg hover:border-indigo-600">
      <div>
        <h3 className="font-semibold text-gray-800">{request.title}</h3>
        <p className="text-sm text-gray-500">by {request.author}</p>
        <p className="text-xs text-gray-400 mt-2">Requested by: {request.requester.name}</p>
      </div>
      <Button variant="secondary" className="rounded-full text-xs px-3 py-1.5">
        I have this!
      </Button>
    </div>
  );
};