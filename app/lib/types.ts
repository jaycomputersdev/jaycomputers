export interface Lead {
  id: string;
  name: string;
  phone: string;
  serviceRequired: string;
  location: string;
  issueDescription: string;
  createdAt: any; // Firestore Timestamp or Date
}