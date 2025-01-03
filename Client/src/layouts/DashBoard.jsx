import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider
import { ZverseSidebar } from "@/components/ZverseSidebar"; // Import the sidebar
import { SidebarTrigger } from "@/components/ui/sidebar"; // Import SidebarTrigger
import Profile from "@/components/Profile";
import Internship from "@/components/Internship";
import Analytics from "@/components/Analytics";
import Certificates from "@/components/Certificates";
import MyCourses from "@/components/MyCourses";
import CourseCatalog from "@/components/CourseCatalog";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Profile");
  const [collapsed, setCollapsed] = useState(false); // State to track collapse

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item); // Update the active menu item
  };

  const handleSidebarToggle = () => {
    setCollapsed((prev) => !prev); // Toggle collapse state
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "Profile":
        return <Profile />;
      case "Courses":
        return <CourseCatalog/>;
      case "MyCourses":
        return <MyCourses/>;
      case "Internship":
        return <Internship />;
      case "Certificates":
        return <Certificates />;
      case "Analytics":
        return <Analytics />;
      case "MockCET":
        return <div>Mock CET Component</div>; // Add MockCET component later
      default:
        return <Profile />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        {/* Sidebar */}
        <ZverseSidebar onSidebarItemClick={handleSidebarItemClick} collapsed={collapsed} />

        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto p-2 w-full">
            <header className="flex justify-between items-center p-2 border-b w-full">
              <button onClick={handleSidebarToggle} >
                <SidebarTrigger />
              </button>
              <div className="flex-1"></div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full mr-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/path-to-avatar.jpg" alt="Profile Avatar" />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">username</p>
                      <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            {renderComponent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
