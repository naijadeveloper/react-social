import Sidebar from "@/components/Sidebar";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-[100vh] flex dark bg-background text-foreground">
      {/* sidebar - won't show only in authentication page */}
      {pathname !== "/auth" && (
        <aside className="w-[70px] md:w-[240px]">
          <Sidebar />
        </aside>
      )}

      {/* main content */}
      <main className={cn("grow w-full px-4")}>{children}</main>
    </div>
  );
}
