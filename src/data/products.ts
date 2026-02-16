export const products = [
  {
    id: "lpddr4x",
    category: "Mobile Memory",
    name: "LPDDR4 / LPDDR4X",
    description: "High-performance, low-power mobile memory solution designed for next-generation smartphones and tablets.",
    specs: [
      { label: "Density", value: "4Gb - 64Gb" },
      { label: "Speed", value: "Up to 4266 Mbps" },
      { label: "Voltage", value: "VDD1: 1.8V, VDD2/VDDQ: 1.1V/0.6V" },
      { label: "Package", value: "200-ball FBGA" },
      { label: "Temp. Range", value: "-40°C ~ 85°C / 105°C" }
    ],
    features: [
      { title: "Ultra Low Power", desc: "Advanced power saving features including Deep Sleep Mode for extended battery life." },
      { title: "High Bandwidth", desc: "Data rates up to 4266 Mbps providing superior performance for multitasking." },
      { title: "Reliability", desc: "Enhanced on-die ECC ensure data integrity in demanding environments." }
    ],
    applications: [
      { name: "Smartphones", icon: "Smartphone" },
      { name: "Tablets", icon: "Tablet" },
      { name: "Wearables", icon: "Watch" }
    ],
    related: ["emmc-51", "nand-mcp", "auto-dram"]
  },
  {
    id: "auto-dram",
    category: "Automotive",
    name: "Automotive DRAM",
    description: "AEC-Q100 qualified memory ensuring extreme stability for infotainment and ADAS systems.",
    specs: [
      { label: "Density", value: "2Gb - 8Gb" },
      { label: "Speed", value: "Up to 3200 Mbps" },
      { label: "Voltage", value: "1.2V / 1.35V / 1.5V" },
      { label: "Package", value: "96-ball FBGA" },
      { label: "Temp. Range", value: "-40°C ~ 125°C" }
    ],
    features: [
      { title: "AEC-Q100 Grade 2/3", desc: "Certified for automotive reliability standards." },
      { title: "Wide Temp Support", desc: "Guaranteed operation from -40°C up to 125°C." },
      { title: "Long-term Support", desc: "Supply longevity commitment for automotive life cycles." }
    ],
    applications: [
      { name: "Infotainment", icon: "Music" },
      { name: "Dashboard", icon: "Gauge" },
      { name: "ADAS", icon: "Camera" }
    ],
    related: ["lpddr4x", "nand-mcp", "emmc-51"]
  },
  {
    id: "nand-mcp",
    category: "IoT / Mobile",
    name: "NAND MCP",
    description: "Space-saving Multi-Chip Package combining Non-Volatile Memory and Volatile Memory.",
    specs: [
      { label: "Configuration", value: "SLC NAND + LPDDR1/2" },
      { label: "Density", value: "1Gb+512Mb ~ 4Gb+2Gb" },
      { label: "Voltage", value: "1.8V / 3.3V" },
      { label: "Package", value: "162-ball FBGA" },
      { label: "Interface", value: "x8 / x16" }
    ],
    features: [
      { title: "Small Form Factor", desc: "Ideal for space-constrained IoT and M2M modules." },
      { title: "Cost Effective", desc: "Optimized BOM cost by integrating memory and storage." },
      { title: "Proven Technology", desc: "Stable production process for industrial applications." }
    ],
    applications: [
      { name: "IoT Modules", icon: "Wifi" },
      { name: "POS Terminals", icon: "CreditCard" },
      { name: "Smart Home", icon: "Home" }
    ],
    related: ["lpddr4x", "auto-dram", "emmc-51"]
  },
  {
    id: "emmc-51",
    category: "Storage",
    name: "eMMC 5.1",
    description: "Embedded multimedia card interface with high-speed read/write performance.",
    specs: [
      { label: "Density", value: "4GB - 64GB" },
      { label: "Interface", value: "eMMC 5.1 / 5.0" },
      { label: "Speed", value: "HS400" },
      { label: "Voltage", value: "VCC: 3.3V, VCCQ: 1.8V" },
      { label: "Package", value: "153-ball FBGA" }
    ],
    features: [
      { title: "High Performance", desc: "Sequential Read/Write optimized for fast booting." },
      { title: "Smart Health", desc: "Advanced health monitoring for storage reliability." },
      { title: "Power Failure Protection", desc: "Data integrity protection against sudden power loss." }
    ],
    applications: [
      { name: "Set-top Box", icon: "Tv" },
      { name: "Smart Speakers", icon: "Speaker" },
      { name: "Navigation", icon: "Map" }
    ],
    related: ["nand-mcp", "lpddr4x", "auto-dram"]
  }
];
