"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  QrCode,
  User,
  MapPin,
  Leaf,
  Award,
  Heart,
  Share2,
  Download,
  Camera,
  ArrowLeft,
  Star,
  TreePine,
  Droplets,
  Globe,
  Users,
  Package,
} from "lucide-react"

export default function PublicQRInterface() {
  const [scannedProduct, setScannedProduct] = useState(null)
  const [isScanning, setIsScanning] = useState(false)

  // Simulated product data that would come from QR scan
  const productData = {
    id: "GIA-2024-001",
    name: "Sweater Artesanal de Lana Merino",
    description:
      "Un sweater único tejido a mano con técnicas tradicionales uruguayas, utilizando lana merino de la más alta calidad de ovejas criadas en pasturas naturales.",
    image: "/placeholder.svg?height=400&width=400",
    artisan: {
      name: "María González",
      photo: "/placeholder.svg?height=100&width=100",
      location: "Montevideo, Uruguay",
      experience: "20 años",
      story:
        "María aprendió el arte del tejido de su abuela, quien le transmitió técnicas tradicionales que han pasado de generación en generación. Cada prenda que crea cuenta una historia única de tradición y amor por el oficio.",
    },
    materials: [
      { name: "Lana Merino", percentage: 85, origin: "Estancia La Esperanza, Tacuarembó" },
      { name: "Botones de Madera", percentage: 15, origin: "Carpintería Local, Montevideo" },
    ],
    impact: {
      co2_saved: 2.3,
      water_saved: 45,
      circularity_score: 92,
      trees_equivalent: 1.2,
    },
    certifications: ["GOTS", "Fair Trade", "Carbon Neutral"],
    creation_date: "2024-01-15",
    process: [
      { step: "Esquila", description: "Lana obtenida con cuidado y respeto animal" },
      { step: "Lavado Natural", description: "Proceso sin químicos dañinos" },
      { step: "Hilado Artesanal", description: "Transformación manual de la fibra" },
      { step: "Tejido Tradicional", description: "Técnicas ancestrales de tejido" },
      { step: "Acabado a Mano", description: "Detalles finales con amor y dedicación" },
    ],
    qr_scans: 127,
    rating: 4.9,
  }

  const handleScanSimulation = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setScannedProduct(productData)
    }, 2000)
  }

  if (scannedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setScannedProduct(null)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Escanear Otro Producto
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Certificado
              </Button>
            </div>
          </div>

          {/* Product Hero */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-stone-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <img
                  src={scannedProduct.image || "/placeholder.svg"}
                  alt={scannedProduct.name}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="flex gap-2 flex-wrap">
                  {scannedProduct.certifications.map((cert) => (
                    <Badge key={cert} className="bg-green-100 text-green-800 border-green-200">
                      <Award className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-stone-900 mb-2">{scannedProduct.name}</h1>
                  <p className="text-stone-600 leading-relaxed">{scannedProduct.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(scannedProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-stone-600">
                      {scannedProduct.rating} ({scannedProduct.qr_scans} valoraciones)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <img
                      src={scannedProduct.artisan.photo || "/placeholder.svg"}
                      alt={scannedProduct.artisan.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-amber-900">Creado por</p>
                      <p className="text-amber-700 font-semibold">{scannedProduct.artisan.name}</p>
                      <div className="flex items-center gap-1 text-sm text-amber-600">
                        <MapPin className="w-3 h-3" />
                        {scannedProduct.artisan.location}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="text-2xl font-bold text-green-600">{scannedProduct.impact.co2_saved}kg</p>
                      <p className="text-sm text-green-700">CO₂ Evitado</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Droplets className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <p className="text-2xl font-bold text-blue-600">{scannedProduct.impact.water_saved}L</p>
                      <p className="text-sm text-blue-700">Agua Conservada</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-purple-900">Índice de Circularidad</span>
                      <span className="text-2xl font-bold text-purple-600">
                        {scannedProduct.impact.circularity_score}/100
                      </span>
                    </div>
                    <Progress value={scannedProduct.impact.circularity_score} className="h-2" />
                    <p className="text-xs text-purple-700 mt-1">Excelente puntuación de sostenibilidad</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Artisan Story */}
          <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                La Historia de {scannedProduct.artisan.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={scannedProduct.artisan.photo || "/placeholder.svg"}
                  alt={scannedProduct.artisan.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-stone-900 mb-1">{scannedProduct.artisan.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-stone-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {scannedProduct.artisan.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {scannedProduct.artisan.experience} de experiencia
                    </div>
                  </div>
                  <p className="text-stone-700 leading-relaxed">{scannedProduct.artisan.story}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Materials & Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Materiales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scannedProduct.materials.map((material, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-stone-800">{material.name}</span>
                        <span className="text-stone-600">{material.percentage}%</span>
                      </div>
                      <div className="w-full bg-stone-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${material.percentage}%` }} />
                      </div>
                      <p className="text-xs text-stone-500">Origen: {material.origin}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Proceso de Creación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scannedProduct.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-stone-200 rounded-full flex items-center justify-center text-xs font-medium text-stone-600">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-stone-900">{step.step}</h4>
                        <p className="text-sm text-stone-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Summary */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-900 mb-2">Impacto Positivo</h3>
                <p className="text-green-700">Al elegir este producto, contribuyes a un futuro más sostenible</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <TreePine className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-xl font-bold text-green-600">{scannedProduct.impact.trees_equivalent}</p>
                  <p className="text-sm text-green-700">Árboles Equivalentes</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-xl font-bold text-green-600">{scannedProduct.impact.co2_saved}kg</p>
                  <p className="text-sm text-green-700">CO₂ Evitado</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <Droplets className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                  <p className="text-xl font-bold text-blue-600">{scannedProduct.impact.water_saved}L</p>
                  <p className="text-sm text-blue-700">Agua Conservada</p>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg">
                  <Users className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                  <p className="text-xl font-bold text-amber-600">1</p>
                  <p className="text-sm text-amber-700">Artesana Apoyada</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-stone-800 to-stone-900 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Te gusta lo que ves?</h3>
              <p className="text-stone-200 mb-6">Descubre más productos únicos y sostenibles en nuestra colección</p>
              <div className="flex justify-center gap-4">
                <Button variant="secondary" size="lg">
                  <Globe className="w-4 h-4 mr-2" />
                  Explorar Colección
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-stone-900 bg-transparent"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Seguir Artesana
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-md mx-auto">
        <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <QrCode className="w-8 h-8 text-blue-600" />
              Escanear Producto GIA
            </CardTitle>
            <p className="text-gray-600">Descubre la historia completa detrás de cada producto artesanal</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-6 border-2 border-dashed border-gray-300">
                {isScanning ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-blue-600 font-medium">Escaneando...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Apunta tu cámara al código QR</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
                onClick={handleScanSimulation}
                disabled={isScanning}
              >
                <Camera className="w-5 h-5 mr-2" />
                {isScanning ? "Escaneando..." : "Activar Cámara"}
              </Button>

              <div className="text-center">
                <span className="text-gray-500 text-sm">o</span>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                size="lg"
                onClick={handleScanSimulation}
                disabled={isScanning}
              >
                <Package className="w-5 h-5 mr-2" />
                Ver Producto Demo
              </Button>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">¿No tienes un código QR a mano?</p>
              <p className="text-xs text-gray-500">
                Usa el botón "Ver Producto Demo" para explorar las funcionalidades
              </p>
            </div>

            {/* Features Preview */}
            <div className="border-t pt-6 space-y-3">
              <h4 className="font-medium text-gray-900 text-center mb-4">Descubrirás:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Historia de la artesana</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span>Impacto ambiental positivo</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>Certificaciones de calidad</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Package className="w-4 h-4 text-orange-600" />
                  <span>Proceso de creación completo</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
