import { Home, Search, Compass, MessageCircle, User, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function SideNavigation() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-16 md:w-20 flex flex-col items-center py-8 border-r bg-white dark:bg-tiktok-dark">
      <div className="mb-8">
        <div className="h-8 w-8 bg-tiktok rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">T</span>
        </div>
      </div>
      
      <nav className="flex flex-col items-center space-y-6 flex-1">
        <Link to="/" className="tiktok-sidebar-icon text-tiktok">
          <Home size={24} />
        </Link>
        <Link to="/explore" className="tiktok-sidebar-icon">
          <Compass size={24} />
        </Link>
        <Link to="/search" className="tiktok-sidebar-icon">
          <Search size={24} />
        </Link>
        <Link to="/messages" className="tiktok-sidebar-icon">
          <MessageCircle size={24} />
        </Link>
        <Link to="/profile" className="tiktok-sidebar-icon">
          <User size={24} />
        </Link>
      </nav>
      
      <div className="mt-auto">
        <button className="tiktok-sidebar-icon bg-tiktok text-white rounded-full hover:bg-opacity-90">
          <PlusCircle size={24} />
        </button>
      </div>
    </div>
  );
}
