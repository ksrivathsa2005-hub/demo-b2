export interface ManufacturingFacility {
  id: string;
  name: string;
}

export interface WarehouseFacility {
  id: string;
  name: string;
  plantId: string;
}

export interface Product {
  id: string;
  name: string;
  availableStock: number;
  uom: string;
}

export interface BomItem {
  productId: string;
  quantity: number;
}

export interface Bom {
  id: string;
  name: string;
  items: BomItem[];
}

export const manufacturingFacilities: ManufacturingFacility[] = [
  { id: 'mf-1', name: 'MedEquip LLC – Texas' },
  { id: 'mf-2', name: 'MedEquip LLC – California' },
  { id: 'mf-3', name: 'MedEquip LLC – New York' },
];

export const warehouseFacilities: WarehouseFacility[] = [
  { id: 'wf-1', name: 'Central Distribution & Light Assembly Warehouse – Texas', plantId: 'mf-1' },
  { id: 'wf-2', name: 'West Coast Distribution – California', plantId: 'mf-2' },
  { id: 'wf-3', name: 'East Coast Distribution – New York', plantId: 'mf-3' },
  { id: 'wf-4', name: 'Secondary Storage - Texas', plantId: 'mf-1' },
];

export const products: Product[] = [
  { id: 'prod-1', name: 'Oxygen Concentrator Housing', availableStock: 500, uom: 'pcs' },
  { id: 'prod-2', name: 'Compressor Unit', availableStock: 200, uom: 'pcs' },
  { id: 'prod-3', name: 'Sieve Bed', availableStock: 150, uom: 'pairs' },
  { id: 'prod-4', name: 'Cooling Fan', availableStock: 800, uom: 'pcs' },
  { id: 'prod-5', name: 'Control Board', availableStock: 300, uom: 'pcs' },
  { id: 'prod-6', name: 'Power Supply', availableStock: 450, uom: 'pcs' },
  { id: 'prod-7', name: 'HEPA Filter', availableStock: 1200, uom: 'pcs' },
  { id: 'prod-8', name: 'Oxygen Sensor', availableStock: 250, uom: 'pcs' },
  { id: 'prod-9', name: 'Flow Meter', availableStock: 320, uom: 'pcs' },
  { id: 'prod-10', name: 'Tubing Set', availableStock: 2000, uom: 'meters' },
];

export const boms: Bom[] = [
  {
    id: 'bom-1',
    name: 'OX-Prime 5L',
    items: [
      { productId: 'prod-1', quantity: 1 },
      { productId: 'prod-2', quantity: 1 },
      { productId: 'prod-3', quantity: 1 },
      { productId: 'prod-4', quantity: 1 },
      { productId: 'prod-5', quantity: 1 },
      { productId: 'prod-6', quantity: 1 },
      { productId: 'prod-7', quantity: 2 },
      { productId: 'prod-8', quantity: 1 },
      { productId: 'prod-9', quantity: 1 },
      { productId: 'prod-10', quantity: 5 },
    ]
  },
  {
    id: 'bom-2',
    name: 'OX-Prime 10L',
    items: [
      { productId: 'prod-1', quantity: 1 },
      { productId: 'prod-2', quantity: 2 },
      { productId: 'prod-3', quantity: 2 },
      { productId: 'prod-4', quantity: 2 },
      { productId: 'prod-5', quantity: 1 },
      { productId: 'prod-6', quantity: 1 },
      { productId: 'prod-7', quantity: 4 },
      { productId: 'prod-8', quantity: 1 },
      { productId: 'prod-9', quantity: 1 },
      { productId: 'prod-10', quantity: 8 },
    ]
  }
];
