import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  MessageCircle, 
  Mail, 
  MessageSquare, 
  ShoppingBag,
  CheckCircle2,
  ExternalLink,
  Settings2
} from 'lucide-react';

const channels = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Connect your WhatsApp Business account',
    icon: MessageCircle,
    connected: true,
    color: 'bg-channel-whatsapp',
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Connect via SMTP or Gmail API',
    icon: Mail,
    connected: true,
    color: 'bg-channel-email',
  },
  {
    id: 'chat',
    name: 'Web Chat',
    description: 'Embed chat widget on your website',
    icon: MessageSquare,
    connected: false,
    color: 'bg-channel-chat',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Integrate with your Shopify store',
    icon: ShoppingBag,
    connected: true,
    color: 'bg-channel-shopify',
  },
];

export function ChannelsView() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Channel Integrations</h1>
        <p className="text-muted-foreground mt-1">
          Connect your customer communication channels
        </p>
      </div>

      {/* Channels Grid */}
      <div className="grid gap-4">
        {channels.map((channel) => {
          const Icon = channel.icon;

          return (
            <Card key={channel.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${channel.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{channel.name}</h3>
                        {channel.connected && (
                          <span className="flex items-center gap-1 text-xs text-success">
                            <CheckCircle2 className="h-3 w-3" />
                            Connected
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Switch checked={channel.connected} />
                    <Button variant="outline" size="sm">
                      <Settings2 className="h-4 w-4 mr-1.5" />
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Help Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Need help connecting?</CardTitle>
          <CardDescription>
            Check out our integration guides for step-by-step instructions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              WhatsApp Setup Guide
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Email Configuration
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Chat Widget Installation
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Shopify Integration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
