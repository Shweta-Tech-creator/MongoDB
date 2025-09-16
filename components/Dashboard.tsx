import React, { useState, useMemo, useEffect } from 'react';
import { User, Book, BookRequest } from '../types';
import { Button } from './common/Button';
import { BookCard } from './BookCard';
import { RequestCard } from './RequestCard';
import { AddBookModal } from './AddBookModal';
import { AddRequestModal } from './AddRequestModal';
import { PlusCircleIcon, SearchIcon } from './icons';
import { EmptyState } from './common/EmptyState';
import { database } from '../firebase';
import { ref, onValue, push, set, serverTimestamp } from 'firebase/database';
import { mockBooks } from '../data/mockData';

interface DashboardProps {
  user: User;
  addToast: (message: string, type?: 'success' | 'error') => void;
}

type ActiveTab = 'available' | 'myListings' | 'requests';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => {
    const activeClasses = 'border-indigo-500 text-indigo-600';
    const inactiveClasses = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
    return (
        <button
            onClick={onClick}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-t-md ${active ? activeClasses : inactiveClasses}`}
        >
            {children}
        </button>
    );
};

export const Dashboard: React.FC<DashboardProps> = ({ user, addToast }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('available');
  const [books, setBooks] = useState<Book[]>([]);
  const [requests, setRequests] = useState<BookRequest[]>([]);
  const [isAddBookModalOpen, setAddBookModalOpen] = useState(false);
  const [isAddRequestModalOpen, setAddRequestModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const booksRef = ref(database, 'books');
    const unsubscribeBooks = onValue(booksRef, (snapshot) => {
        const data = snapshot.val();
        const loadedBooks: Book[] = [];
        for (const key in data) {
            const bookData = data[key];
            // Add a guard to ensure book has a valid seller object with an id
            if (bookData && bookData.seller && bookData.seller.id) {
                loadedBooks.push({
                    id: key,
                    ...bookData
                });
            }
        }
        
        // Ensure there are at least 10 available books for demo purposes.
        const availableBooksFromFirebase = loadedBooks.filter(book => book.seller.id !== user.id);
        let combinedBooks = [...loadedBooks];

        if (availableBooksFromFirebase.length < 10) {
            const needed = 10 - availableBooksFromFirebase.length;
            const existingBookISBNs = new Set(loadedBooks.map(b => b.isbn));
            
            // Filter mock books to find ones not already loaded from Firebase (by ISBN)
            const additionalBooks = mockBooks
                .filter(mockBook => !existingBookISBNs.has(mockBook.isbn))
                .slice(0, needed);
            
            combinedBooks = [...loadedBooks, ...additionalBooks];
        }

        setBooks(combinedBooks.sort((a, b) => b.createdAt - a.createdAt));
    });
    
    const requestsRef = ref(database, 'requests');
    const unsubscribeRequests = onValue(requestsRef, (snapshot) => {
        const data = snapshot.val();
        const loadedRequests: BookRequest[] = [];
        for (const key in data) {
            const requestData = data[key];
            // Add a guard to ensure request has a valid requester object
            if (requestData && requestData.requester) {
                loadedRequests.push({
                    id: key,
                    ...requestData
                });
            }
        }
        setRequests(loadedRequests.sort((a, b) => b.createdAt - a.createdAt));
    });

    return () => {
        unsubscribeBooks();
        unsubscribeRequests();
    };
  }, [user.id]);

  const handleAddBook = (newBookData: Omit<Book, 'id' | 'seller' | 'createdAt' | 'imageUrl'>) => {
    const booksRef = ref(database, 'books');
    const newBookRef = push(booksRef);
    set(newBookRef, {
        ...newBookData,
        seller: { id: user.id, name: user.name, campus: user.campus, email: user.email },
        createdAt: serverTimestamp(),
        imageUrl: `https://picsum.photos/seed/${newBookRef.key}/300/400`,
    }).then(() => {
        addToast('Book listed successfully!', 'success');
    }).catch(error => {
        addToast(`Error: ${error.message}`, 'error');
    });
  };

  const handleAddRequest = (newRequestData: Omit<BookRequest, 'id' | 'requester' | 'createdAt'>) => {
    const requestsRef = ref(database, 'requests');
    const newRequestRef = push(requestsRef);
    set(newRequestRef, {
        ...newRequestData,
        requester: { id: user.id, name: user.name, campus: user.campus, email: user.email },
        createdAt: serverTimestamp(),
    }).then(() => {
        addToast('Request posted successfully!', 'success');
    }).catch(error => {
        addToast(`Error: ${error.message}`, 'error');
    });
  };
  
  const filteredBooks = useMemo(() => {
    if (!searchTerm) return books;
    return books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [books, searchTerm]);
  
  const myListings = useMemo(() => {
      return filteredBooks.filter(book => book.seller.id === user.id);
  }, [filteredBooks, user.id]);

  const availableBooks = useMemo(() => {
    return filteredBooks.filter(book => book.seller.id !== user.id);
  }, [filteredBooks, user.id]);

  const filteredRequests = useMemo(() => {
    if (!searchTerm) return requests;
    return requests.filter(req => req.title.toLowerCase().includes(searchTerm.toLowerCase()) || req.author.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [requests, searchTerm]);

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold">Welcome back, {user.name.split(' ')[0]}!</h2>
                    <p className="text-indigo-200 mt-1">Ready to find your next textbook?</p>
                </div>
                <div className="flex space-x-2">
                    <Button onClick={() => setAddBookModalOpen(true)} className="bg-white text-indigo-600 hover:bg-indigo-50">
                        <PlusCircleIcon className="h-5 w-5 mr-2" />
                        List a Book
                    </Button>
                    <Button variant="secondary" onClick={() => setAddRequestModalOpen(true)} className="bg-white text-indigo-600 hover:bg-indigo-50">
                        Request a Book
                    </Button>
                </div>
            </div>
             <div className="mt-6 relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-transparent rounded-md shadow-sm placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
            </div>
        </div>

        <div>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <TabButton active={activeTab === 'available'} onClick={() => setActiveTab('available')}>Available Books</TabButton>
                    <TabButton active={activeTab === 'myListings'} onClick={() => setActiveTab('myListings')}>My Listings</TabButton>
                    <TabButton active={activeTab === 'requests'} onClick={() => setActiveTab('requests')}>Book Requests</TabButton>
                </nav>
            </div>

            <div className="mt-8">
                {activeTab === 'available' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {availableBooks.map(book => <BookCard key={book.id} book={book} />)}
                        {availableBooks.length === 0 && (
                            <div className="col-span-full">
                                <EmptyState title="No Available Books" message="There are no books available from other students right now." />
                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'myListings' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {myListings.map(book => <BookCard key={book.id} book={book} />)}
                        {myListings.length === 0 && (
                            <div className="col-span-full">
                                <EmptyState title="You Haven't Listed Any Books" message="Click 'List a Book' to add your first textbook." />
                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'requests' && (
                     <div className="space-y-4 max-w-4xl mx-auto">
                        {filteredRequests.map(req => <RequestCard key={req.id} request={req} />)}
                        {filteredRequests.length === 0 && (
                            <EmptyState title="No Book Requests" message="There are currently no open requests for textbooks." />
                        )}
                    </div>
                )}
            </div>
        </div>
      </main>

      <AddBookModal 
        isOpen={isAddBookModalOpen} 
        onClose={() => setAddBookModalOpen(false)} 
        onAddBook={handleAddBook} 
      />
      <AddRequestModal 
        isOpen={isAddRequestModalOpen} 
        onClose={() => setAddRequestModalOpen(false)} 
        onAddRequest={handleAddRequest} 
      />
    </>
  );
};