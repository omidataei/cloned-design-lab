
import React from "react";
import { MessageCircle, Users, Mail, Settings, CreditCard, User, LayoutDashboard } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[240px] min-h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <img 
            src="public/lovable-uploads/853fa97a-7831-421c-b44f-b49adbc488bc.png" 
            alt="FIKO" 
            className="h-8 w-auto"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3 mb-4">
          <button className="flex items-center gap-3 w-full px-4 py-2 bg-indigo-600 text-white rounded-md">
            <LayoutDashboard size={20} />
            <span>Dashboards</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="px-6 mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Apps</span>
          </div>
          <nav>
            <SidebarItem icon={<MessageCircle />} label="Inbox" active />
            <SidebarItem icon={<Users />} label="Customers" />
            <SidebarItem icon={<Mail />} label="Marketing" />
          </nav>
        </div>

        <div>
          <div className="px-6 mb-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Personal</span>
          </div>
          <nav>
            <SidebarItem icon={<Settings />} label="Settings" />
            <SidebarItem icon={<CreditCard />} label="Billing & Plan" />
            <SidebarItem icon={<User />} label="My Profile" />
          </nav>
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false }) => {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-3 px-6 py-2 text-sm ${
        active 
          ? 'text-indigo-600 bg-indigo-50'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div className={active ? 'text-indigo-600' : 'text-gray-500'}>
        {icon}
      </div>
      <span>{label}</span>
    </a>
  );
};

export default Sidebar;
