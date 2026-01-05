import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { InboxView } from "./components/inbox/InboxView";
import { KnowledgeBaseView } from "./components/knowledge/KnowledgeBaseView";
import { AnalyticsView } from "./components/analytics/AnalyticsView";
import { TeamView } from "./components/team/TeamView";
import { ChannelsView } from "./components/channels/ChannelsView";
import ChannelConfig from "./pages/ChannelConfig";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Dashboard Routes */}
          <Route element={<MainLayout />}>
            <Route path="/inbox" element={<InboxView />} />
            <Route path="/knowledge" element={<KnowledgeBaseView />} />
            <Route path="/analytics" element={<AnalyticsView />} />
            <Route path="/team" element={<TeamView />} />
            <Route path="/channels" element={<ChannelsView />} />
            <Route path="/channels/:channelId" element={<ChannelConfig />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
