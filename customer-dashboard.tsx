"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  QrCode,
  Leaf,
  Heart,
  Star,
  MapPin,
  Calendar,
  Recycle,
  Award,
  Camera,
  Share2,
  Download,
  ChevronRight,
  Sparkles,
  TreePine,
  Droplets,
  Users,
  Package,
} from "lucide-react"

export default function CustomerDashboard() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const productos = [
    {
      id: "1",
      nombre: "Sweater Origen Natural",
      imagen: "/placeholder.svg?height=300&width=300",
      fecha_compra: "2024-01-15",
      artesana: "María González",
      ubicacion: "Montevideo, Uruguay",
      materiales: ["85% Lana Merino", "15% Botones Madera"],
      co2_ahorrado: 2.3,
      agua_ahorrada: 45,
      certificaciones: ["GOTS", "Fair Trade", "Carbon Neutral"],
      historia:
        "Esta prenda fue tejida a mano por María, una artesana con 20 años de experiencia en técnicas tradicionales uruguayas. Cada punto fue cuidadosamente trabajado utilizando lana merino de ovejas criadas en pasturas naturales, sin químicos ni pesticidas.",
      puntuacion_circularidad: 92,
    },
    {
      id: "2",
      nombre: "Cardigan Artesanal",
      imagen: "/placeholder.svg?height=300&width=300",
      fecha_compra: "2024-02-20",
      artesana: "Ana Rodríguez",
      ubicacion: "Punta del Este, Uruguay",
      materiales: ["100% Algodón Orgánico"],
      co2_ahorrado: 1.8,
      agua_ahorrada: 32,
      certificaciones: ["GOTS", "Organic"],
      historia:
        "Ana utiliza técnicas tradicionales transmitidas por generaciones en su familia. Este cardigan fue creado con algodón orgánico cultivado localmente, teñido con tintes naturales extraídos de plantas autóctonas.",
      puntuacion_circularidad: 88,
    },
    {
      id: "3",
      nombre: "Poncho Tradicional",
      imagen: "/placeholder.svg?height=300&width=300",
      fecha_compra: "2024-03-10",
      artesana: "Carmen Silva",
      ubicacion: "Colonia, Uruguay",
      materiales: ["90% Lana Natural", "10% Fibras Recicladas"],
      co2_ahorrado: 3.1,
      agua_ahorrada: 58,
      certificaciones: ["Fair Trade", "Recycled Content"],
      historia:
        "Carmen es parte de una cooperativa de artesanas que rescata técnicas ancestrales de tejido. Este poncho incorpora fibras recicladas de prendas anteriores, dándoles una nueva vida.",
      puntuacion_circularidad: 95,
    },
  ]

  const impactoTotal = {
    co2_total: productos.reduce((acc, p) => acc + p.co2_ahorrado, 0),
    agua_total: productos.reduce((acc, p) => acc + p.agua_ahorrada, 0),
    productos_count: productos.length,
    circularidad_promedio: Math.round(
      productos.reduce((acc, p) => acc + p.puntuacion_circularidad, 0) / productos.length,
    ),
  }

  if (selectedProduct) {
    const producto = productos.find((p) => p.id === selectedProduct)!
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedProduct(null)} className="text-stone-600">
              ← Volver a Mi Colección
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir Historia
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Certificado Digital
              </Button>
            </div>
          </div>

          {/* Product Hero */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-stone-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="flex gap-2 flex-wrap">
                  {producto.certificaciones.map((cert) => (
                    <Badge key={cert} className="bg-green-100 text-green-800 border-green-200">
                      <Award className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-stone-900 mb-2">{producto.nombre}</h1>
                  <div className="flex items-center gap-2 text-stone-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>En tu colección desde {new Date(producto.fecha_compra).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <Users className="w-6 h-6 text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-900">Creado por</p>
                      <p className="text-amber-700 font-semibold">{producto.artesana}</p>
                      <div className="flex items-center gap-1 text-sm text-amber-600">
                        <MapPin className="w-3 h-3" />
                        {producto.ubicacion}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="text-2xl font-bold text-green-600">{producto.co2_ahorrado}kg</p>
                      <p className="text-sm text-green-700">CO₂ Evitado</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Droplets className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <p className="text-2xl font-bold text-blue-600">{producto.agua_ahorrada}L</p>
                      <p className="text-sm text-blue-700">Agua Conservada</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-purple-900">Índice de Circularidad</span>
                      <span className="text-2xl font-bold text-purple-600">{producto.puntuacion_circularidad}/100</span>
                    </div>
                    <Progress value={producto.puntuacion_circularidad} className="h-2" />
                    <p className="text-xs text-purple-700 mt-1">Excelente puntuación de sostenibilidad</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Story & Details */}
          <Tabs defaultValue="historia" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="historia">Historia</TabsTrigger>
              <TabsTrigger value="materiales">Materiales</TabsTrigger>
              <TabsTrigger value="cuidados">Cuidados</TabsTrigger>
            </TabsList>

            <TabsContent value="historia">
              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    La Historia de tu Prenda
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-700 leading-relaxed text-lg">{producto.historia}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-stone-50 rounded-lg">
                      <TreePine className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="font-medium">Materiales Naturales</p>
                      <p className="text-sm text-stone-600">100% sostenibles</p>
                    </div>
                    <div className="text-center p-4 bg-stone-50 rounded-lg">
                      <Heart className="w-8 h-8 mx-auto text-red-500 mb-2" />
                      <p className="font-medium">Hecho con Amor</p>
                      <p className="text-sm text-stone-600">Artesanía tradicional</p>
                    </div>
                    <div className="text-center p-4 bg-stone-50 rounded-lg">
                      <Award className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                      <p className="font-medium">Certificado</p>
                      <p className="text-sm text-stone-600">Calidad garantizada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materiales">
              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Composición de Materiales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {producto.materiales.map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border">
                        <span className="font-medium text-stone-800">{material}</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <Leaf className="w-3 h-3 mr-1" />
                          Certificado
                        </Badge>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2">Origen Sostenible</h4>
                      <p className="text-blue-800 text-sm">
                        Todos los materiales provienen de fuentes certificadas y procesos que respetan el medio ambiente
                        y las comunidades locales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cuidados">
              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Cuidados y Mantenimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2">💧 Lavado</h4>
                      <p className="text-blue-800 text-sm">
                        Lavar a mano con agua fría (máx. 30°C). Usar detergente suave y ecológico.
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h4 className="font-medium text-yellow-900 mb-2">🌞 Secado</h4>
                      <p className="text-yellow-800 text-sm">
                        Secar en horizontal sobre una superficie plana. Evitar luz solar directa y fuentes de calor.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-900 mb-2">📦 Almacenamiento</h4>
                      <p className="text-green-800 text-sm">
                        Guardar doblado en lugar seco y ventilado. Usar bolsas de tela natural para proteger de
                        polillas.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-900 mb-2">✨ Mantenimiento</h4>
                      <p className="text-purple-800 text-sm">
                        Cepillar suavemente con cepillo de cerdas naturales para mantener la textura original.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Recycling Program */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Recycle className="w-12 h-12 text-green-600" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-900 mb-2">Programa de Circularidad GIA</h3>
                  <p className="text-green-700 mb-4">
                    Cuando tu prenda llegue al final de su vida útil, devuélvela a través de nuestro programa de
                    circularidad. Le daremos una nueva vida y recibirás beneficios especiales.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Conocer el Programa
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-stone-900">Mi Colección GIA</h1>
          <p className="text-stone-600 text-lg">
            Descubre la historia y el impacto de cada prenda en tu colección personal
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="productos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="productos">Mi Colección</TabsTrigger>
            <TabsTrigger value="escanear">Escanear QR</TabsTrigger>
            <TabsTrigger value="impacto">Mi Impacto</TabsTrigger>
          </TabsList>

          <TabsContent value="productos" className="space-y-6">
            {/* Collection Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Package className="w-8 h-8 mx-auto text-stone-600 mb-2" />
                  <p className="text-2xl font-bold text-stone-800">{productos.length}</p>
                  <p className="text-sm text-stone-600">Prendas</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                  <p className="text-2xl font-bold text-amber-600">{productos.length}</p>
                  <p className="text-sm text-stone-600">Artesanas</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Award className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-purple-600">{impactoTotal.circularidad_promedio}%</p>
                  <p className="text-sm text-stone-600">Circularidad</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-green-600">{impactoTotal.co2_total}kg</p>
                  <p className="text-sm text-stone-600">CO₂ Evitado</p>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos.map((producto) => (
                <Card
                  key={producto.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/80 backdrop-blur-sm border-stone-200"
                  onClick={() => setSelectedProduct(producto.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.nombre}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-stone-800 border-stone-200">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {producto.puntuacion_circularidad}/100
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-green-600 text-white">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(producto.fecha_compra).getFullYear()}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{producto.nombre}</h3>
                      <div className="flex items-center gap-2 text-stone-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{producto.artesana}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-stone-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        {producto.ubicacion}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1 text-green-600">
                        <Leaf className="w-4 h-4" />
                        <span>{producto.co2_ahorrado}kg CO₂</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600">
                        <Droplets className="w-4 h-4" />
                        <span>{producto.agua_ahorrada}L agua</span>
                      </div>
                    </div>
                    <Button className="w-full bg-stone-800 hover:bg-stone-900">
                      Ver Historia Completa
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="escanear" className="space-y-6">
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <QrCode className="w-6 h-6" />
                  Agregar Nueva Prenda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-stone-100 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-stone-300">
                    <Camera className="w-16 h-16 text-stone-400" />
                  </div>
                  <p className="text-stone-600 mb-4">
                    Escanea el código QR de tu nueva prenda GIA para agregarla a tu colección y descubrir su historia
                  </p>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-stone-800 hover:bg-stone-900">
                    <Camera className="w-4 h-4 mr-2" />
                    Abrir Cámara
                  </Button>
                  <div className="text-center">
                    <span className="text-stone-500 text-sm">o</span>
                  </div>
                  <Input placeholder="Ingresa el código manualmente" className="text-center" />
                  <Button variant="outline" className="w-full bg-transparent">
                    Agregar a Mi Colección
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impacto" className="space-y-6">
            {/* Impact Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Leaf className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <p className="text-3xl font-bold text-green-600">{impactoTotal.co2_total}kg</p>
                  <p className="text-stone-600">CO₂ Evitado</p>
                  <p className="text-xs text-stone-500 mt-1">vs. fast fashion</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Droplets className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <p className="text-3xl font-bold text-blue-600">{impactoTotal.agua_total}L</p>
                  <p className="text-stone-600">Agua Conservada</p>
                  <p className="text-xs text-stone-500 mt-1">en producción</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mx-auto text-amber-600 mb-4" />
                  <p className="text-3xl font-bold text-amber-600">{productos.length}</p>
                  <p className="text-stone-600">Artesanas Apoyadas</p>
                  <p className="text-xs text-stone-500 mt-1">comercio justo</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <p className="text-3xl font-bold text-purple-600">{impactoTotal.circularidad_promedio}%</p>
                  <p className="text-stone-600">Circularidad</p>
                  <p className="text-xs text-stone-500 mt-1">promedio</p>
                </CardContent>
              </Card>
            </div>

            {/* Impact Visualization */}
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Tu Impacto Positivo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <TreePine className="w-16 h-16 mx-auto text-green-600 mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">¡Increíble Impacto!</h3>
                    <p className="text-green-700 text-lg">
                      Con tu colección consciente has evitado la emisión de{" "}
                      <span className="font-bold">{impactoTotal.co2_total}kg de CO₂</span>, equivalente a plantar{" "}
                      <span className="font-bold">{Math.round(impactoTotal.co2_total * 0.5)} árboles</span>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <Droplets className="w-5 h-5" />
                        Conservación de Agua
                      </h4>
                      <p className="text-blue-800">
                        Has conservado <span className="font-bold">{impactoTotal.agua_total} litros</span> de agua,
                        suficiente para llenar{" "}
                        <span className="font-bold">{Math.round(impactoTotal.agua_total / 200)}</span> bañeras estándar.
                      </p>
                    </div>
                    <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Impacto Social
                      </h4>
                      <p className="text-amber-800">
                        Has apoyado directamente a <span className="font-bold">{productos.length} artesanas</span>{" "}
                        locales, contribuyendo al desarrollo de sus comunidades.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Economía Circular
                    </h4>
                    <p className="text-purple-800 mb-4">
                      Tus productos tienen una puntuación promedio de circularidad del{" "}
                      <span className="font-bold">{impactoTotal.circularidad_promedio}%</span>, ¡excelente trabajo!
                    </p>
                    <Progress value={impactoTotal.circularidad_promedio} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Tu Viaje Sostenible</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productos
                    .sort((a, b) => new Date(a.fecha_compra).getTime() - new Date(b.fecha_compra).getTime())
                    .map((producto, index) => (
                      <div key={producto.id} className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
                        <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-stone-900">{producto.nombre}</h4>
                          <p className="text-sm text-stone-600">
                            {new Date(producto.fecha_compra).toLocaleDateString()} • {producto.artesana}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-green-600 text-sm">
                            <Leaf className="w-3 h-3" />
                            {producto.co2_ahorrado}kg CO₂
                          </div>
                          <div className="flex items-center gap-1 text-blue-600 text-sm">
                            <Droplets className="w-3 h-3" />
                            {producto.agua_ahorrada}L agua
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
