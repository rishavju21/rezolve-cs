import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Conversation, Message } from '@/types';
import { ChannelBadge, StatusBadge } from '@/components/badges/Badges';
import { aiSuggestions } from '@/data/mockData';
import { 
  Send, 
  Sparkles, 
  MoreVertical, 
  Phone, 
  Mail,
  Copy,
  Check,
  RefreshCw
} from 'lucide-react';
import { format } from 'date-fns';

interface ConversationDetailProps {
  conversation: Conversation | null;
}

export function ConversationDetail({ conversation }: ConversationDetailProps) {
  const [message, setMessage] = useState('');
  const [showAiSuggestion, setShowAiSuggestion] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!conversation) {
    return (
      <div className="flex flex-1 items-center justify-center bg-muted/30">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Mail className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground">No conversation selected</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Select a conversation from the list to view details
          </p>
        </div>
      </div>
    );
  }

  const aiSuggestion = aiSuggestions[conversation.id];

  const handleUseSuggestion = () => {
    if (aiSuggestion) {
      setMessage(aiSuggestion);
      setShowAiSuggestion(false);
    }
  };

  const handleCopySuggestion = () => {
    if (aiSuggestion) {
      navigator.clipboard.writeText(aiSuggestion);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const initials = conversation.customer.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={conversation.customer.avatar} alt={conversation.customer.name} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-foreground">{conversation.customer.name}</h2>
              <ChannelBadge channel={conversation.channel} />
            </div>
            <p className="text-sm text-muted-foreground">{conversation.customer.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={conversation.status} />
          <Button variant="ghost" size="icon-sm">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {conversation.messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} customerName={conversation.customer.name} />
        ))}

        {/* AI Suggestion */}
        {aiSuggestion && showAiSuggestion && (
          <div className="ai-suggestion animate-slide-up">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-500">
                <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium gradient-text">AI Suggested Reply</span>
            </div>
            <p 
              className="text-sm text-foreground leading-relaxed mb-4 cursor-pointer hover:bg-muted/50 rounded-md p-2 -mx-2 transition-colors"
              onClick={handleUseSuggestion}
              title="Click to use this reply"
            >
              {aiSuggestion}
            </p>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ai" onClick={handleUseSuggestion}>
                <Check className="h-3.5 w-3.5 mr-1.5" />
                Use this reply
              </Button>
              <Button size="sm" variant="outline" onClick={handleCopySuggestion}>
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1.5" />
                    Copy
                  </>
                )}
              </Button>
              <Button size="sm" variant="ghost">
                <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                Regenerate
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="border-t border-border p-4">
        <div className="flex gap-3">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your reply..."
            className="min-h-[80px] resize-none"
          />
          <Button size="icon" className="h-10 w-10 self-end">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Sparkles className="h-4 w-4 mr-1.5" />
              AI Assist
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}

interface MessageBubbleProps {
  message: Message;
  customerName: string;
}

function MessageBubble({ message, customerName }: MessageBubbleProps) {
  const isAgent = message.sender === 'agent';

  return (
    <div className={cn('flex gap-3', isAgent && 'flex-row-reverse')}>
      <Avatar className="h-8 w-8 flex-shrink-0">
        {isAgent ? (
          <>
            <AvatarImage src="/placeholder.svg" alt="Agent" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              SC
            </AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage src="/placeholder.svg" alt={customerName} />
            <AvatarFallback className="bg-muted text-muted-foreground text-xs">
              {customerName
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
            </AvatarFallback>
          </>
        )}
      </Avatar>

      <div
        className={cn(
          'max-w-[70%] rounded-2xl px-4 py-2.5',
          isAgent
            ? 'bg-primary text-primary-foreground rounded-tr-md'
            : 'bg-muted text-foreground rounded-tl-md'
        )}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
        <p
          className={cn(
            'text-xs mt-1.5',
            isAgent ? 'text-primary-foreground/70' : 'text-muted-foreground'
          )}
        >
          {format(message.timestamp, 'h:mm a')}
        </p>
      </div>
    </div>
  );
}
