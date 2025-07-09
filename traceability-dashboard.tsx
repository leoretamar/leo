"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  Plus,
  Search,
  Download,
  Eye,
  QrCode,
  Calendar,
  User,
  MapPin,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

interface Producto {
  id: string
  codigo: string
  nombre: string
  tipo: string
  lote: string
  estado: "En Proceso" | "Terminado" | "Pendiente" | "Auditoria"
  artesano: string
  fecha_registro: string
  fecha_finalizacion?: string
  qr_code: string
  ubicacion: string
  progreso: number
}

interface EventoTrazabilidad {
  id: string
  timestamp: string
  accion: string
  responsable: string
  metadatos: string
  estado: "completed" | "in-progress" | "pending"
}

export default function TraceabilityDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [currentView, setCurrentView] = useState<"dashboard" | "detail" | "register">("dashboard")

  const productos: Producto[] = [
    {
      id: "1",
      codigo: "GIA-SWE-2025-001",
      nombre: "Sweater Sol de Campo",
      tipo: "Prenda Tejida",
      lote: "LOT-2025-001",
      estado: "Terminado",
      artesano: "M. Sosa",
      fecha_registro: "15/03/25",
      fecha_finalizacion: "22/03/25",
      qr_code: "QR-SWE-001",
      ubicacion: "Cusco, Perú",
      progreso: 100,
    },
    {
      id: "2",
      codigo: "GIA-BOLSO-2025-002",
      nombre: "Bolso Campo Claro",
      tipo: "Accesorio Cuero",
      lote: "LOT-2025-002",
      estado: "En Proceso",
      artesano: "A. Gómez",
      fecha_registro: "01/04/25",
      ubicacion: "Arequipa, Perú",
      qr_code: "QR-BOLSO-002",
      progreso: 75,
    },
    {
      id: "3",
      codigo: "GIA-CAR-2025-003",
      nombre: "Cardigan Alpaca Premium",
      tipo: "Prenda Tejida",
      lote: "LOT-2025-003",
      estado: "Pendiente",
      artesano: "C. Quispe",
      fecha_registro: "10/04/25",
      ubicacion: "Puno, Perú",
      qr_code: "QR-CAR-003",
      progreso: 30,
    },
  ]

  const eventosEjemplo: EventoTrazabilidad[] = [
    {
      id: "1",
      timestamp: "2025-03-15 09:00",
      accion: "Registro de materia prima - Lana Merino",
      responsable: "M. Sosa",
      metadatos: "Proveedor: Lanas del Sur, Lote: 2025-03-01, Cert: RWS",
      estado: "completed",
    },
    {
      id: "2",
      timestamp: "2025-03-15 14:30",
      accion: "Inicio proceso de tejido",
      responsable: "M. Sosa",
      metadatos: "Técnica: Crochet, Punto fantasía",
      estado: "completed",
    },
    {
      id: "3",
      timestamp: "2025-03-20 16:00",
      accion: "Finalización tejido",
      responsable: "M. Sosa",
      metadatos: "Control de calidad aprobado",
      estado: "completed",
    },
    {
      id: "4",
      timestamp: "2025-03-21 10:00",
      accion: "Proceso de armado",
      responsable: "M. Sosa",
      metadatos: "Costura manual, botones de madera",
      estado: "completed",
    },
    {
      id: "5",
      timestamp: "2025-03-22 15:00",
      accion: "Producto terminado",
      responsable: "M. Sosa",
      metadatos: "QR generado, DPP creado",
      estado: "completed",
    },
  ]

  const filteredProducts = productos.filter(
    (producto) =>
      producto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.artesano.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusIcon = (estado: string) => {
    switch (estado) {
      case "Terminado":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "En Proceso":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "Pendiente":
        return <AlertCircle className="w-4 h-4 text-gray-500" />
      case "Auditoria":
        return <FileText className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (estado: string) => {
    switch (estado) {
      case "Terminado":
        return <Badge className="bg-green-100 text-green-800">{estado}</Badge>
      case "En Proceso":
        return <Badge className="bg-yellow-100 text-yellow-800">{estado}</Badge>
      case "Pendiente":
        return <Badge className="bg-gray-100 text-gray-800">{estado}</Badge>
      case "Auditoria":
        return <Badge className="bg-blue-100 text-blue-800">{estado}</Badge>
      default:
        return <Badge variant="outline">{estado}</Badge>
    }
  }

  const selectedProductData = productos.find((p) => p.id === selectedProduct)

  if (currentView === "detail" && selectedProductData) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => setCurrentView("dashboard")}>
                ← Volver al Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Detalle del Producto</h1>
                <p className="text-gray-600">
                  {selectedProductData.codigo} - {selectedProductData.nombre}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button>
                <QrCode className="w-4 h-4 mr-2" />
                Ver QR
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Información del Producto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Estado</label>
                    <div className="flex items-center gap-2 mt-1">
                      {getStatusIcon(selectedProductData.estado)}
                      {getStatusBadge(selectedProductData.estado)}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Artesano</label>
                    <div className="flex items-center gap-2 mt-1">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedProductData.artesano}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Ubicación</label>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedProductData.ubicacion}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Fecha de Registro</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedProductData.fecha_registro}</span>
                    </div>
                  </div>
                  {selectedProductData.fecha_finalizacion && (
                    <div>
                      <label className="text-sm font-medium text-gray-600">Fecha de Finalización</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{selectedProductData.fecha_finalizacion}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t">
                  <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">QR: {selectedProductData.qr_code}</p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Línea de Tiempo de Procesos
                </CardTitle>
                <CardDescription>Historial completo de eventos y procesos del producto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventosEjemplo.map((evento, index) => (
                    <div key={evento.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            evento.estado === "completed"
                              ? "bg-green-500"
                              : evento.estado === "in-progress"
                                ? "bg-yellow-500"
                                : "bg-gray-300"
                          }`}
                        ></div>
                        {index < eventosEjemplo.length - 1 && <div className="w-px h-8 bg-gray-200 mt-2"></div>}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-sm">{evento.accion}</h4>
                          <span className="text-xs text-gray-500">{evento.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Responsable: {evento.responsable}</p>
                        <p className="text-xs text-gray-500">{evento.metadatos}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Tabs */}
          <Card>
            <CardContent className="p-0">
              <Tabs defaultValue="materials" className="w-full">
                <div className="border-b px-6 pt-6">
                  <TabsList>
                    <TabsTrigger value="materials">Materia Prima</TabsTrigger>
                    <TabsTrigger value="processes">Procesos</TabsTrigger>
                    <TabsTrigger value="certificates">Certificados</TabsTrigger>
                    <TabsTrigger value="documents">Documentos</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="materials" className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Material</TableHead>
                        <TableHead>Proveedor</TableHead>
                        <TableHead>Lote</TableHead>
                        <TableHead>Certificación</TableHead>
                        <TableHead>Observaciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Lana Merino</TableCell>
                        <TableCell>Lanas del Sur</TableCell>
                        <TableCell>2025-03-01</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-green-600">
                            RWS
                          </Badge>
                        </TableCell>
                        <TableCell>18 micras, blanco</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Botones Madera</TableCell>
                        <TableCell>Maderas Eco</TableCell>
                        <TableCell>2025-02-20</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-green-600">
                            FSC
                          </Badge>
                        </TableCell>
                        <TableCell>Local, eucalipto</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="processes" className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Proceso</TableHead>
                        <TableHead>Responsable</TableHead>
                        <TableHead>Fecha Inicio</TableHead>
                        <TableHead>Fecha Fin</TableHead>
                        <TableHead>Técnica</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Tejido</TableCell>
                        <TableCell>María Sosa</TableCell>
                        <TableCell>15/03/25</TableCell>
                        <TableCell>20/03/25</TableCell>
                        <TableCell>Crochet</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">Completado</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Armado</TableCell>
                        <TableCell>María Sosa</TableCell>
                        <TableCell>21/03/25</TableCell>
                        <TableCell>22/03/25</TableCell>
                        <TableCell>Costura Manual</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">Completado</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="certificates" className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Certificado</TableHead>
                        <TableHead>Entidad</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Resultado</TableHead>
                        <TableHead>Archivo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>RWS</TableCell>
                        <TableCell>TextileCert</TableCell>
                        <TableCell>15/03/25</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">OK</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Ver PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="documents" className="p-6">
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">No hay documentos adicionales</p>
                    <Button variant="outline" className="mt-4">
                      <Plus className="w-4 h-4 mr-2" />
                      Subir Documento
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard de Trazabilidad</h1>
            <p className="text-gray-600">Gestión y seguimiento de productos artesanales</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button onClick={() => setCurrentView("register")}>
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Producto
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Buscar por código, nombre o artesano..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <QrCode className="w-4 h-4 mr-2" />
                Escanear QR
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Productos/Lotes</CardTitle>
            <CardDescription>{filteredProducts.length} productos encontrados</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Código</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Artesano</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Progreso</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((producto) => (
                  <TableRow key={producto.id}>
                    <TableCell className="font-medium">{producto.codigo}</TableCell>
                    <TableCell>{producto.nombre}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{producto.tipo}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(producto.estado)}
                        {getStatusBadge(producto.estado)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        {producto.artesano}
                      </div>
                    </TableCell>
                    <TableCell>{producto.fecha_registro}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${producto.progreso}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{producto.progreso}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedProduct(producto.id)
                            setCurrentView("detail")
                          }}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        <Button variant="outline" size="sm">
                          <QrCode className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{productos.length}</p>
                  <p className="text-sm text-gray-600">Total Productos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{productos.filter((p) => p.estado === "Terminado").length}</p>
                  <p className="text-sm text-gray-600">Terminados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">{productos.filter((p) => p.estado === "En Proceso").length}</p>
                  <p className="text-sm text-gray-600">En Proceso</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-gray-500" />
                <div>
                  <p className="text-2xl font-bold">{productos.filter((p) => p.estado === "Pendiente").length}</p>
                  <p className="text-sm text-gray-600">Pendientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
