"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  Leaf,
  MapPin,
  Calendar,
  User,
  Award,
  Recycle,
  Heart,
  Share2,
  Download,
  QrCode,
  CheckCircle,
} from "lucide-react"

interface ProductStory {
  id: string
  codigo: string
  nombre: string
  tipo: string
  artesano: string
  ubicacion: string
  fecha_creacion: string
  historia: string
  impacto_ambiental: {
    huella_carbono: number
    consumo_agua: number
    material_reciclado: number
  }
  certificaciones: string[]
  cuidados: string[]
  reciclaje: {
    disponible: boolean
    puntos_recoleccion: string[]
    recompensa: string
  }
}

export default function PublicQRInterface() {
  const [qrCode] = useState("QR-SWE-001")

  const productStory: ProductStory = {
    id: "1",
    codigo: "GIA-SWE-2025-001",
    nombre: "Sweater Sol de Campo",
    tipo: "Prenda Tejida",
    artesano: "María Sosa",
    ubicacion: "Cusco, Perú",
    fecha_creacion: "22/03/2025",
    historia:
      "Este hermoso sweater fue tejido a mano por María Sosa, una artesana con más de 20 años de experiencia en el arte del tejido tradicional cusqueño. Utilizando lana merino de ovejas criadas en los Andes peruanos, cada punto fue cuidadosamente trabajado siguiendo técnicas ancestrales transmitidas de generación en generación.",
    impacto_ambiental: {
      huella_carbono: 2.3,
      consumo_agua: 110,
      material_reciclado: 12,
    },
    certificaciones: ["RWS", "Fair Trade", "Organic"],
    cuidados: [
      "Lavar a mano con agua fría",
      "Usar detergente suave para lana",
      "Secar en superficie plana",
      "No usar blanqueador",
      "Planchar a baja temperatura si es necesario",
    ],
    reciclaje: {
      disponible: true,
      puntos_recoleccion: ["Centro Comercial Real Plaza", "Tienda GIA Cusco", "Mercado San Pedro"],
      recompensa: "15% descuento en próxima compra",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
            <QrCode className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{productStory.nombre}</h1>
            <p className="text-gray-600">Código: {productStory.codigo}</p>
            <div className="flex justify-center gap-2 mt-2">
              <Badge className="bg-blue-100 text-blue-800">{productStory.tipo}</Badge>
              <Badge className="bg-green-100 text-green-800">Certificado</Badge>
            </div>
          </div>
        </div>

        {/* Hero Story */}
        <Card className="overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-600 to-green-600 relative">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">La Historia de tu Producto</h2>
              <p className="text-blue-100">Conoce el viaje desde su origen hasta tus manos</p>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">{productStory.historia}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <User className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-medium">Artesana</p>
                  <p className="text-sm text-gray-600">{productStory.artesano}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <MapPin className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-medium">Origen</p>
                  <p className="text-sm text-gray-600">{productStory.ubicacion}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Calendar className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="font-medium">Creado</p>
                  <p className="text-sm text-gray-600">{productStory.fecha_creacion}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="impact" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="impact">Impacto</TabsTrigger>
            <TabsTrigger value="certificates">Certificados</TabsTrigger>
            <TabsTrigger value="care">Cuidados</TabsTrigger>
            <TabsTrigger value="recycle">Reciclaje</TabsTrigger>
          </TabsList>

          <TabsContent value="impact">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Impacto Ambiental
                </CardTitle>
                <CardDescription>Conoce el impacto positivo de tu compra en el medio ambiente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        {productStory.impacto_ambiental.huella_carbono}kg
                      </p>
                      <p className="text-sm text-gray-600">CO₂ Reducido</p>
                      <p className="text-xs text-gray-500">vs. producción industrial</p>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{productStory.impacto_ambiental.consumo_agua}L</p>
                      <p className="text-sm text-gray-600">Agua Utilizada</p>
                      <p className="text-xs text-gray-500">proceso sostenible</p>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                      <Recycle className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">
                        {productStory.impacto_ambiental.material_reciclado}%
                      </p>
                      <p className="text-sm text-gray-600">Material Reciclado</p>
                      <p className="text-xs text-gray-500">componentes sostenibles</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Impacto Social</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Tu compra apoya directamente a artesanas locales y preserva técnicas tradicionales de tejido,
                    contribuyendo al desarrollo económico de comunidades rurales en Cusco.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  Certificaciones
                </CardTitle>
                <CardDescription>Certificados que garantizan la calidad y sostenibilidad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {productStory.certificaciones.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      <div>
                        <p className="font-medium">{cert}</p>
                        <p className="text-sm text-gray-600">Certificado válido</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-medium">¿Qué significan estas certificaciones?</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>RWS:</strong> Responsible Wool Standard - Garantiza el bienestar animal y prácticas
                      sostenibles
                    </p>
                    <p>
                      <strong>Fair Trade:</strong> Comercio justo que asegura condiciones laborales dignas
                    </p>
                    <p>
                      <strong>Organic:</strong> Materiales orgánicos libres de químicos dañinos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="care">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  Cuidados del Producto
                </CardTitle>
                <CardDescription>Mantén tu producto en perfectas condiciones por más tiempo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {productStory.cuidados.map((cuidado, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-sm">{cuidado}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">💡 Consejo Especial</h4>
                  <p className="text-sm text-blue-700">
                    Para mantener la suavidad natural de la lana merino, puedes usar un acondicionador específico para
                    lana una vez al mes. Esto ayudará a preservar las fibras naturales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recycle">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-green-600" />
                  Programa de Reciclaje
                </CardTitle>
                <CardDescription>Cuando termine su vida útil, devuélvelo y obtén recompensas</CardDescription>
              </CardHeader>
              <CardContent>
                {productStory.reciclaje.disponible ? (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <Recycle className="w-12 h-12 mx-auto text-green-600 mb-4" />
                      <h3 className="text-lg font-medium text-green-800 mb-2">
                        ¡Participa en nuestro programa de reciclaje!
                      </h3>
                      <p className="text-green-700 mb-4">
                        Obtén <strong>{productStory.reciclaje.recompensa}</strong> al devolver este producto
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700">Solicitar Reciclaje</Button>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Puntos de Recolección:</h4>
                      <div className="space-y-2">
                        {productStory.reciclaje.puntos_recoleccion.map((punto, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <span className="text-sm">{punto}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">🌱 Segunda Vida</h4>
                      <p className="text-sm text-yellow-700">
                        Los productos devueltos se transforman en nuevos materiales o se upcyclan en nuevas creaciones,
                        manteniendo el ciclo de vida circular.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600">Programa de reciclaje no disponible para este producto</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Compartir Historia
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Descargar Certificado
          </Button>
        </div>
      </div>
    </div>
  )
}
