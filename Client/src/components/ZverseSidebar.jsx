import React, { useState } from "react";
import { Home, File, BarChart, User, Search, Award, Book, Phone, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar"; // Assuming these are imported from ShadCN UI library

// Menu items.
const items = [
  { title: "Profile", icon: User, key: "Profile" },
  { title: "Explore Courses", icon: Book, key: "Courses" },
  { title: "Internship", icon: File, key: "Internship" },
  { title: "Certificates", icon: Award, key: "Certificates" },
  { title: "My Courses", icon: Book, key: "MyCourses" },
  { title: "Analytics", icon: BarChart, key: "Analytics" },
  { title: "Mock CET", icon: Search, key: "MockCET" },
];

export function ZverseSidebar({ onSidebarItemClick, isCollapsed }) {
  // State to track sidebar collapse
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar collapsible="icon" collapsed={collapsed} onCollapseChange={setCollapsed}>
      <SidebarContent>
        {/* Sidebar Header with ZVerse Logo */}
        <div className="flex items-center justify-between p-4">
          <img
            src="https://via.placeholder.com/40" // Replace with the actual ZVerse logo
            alt="ZVerse Logo"
            className="w-10 h-10"
          />
          <button className="md:hidden" onClick={() => setCollapsed(!collapsed)}>
            <span>
              <SidebarTrigger />
            </span>
          </button>
        </div>

        {/* Sidebar Menu */}
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton asChild onClick={() => onSidebarItemClick(item.key)}>
                    <a className="flex items-center text-lg">
                      <item.icon />
                      <span className="ml-2">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Sidebar Footer */}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {/* Contact Us Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild onClick={() => onSidebarItemClick("ContactUs")}>
              <a className="flex items-center text-lg">
                <Phone className="w-4 h-4 mr-2" />
                <span>Contact Us</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Settings Menu Item */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild onClick={() => onSidebarItemClick("Settings")}>
              <a className="flex items-center text-lg">
                <Settings className="w-4 h-4 mr-2" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        {/* Only show the company name if the sidebar is not collapsed */}
        {!collapsed && (
          <span className="text-xs mt-4 text-center">One Boat Solutions</span>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
