export type Channel = 'whatsapp' | 'email' | 'chat' | 'shopify';

export type ConversationStatus = 'open' | 'pending' | 'resolved';

export type UserRole = 'admin' | 'agent';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  channel: Channel;
}

export interface Message {
  id: string;
  conversationId: string;
  content: string;
  sender: 'customer' | 'agent' | 'ai';
  timestamp: Date;
  isAiSuggestion?: boolean;
}

export interface Conversation {
  id: string;
  customer: Customer;
  channel: Channel;
  status: ConversationStatus;
  subject: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  assignedTo?: User;
  messages: Message[];
}

export interface KnowledgeBaseArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AnalyticsData {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  avgResponseTime: string;
  avgResolutionTime: string;
  ticketsByChannel: Record<Channel, number>;
  ticketsTrend: { date: string; count: number }[];
}

export interface Workspace {
  id: string;
  name: string;
  members: User[];
}
