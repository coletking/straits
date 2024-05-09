export interface User {
    id: string; // Unique ID of the user
    firstname: string; // User's first name
    lastname: string; // User's last name
    email: string; // User's email address
    phone: number; // User's phone number
    active: boolean; // Indicates if the user is active
    permission: 'admin' | 'user' | 'guest'; // User's permission level
    wallet: number; // User's wallet balance
    created: any; // Timestamp when the user was created
  }