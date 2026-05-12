export enum CopyStatus {
  AVAILABLE = 'Available',
  BORROWED = 'Borrowed',
  RESERVED = 'Reserved',
  OVERDUE = 'Overdue',
  LOST = 'Lost - Pending Replacement',
}

export enum MembershipType {
  STANDARD = 'Standard',
  PREMIUM = 'Premium',
  STUDENT = 'Student',
  SENIOR = 'Senior',
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  category: string;
  year: number;
  price: number;
}

export interface Copy {
  id: string;
  bookId: string;
  status: CopyStatus;
  borrowerId?: string;
  dueDate?: string;
  checkoutDate?: string;
}

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  membershipType: MembershipType;
  joinedDate: string;
  isBlacklisted?: boolean;
  debt?: number;
}

export interface SystemLog {
  id: string;
  timestamp: string;
  action: string;
  details: string;
  type: 'info' | 'warning' | 'error' | 'security';
}

export interface Transaction {
  id: string;
  copyId: string;
  bookTitle: string;
  memberId: string;
  memberName: string;
  checkoutDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'active' | 'returned' | 'overdue';
}
