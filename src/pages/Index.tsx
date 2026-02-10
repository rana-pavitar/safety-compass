import { useState } from "react";
import { MapPin, Bell } from "lucide-react";
import SafetyStatusCard from "@/components/SafetyStatusCard";
import SafetyIndices from "@/components/SafetyIndices";
import AlertsList from "@/components/AlertsList";
import HotspotsList from "@/components/HotspotsList";
import AIInsights from "@/components/AIInsights";
import SafetyFeed from "@/components/SafetyFeed";
import TrustSection from "@/components/TrustSection";
import ProfileView from "@/components/ProfileView";
import BottomNav from "@/components/BottomNav";
import ReportIssueSheet from "@/components/ReportIssueSheet";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [reportOpen, setReportOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-sm">SR</span>
            </div>
            <div>
              <h1 className="text-sm font-heading font-bold text-foreground leading-none">SafeRadar</h1>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-[11px] text-muted-foreground">Sector 18, Gurugram</span>
              </div>
            </div>
          </div>
          <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-critical animate-pulse-soft" />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 py-5 space-y-6">
        {activeTab === "home" && (
          <>
            <SafetyStatusCard
              level="moderate"
              location="Sector 18, Gurugram • Updated 5 min ago"
              summary="Minor waterlogging reported nearby. Air quality is moderate. Stay alert for weather updates."
            />
            <SafetyIndices />
            <AlertsList />
            <AIInsights />
            <SafetyFeed />
            <TrustSection />
          </>
        )}

        {activeTab === "hotspots" && <HotspotsList />}

        {activeTab === "alerts" && <AlertsList />}

        {activeTab === "profile" && <ProfileView />}
      </main>

      {/* Bottom Nav */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onReport={() => setReportOpen(true)}
      />

      {/* Report Sheet */}
      <ReportIssueSheet open={reportOpen} onClose={() => setReportOpen(false)} />
    </div>
  );
};

export default Index;
