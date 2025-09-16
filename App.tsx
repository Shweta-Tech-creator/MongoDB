import React, { useState, useEffect } from 'react';
import { User } from './types';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useToasts } from './hooks/useToasts';
import { Toast } from './components/common/Toast';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from './firebase';

// A simple function to generate a name from an email
const getNameFromEmail = (email: string) => {
    const namePart = email.split('@')[0];
    return namePart.replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}


function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toasts, addToast, removeToast } = useToasts();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // User is signed in. In a real app, you might fetch a user profile from your database here.
        // For this demo, we'll construct a user object from the auth data.
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || getNameFromEmail(firebaseUser.email!),
          email: firebaseUser.email!,
          campus: 'Main Campus', // Default value for demo
        });
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
      return (
          <div className="min-h-full flex items-center justify-center">
              <p>Loading...</p>
          </div>
      )
  }

  return (
    <div className="min-h-full flex flex-col">
      {user ? (
        <>
          <Header user={user} />
          <Dashboard user={user} addToast={addToast} />
        </>
      ) : (
        <Login />
      )}
      
      {/* Toast container */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} onDismiss={removeToast} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
