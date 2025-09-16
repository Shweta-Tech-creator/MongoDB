import React from 'react';
import { BookOpenIcon } from '../icons';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  message: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  icon = <BookOpenIcon className="h-12 w-12 text-gray-400" />, 
  title, 
  message 
}) => {
  return (
    <div className="text-center bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-200">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-100">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
    </div>
  );
};