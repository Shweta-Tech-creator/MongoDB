
export interface User {
  id: string;
  name: string;
  email: string;
  campus: string;
}

export enum BookCondition {
  NEW = 'New',
  LIKE_NEW = 'Like New',
  GOOD = 'Good',
  FAIR = 'Fair',
}

export enum ListingType {
  SALE = 'For Sale',
  LEND = 'For Lend',
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  condition: BookCondition;
  listingType: ListingType;
  seller: User;
  imageUrl: string;
  createdAt: number;
}

export interface BookRequest {
  id: string;
  title: string;
  author: string;
  requester: User;
  createdAt: number;
}
