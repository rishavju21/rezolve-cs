import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { analyticsData } from '@/data/mockData';
import { 
  Ticket, 
  Clock, 
  CheckCircle2, 
  TrendingUp,
  MessageCircle,
  Mail,
  MessageSquare,
  ShoppingBag
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const CHANNEL_COLORS = {
  whatsapp: 'hsl(142, 70%, 45%)',
  email: 'hsl(234, 89%, 54%)',
  chat: 'hsl(280, 67%, 55%)',
  shopify: 'hsl(85, 59%, 42%)',
};

const CHANNEL_ICONS = {
  whatsapp: MessageCircle,
  email: Mail,
  chat: MessageSquare,
  shopify: ShoppingBag,
};

export function AnalyticsView() {
  const pieData = Object.entries(analyticsData.ticketsByChannel).map(([channel, count]) => ({
    name: channel.charAt(0).toUpperCase() + channel.slice(1),
    value: count,
    color: CHANNEL_COLORS[channel as keyof typeof CHANNEL_COLORS],
  }));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Track your support performance and customer satisfaction
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Total Tickets"
          value={analyticsData.totalTickets.toLocaleString()}
          icon={Ticket}
          trend="+12% from last month"
          trendUp
        />
        <MetricCard
          title="Open Tickets"
          value={analyticsData.openTickets.toString()}
          icon={Clock}
          subtitle="Requires attention"
        />
        <MetricCard
          title="Resolved"
          value={analyticsData.resolvedTickets.toLocaleString()}
          icon={CheckCircle2}
          trend="+8% from last month"
          trendUp
        />
        <MetricCard
          title="Avg Response Time"
          value={analyticsData.avgResponseTime}
          icon={TrendingUp}
          trend="-15% improvement"
          trendUp
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Ticket Volume (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData.ticketsTrend}>
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(234, 89%, 54%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(234, 89%, 54%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="hsl(234, 89%, 54%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorCount)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Channel Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Tickets by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {Object.entries(analyticsData.ticketsByChannel).map(([channel, count]) => {
                const Icon = CHANNEL_ICONS[channel as keyof typeof CHANNEL_ICONS];
                const color = CHANNEL_COLORS[channel as keyof typeof CHANNEL_COLORS];
                const percentage = Math.round((count / analyticsData.totalTickets) * 100);

                return (
                  <div key={channel} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm capitalize">{channel}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {count} ({percentage}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Response Time Card */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <p className="text-3xl font-bold text-foreground">{analyticsData.avgResponseTime}</p>
              <p className="text-sm text-muted-foreground mt-1">Avg. First Response</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <p className="text-3xl font-bold text-foreground">{analyticsData.avgResolutionTime}</p>
              <p className="text-sm text-muted-foreground mt-1">Avg. Resolution Time</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <p className="text-3xl font-bold text-foreground">
                {Math.round((analyticsData.resolvedTickets / analyticsData.totalTickets) * 100)}%
              </p>
              <p className="text-sm text-muted-foreground mt-1">Resolution Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  subtitle?: string;
}

function MetricCard({ title, value, icon: Icon, trend, trendUp, subtitle }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <p className="text-3xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{title}</p>
      {trend && (
        <p className={`text-xs mt-2 ${trendUp ? 'text-success' : 'text-destructive'}`}>
          {trend}
        </p>
      )}
      {subtitle && <p className="text-xs text-warning mt-2">{subtitle}</p>}
    </div>
  );
}
