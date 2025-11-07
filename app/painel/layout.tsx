import { AppSidebar } from "@/components/app-sidebar";
import { SidebarContent, SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import UserMenu from "@/components/user-menu";

export default function PainelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
            <SidebarHeader >
                <div className="flex justify-between w-full">
                    <SidebarTrigger />
                    <UserMenu />
                </div>
            </SidebarHeader>
            <SidebarContent className="p-4">
                {children}
            </SidebarContent>
            </SidebarInset>
        </SidebarProvider>
       
    </div>
  );
}
