"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Shield,
  FileText,
  QrCode,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  Search,
  Calendar,
  User,
} from "lucide-react"

interface Auditoria {
  id: string
  producto_codigo: string
  producto_nombre: string
  auditor: string
  fecha: string
  estado: "Pendiente" | "En Proceso" | "Aprobada" | "Rechazada"
  resultado: string
  observaciones: string
  documentos: string[]
}

interface DPP {
  id: string
  producto_id: string
  codigo_producto: string
  fecha_generacion: string
  qr_code: string
  pdf_url: string
  datos_resumidos: {
    origen: string
    materiales: string[]
    certificaciones: string[]
    impacto_ambiental: string
  }
}

export default function AuditDPPModule() {
  const [currentView, setCurrentView] = useState<"auditorias" | "dpp" | "detalle">("auditorias")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAudit, setSelectedAudit] = useState<string | null>(null)

  const auditorias: Auditoria[] = [
    {
      id: "1",
      producto_codigo: "GIA-SWE-2025-001",
      producto_nombre: "Sweater Sol de Campo",
      auditor: "TextileCert",
      fecha: "20/03/25",
      estado: "Aprobada",
      resultado: "Cumple todos los estándares RWS",
      observaciones: "Excelente trazabilidad de materiales",
      documentos: ["certificado_rws.pdf", "informe_auditoria.pdf"],
    },
    {
      id: "2",
      producto_codigo: "GIA-BOLSO-2025-002",
      producto_nombre: "Bolso Campo Claro",
      auditor: "LeatherOrg",
      fecha: "16/03/25",
      estado: "Aprobada",
      resultado: "Certificación LWG otorgada",
      observaciones: "Proceso de curtido vegetal verificado",
      documentos: ["certificado_lwg.pdf"],
    },
    {
      id: "3",
      producto_codigo: "GIA-CAR-2025-003",
      producto_nombre: "Cardigan Alpaca Premium",
      auditor: "EcoCert",
      fecha: "25/03/25",
      estado: "En Proceso",
      resultado: "Pendiente",
      observaciones: "Revisión de documentación en curso",
      documentos: [],
    },
  ]

  const dpps: DPP[] = [
    {
      id: "1",
      producto_id: "1",
      codigo_producto: "GIA-SWE-2025-001",
      fecha_generacion: "22/03/25",
      qr_code: "QR-DPP-001",
      pdf_url: "/dpp/sweater-001.pdf",
      datos_resumidos: {
        origen: "Cusco, Perú",
        materiales: ["Lana Merino RWS", "Botones FSC"],
        certificaciones: ["RWS", "Fair Trade"],
        impacto_ambiental: "2.3kg CO₂, 110L agua",
      },
    },
    {
      id: "2",
      producto_id: "2",
      codigo_producto: "GIA-BOLSO-2025-002",
      fecha_generacion: "18/03/25",
      qr_code: "QR-DPP-002",
      pdf_url: "/dpp/bolso-002.pdf",
      datos_resumidos: {
        origen: "Arequipa, Perú",
        materiales: ["Cuero LWG", "Hilo OEKO-TEX"],
        certificaciones: ["LWG", "OEKO-TEX"],
        impacto_ambiental: "3.1kg CO₂, 140L agua",
      },
    },
  ]

  const getStatusIcon = (estado: string) => {
    switch (estado) {
      case "Aprobada":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "En Proceso":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "Pendiente":
        return <AlertCircle className="w-4 h-4 text-gray-500" />
      case "Rechazada":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (estado: string) => {
    switch (estado) {
      case "Aprobada":
        return <Badge className="bg-green-100 text-green-800">{estado}</Badge>
      case "En Proceso":
        return <Badge className="bg-yellow-100 text-yellow-800">{estado}</Badge>
      case "Pendiente":
        return <Badge className="bg-gray-100 text-gray-800">{estado}</Badge>
      case "Rechazada":
        return <Badge className="bg-red-100 text-red-800">{estado}</Badge>
      default:
        return <Badge variant="outline">{estado}</Badge>
    }
  }

  const filteredAuditorias = auditorias.filter(
    (auditoria) =>
      auditoria.producto_codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auditoria.producto_nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auditoria.auditor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (currentView === "detalle" && selectedAudit) {
    const auditoria = auditorias.find((a) => a.id === selectedAudit)
    if (!auditoria) return null

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => setCurrentView("auditorias")}>
                ← Volver a Auditorías
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Detalle de Auditoría</h1>
                <p className="text-gray-600">{auditoria.producto_codigo}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Descargar
              </Button>
              {auditoria.estado === "Aprobada" && (
                <Button>
                  <QrCode className="w-4 h-4 mr-2" />
                  Generar DPP
                </Button>
              )}
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  {auditoria.producto_nombre}
                </CardTitle>
                {getStatusBadge(auditoria.estado)}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Auditor</label>
                    <div className="flex items-center gap-2 mt-1">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>{auditoria.auditor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Fecha de Auditoría</label>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{auditoria.fecha}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Estado</label>
                    <div className="flex items-center gap-2 mt-1">
                      {getStatusIcon(auditoria.estado)}
                      <span>{auditoria.estado}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Resultado</label>
                    <p className="mt-1 text-sm">{auditoria.resultado}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Observaciones</label>
                    <p className="mt-1 text-sm text-gray-700">{auditoria.observaciones}</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 mb-3 block">Documentos</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {auditoria.documentos.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <span className="flex-1 text-sm">{doc}</span>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (currentView === "dpp") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pasaportes Digitales de Producto (DPP)</h1>
              <p className="text-gray-600">Gestión de pasaportes digitales generados</p>
            </div>
            <Button variant="outline" onClick={() => setCurrentView("auditorias")}>
              ← Volver a Auditorías
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dpps.map((dpp) => (
              <Card key={dpp.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{dpp.codigo_producto}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">Activo</Badge>
                  </div>
                  <CardDescription>Generado el {dpp.fecha_generacion}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <QrCode className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600">QR: {dpp.qr_code}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Origen:</span> {dpp.datos_resumidos.origen}
                    </div>
                    <div>
                      <span className="font-medium">Materiales:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {dpp.datos_resumidos.materiales.map((material, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Certificaciones:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {dpp.datos_resumidos.certificaciones.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs text-green-600">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium">Impacto:</span> {dpp.datos_resumidos.impacto_ambiental}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      Ver
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <h1 className="text-3xl font-bold text-gray-900">Auditorías y DPP</h1>
            <p className="text-gray-600">Gestión de auditorías y pasaportes digitales de productos</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setCurrentView("dpp")}>
              <QrCode className="w-4 h-4 mr-2" />
              Ver DPPs
            </Button>
            <Button>
              <Shield className="w-4 h-4 mr-2" />
              Nueva Auditoría
            </Button>
          </div>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar por producto, auditor o código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{auditorias.length}</p>
                  <p className="text-sm text-gray-600">Total Auditorías</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{auditorias.filter((a) => a.estado === "Aprobada").length}</p>
                  <p className="text-sm text-gray-600">Aprobadas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">{auditorias.filter((a) => a.estado === "En Proceso").length}</p>
                  <p className="text-sm text-gray-600">En Proceso</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <QrCode className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">{dpps.length}</p>
                  <p className="text-sm text-gray-600">DPPs Generados</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Auditorias Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Auditorías</CardTitle>
            <CardDescription>{filteredAuditorias.length} auditorías encontradas</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto</TableHead>
                  <TableHead>Auditor</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Resultado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAuditorias.map((auditoria) => (
                  <TableRow key={auditoria.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{auditoria.producto_codigo}</p>
                        <p className="text-sm text-gray-600">{auditoria.producto_nombre}</p>
                      </div>
                    </TableCell>
                    <TableCell>{auditoria.auditor}</TableCell>
                    <TableCell>{auditoria.fecha}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(auditoria.estado)}
                        {getStatusBadge(auditoria.estado)}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{auditoria.resultado}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedAudit(auditoria.id)
                            setCurrentView("detalle")
                          }}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        {auditoria.estado === "Aprobada" && (
                          <Button variant="outline" size="sm">
                            <QrCode className="w-4 h-4 mr-1" />
                            DPP
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
