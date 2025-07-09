"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Package,
  Leaf,
  BarChart3,
  Shield,
  Gift,
  BookOpen,
  QrCode,
  MapPin,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function GIATraceabilityDashboard() {
  const [selectedProduct, setSelectedProduct] = useState("merino-cardigan-001")

  const modules = [
    {
      id: "traceability",
      name: "Trazabilidad Core",
      icon: Package,
      description: "Registro y seguimiento de productos",
      status: "active",
      color: "bg-blue-500",
    },
    {
      id: "ecodesign",
      name: "Ecodiseño",
      icon: Leaf,
      description: "Simulación de impacto ambiental",
      status: "active",
      color: "bg-green-500",
    },
    {
      id: "esg",
      name: "ESG y Circularidad",
      icon: BarChart3,
      description: "Métricas de sostenibilidad",
      status: "active",
      color: "bg-purple-500",
    },
    {
      id: "audit",
      name: "Auditoría y DPP",
      icon: Shield,
      description: "Pasaporte Digital del Producto",
      status: "active",
      color: "bg-orange-500",
    },
    {
      id: "epr",
      name: "EPR Recompensas",
      icon: Gift,
      description: "Gestión de devoluciones",
      status: "development",
      color: "bg-yellow-500",
    },
    {
      id: "storytelling",
      name: "Storytelling IA",
      icon: BookOpen,
      description: "Narrativas digitales",
      status: "development",
      color: "bg-pink-500",
    },
  ]

  const products = [
    {
      id: "merino-cardigan-001",
      name: "Cardigan Lana Merino",
      type: "Prenda Tejida",
      status: "En Producción",
      progress: 75,
      location: "Taller Artesanal - Cusco",
      blockchain: "0x1a2b3c...",
      esgScore: 8.5,
    },
    {
      id: "leather-bag-002",
      name: "Bolso Cuero Natural",
      type: "Accesorio Cuero",
      status: "Completado",
      progress: 100,
      location: "Taller Cuero - Arequipa",
      blockchain: "0x4d5e6f...",
      esgScore: 7.8,
    },
  ]

  const currentProduct = products.find((p) => p.id === selectedProduct)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">GIA Trazabilidad</h1>
            <p className="text-gray-600">Sistema integral de trazabilidad y sostenibilidad</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-green-600 border-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              Blockchain Activo
            </Badge>
            <Button>
              <QrCode className="w-4 h-4 mr-2" />
              Generar QR
            </Button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => {
            const IconComponent = module.icon
            return (
              <Card key={module.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${module.color} text-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <Badge variant={module.status === "active" ? "default" : "secondary"}>
                      {module.status === "active" ? "Activo" : "En Desarrollo"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{module.name}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Productos Activos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedProduct === product.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{product.name}</h4>
                    <Badge variant="outline">{product.type}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {product.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Progreso</span>
                      <span className="text-sm font-medium">{product.progress}%</span>
                    </div>
                    <Progress value={product.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Detalles del Producto</CardTitle>
              <CardDescription>
                {currentProduct?.name} - {currentProduct?.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="traceability" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="traceability">Trazabilidad</TabsTrigger>
                  <TabsTrigger value="esg">ESG</TabsTrigger>
                  <TabsTrigger value="dpp">DPP</TabsTrigger>
                  <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                </TabsList>

                <TabsContent value="traceability" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Estado Actual</label>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>{currentProduct?.status}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ubicación</label>
                      <p className="text-sm text-gray-600">{currentProduct?.location}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Historial de Eventos</h4>
                    <div className="space-y-2">
                      {[
                        { date: "2024-01-15", event: "Recepción materia prima", status: "completed" },
                        { date: "2024-01-20", event: "Inicio proceso de tejido", status: "completed" },
                        { date: "2024-01-25", event: "Control de calidad", status: "completed" },
                        { date: "2024-01-30", event: "Acabado final", status: "in-progress" },
                        { date: "2024-02-05", event: "Empaque y etiquetado", status: "pending" },
                      ].map((event, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded border">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              event.status === "completed"
                                ? "bg-green-500"
                                : event.status === "in-progress"
                                  ? "bg-yellow-500"
                                  : "bg-gray-300"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{event.event}</p>
                            <p className="text-xs text-gray-500">{event.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="esg" className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">{currentProduct?.esgScore}</div>
                        <div className="text-sm text-gray-600">Score ESG</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">85%</div>
                        <div className="text-sm text-gray-600">Circularidad</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">2.1kg</div>
                        <div className="text-sm text-gray-600">CO₂ Evitado</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Métricas Ambientales</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Consumo de Agua</span>
                        <span className="text-sm font-medium">15L (-30% vs promedio)</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Energía Renovable</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dpp" className="space-y-4">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Pasaporte Digital del Producto</h4>
                      <p className="text-sm text-gray-600">Código QR para acceso público</p>
                    </div>
                    <Button className="w-full">Generar DPP Actualizado</Button>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Información del DPP</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Fecha de creación:</span>
                        <p className="font-medium">15/01/2024</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Última actualización:</span>
                        <p className="font-medium">25/01/2024</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Certificaciones:</span>
                        <p className="font-medium">GOTS, Fair Trade</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Idiomas:</span>
                        <p className="font-medium">ES, EN, QU</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="blockchain" className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Registrado en Blockchain</span>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Hash de Transacción:</span>
                        <span className="text-sm font-mono">{currentProduct?.blockchain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Red:</span>
                        <span className="text-sm">Polygon Mainnet</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Confirmaciones:</span>
                        <span className="text-sm">1,247</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Ver en Explorador de Blockchain
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">127</p>
                  <p className="text-sm text-gray-600">Artesanos Activos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">1,543</p>
                  <p className="text-sm text-gray-600">Productos Trazados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">8.2</p>
                  <p className="text-sm text-gray-600">Score ESG Promedio</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-600">Alertas Pendientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
