import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export function TransferOrders() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 w-full">
      <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Transfer Orders</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and track material movement between facilities</p>
        </div>
        <Link
          to="/transfers/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium flex items-center shadow-sm transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Order
        </Link>
      </div>

      {/* Search and Filter section from mockup */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex flex-wrap gap-6 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Search Order</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="pl-9 w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
              placeholder="TO Number or Product..."
            />
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Manufacturing Facility</label>
          <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none">
            <option>All Facilities</option>
          </select>
        </div>

        <div className="flex-[2] min-w-[300px]">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Date Range</label>
          <div className="flex items-center space-x-2">
            <input type="date" className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-600" />
            <span className="text-gray-400 text-sm">to</span>
            <input type="date" className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-600" />
          </div>
        </div>

        <div className="min-w-[150px]">
           <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase">Rush Order</label>
           <div className="flex items-center space-x-4 py-2">
             <label className="flex items-center text-sm text-gray-700 cursor-pointer">
               <input type="radio" name="rush" className="mr-1.5 text-blue-600 focus:ring-blue-500" defaultChecked />
               All
             </label>
             <label className="flex items-center text-sm text-gray-700 cursor-pointer">
               <input type="radio" name="rush" className="mr-1.5 text-blue-600 focus:ring-blue-500" />
               Yes
             </label>
             <label className="flex items-center text-sm text-gray-700 cursor-pointer">
               <input type="radio" name="rush" className="mr-1.5 text-blue-600 focus:ring-blue-500" />
               No
             </label>
           </div>
        </div>
      </div>

      {/* Empty State placeholder */}
      <div className="text-center py-20 text-gray-500">
        <p>Use the 'New Order' button to create a transfer order.</p>
      </div>
    </div>
  );
}
