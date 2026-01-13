import weldingImg from "@/assets/product-electrodes.jpg";
import wearplateImg from "@/assets/product-flux-wire.jpg";
import coatingImg from "@/assets/product-mig-wire.jpg";
import automationImg from "@/assets/product-tig-wire.jpg";

export interface Product {
  name: string;
  image: string;
}

export const productsByDivision: Record<string, Product[]> = {
  "welding-cutting": [
    { name: "SAW Wire", image: weldingImg },
    { name: "SS TIG Wire", image: weldingImg },
    { name: "SS MIG Wire", image: weldingImg },
    { name: "MS Welding Electrodes", image: weldingImg },
    { name: "SS Welding Electrodes", image: weldingImg },
    { name: "Hardfacing Electrodes", image: weldingImg },
    { name: "Flux Cored Wire", image: coatingImg },
    { name: "Copper Coated MS Wire", image: weldingImg },
    { name: "Aluminum Alloy Electrodes", image: weldingImg },
    { name: "Fabrication Electrodes", image: weldingImg },
    { name: "Welding Machines", image: weldingImg },
    { name: "Wire Feeder Machines", image: weldingImg },
    { name: "Plasma Cutting Machines", image: weldingImg },
    { name: "Gas Cutting Torches", image: weldingImg },
    { name: "Electrode Holders", image: weldingImg },
    { name: "Ground Clamps", image: weldingImg },
    { name: "Welding Cables", image: weldingImg },
    { name: "Welding Helmets", image: weldingImg },
    { name: "Anti Spatter Spray", image: weldingImg },
    { name: "Super Prime Cut System", image: weldingImg }
  ],

  "wear-plate": [
    { name: "Chromium Carbide Wear Plates", image: wearplateImg },
    { name: "Composite Wear Plates", image: wearplateImg },
    { name: "Mill Liners", image: wearplateImg },
    { name: "Inlet Chutes", image: wearplateImg },
    { name: "Ceramic Pipes", image: wearplateImg },
    { name: "Ceramic Bends", image: wearplateImg },
    { name: "Ceramic Tiles", image: wearplateImg },
    { name: "Metallic Liners", image: wearplateImg },
    { name: "Rubber Liners", image: wearplateImg }
  ],

  "coating": [
    { name: "Thermal Spray Coating", image: coatingImg },
    { name: "Epoxy Coatings", image: coatingImg },
    { name: "Chemical Resistant Coatings", image: coatingImg },
    { name: "Surface Repair Systems", image: coatingImg },
    { name: "Grit Blasting Sets", image: coatingImg },
    { name: "NDT Services", image: coatingImg }
  ],

  "instrumentation-automation": [
    { name: "Rotary Paddle Level Switch", image: automationImg },
    { name: "Vibrating Fork Level Switch", image: automationImg },
    { name: "Capacitance Level Switch", image: automationImg },
    { name: "Radar Level Sensors", image: automationImg },
    { name: "Electromechanical Level Transmitters", image: automationImg },
    { name: "Pressure Gauges", image: automationImg },
    { name: "Pressure Switches", image: automationImg },
    { name: "Vacuum Gauges", image: automationImg },
    { name: "Flow Meters", image: automationImg },
    { name: "Flow Sensors", image: automationImg },
    { name: "RTD & Thermocouple Sensors", image: automationImg }
  ],

  "rubber-polymer": [
    { name: "Rubber Sheets", image: wearplateImg },
    { name: "Rubber Expansion Joints", image: wearplateImg },
    { name: "O-Rings", image: wearplateImg },
    { name: "Oil Seals", image: wearplateImg },
    { name: "Rubber Gaskets", image: wearplateImg },
    { name: "Industrial Hoses", image: wearplateImg },
    { name: "Silicone Hoses", image: wearplateImg },
    { name: "SS Braided Hoses", image: wearplateImg },
    { name: "Conveyor Belts", image: wearplateImg },
    { name: "Elevator Belts", image: wearplateImg },
    { name: "Impact Pads", image: wearplateImg },
    { name: "Ceramic Pulley Lagging", image: wearplateImg }
  ],

  "lubrication": [
    { name: "Compressor Oil", image: weldingImg },
    { name: "Turbine Oil", image: weldingImg },
    { name: "Hydraulic Oil", image: weldingImg },
    { name: "Industrial Lubricants", image: weldingImg },
    { name: "Synthetic Lubricants", image: weldingImg },
    { name: "High Temperature Grease", image: weldingImg },
    { name: "Water Resistant Grease", image: weldingImg },
    { name: "Wire Rope Lubricants", image: weldingImg },
    { name: "Grease Guns", image: weldingImg }
  ],

  "fire-safety": [
    { name: "Fire Fighting Suits", image: coatingImg },
    { name: "Aluminized Proximity Suits", image: coatingImg },
    { name: "Fire Blankets", image: coatingImg },
    { name: "Welding Blankets", image: coatingImg },
    { name: "Arc Flash Suits", image: coatingImg },
    { name: "Fire Hose", image: coatingImg },
    { name: "Fire Hose Reel", image: coatingImg },
    { name: "Sprinklers", image: coatingImg },
    { name: "Fire Detectors", image: coatingImg },
    { name: "Safety Gloves", image: coatingImg },
    { name: "Face Shields", image: coatingImg },
    { name: "Fall Arrestors", image: coatingImg }
  ],

  "water-treatment": [
    { name: "Industrial Water Treatment Systems", image: automationImg },
    { name: "Chemical Dosing Systems", image: automationImg },
    { name: "Water Pumps", image: automationImg },
    { name: "Valves", image: automationImg },
    { name: "Utility Water Solutions", image: automationImg }
  ],

  "pumps-valves": [
    { name: "Industrial Pumps", image: automationImg },
    { name: "Process Valves", image: automationImg },
    { name: "Flow Control Valves", image: automationImg },
    { name: "Mechanical Couplings", image: automationImg },
    { name: "Replacement Spares", image: automationImg }
  ],

  "solar-ev": [
    { name: "Solar Panels", image: weldingImg },
    { name: "Solar Inverters", image: weldingImg },
    { name: "Solar Accessories", image: weldingImg },
    { name: "EV Electrical Spares", image: weldingImg },
    { name: "Energy Storage Components", image: weldingImg }
  ]
};
