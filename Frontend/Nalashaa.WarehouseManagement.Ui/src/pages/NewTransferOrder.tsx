import { useState } from 'react';
import { ChevronDown, Plus, Layers, Trash2, Search } from 'lucide-react';
import { manufacturingFacilities, warehouseFacilities, products, boms } from '../data/mockData';

interface OrderLine {
  id: string;
  productId: string;
  quantity: number | '';
}

export function NewTransferOrder() {
  const [selectedMfgFacility, setSelectedMfgFacility] = useState<string>('');
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>('');
  const [partialDispatchAllowed, setPartialDispatchAllowed] = useState<boolean>(false);
  const [rushOrder, setRushOrder] = useState<boolean>(false);
  const [orderLines, setOrderLines] = useState<OrderLine[]>([
    { id: crypto.randomUUID(), productId: '', quantity: '' }
  ]);
  const [showBomDropdown, setShowBomDropdown] = useState(false);

  // Calculate Summary
  const validLines = orderLines.filter(line => line.productId !== '');
  const totalProducts = validLines.length;
  const totalQuantity = validLines.reduce((sum, line) => sum + (Number(line.quantity) || 0), 0);

  // Filter warehouses based on selected manufacturing facility
  const filteredWarehouses = warehouseFacilities.filter(
    (wf) => !selectedMfgFacility || wf.plantId === selectedMfgFacility
  );

  return (
    <div className="bg-white shadow-sm border border-gray-100 p-8 w-full min-h-[500px]">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-gray-800">Internal Transfer Order</h1>
        <p className="text-[#8c94a3] text-[13px] mt-0.5">Create a new request for material transfer between units</p>
      </div>

      <div className="border-t border-gray-100 pt-6">
        {/* Row 1: Facilities */}
        <div className="flex gap-8 mb-8">
          <div className="flex-1">
            <label className="block text-xs font-bold text-[#475569] mb-2">
              Manufacturing Facility <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={selectedMfgFacility}
                onChange={(e) => {
                  setSelectedMfgFacility(e.target.value);
                  setSelectedWarehouse(''); // reset warehouse when mfg changes
                }}
                className="w-full border border-[#d1d5db] rounded-[4px] py-2 px-3 text-[14px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer hover:border-gray-400 transition-colors"
                required
              >
                <option value="" disabled>Manufacturing Facility</option>
                {manufacturingFacilities.map((facility) => (
                  <option key={facility.id} value={facility.id}>{facility.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-xs font-bold text-[#475569] mb-2">
              Warehouse Facility
            </label>
            <div className="relative">
              <select
                value={selectedWarehouse}
                onChange={(e) => setSelectedWarehouse(e.target.value)}
                className="w-full border border-[#d1d5db] rounded-[4px] py-2 px-3 text-[14px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer hover:border-gray-400 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                disabled={!selectedMfgFacility}
              >
                <option value="" disabled>Select Warehouse Facility</option>
                {filteredWarehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Toggles */}
        <div className="flex gap-8 pb-6 border-b border-gray-100 border-dashed">
          <div className="flex-1">
            <label className="block text-xs font-bold text-[#475569] mb-2">
              Partial Dispatch Allowed
            </label>
            <div className="flex items-center space-x-3 h-[38px]">
              <button
                type="button"
                role="switch"
                aria-checked={partialDispatchAllowed}
                onClick={() => setPartialDispatchAllowed(!partialDispatchAllowed)}
                className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  partialDispatchAllowed ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    partialDispatchAllowed ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className="text-[14px] text-gray-600 font-medium">
                {partialDispatchAllowed ? 'Yes' : 'No'}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-xs font-bold text-[#475569] mb-2">
              Rush Order
            </label>
            <div className="flex items-center space-x-3 h-[38px]">
              <button
                type="button"
                role="switch"
                aria-checked={rushOrder}
                onClick={() => setRushOrder(!rushOrder)}
                className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  rushOrder ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    rushOrder ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className="text-[14px] text-gray-600 font-medium">
                {rushOrder ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[15px] font-bold text-gray-800">Product Details</h2>
            <div className="flex space-x-3">
              <button
                onClick={() => setOrderLines([...orderLines, { id: crypto.randomUUID(), productId: '', quantity: '' }])}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-[4px] text-[13px] font-medium flex items-center transition-colors"
              >
                <Plus className="h-4 w-4 mr-1.5" />
                Add Product
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowBomDropdown(!showBomDropdown)}
                  className="bg-[#18c6db] hover:bg-[#15b2c5] text-white px-4 py-2 rounded-[4px] text-[13px] font-medium flex items-center transition-colors"
                >
                  <Layers className="h-4 w-4 mr-1.5" />
                  Add Product W/ BOM
                  <ChevronDown className="h-4 w-4 ml-1.5" />
                </button>

                {showBomDropdown && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-10">
                    <ul className="py-1">
                      {boms.map(bom => (
                        <li key={bom.id}>
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              // Add BOM items to order lines
                              const newLines = bom.items.map(item => ({
                                id: crypto.randomUUID(),
                                productId: item.productId,
                                quantity: item.quantity * 150 // Multiplying by 150 as per requirement
                              }));

                              // If there's only one empty line, replace it, otherwise append
                              if (orderLines.length === 1 && !orderLines[0].productId) {
                                setOrderLines(newLines);
                              } else {
                                setOrderLines([...orderLines, ...newLines]);
                              }
                              setShowBomDropdown(false);
                            }}
                          >
                            {bom.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Rows */}
          <div className="bg-[#f9fafb] rounded-[8px] border border-[#e5e7eb] overflow-hidden">
            {/* Table Header */}
            <div className="flex px-4 py-3 border-b border-[#e5e7eb] bg-[#f9fafb]">
              <div className="w-[35%] text-[11px] font-bold text-[#6b7280] uppercase tracking-wider">Product Name</div>
              <div className="w-[25%] text-[11px] font-bold text-[#6b7280] uppercase tracking-wider pl-4">Available Stock</div>
              <div className="w-[20%] text-[11px] font-bold text-[#6b7280] uppercase tracking-wider pl-4">Quantity</div>
              <div className="w-[15%] text-[11px] font-bold text-[#6b7280] uppercase tracking-wider pl-4">UOM</div>
              <div className="w-[5%]"></div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#e5e7eb] bg-white">
              {orderLines.map((line, index) => {
                const selectedProduct = products.find(p => p.id === line.productId);

                return (
                  <div key={line.id} className="flex items-center px-4 py-3">
                    <div className="w-[35%] relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <select
                        value={line.productId}
                        onChange={(e) => {
                          const newLines = [...orderLines];
                          newLines[index].productId = e.target.value;
                          setOrderLines(newLines);
                        }}
                        className="w-full pl-9 pr-8 py-2 border border-[#d1d5db] rounded-[4px] text-[13px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                      >
                        <option value="" disabled>Search product...</option>
                        {products.map(product => (
                          <option key={product.id} value={product.id}>
                            {product.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="w-[25%] pl-4">
                      <input
                        type="text"
                        value={selectedProduct ? selectedProduct.availableStock : '0'}
                        readOnly
                        className="w-full px-3 py-2 bg-[#f3f4f6] border border-[#d1d5db] rounded-[4px] text-[13px] text-gray-700 cursor-not-allowed"
                      />
                    </div>

                    <div className="w-[20%] pl-4">
                      <input
                        type="number"
                        min="1"
                        value={line.quantity}
                        onChange={(e) => {
                          const val = e.target.value === '' ? '' : Number(e.target.value);
                          const newLines = [...orderLines];
                          newLines[index].quantity = val;
                          setOrderLines(newLines);
                        }}
                        className="w-full px-3 py-2 border border-[#d1d5db] rounded-[4px] text-[13px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div className="w-[15%] pl-4">
                      <input
                        type="text"
                        value={selectedProduct ? selectedProduct.uom : '-'}
                        readOnly
                        className="w-full px-3 py-2 bg-[#f3f4f6] border border-[#d1d5db] rounded-[4px] text-[13px] text-gray-700 cursor-not-allowed"
                      />
                    </div>

                    <div className="w-[5%] flex justify-end">
                      <button
                        onClick={() => {
                          if (orderLines.length > 1) {
                            setOrderLines(orderLines.filter(l => l.id !== line.id));
                          } else {
                            // If it's the last line, just clear it
                            setOrderLines([{ id: crypto.randomUUID(), productId: '', quantity: '' }]);
                          }
                        }}
                        className="text-red-500 hover:text-red-700 p-1.5 rounded-full hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer / Summary */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end items-center">
          <div className="flex space-x-12 text-[14px]">
            <div className="flex items-center">
              <span className="text-gray-500 font-medium uppercase tracking-wider text-[11px] mr-3">TOTAL PRODUCT(S):</span>
              <span className="text-blue-600 font-bold text-xl">{totalProducts}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 font-medium uppercase tracking-wider text-[11px] mr-3">TOTAL QUANTITY:</span>
              <span className="text-blue-600 font-bold text-xl">{totalQuantity}</span>
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-6 py-2 border border-[#d1d5db] rounded-[4px] text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button
            onClick={() => {
              if (!selectedMfgFacility) {
                alert("Please select a manufacturing facility.");
                return;
              }
              if (!selectedWarehouse) {
                alert("Please select a warehouse facility.");
                return;
              }
              if (totalProducts === 0) {
                alert("Please add at least one product.");
                return;
              }

              // Validate quantities against stock
              let valid = true;
              let validationMessage = "";

              for (const line of orderLines) {
                if (!line.productId) continue;

                const product = products.find(p => p.id === line.productId);
                const qty = Number(line.quantity) || 0;

                if (qty <= 0) {
                  valid = false;
                  validationMessage = `Quantity for ${product?.name} must be greater than zero.`;
                  break;
                }

                if (!partialDispatchAllowed && product && qty > product.availableStock) {
                  valid = false;
                  validationMessage = `Quantity not sufficient for placing the single dispatch order. Available stock for ${product.name} is ${product.availableStock}.`;
                  break;
                }
              }

              if (!valid) {
                alert(validationMessage);
              } else {
                alert("Transfer order submitted successfully!");
                // Here we would submit the data and redirect
              }
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-[4px] text-[14px] font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Submit Order
          </button>
        </div>

      </div>
    </div>
  );
}
