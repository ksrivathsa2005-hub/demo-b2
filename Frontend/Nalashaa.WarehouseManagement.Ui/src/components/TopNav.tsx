import { Link, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  Home,
  ArrowLeftRight,
  ShoppingCart,
  ArrowRightToLine,
  ClipboardList,
  Settings,
  FileText,
  Search,
  ChevronDown
} from 'lucide-react';

export function TopNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-blue-500 text-white shadow-md flex items-center px-4 py-2 h-14 w-full">
      <div className="flex items-center mr-8">
        <LayoutGrid className="h-5 w-5 mr-2" />
        <span className="font-bold text-lg tracking-wider">WMS</span>
      </div>

      <div className="flex space-x-1 flex-1 text-sm font-medium">
        <Link
          to="/"
          className={`flex items-center px-3 py-1.5 rounded-md transition-colors ${currentPath === '/' ? 'bg-blue-400/30' : 'hover:bg-blue-400/20'}`}
        >
          <Home className="h-4 w-4 mr-1.5" />
          Home
        </Link>

        <Link
          to="/transfers"
          className={`flex items-center px-3 py-1.5 rounded-md transition-colors ${currentPath.includes('/transfers') ? 'bg-[#18c6db] text-white shadow-sm' : 'hover:bg-blue-400/20'}`}
        >
          <ArrowLeftRight className="h-4 w-4 mr-1.5" />
          Transfers
          <ChevronDown className="h-3 w-3 ml-1" />
        </Link>

        <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-blue-400/20 transition-colors">
          <ShoppingCart className="h-4 w-4 mr-1.5" />
          Purchases
          <ChevronDown className="h-3 w-3 ml-1" />
        </button>

        <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-blue-400/20 transition-colors">
          <ArrowRightToLine className="h-4 w-4 mr-1.5" />
          Inbound
          <ChevronDown className="h-3 w-3 ml-1" />
        </button>

        <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-blue-400/20 transition-colors">
          <ClipboardList className="h-4 w-4 mr-1.5" />
          Stock Reconciliation
          <ChevronDown className="h-3 w-3 ml-1" />
        </button>

        <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-blue-400/20 transition-colors">
          <Settings className="h-4 w-4 mr-1.5" />
          Administration
        </button>

        <button className="flex items-center px-3 py-1.5 rounded-md hover:bg-blue-400/20 transition-colors">
          <FileText className="h-4 w-4 mr-1.5" />
          Reporting
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="hover:bg-blue-400/20 p-1.5 rounded-full transition-colors">
          <Search className="h-5 w-5" />
        </button>
        <div className="h-8 w-8 bg-white text-blue-500 rounded-full flex items-center justify-center font-bold text-sm shadow-sm border border-blue-200 cursor-pointer">
          AD
        </div>
      </div>
    </nav>
  );
}
