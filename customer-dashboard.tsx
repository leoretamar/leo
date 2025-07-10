"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  QrCode,
  Leaf,
  Award,
  MapPin,
  Share2,
  Download,
  Recycle,
  Star,
  Globe,
  Camera,
} from "lucide-react"

interface CustomerProduct {
  id: string
  name: string
  code: string
  image: string
  purchaseDate: string
  story: string
  artisan: string
  origin: string
  impact: {
    co2Saved: number
    waterUsed: number
    recycledContent: number
  }
  certifications: string[]
  careInstructions: string[]
}

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("my-products")
  const [selectedProduct, setSelectedProduct] = useState<CustomerProduct | null>(null)

  const customerProducts: CustomerProduct[] = [
    {
      id: "1",
      name: "Cardigan Origen Natural",
      code: "GIA-CAR-2025-001",
      image: "/placeholder.svg?height=300&width=300",
      purchaseDate: "15 de Marzo, 2025",
      story:
        "Este hermoso cardigan fue tejido a mano por María Elena en su taller de Montevideo, utilizando lana merino uruguaya de la más alta calidad. Cada punto refleja décadas de experiencia y amor por el arte textil tradicional.",
      artisan: "María Elena Rodríguez",
      origin: "Montevideo, Uruguay",
      impact: {
        co2Saved: 2.3,
        waterUsed: 85,
        recycledContent: 15,
      },
      certifications: ["RWS", "Fair Trade", "Organic"],
      careInstructions: [
        "Lavar a mano con agua fría",
        "Usar detergente suave para lana",
        "Secar en superficie plana",
        "No usar blanqueador",
      ],
    },
    {
      id: "2",
      name: "Sweater Patagonia Blend",
      code: "GIA-SWE-2025-002",
      image: "/placeholder.svg?height=300&width=300",
      purchaseDate: "8 de Abril, 2025",
      story:
        "Inspirado en los paisajes patagónicos, este sweater combina tradición y modernidad. Tejido por artesanas de la región con técnicas ancestrales transmitidas de generación en generación.",
      artisan: "Cooperativa Patagonia",
      origin: "Bariloche, Argentina",
      impact: {
        co2Saved: 1.8,
        waterUsed: 92,
        recycledContent: 20,
      },
      certifications: ["GOTS", "Fair Trade"],
      careInstructions: [
        "Lavar a máquina en ciclo delicado",
        "Temperatura máxima 30°C",
        "Secar al aire libre",
        "Planchar a baja temperatura",
      ],
    },
  ]

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
        {/* Header */}
        <header className="bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-2xl font-bold tracking-wider">GIA</div>
                <Button variant="ghost" onClick={() => setSelectedProduct(null)}>
                  ← Volver a Mis Productos
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Product Detail */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-200 to-amber-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-stone-400" />
                    </div>
                    <p className="text-stone-600">Imagen del producto</p>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border">
                    <QrCode className="w-16 h-16 text-stone-400" />
                  </div>
                  <p className="text-sm text-stone-600 mb-4">Código de Trazabilidad</p>
                  <p className="font-mono text-xs text-stone-500">{selectedProduct.code}</p>
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-light mb-2">{selectedProduct.name}</h1>
                <p className="text-stone-600 mb-4">Adquirido el {selectedProduct.purchaseDate}</p>
                <div className="flex gap-2">
                  {selectedProduct.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                      <Award className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Story */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    La Historia de tu Prenda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-700 leading-relaxed mb-6">{selectedProduct.story}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                      <User className="w-5 h-5 text-stone-600" />
                      <div>
                        <p className="font-medium text-sm">Artesana</p>
                        <p className="text-xs text-stone-600">{selectedProduct.artisan}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-stone-600" />
                      <div>
                        <p className="font-medium text-sm">Origen</p>
                        <p className="text-xs text-stone-600">{selectedProduct.origin}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Environmental Impact */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    Impacto Ambiental
                  </CardTitle>
                  <CardDescription>Tu contribución al planeta</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{selectedProduct.impact.co2Saved}kg</div>
                      <div className="text-xs text-green-700">CO₂ Evitado</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{selectedProduct.impact.waterUsed}L</div>
                      <div className="text-xs text-blue-700">Agua Utilizada</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {selectedProduct.impact.recycledContent}%
                      </div>
                      <div className="text-xs text-purple-700">Reciclado</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Care Instructions */}
              <Card className="bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" />
                    Cuidados de tu Prenda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedProduct.careInstructions.map((instruction, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-stone-50 rounded">
                        <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                        <span className="text-sm text-stone-700">{instruction}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-stone-800 hover:bg-stone-900">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Certificado
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Recycle className="w-4 h-4 mr-2" />
                  Programa de Reciclaje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold tracking-wider">GIA</div>
              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("my-products")}
                  className={`text-sm ${activeTab === "my-products" ? "text-stone-900 font-medium" : "text-stone-600"}`}
                >
                  Mis Productos
                </button>
                <button
                  onClick={() => setActiveTab("scan")}
                  className={`text-sm ${activeTab === "scan" ? "text-stone-900 font-medium" : "text-stone-600"}`}
                >
                  Escanear QR
                </button>
                <button
                  onClick={() => setActiveTab("impact")}
                  className={`text-sm ${activeTab === "impact" ? "text-stone-900 font-medium" : "text-stone-600"}`}
                >
                  Mi Impacto
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
                <Input placeholder="Buscar..." className="pl-10 w-64 border-stone-200" />
              </div>
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === "my-products" && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-light text-stone-900">Mis Productos GIA</h1>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Descubre la historia única detrás de cada una de tus prendas. Conoce a las artesanas, el origen de los
                materiales y el impacto positivo de tu elección consciente.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customerProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur border-stone-200"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-square bg-gradient-to-br from-stone-100 to-amber-50 rounded-t-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <QrCode className="w-10 h-10 text-stone-400" />
                        </div>
                        <p className="text-stone-600 text-sm">{product.name}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-light mb-1">{product.name}</h3>
                        <p className="text-sm text-stone-600">Adquirido el {product.purchaseDate}</p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <User className="w-4 h-4" />
                        <span>{product.artisan}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        <MapPin className="w-4 h-4" />
                        <span>{product.origin}</span>
                      </div>

                      <div className="flex gap-2">
                        {product.certifications.slice(0, 2).map((cert, index) => (
                          <Badge key={index} variant="outline" className="border-green-200 text-green-700 text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-stone-100">
                        <div className="flex justify-between text-xs text-stone-500">
                          <span>CO₂ evitado: {product.impact.co2Saved}kg</span>
                          <span>Reciclado: {product.impact.recycledContent}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add Product CTA */}
            <Card className="bg-gradient-to-r from-stone-100 to-amber-100 border-stone-200">
              <CardContent className="p-8 text-center">
                <QrCode className="w-12 h-12 mx-auto mb-4 text-stone-600" />
                <h3 className="text-xl font-light mb-2">¿Compraste un nuevo producto GIA?</h3>
                <p className="text-stone-600 mb-6">
                  Escanea el código QR de tu prenda para conocer su historia completa
                </p>
                <Button onClick={() => setActiveTab("scan")} className="bg-stone-800 hover:bg-stone-900">
                  <Camera className="w-4 h-4 mr-2" />
                  Escanear QR
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "scan" && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-light text-stone-900">Escanear Producto</h1>
              <p className="text-stone-600">
                Apunta tu cámara al código QR de tu prenda GIA para descubrir su historia
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="aspect-square bg-stone-900 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-48 h-48 border-2 border-white rounded-lg flex items-center justify-center">
                    <Camera className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="text-center space-y-4">
                  <p className="text-stone-600">Coloca el código QR dentro del marco</p>
                  <Button className="w-full bg-stone-800 hover:bg-stone-900">
                    <Camera className="w-4 h-4 mr-2" />
                    Activar Cámara
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Ingreso Manual</CardTitle>
                <CardDescription>Si no puedes escanear, ingresa el código manualmente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Código del producto (ej: GIA-CAR-2025-001)" />
                <Button className="w-full bg-transparent" variant="outline">
                  Buscar Producto
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "impact" && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-light text-stone-900">Mi Impacto Ambiental</h1>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Cada compra consciente cuenta. Descubre cómo tus elecciones GIA contribuyen a un mundo más sostenible.
              </p>
            </div>

            {/* Impact Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6 text-center">
                  <Leaf className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <div className="text-3xl font-bold text-green-700 mb-2">4.1kg</div>
                  <div className="text-sm text-green-600">CO₂ Total Evitado</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-3xl font-bold text-blue-700 mb-2">177L</div>
                  <div className="text-sm text-blue-600">Agua Utilizada</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6 text-center">
                  <Recycle className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <div className="text-3xl font-bold text-purple-700 mb-2">17.5%</div>
                  <div className="text-sm text-purple-600">Contenido Reciclado</div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Timeline */}
            <Card className="bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Tu Viaje Sostenible</CardTitle>
                <CardDescription>Cronología de tus compras conscientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerProducts.map((product, index) => (
                    <div key={product.id} className="flex gap-4 p-4 bg-stone-50 rounded-lg">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-sm text-stone-600">{product.purchaseDate}</p>
                        <div className="flex gap-4 mt-2 text-xs text-stone-500">
                          <span>CO₂: -{product.impact.co2Saved}kg</span>
                          <span>Agua: {product.impact.waterUsed}L</span>
                          <span>Reciclado: {product.impact.recycledContent}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
