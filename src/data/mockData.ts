import { Conversation, User, KnowledgeBaseArticle, AnalyticsData } from '@/types';

export const currentUser: User = {
  id: '1',
  name: 'Sarah Chen',
  email: 'sarah@rezolve.io',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  role: 'admin',
};

export const teamMembers: User[] = [
  currentUser,
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus@rezolve.io',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    role: 'agent',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@rezolve.io',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    role: 'agent',
  },
];

export const conversations: Conversation[] = [
  {
    id: '1',
    customer: {
      id: 'c1',
      name: 'Alex Thompson',
      email: 'alex@company.com',
      phone: '+1 555-0123',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      channel: 'whatsapp',
    },
    channel: 'whatsapp',
    status: 'open',
    subject: 'Order delivery status inquiry',
    lastMessage: "Hi, I haven't received my order yet. Order #12345",
    lastMessageTime: new Date(Date.now() - 5 * 60 * 1000),
    unreadCount: 2,
    assignedTo: currentUser,
    messages: [
      {
        id: 'm1',
        conversationId: '1',
        content: "Hi, I placed an order 3 days ago and haven't received any updates. My order number is #12345. Can you help?",
        sender: 'customer',
        timestamp: new Date(Date.now() - 10 * 60 * 1000),
      },
      {
        id: 'm2',
        conversationId: '1',
        content: "Hi, I haven't received my order yet. Order #12345",
        sender: 'customer',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
      },
    ],
  },
  {
    id: '2',
    customer: {
      id: 'c2',
      name: 'Jessica Williams',
      email: 'jessica@startup.io',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
      channel: 'email',
    },
    channel: 'email',
    status: 'pending',
    subject: 'Integration API documentation request',
    lastMessage: 'Could you share the API docs for the webhook integration?',
    lastMessageTime: new Date(Date.now() - 30 * 60 * 1000),
    unreadCount: 0,
    assignedTo: teamMembers[1],
    messages: [
      {
        id: 'm3',
        conversationId: '2',
        content: "Hello, I'm trying to integrate your platform with our system. Could you share the API docs for the webhook integration?",
        sender: 'customer',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
      },
    ],
  },
  {
    id: '3',
    customer: {
      id: 'c3',
      name: 'David Park',
      email: 'david@ecommerce.com',
      phone: '+1 555-0456',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      channel: 'shopify',
    },
    channel: 'shopify',
    status: 'open',
    subject: 'Refund request for damaged item',
    lastMessage: 'The product arrived damaged. I need a refund.',
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
    unreadCount: 1,
    messages: [
      {
        id: 'm4',
        conversationId: '3',
        content: 'Hi, I received my order today but the product is damaged. The box was crushed and the item inside is broken. I need a refund or replacement. Order #78901',
        sender: 'customer',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      },
    ],
  },
  {
    id: '4',
    customer: {
      id: 'c4',
      name: 'Maria Garcia',
      email: 'maria@design.co',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      channel: 'chat',
    },
    channel: 'chat',
    status: 'resolved',
    subject: 'Billing question about subscription',
    lastMessage: 'Thank you for the clarification!',
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
    unreadCount: 0,
    assignedTo: teamMembers[2],
    messages: [
      {
        id: 'm5',
        conversationId: '4',
        content: "I have a question about my subscription. Why was I charged twice this month?",
        sender: 'customer',
        timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000),
      },
      {
        id: 'm6',
        conversationId: '4',
        content: "Hi Maria! I can see there was a billing issue. The duplicate charge has been refunded to your account. You should see it within 3-5 business days.",
        sender: 'agent',
        timestamp: new Date(Date.now() - 24.5 * 60 * 60 * 1000),
      },
      {
        id: 'm7',
        conversationId: '4',
        content: 'Thank you for the clarification!',
        sender: 'customer',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    ],
  },
  {
    id: '5',
    customer: {
      id: 'c5',
      name: 'James Wilson',
      email: 'james@tech.io',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      channel: 'email',
    },
    channel: 'email',
    status: 'open',
    subject: 'Feature request: Dark mode',
    lastMessage: 'Would love to see a dark mode option in the dashboard.',
    lastMessageTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
    unreadCount: 1,
    messages: [
      {
        id: 'm8',
        conversationId: '5',
        content: "Hey team! I've been using your platform daily and I love it. One suggestion - would love to see a dark mode option in the dashboard. It would be easier on the eyes for those late-night sessions. Thanks!",
        sender: 'customer',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      },
    ],
  },
];

export const knowledgeBase: KnowledgeBaseArticle[] = [
  {
    id: 'kb1',
    title: 'How to track your order',
    content: 'To track your order, log into your account and navigate to "Order History". Click on the specific order to view its current status and tracking information. You can also use the tracking number sent to your email.',
    category: 'Orders',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: 'kb2',
    title: 'Refund and return policy',
    content: 'We offer a 30-day return policy for all unused items in original packaging. Refunds are processed within 5-7 business days after we receive the returned item. Shipping costs for returns are covered for defective items only.',
    category: 'Returns',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25'),
  },
  {
    id: 'kb3',
    title: 'API Integration Guide',
    content: 'Our API uses REST architecture with JSON responses. Authentication is handled via API keys. Full documentation is available at docs.rezolve.io/api. Rate limits are 1000 requests per minute for standard plans.',
    category: 'Technical',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-15'),
  },
  {
    id: 'kb4',
    title: 'Subscription plans and billing',
    content: 'We offer three subscription tiers: Starter ($29/mo), Professional ($99/mo), and Enterprise (custom pricing). All plans include 14-day free trial. Billing occurs on the same date each month.',
    category: 'Billing',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-02-10'),
  },
];

export const analyticsData: AnalyticsData = {
  totalTickets: 1247,
  openTickets: 23,
  resolvedTickets: 1189,
  avgResponseTime: '4m 32s',
  avgResolutionTime: '2h 15m',
  ticketsByChannel: {
    whatsapp: 456,
    email: 523,
    chat: 198,
    shopify: 70,
  },
  ticketsTrend: [
    { date: 'Mon', count: 45 },
    { date: 'Tue', count: 52 },
    { date: 'Wed', count: 38 },
    { date: 'Thu', count: 61 },
    { date: 'Fri', count: 55 },
    { date: 'Sat', count: 28 },
    { date: 'Sun', count: 22 },
  ],
};

export const aiSuggestions: Record<string, string> = {
  '1': "Hi Alex! 👋 I've checked on your order #12345. It's currently in transit and expected to arrive within the next 2 business days. You can track it here: [tracking link]. Let me know if you need anything else!",
  '3': "Hi David, I'm so sorry to hear about the damaged item. That's definitely not the experience we want for you. I've initiated a full refund for your order #78901, which will be processed within 3-5 business days. Would you also like us to send a replacement at no additional cost?",
  '5': "Hi James! Thank you so much for your feedback and for being such an active user! 🙏 I've passed your dark mode suggestion to our product team. We're actually planning to roll out this feature in our next major update (Q2 2024). I'll make sure you're notified when it's available!",
};
