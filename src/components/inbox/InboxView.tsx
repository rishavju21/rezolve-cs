import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ConversationList } from './ConversationList';
import { ConversationDetail } from './ConversationDetail';
import { conversations } from '@/data/mockData';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export function InboxView() {
  const [selectedId, setSelectedId] = useState<string | null>(conversations[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedConversation = conversations.find((c) => c.id === selectedId) || null;

  const filteredConversations = conversations.filter(
    (c) =>
      c.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full">
      {/* Conversation List Sidebar */}
      <div className="w-96 flex-shrink-0 border-r border-border bg-card flex flex-col">
        {/* Search & Filters */}
        <div className="p-4 border-b border-border space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Filter className="h-3.5 w-3.5 mr-1.5" />
              All Status
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <SlidersHorizontal className="h-3.5 w-3.5 mr-1.5" />
              All Channels
            </Button>
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          <ConversationList
            conversations={filteredConversations}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
      </div>

      {/* Conversation Detail */}
      <ConversationDetail conversation={selectedConversation} />
    </div>
  );
}
