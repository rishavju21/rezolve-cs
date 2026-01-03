import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { InboxView } from "./components/inbox/InboxView";
import { KnowledgeBaseView } from "./components/knowledge/KnowledgeBaseView";
import { AnalyticsView } from "./components/analytics/AnalyticsView";
import { TeamView } from "./components/team/TeamView";
import { ChannelsView } from "./components/channels/ChannelsView";
import ChannelConfig from "./pages/ChannelConfig";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const SettingsView = () => (
  <div className="flex items-center justify-center h-full">
    <p className="text-muted-foreground">Settings view coming soon...</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/inbox" replace />} />
            <Route path="/inbox" element={<InboxView />} />
            <Route path="/knowledge" element={<KnowledgeBaseView />} />
            <Route path="/analytics" element={<AnalyticsView />} />
            <Route path="/team" element={<TeamView />} />
            <Route path="/channels" element={<ChannelsView />} />
            <Route path="/channels/:channelId" element={<ChannelConfig />} />
            <Route path="/settings" element={<SettingsView />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
