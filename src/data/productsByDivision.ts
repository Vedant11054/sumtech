export interface Product {
  name: string;
  image: string;
}

export const productsByDivision: Record<string, Product[]> = {
  "welding-cutting": [
    { name: "SAW Wire", image: "/product images/welding product/Fine Wire.jpg" },
    { name: "SS TIG Wire", image: "/product images/welding product/Stainless Steel.jpg" },
    { name: "SS MIG Wire", image: "/product images/welding product/Stainless Steel 2.jpg" },
    { name: "MS Welding Electrodes", image: "/product images/welding product/Steel.jpg" },
    { name: "SS Welding Electrodes", image: "/product images/welding product/Stainless Steel.jpg" },
    { name: "Hardfacing Electrodes", image: "/product images/welding product/hardfacing.jpg" },
    { name: "Flux Cored Wire", image: "/product images/welding product/Flux core Wire.jpg" },
    { name: "Copper Coated MS Wire", image: "/product images/welding product/Copper Coated MS Wire.jpg" },
    { name: "Aluminum Alloy Electrodes", image: "/product images/welding product/Aluminum Alloys.jpg" },
    { name: "Fabrication Electrodes", image: "/product images/welding product/Fabrication Electrodes.jpg" },
    { name: "Welding Machines", image: "/product images/welding product/Welding Machines.jpg" },
    { name: "Wire Feeder Machines", image: "/product images/welding product/Wire Feeder Machine.jpg" },
    { name: "Plasma Cutting Machines", image: "/product images/welding product/Plasma Cutting Machine.jpg" },
    { name: "Gas Cutting Torches", image: "/product images/welding product/Gas Cutting Torch.jpg" },
    { name: "Electrode Holders", image: "/product images/welding product/Electrode Holders.jpg" },
    { name: "Ground Clamps", image: "/product images/welding product/Ground Clamps.png" },
    { name: "Welding Cables", image: "/product images/welding product/WELDING CABLES.jpg" },
    { name: "Welding Helmets", image: "/product images/welding product/welding helmet.webp" },
    { name: "Anti Spatter Spray", image: "/product images/welding product/Anti Spatter Spray.webp" },
    { name: "Super Prime Cut System", image: "/product images/welding product/Cutting & Gouging.jpg" }
  ],

  "wear-plate": [
    { name: "Chromium Carbide Wear Plates", image: "/product images/WEAR PROTECTION DIVISION/Chromium Carbide WP.jpg" },
    { name: "Composite Wear Plates", image: "/product images/WEAR PROTECTION DIVISION/Chromium Carbide WP.jpg" },
    { name: "Mill Liners", image: "/product images/WEAR PROTECTION DIVISION/Mill Liners.jpg" },
    { name: "Inlet Chutes", image: "/product images/WEAR PROTECTION DIVISION/Inlet Chute.jpg" },
    { name: "Ceramic Pipes", image: "/product images/WEAR PROTECTION DIVISION/Ceramic pipes Bends.jpg" },
    { name: "Ceramic Bends", image: "/product images/WEAR PROTECTION DIVISION/Ceramic pipes Bends.jpg" },
    { name: "Ceramic Tiles", image: "/product images/WEAR PROTECTION DIVISION/Ceramic Tiles.jpg" },
    { name: "Metallic Liners", image: "/product images/WEAR PROTECTION DIVISION/Liners Metallic,Ceramic ,Rubber.jpg" },
    { name: "Rubber Liners", image: "/product images/WEAR PROTECTION DIVISION/Liners Metallic,Ceramic ,Rubber.jpg" }
  ],

  "coating": [
    { name: "Thermal Spray Coating", image: "/product images/welding product/Electrode Drying Oven.jpg" },
    { name: "Epoxy Coatings", image: "/product images/welding product/Electrode Drying Oven.jpg" },
    { name: "Chemical Resistant Coatings", image: "/product images/welding product/Electrode Drying Oven.jpg" },
    { name: "Surface Repair Systems", image: "/product images/welding product/Fabrication Electrodes.jpg" },
    { name: "Grit Blasting Sets", image: "/product images/welding product/Cutting & Gouging.jpg" },
    { name: "NDT Services", image: "/product images/welding product/Welding Machines.jpg" }
  ],

  "instrumentation-automation": [
    { name: "Rotary Paddle Level Switch", image: "/product images/AUTOMATION DIVISION/Rotary paddle level switches.jpg" },
    { name: "Vibrating Fork Level Switch", image: "/product images/AUTOMATION DIVISION/Vibrating fork type level switches.jpg" },
    { name: "Capacitance Level Switch", image: "/product images/AUTOMATION DIVISION/Capacitance type level switches.jpg" },
    { name: "Radar Level Sensors", image: "/product images/AUTOMATION DIVISION/Radar (Contact and Non-contact type).jpg" },
    { name: "Electromechanical Level Transmitters", image: "/product images/AUTOMATION DIVISION/Electromechanical level transmitter (Silo Pilot).jpg" },
    { name: "Pressure Gauges", image: "/product images/AUTOMATION DIVISION/Pressure Instruments.jpg" },
    { name: "Pressure Switches", image: "/product images/AUTOMATION DIVISION/Pressure Switches.jpg" },
    { name: "Vacuum Gauges", image: "/product images/AUTOMATION DIVISION/Digital Vacuum Gauges.jpg" },
    { name: "Flow Meters", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" },
    { name: "Flow Sensors", image: "/product images/AUTOMATION DIVISION/Flow Sensors for Liquid.jpg" },
    { name: "RTD & Thermocouple Sensors", image: "/product images/AUTOMATION DIVISION/Rtd thermocouple Sensor Wire.jpg" }
  ],

  "rubber-polymer": [
    { name: "Rubber Sheets", image: "/product images/RUBBER DIVISION/RUBBER SHEETS.jpg" },
    { name: "Rubber Expansion Joints", image: "/product images/RUBBER DIVISION/RUBBER EXPANSION JOINT.jpg" },
    { name: "O-Rings", image: "/product images/RUBBER DIVISION/O RINGS.jpg" },
    { name: "Oil Seals", image: "/product images/RUBBER DIVISION/OIL SEAL.jpg" },
    { name: "Rubber Gaskets", image: "/product images/RUBBER DIVISION/RUBBER GASKETS.jpg" },
    { name: "Industrial Hoses", image: "/product images/RUBBER DIVISION/RUBBER HOSES.jpg" },
    { name: "Silicone Hoses", image: "/product images/RUBBER DIVISION/SILICONE TUBINGS.jpg" },
    { name: "SS Braided Hoses", image: "/product images/RUBBER DIVISION/SS BRAIDED HOSES.jpg" },
    { name: "Conveyor Belts", image: "/product images/RUBBER DIVISION/Chevron ,Cleated Conveyor Belts.jpg" },
    { name: "Elevator Belts", image: "/product images/RUBBER DIVISION/Elevator belts.jpg" },
    { name: "Impact Pads", image: "/product images/RUBBER DIVISION/Impact Pads.jpg" },
    { name: "Ceramic Pulley Lagging", image: "/product images/RUBBER DIVISION/Ceramic Pulley Lagging.jpg" }
  ],

  "lubrication": [
    { name: "Compressor Oil", image: "/product images/LUBRICATION DIVISION/Compressor oil.jpg" },
    { name: "Turbine Oil", image: "/product images/LUBRICATION DIVISION/Turbine oil.jpg" },
    { name: "Hydraulic Oil", image: "/product images/LUBRICATION DIVISION/hydraulic oil.jpg" },
    { name: "Industrial Lubricants", image: "/product images/LUBRICATION DIVISION/Industrial lubricants.jpg" },
    { name: "Synthetic Lubricants", image: "/product images/LUBRICATION DIVISION/Synthetic lubricants.jpg" },
    { name: "High Temperature Grease", image: "/product images/LUBRICATION DIVISION/High temperature lubricants.jpg" },
    { name: "Water Resistant Grease", image: "/product images/LUBRICATION DIVISION/Water resistant grease.jpg" },
    { name: "Wire Rope Lubricants", image: "/product images/LUBRICATION DIVISION/Wire rope lubricant.jpg" },
    { name: "Grease Guns", image: "/product images/LUBRICATION DIVISION/Grease gun.jpg" }
  ],

  "fire-safety": [
    { name: "Fire Fighting Suits", image: "/product images/FIRE & SAFETY DIVISION/Fire Fighting Suit.png" },
    { name: "Aluminized Proximity Suits", image: "/product images/FIRE & SAFETY DIVISION/Aluminised Fire Proximity suit.jpg" },
    { name: "Fire Blankets", image: "/product images/FIRE & SAFETY DIVISION/Fire Blanket.jpg" },
    { name: "Welding Blankets", image: "/product images/FIRE & SAFETY DIVISION/Welding Blanket.jpg" },
    { name: "Arc Flash Suits", image: "/product images/FIRE & SAFETY DIVISION/Arc Flash suit.jpg" },
    { name: "Fire Hose", image: "/product images/FIRE & SAFETY DIVISION/FIRE HOSE.jpg" },
    { name: "Fire Hose Reel", image: "/product images/FIRE & SAFETY DIVISION/HOSE REEL.jpg" },
    { name: "Sprinklers", image: "/product images/FIRE & SAFETY DIVISION/SPRINKLERS.jpg" },
    { name: "Fire Detectors", image: "/product images/FIRE & SAFETY DIVISION/TRIPLE SENSOR FIRE DETECTOR.jpg" },
    { name: "Safety Gloves", image: "/product images/FIRE & SAFETY DIVISION/SAFETY HAND GLOVES.jpg" },
    { name: "Face Shields", image: "/product images/FIRE & SAFETY DIVISION/FACE SHEILD.jpg" },
    { name: "Fall Arrestors", image: "/product images/FIRE & SAFETY DIVISION/FALL ARRESTOR.jpg" }
  ],

  "water-treatment": [
    { name: "Industrial Water Treatment Systems", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" },
    { name: "Chemical Dosing Systems", image: "/product images/AUTOMATION DIVISION/Batching system for Liquid.jpg" },
    { name: "Water Pumps", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" },
    { name: "Valves", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" },
    { name: "Utility Water Solutions", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" }
  ],

  "pumps-valves": [
    { name: "Industrial Pumps", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" },
    { name: "Process Valves", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" },
    { name: "Flow Control Valves", image: "/product images/AUTOMATION DIVISION/Flow Transmitters for Liquid.jpg" },
    { name: "Mechanical Couplings", image: "/product images/AUTOMATION DIVISION/Flow Meters for Liquid.jpg" },
    { name: "Replacement Spares", image: "/product images/AUTOMATION DIVISION/Accessories for Flow Instruments.jpg" }
  ],

  "solar-ev": [
    { name: "Solar Panels", image: "/product images/welding product/Electrode Drying Oven.jpg" },
    { name: "Solar Inverters", image: "/product images/welding product/Electrode Drying Oven.jpg" },
    { name: "Solar Accessories", image: "/product images/welding product/Electrode Drying Oven.jpg" },
    { name: "EV Electrical Spares", image: "/product images/welding product/Electrode Drying Oven.jpg" },
    { name: "Energy Storage Components", image: "/product images/welding product/Electrode Drying Oven.jpg" }
  ]
};
