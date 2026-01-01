import { cn } from '@/lib/utils';
import { Channel, ConversationStatus } from '@/types';
import { MessageSquare, Mail, ShoppingBag, MessageCircle } from 'lucide-react';

interface ChannelBadgeProps {
  channel: Channel;
  className?: string;
}

const channelConfig: Record<Channel, { icon: React.ElementType; label: string; className: string }> = {
  whatsapp: {
    icon: MessageCircle,
    label: 'WhatsApp',
    className: 'bg-channel-whatsapp/10 text-channel-whatsapp',
  },
  email: {
    icon: Mail,
    label: 'Email',
    className: 'bg-channel-email/10 text-channel-email',
  },
  chat: {
    icon: MessageSquare,
    label: 'Chat',
    className: 'bg-channel-chat/10 text-channel-chat',
  },
  shopify: {
    icon: ShoppingBag,
    label: 'Shopify',
    className: 'bg-channel-shopify/10 text-channel-shopify',
  },
};

export function ChannelBadge({ channel, className }: ChannelBadgeProps) {
  const config = channelConfig[channel];
  const Icon = config.icon;

  return (
    <span className={cn('channel-badge', config.className, className)}>
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  );
}

interface StatusBadgeProps {
  status: ConversationStatus;
  className?: string;
}

const statusConfig: Record<ConversationStatus, { label: string; className: string }> = {
  open: {
    label: 'Open',
    className: 'bg-status-open/10 text-status-open',
  },
  pending: {
    label: 'Pending',
    className: 'bg-status-pending/10 text-status-pending',
  },
  resolved: {
    label: 'Resolved',
    className: 'bg-status-resolved/10 text-status-resolved',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={cn('status-badge', config.className, className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}
