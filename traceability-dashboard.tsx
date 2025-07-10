"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Package,
  QrCode,
  MapPin,
  Calendar,
  User,
  Leaf,
  Award,
  Search,
  Filter,
  Download,
  Eye,
  Share2,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react"

export default function TraceabilityDashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const products = [
    {
      id: "GIA-2024-001",
      name: "Sweater Artesanal Merino",
      artisan: "María González",
      location: "Montevideo, Uruguay",
      status: "Completado",
      created: "2024-01-15",
      qr_scans: 45,
      impact: {
        co2_saved: 2.3,
        water_saved: 45,
        circularity_score: 92,
      },
      traceability: {
        materials: [
          { name: "Lana Merino", percentage: 85, origin: "Estancia La Esperanza, Tacuarembó" },
          { name: "Botones Madera", percentage: 15, origin: "Carpintería Local, Montevideo" },
        ],
        process_steps: [
          { step: "Esquila", date: "2024-01-05", location: "Tacuarembó", responsible: "Estancia La Esperanza" },
          { step: "Lavado y Cardado", date: "2024-01-08", location: "Montevideo", responsible: "Textil Cooperativa" },
          { step: "Hilado", date: "2024-01-10", location: "Montevideo", responsible: "María González" },
          { step: "Tejido", date: "2024-01-12", location: "Montevideo", responsible: "María González" },
          { step: "Acabado", date: "2024-01-15", location: "Montevideo", responsible: "María González" },
        ],
        certifications: ["GOTS", "Fair Trade", "Carbon Neutral"],
      },
    },
    {
      id: "GIA-2024-002",
      name: "Cardigan Algodón Orgánico",
      artisan: "Ana Rodríguez",
      location: "Punta del Este, Uruguay",
      status: "En Proceso",
      created: "2024-01-20",
      qr_scans: 23,
      impact: {
        co2_saved: 1.8,
        water_saved: 32,
        circularity_score: 88,
      },
      traceability: {
        materials: [{ name: "Algodón Orgánico", percentage: 100, origin: "Finca Orgánica, Canelones" }],
        process_steps: [
          { step: "Cosecha", date: "2024-01-10", location: "Canelones", responsible: "Finca Orgánica" },
          { step: "Desmotado", date: "2024-01-12", location: "Canelones", responsible: "Cooperativa Textil" },
          { step: "Hilado", date: "2024-01-15", location: "Punta del Este", responsible: "Ana Rodríguez" },
          { step: "Tejido", date: "2024-01-18", location: "Punta del Este", responsible: "Ana Rodríguez" },
        ],
        certifications: ["GOTS", "Organic"],
      },
    },
    {
      id: "GIA-2024-003",
      name: "Poncho Tradicional",
      artisan: "Carmen Silva",
      location: "Colonia, Uruguay",
      status: "Completado",
      created: "2024-01-25",
      qr_scans: 67,
      impact: {
        co2_saved: 3.1,
        water_saved: 58,
        circularity_score: 95,
      },
      traceability: {
        materials: [
          { name: "Lana Natural", percentage: 90, origin: "Estancia San José, Colonia" },
          { name: "Fibras Recicladas", percentage: 10, origin: "Programa de Reciclaje GIA" },
        ],
        process_steps: [
          { step: "Recolección Lana", date: "2024-01-15", location: "Colonia", responsible: "Estancia San José" },
          { step: "Procesamiento", date: "2024-01-18", location: "Colonia", responsible: "Carmen Silva" },
          { step: "Incorporación Reciclados", date: "2024-01-20", location: "Colonia", responsible: "Carmen Silva" },
          { step: "Tejido Tradicional", date: "2024-01-22", location: "Colonia", responsible: "Carmen Silva" },
          { step: "Acabado Final", date: "2024-01-25", location: "Colonia", responsible: "Carmen Silva" },
        ],
        certifications: ["Fair Trade", "Recycled Content"],
      },
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || product.status.toLowerCase().includes(filterStatus.toLowerCase())
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "Completado":
        return "bg-green-100 text-green-800"
      case "En Proceso":
        return "bg-yellow-100 text-yellow-800"
      case "Pendiente":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completado":
        return CheckCircle
      case "En Proceso":
        return Clock
      case "Pendiente":
        return AlertTriangle
      default:
        return Clock
    }
  }

  if (selectedProduct) {
    const product = products.find((p) => p.id === selectedProduct)
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedProduct(null)}>
              ← Volver al Dashboard
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Product Header */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                      <p className="text-gray-600">ID: {product.id}</p>
                    </div>
                    <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.artisan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.created}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.qr_scans} escaneos</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {product.traceability.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="bg-green-50 text-green-700">
                        <Award className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                    <p className="text-2xl font-bold text-green-600">{product.impact.co2_saved}kg</p>
                    <p className="text-sm text-green-700">CO₂ Ahorrado</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-2xl">💧</span>
                    <p className="text-2xl font-bold text-blue-600 mt-2">{product.impact.water_saved}L</p>
                    <p className="text-sm text-blue-700">Agua Ahorrada</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Award className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-2xl font-bold text-purple-600">{product.impact.circularity_score}%</p>
                    <p className="text-sm text-purple-700">Circularidad</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Traceability Details */}
          <Tabs defaultValue="process" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="process">Proceso de Creación</TabsTrigger>
              <TabsTrigger value="materials">Materiales</TabsTrigger>
              <TabsTrigger value="impact">Impacto</TabsTrigger>
            </TabsList>

            <TabsContent value="process">
              <Card>
                <CardHeader>
                  <CardTitle>Trazabilidad del Proceso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {product.traceability.process_steps.map((step, index) => (
                      <div key={index} className="relative">
                        {index < product.traceability.process_steps.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300" />
                        )}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{step.step}</h4>
                              <Badge variant="outline">{step.date}</Badge>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{step.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{step.responsible}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <CardTitle>Composición de Materiales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {product.traceability.materials.map((material, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{material.name}</h4>
                          <Badge className="bg-green-100 text-green-800">{material.percentage}%</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>Origen: {material.origin}</span>
                        </div>
                        <div className="mt-2 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${material.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Impacto Ambiental</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <Leaf className="w-12 h-12 mx-auto text-green-600 mb-4" />
                        <p className="text-3xl font-bold text-green-600 mb-2">{product.impact.co2_saved}kg</p>
                        <p className="text-green-700 font-medium">CO₂ Evitado</p>
                        <p className="text-sm text-green-600 mt-2">vs. producción convencional</p>
                      </div>

                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <span className="text-4xl mb-4 block">💧</span>
                        <p className="text-3xl font-bold text-blue-600 mb-2">{product.impact.water_saved}L</p>
                        <p className="text-blue-700 font-medium">Agua Conservada</p>
                        <p className="text-sm text-blue-600 mt-2">en procesos de producción</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Índice de Circularidad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-8">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="2"
                            strokeDasharray={`${product.impact.circularity_score}, 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-purple-600">
                            {product.impact.circularity_score}%
                          </span>
                        </div>
                      </div>
                      <p className="text-purple-700 font-medium mb-2">Excelente Puntuación</p>
                      <p className="text-sm text-gray-600">
                        Este producto cumple con los más altos estándares de economía circular
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard de Trazabilidad</h1>
            <p className="text-gray-600">Seguimiento completo de productos y procesos</p>
          </div>
          <Button>
            <Package className="w-4 h-4 mr-2" />
            Nuevo Producto
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Productos Trazados</p>
                  <p className="text-2xl font-bold text-gray-900">{products.length}</p>
                </div>
                <Package className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Escaneos QR</p>
                  <p className="text-2xl font-bold text-gray-900">{products.reduce((acc, p) => acc + p.qr_scans, 0)}</p>
                </div>
                <QrCode className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CO₂ Total Ahorrado</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {products.reduce((acc, p) => acc + p.impact.co2_saved, 0).toFixed(1)}kg
                  </p>
                </div>
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Circularidad Promedio</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(products.reduce((acc, p) => acc + p.impact.circularity_score, 0) / products.length)}%
                  </p>
                </div>
                <Award className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar por nombre, artesana o ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="completado">Completado</SelectItem>
                  <SelectItem value="proceso">En Proceso</SelectItem>
                  <SelectItem value="pendiente">Pendiente</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Más Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Productos Registrados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredProducts.map((product) => {
                const StatusIcon = getStatusIcon(product.status)
                return (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-600">ID: {product.id}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <User className="w-3 h-3" />
                            {product.artisan}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPin className="w-3 h-3" />
                            {product.location}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            {product.created}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-900">{product.qr_scans}</p>
                        <p className="text-xs text-gray-500">Escaneos</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-green-600">{product.impact.co2_saved}kg</p>
                        <p className="text-xs text-gray-500">CO₂</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-purple-600">{product.impact.circularity_score}%</p>
                        <p className="text-xs text-gray-500">Circularidad</p>
                      </div>
                      <Badge className={getStatusColor(product.status)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {product.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
