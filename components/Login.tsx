
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from './common/Button';
import { BookOpenIcon } from './icons';

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input 
        {...props}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow duration-200 focus:shadow-md"
    />
);

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getFriendlyErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Invalid email or password. Please check your credentials and try again.';
      case 'auth/too-many-requests':
        return 'Access has been temporarily disabled due to many failed login attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection and ensure Firebase is configured correctly.';
      case 'auth/operation-not-allowed':
         return 'Email/Password sign-in is not enabled in the Firebase console.';
      case 'auth/weak-password':
        return 'The password is too weak. Please use at least 6 characters.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged in App.tsx will handle the user state update
    } catch (signInError: any) {
      // If the user doesn't exist, try creating a new account.
      // Newer Firebase SDKs may return 'auth/invalid-credential' for non-existent users.
      if (signInError.code === 'auth/user-not-found' || signInError.code === 'auth/invalid-credential') {
          try {
              await createUserWithEmailAndPassword(auth, email, password);
          } catch (signUpError: any) {
              // If account creation fails, it's likely because the user already exists
              // (meaning the password was wrong) or another issue like a weak password.
              if (signUpError.code === 'auth/email-already-in-use') {
                  setError(getFriendlyErrorMessage('auth/invalid-credential'));
              } else {
                  setError(getFriendlyErrorMessage(signUpError.code));
              }
          }
      } else {
        // Handle other sign-in errors (too many requests, etc.)
        setError(getFriendlyErrorMessage(signInError.code));
      }
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
            <BookOpenIcon className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-gray-900">
          Campus Textbook Exchange
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in or create an account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg border border-gray-100 sm:rounded-xl sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby={error ? 'auth-error' : undefined}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password"  className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <FormInput
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby={error ? 'auth-error' : undefined}
                />
              </div>
            </div>

            {error && <p id="auth-error" className="text-sm text-red-600" role="alert">{error}</p>}

            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in / Sign up'}
              </Button>
            </div>
          </form>
           <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Getting Started</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded-md border">
                <p>Enter any email and password. If the account doesn't exist, it will be created automatically for this demo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
