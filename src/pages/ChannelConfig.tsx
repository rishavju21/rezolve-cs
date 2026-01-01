import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft,
  MessageCircle, 
  Mail, 
  MessageSquare, 
  ShoppingBag,
  Save,
  TestTube2
} from 'lucide-react';

const channelConfigs = {
  whatsapp: {
    name: 'WhatsApp',
    description: 'Configure your WhatsApp Business API connection',
    icon: MessageCircle,
    color: 'bg-channel-whatsapp',
    fields: [
      { id: 'phone_number_id', label: 'Phone Number ID', type: 'text', placeholder: 'Enter your Phone Number ID' },
      { id: 'business_account_id', label: 'Business Account ID', type: 'text', placeholder: 'Enter your Business Account ID' },
      { id: 'access_token', label: 'Access Token', type: 'password', placeholder: 'Enter your permanent access token' },
      { id: 'webhook_verify_token', label: 'Webhook Verify Token', type: 'text', placeholder: 'Create a verify token for webhooks' },
    ],
    toggles: [
      { id: 'auto_reply', label: 'Enable Auto-Reply', description: 'Automatically send AI-generated responses' },
      { id: 'read_receipts', label: 'Send Read Receipts', description: 'Let customers know when messages are read' },
    ],
  },
  email: {
    name: 'Email',
    description: 'Configure your email integration via SMTP or Gmail API',
    icon: Mail,
    color: 'bg-channel-email',
    fields: [
      { id: 'smtp_host', label: 'SMTP Host', type: 'text', placeholder: 'smtp.gmail.com' },
      { id: 'smtp_port', label: 'SMTP Port', type: 'text', placeholder: '587' },
      { id: 'email_address', label: 'Email Address', type: 'email', placeholder: 'support@yourcompany.com' },
      { id: 'password', label: 'App Password', type: 'password', placeholder: 'Enter your app password' },
    ],
    toggles: [
      { id: 'auto_reply', label: 'Enable Auto-Reply', description: 'Automatically send AI-generated responses' },
      { id: 'signature', label: 'Include Signature', description: 'Add company signature to outgoing emails' },
    ],
  },
  chat: {
    name: 'Web Chat',
    description: 'Configure your website chat widget',
    icon: MessageSquare,
    color: 'bg-channel-chat',
    fields: [
      { id: 'widget_title', label: 'Widget Title', type: 'text', placeholder: 'Chat with us' },
      { id: 'welcome_message', label: 'Welcome Message', type: 'textarea', placeholder: 'Hi! How can we help you today?' },
      { id: 'primary_color', label: 'Primary Color', type: 'text', placeholder: '#6366f1' },
      { id: 'allowed_domains', label: 'Allowed Domains', type: 'text', placeholder: 'yoursite.com, app.yoursite.com' },
    ],
    toggles: [
      { id: 'auto_reply', label: 'Enable Auto-Reply', description: 'Automatically send AI-generated responses' },
      { id: 'show_agent_avatar', label: 'Show Agent Avatar', description: 'Display agent photos in chat' },
      { id: 'collect_email', label: 'Collect Email', description: 'Ask for email before starting chat' },
    ],
  },
  shopify: {
    name: 'Shopify',
    description: 'Configure your Shopify store integration',
    icon: ShoppingBag,
    color: 'bg-channel-shopify',
    fields: [
      { id: 'store_url', label: 'Store URL', type: 'text', placeholder: 'yourstore.myshopify.com' },
      { id: 'api_key', label: 'API Key', type: 'text', placeholder: 'Enter your Shopify API key' },
      { id: 'api_secret', label: 'API Secret', type: 'password', placeholder: 'Enter your Shopify API secret' },
      { id: 'access_token', label: 'Access Token', type: 'password', placeholder: 'Enter your access token' },
    ],
    toggles: [
      { id: 'sync_orders', label: 'Sync Orders', description: 'Automatically sync order data' },
      { id: 'show_order_status', label: 'Show Order Status', description: 'Display order info in conversations' },
    ],
  },
};

export default function ChannelConfig() {
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();

  const config = channelId ? channelConfigs[channelId as keyof typeof channelConfigs] : null;

  if (!config) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">Channel not found</p>
            <Button onClick={() => navigate('/')} className="mt-4">
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Channels
          </Button>
          
          <div className="flex items-center gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${config.color}`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{config.name} Configuration</h1>
              <p className="text-muted-foreground">{config.description}</p>
            </div>
          </div>
        </div>

        {/* Configuration Form */}
        <div className="space-y-6">
          {/* Connection Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Connection Settings</CardTitle>
              <CardDescription>Enter your API credentials and connection details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {config.fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  {field.type === 'textarea' ? (
                    <Textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      rows={3}
                    />
                  ) : (
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Feature Toggles */}
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>Enable or disable channel features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {config.toggles.map((toggle) => (
                <div key={toggle.id} className="flex items-center justify-between py-2">
                  <div>
                    <Label htmlFor={toggle.id} className="text-sm font-medium">
                      {toggle.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">{toggle.description}</p>
                  </div>
                  <Switch id={toggle.id} />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline">
              <TestTube2 className="h-4 w-4 mr-2" />
              Test Connection
            </Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
