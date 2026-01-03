import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { currentUser } from '@/data/mockData';
import {
  Inbox,
  BookOpen,
  BarChart3,
  Users,
  Link2,
  Settings,
  HelpCircle,
  LogOut,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { id: 'inbox', path: '/inbox', label: 'Inbox', icon: Inbox },
  { id: 'knowledge', path: '/knowledge', label: 'Knowledge Base', icon: BookOpen },
  { id: 'analytics', path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'team', path: '/team', label: 'Team', icon: Users },
  { id: 'channels', path: '/channels', label: 'Channels', icon: Link2 },
] as const;

const bottomItems = [
  { id: 'settings', path: '/settings', label: 'Settings', icon: Settings },
  { id: 'help', path: '#', label: 'Help & Support', icon: HelpCircle },
] as const;

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/inbox' && location.pathname === '/') return true;
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={cn(
        'flex flex-col bg-sidebar h-screen border-r border-sidebar-border transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn('flex items-center gap-2', collapsed && 'justify-center w-full')}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sidebar-primary to-purple-500">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-sidebar-foreground">Rezolve</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setCollapsed(!collapsed)}
          className={cn('text-sidebar-foreground/60 hover:text-sidebar-foreground', collapsed && 'hidden')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Button
              key={item.id}
              variant={active ? 'sidebar-active' : 'sidebar'}
              className={cn(
                'w-full',
                collapsed ? 'justify-center px-2' : 'justify-start'
              )}
              onClick={() => navigate(item.path)}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;

          return (
            <Button
              key={item.id}
              variant="sidebar"
              className={cn(
                'w-full',
                collapsed ? 'justify-center px-2' : 'justify-start'
              )}
              onClick={() => item.path !== '#' && navigate(item.path)}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          );
        })}
      </div>

      {/* User */}
      <div className="p-3 border-t border-sidebar-border">
        <div
          className={cn(
            'flex items-center gap-3 rounded-lg p-2 hover:bg-sidebar-accent transition-colors cursor-pointer',
            collapsed && 'justify-center'
          )}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback className="text-xs bg-sidebar-primary text-sidebar-primary-foreground">
              SC
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {currentUser.name}
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                {currentUser.email}
              </p>
            </div>
          )}
          {!collapsed && (
            <Button variant="ghost" size="icon-sm" className="text-sidebar-foreground/60">
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Expand Button (when collapsed) */}
      {collapsed && (
        <div className="p-3 border-t border-sidebar-border">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setCollapsed(false)}
            className="w-full text-sidebar-foreground/60 hover:text-sidebar-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
