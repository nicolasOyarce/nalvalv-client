import ProductCard, {
  type ProductCardProps,
} from "@/features/productos/sections/ProductCard";

const products: ProductCardProps[] = [
  {
    category: "Válvulas",
    name: "Válvula de Mariposa Tipo Wafer Serie 400",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiv2lzLN3qdDU4rcs0axuQSSWxTSG8m2_wA9wL18_Dre6mm4xwaQgYkDqu-b_hgdJCnzn8lxhhUobm5pZ6C2g3hP8hXMxIoNbPXXBiEYYKCU9lld9kuxUwBPx94rBsFa9XLTgf1LBXtG9-bdRshg8Ou55l_XtorMhFiyysrfJ3Uw07toULyeMyt4YskKBRqFdbG3W30ZEOpS-Vkba87D0PgyXZ7vUx25EJxlzD5K1Kpmng858FFRcFkwyfqq-2d88vB-CKk1FC4SY",
    alt: "Close-up of a heavy industrial butterfly valve made of polished stainless steel with professional studio lighting",
    badge: { text: "Stock Crítico", variant: "primary" },
    specs: [
      { label: "Presión", value: "PN16 / ANSI 150" },
      { label: "Material", value: "Acero Inox 316" },
      { label: "Tamaño", value: '2" - 24"' },
      { label: "Sello", value: "EPDM / Viton" },
    ],
  },
  {
    category: "Mangueras",
    name: "Manguera de Alta Presión Hidráulica R15",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4iAtfZC85CR6Ey8UE9ea0rrtZhkym_JqIpvMp6_m5W1bmVhun92WhlAIf0o3hcy13YXAa-fXIBF0GmVXPFGMjlMSLIFGFT7T3kYdHJfh8bSWDcjiGhpvmNhlJzhplqX407PHFgdgk9AlD6H_O5GWWC8bCMPVMnU5-vSgUy7Zfa556klrvKRjkDl8DNrCCevJawFrr28PH8j3OGKA8_W2P1WfGHV1342DjSfjmfFsi5U5Zp9QZhVITz9IWXtRvtN0EEEenpgR1OVY",
    alt: "Industrial high pressure hose with steel reinforced coupling showing intricate technical details and texture",
    specs: [
      { label: "Presión", value: "6000 PSI" },
      { label: "Material", value: "Caucho Sintético" },
      { label: "Refuerzo", value: "4 Espirales Acero" },
      { label: "Temp", value: "-40°C a +121°C" },
    ],
  },
  {
    category: "Filtración",
    name: "Filtro de Canasta Simplex Serie HD",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoO3YPzKVrgRnO0Fha44VZs58AtLYNxVgQu94pByIaRCbJIfZCJD-DAmVZZOSW6wJ7jOc3ARo7MUQoEU137Vv3hIpO7tQRvwVSmpz2I2-aUaS-dgd1WBFkmcNXVE39GOAbCYe2gTCWzq1XJmx7vsAxjgXYEzvi3XeNpmIla3RLYtIBARyNlvw1vA04lFbBlSyBEcU2NMuDnhrKCueLLTdMwgktJ6p39bY3cr_j6Hn_KWAu1ET7imBe37T-NCCVP_lT5oWDhvRoDqc",
    alt: "Industrial filter housing unit made of cast iron in a technical facility setting with dramatic shadows",
    badge: { text: "Nuevo", variant: "secondary" },
    specs: [
      { label: "Presión", value: "300 PSI" },
      { label: "Material", value: "Hierro Dúctil" },
      { label: "Malla", value: "10 a 400 Mesh" },
      { label: "Conexión", value: "Bridada RF" },
    ],
  },
  {
    category: "Válvulas",
    name: "Válvula de Bola Paso Total Forjada",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbtKB23xxYJepX616BsSiSa9v8cJpzZwrY4Xq8cViE-BVqQ7jM9QNsm8H1SCxW77ch477O_RZiZEku8Hgdp-8YSKACssSzJ_EyRbi0hknK7B00OIjheoV5miuaqRllTE6lVr3Vsz4a6GxnOkLm4UjRaR0v30MFecSL5YGxLjd4DHmOKpDON7HDSyCrU0X8bmY-yaOLD3_9JMr8Vsr2POKsHmQFr3krmRR17XHnn_MHhWDw3cSUX08HF4QlhNnr4dZm4d-LfmKVmLo",
    alt: "Detailed view of a ball valve mechanism with yellow handle and steel body in an industrial plant",
    specs: [
      { label: "Presión", value: "800 PSI" },
      { label: "Material", value: "Acero al Carbono" },
      { label: "Asiento", value: "PTFE Reforzado" },
      { label: "Extremos", value: "NPT / SW" },
    ],
  },
  {
    category: "Accesorios",
    name: "Conector de Expansión Metálico",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpT6oMXzELKqPQIdDG5mmj0HX0tSZdZQR5xBnPt-2Gr5cRrUby0alL8u-t1YsMxKoiHNDCM6J2JF8gcI711HE6FHhqNRo2Xz4e0MkFG28vXpiyQrgWYlatF9ekKg7QKiwcYmD4Z8ytzbZ_N98sjoS2STxz2SYUEm0phBX-F79vY2IvmWu4HIiRCs_Ez4LGHv_rMqkwKuPS9oQMck2JGlFHNPxYf5llIPJrMyU-cwcEaoTLLb1D0KObzDeOZl7_rtNv5Qsc4_ZRRzg",
    alt: "Industrial pipes and metal fittings in a complex machinery setup with deep shadows and metallic highlights",
    specs: [
      { label: "Presión", value: "PN25" },
      { label: "Material", value: "Inconel 625" },
      { label: "Fuelle", value: "Multi-capa" },
      { label: "Bridas", value: "ANSI 300" },
    ],
  },
  {
    category: "Bombas",
    name: "Bomba Centrifuga Multietapa Serie SL",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Md5ZYRWP1nPNcv7uFMRxMim55xmNpWKCGMFjUgPvHF_E-iiYYg7SY32F5rpT5yE5bU61xizDhHvVxCfZupFPIs4sP7_LSb-i9rRe60NQWcfmHGr3PXDos87TR3ol8oH9w2jwNGOJaH520kWA99MqFVF8Gs2efJNSSnKPnHyCw4PrhEHCBFMm0OO-jnpV4A9HW7Y3LSq3cq5PGEFgMy95pcsilteYEWibl5R-B2pzcAYUaknc0LDwpzCI9HXqVEEdJJuFm3q0t6I",
    alt: "Modern industrial pump system with technical components and steel casing in a clean workshop environment",
    specs: [
      { label: "Caudal", value: "450 m³/h" },
      { label: "Motor", value: "IE3 Eficiencia" },
      { label: "Carga", value: "Hasta 160m" },
      { label: "Cuerpo", value: "Hierro ASTM" },
    ],
  },
  {
    category: "Válvulas",
    name: "Válvula de Globo Sellado con Fuelle",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoJvKAmowXxY0_y3ZXdn9X5iYPXVBMYAFeNXZAhRgTSYB0v5KuVDJkveSvDPtDyzD7ndH8XjsK7McHDwLWLjeowZfO-XC5Lc-kSseE4Hnj5OuoFBd_5uQam7sC-SNy1zmI6e7i_NTFtqVbxF6Q8vcqPHYxjoE7zGFL5gx6NOXG6_ld0q4oLzjS46_DGT5UT0O7n5AC5qdZoHl_1Hd5GXLu8pglVigGmJngyvaLHe82DRafSlEEAQrSwOD12v6j57AvZWQ5b80GLLE",
    alt: "Professional technician inspecting a heavy duty industrial valve with precise measuring tools",
    specs: [
      { label: "Presión", value: "PN40 / ANSI 300" },
      { label: "Cierre", value: "Hermético 100%" },
      { label: "Fuelle", value: "Inox 316Ti" },
      { label: "Temp", value: "Hasta 450°C" },
    ],
  },
  {
    category: "Filtración",
    name: "Cartucho Filtrante Plisado Alta Tasa",
    detailHref: "/producto/serie-400",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYJcbI8331QEuKmWv5CMBTigCf71Zb5Tvv259ih52IpjQ_XqlALXQeotW9q31CLLCWUObDdElqklCP0uM32AX9H2iHuXwVJGoZ9XA6pdfvkRTubVhR2hlTR45qeFP5fr6C8acTq05zCwN44lenKoEJ5RC_65WnSdbqSPJ6oYBPOGCqfLsxQ72o9E4X-Ytv_Ldnbw5xMTgHqeiyZtxDMaW4t0vgLK8d5YJSxYkOmFZ1nOMhAGtrMLl5QIEVH1VPik4M3Jme4vbWOZs",
    alt: "Technical blueprint and industrial components on a workspace with cool blue lighting and engineering aesthetic",
    specs: [
      { label: "Micraje", value: "0.5 a 100 µm" },
      { label: "Material", value: "Polipropileno" },
      { label: "Longitud", value: '10" - 40"' },
      { label: "Núcleo", value: "Reforzado PVC" },
    ],
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}
