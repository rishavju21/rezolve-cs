import { useState } from 'react';
import { AppSidebar, ViewType } from '@/components/layout/AppSidebar';
import { InboxView } from '@/components/inbox/InboxView';
import { KnowledgeBaseView } from '@/components/knowledge/KnowledgeBaseView';
import { AnalyticsView } from '@/components/analytics/AnalyticsView';
import { TeamView } from '@/components/team/TeamView';
import { ChannelsView } from '@/components/channels/ChannelsView';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('inbox');

  const renderView = () => {
    switch (currentView) {
      case 'inbox':
        return <InboxView />;
      case 'knowledge':
        return <KnowledgeBaseView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'team':
        return <TeamView />;
      case 'channels':
        return <ChannelsView />;
      case 'settings':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Settings view coming soon...</p>
          </div>
        );
      default:
        return <InboxView />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 overflow-hidden">{renderView()}</main>
    </div>
  );
};

export default Index;
