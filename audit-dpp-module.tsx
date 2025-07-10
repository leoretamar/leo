"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  User,
  Award,
  Package,
  BarChart3,
  Factory,
} from "lucide-react"

export default function AuditDPPModule() {
  const [selectedAudit, setSelectedAudit] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const audits = [
    {
      id: "AUD-2024-001",
      product_id: "GIA-2024-001",
      product_name: "Sweater Artesanal Merino",
      artisan: "María González",
      audit_type: "Certificación GOTS",
      status: "Completado",
      score: 95,
      date: "2024-01-20",
      auditor: "SGS Uruguay",
      findings: [
        { category: "Materiales", status: "Aprobado", score: 98 },
        { category: "Proceso", status: "Aprobado", score: 94 },
        { category: "Trazabilidad", status: "Aprobado", score: 96 },
        { category: "Impacto Ambiental", status: "Aprobado", score: 92 },
      ],
      dpp_compliance: {
        data_completeness: 98,
        accuracy: 96,
        transparency: 99,
        accessibility: 97,
      },
      recommendations: [
        "Mejorar documentación de proceso de teñido",
        "Implementar medición más precisa de consumo de agua",
      ],
    },
    {
      id: "AUD-2024-002",
      product_id: "GIA-2024-002",
      product_name: "Cardigan Algodón Orgánico",
      artisan: "Ana Rodríguez",
      audit_type: "Fair Trade",
      status: "En Proceso",
      score: null,
      date: "2024-01-25",
      auditor: "Fair Trade International",
      findings: [
        { category: "Condiciones Laborales", status: "En Revisión", score: null },
        { category: "Comercio Justo", status: "En Revisión", score: null },
        { category: "Impacto Social", status: "Aprobado", score: 94 },
        { category: "Transparencia", status: "En Revisión", score: null },
      ],
      dpp_compliance: {
        data_completeness: 85,
        accuracy: 88,
        transparency: 92,
        accessibility: 90,
      },
      recommendations: [],
    },
    {
      id: "AUD-2024-003",
      product_id: "GIA-2024-003",
      product_name: "Poncho Tradicional",
      artisan: "Carmen Silva",
      audit_type: "Carbon Neutral",
      status: "Programado",
      score: null,
      date: "2024-02-01",
      auditor: "Carbon Trust",
      findings: [],
      dpp_compliance: {
        data_completeness: 92,
        accuracy: 94,
        transparency: 96,
        accessibility: 93,
      },
      recommendations: [],
    },
  ]

  const dppMetrics = {
    total_products: 247,
    compliant_products: 235,
    compliance_rate: 95,
    avg_completeness: 94,
    avg_accuracy: 93,
    avg_transparency: 96,
    pending_audits: 12,
  }

  const certificationTypes = [
    { name: "GOTS", count: 45, compliance: 98 },
    { name: "Fair Trade", count: 38, compliance: 96 },
    { name: "Carbon Neutral", count: 28, compliance: 94 },
    { name: "Organic Content", count: 52, compliance: 97 },
    { name: "Cradle to Cradle", count: 15, compliance: 92 },
  ]

  const filteredAudits = audits.filter((audit) => {
    const matchesSearch =
      audit.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      audit.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      audit.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || audit.status.toLowerCase().includes(filterStatus.toLowerCase())
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "Completado":
      case "Aprobado":
        return "bg-green-100 text-green-800"
      case "En Proceso":
      case "En Revisión":
        return "bg-yellow-100 text-yellow-800"
      case "Programado":
        return "bg-blue-100 text-blue-800"
      case "Rechazado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completado":
      case "Aprobado":
        return CheckCircle
      case "En Proceso":
      case "En Revisión":
        return Clock
      case "Programado":
        return Calendar
      case "Rechazado":
        return AlertTriangle
      default:
        return Clock
    }
  }

  if (selectedAudit) {
    const audit = audits.find((a) => a.id === selectedAudit)
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedAudit(null)}>
              ← Volver a Auditorías
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Descargar Reporte
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Ver DPP
              </Button>
            </div>
          </div>

          {/* Audit Header */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{audit.product_name}</h1>
                      <p className="text-gray-600">Auditoría ID: {audit.id}</p>
                      <p className="text-gray-600">Producto ID: {audit.product_id}</p>
                    </div>
                    <Badge className={getStatusColor(audit.status)}>{audit.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{audit.artisan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{audit.audit_type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{audit.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Factory className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{audit.auditor}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {audit.score && (
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <Award className="w-12 h-12 mx-auto text-green-600 mb-3" />
                      <p className="text-3xl font-bold text-green-600">{audit.score}/100</p>
                      <p className="text-green-700 font-medium">Puntuación General</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audit Details */}
          <Tabs defaultValue="findings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="findings">Hallazgos</TabsTrigger>
              <TabsTrigger value="dpp">Cumplimiento DPP</TabsTrigger>
              <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
            </TabsList>

            <TabsContent value="findings">
              <Card>
                <CardHeader>
                  <CardTitle>Hallazgos de Auditoría</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audit.findings.map((finding, index) => {
                      const StatusIcon = getStatusIcon(finding.status)
                      return (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <StatusIcon className="w-5 h-5 text-gray-500" />
                            <div>
                              <h4 className="font-medium text-gray-900">{finding.category}</h4>
                              <Badge className={getStatusColor(finding.status)} size="sm">
                                {finding.status}
                              </Badge>
                            </div>
                          </div>
                          {finding.score && (
                            <div className="text-right">
                              <p className="text-2xl font-bold text-gray-900">{finding.score}</p>
                              <p className="text-sm text-gray-500">/ 100</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dpp">
              <Card>
                <CardHeader>
                  <CardTitle>Cumplimiento del Pasaporte Digital de Producto (DPP)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">Completitud de Datos</span>
                          <span className="text-sm text-gray-600">{audit.dpp_compliance.data_completeness}%</span>
                        </div>
                        <Progress value={audit.dpp_compliance.data_completeness} className="h-3" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">Precisión</span>
                          <span className="text-sm text-gray-600">{audit.dpp_compliance.accuracy}%</span>
                        </div>
                        <Progress value={audit.dpp_compliance.accuracy} className="h-3" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">Transparencia</span>
                          <span className="text-sm text-gray-600">{audit.dpp_compliance.transparency}%</span>
                        </div>
                        <Progress value={audit.dpp_compliance.transparency} className="h-3" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">Accesibilidad</span>
                          <span className="text-sm text-gray-600">{audit.dpp_compliance.accessibility}%</span>
                        </div>
                        <Progress value={audit.dpp_compliance.accessibility} className="h-3" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-900 mb-2">Elementos Verificados</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>✓ Información de materiales</li>
                          <li>✓ Proceso de producción</li>
                          <li>✓ Cadena de suministro</li>
                          <li>✓ Impacto ambiental</li>
                          <li>✓ Certificaciones</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-900 mb-2">Cumplimiento Regulatorio</h4>
                        <p className="text-sm text-green-800">
                          Este producto cumple con los requisitos del DPP según la regulación europea de productos
                          sostenibles.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations">
              <Card>
                <CardHeader>
                  <CardTitle>Recomendaciones de Mejora</CardTitle>
                </CardHeader>
                <CardContent>
                  {audit.recommendations.length > 0 ? (
                    <div className="space-y-4">
                      {audit.recommendations.map((rec, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                        >
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <div>
                            <p className="text-yellow-900">{rec}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">¡Excelente trabajo!</h3>
                      <p className="text-gray-600">No se encontraron áreas de mejora en esta auditoría.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
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
            <h1 className="text-3xl font-bold text-gray-900">Auditorías y DPP</h1>
            <p className="text-gray-600">Gestión de auditorías y cumplimiento del Pasaporte Digital de Producto</p>
          </div>
          <Button>
            <Shield className="w-4 h-4 mr-2" />
            Nueva Auditoría
          </Button>
        </div>

        {/* DPP Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Productos Registrados</p>
                  <p className="text-2xl font-bold text-gray-900">{dppMetrics.total_products}</p>
                </div>
                <Package className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cumplimiento DPP</p>
                  <p className="text-2xl font-bold text-green-600">{dppMetrics.compliance_rate}%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completitud Promedio</p>
                  <p className="text-2xl font-bold text-purple-600">{dppMetrics.avg_completeness}%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Auditorías Pendientes</p>
                  <p className="text-2xl font-bold text-orange-600">{dppMetrics.pending_audits}</p>
                </div>
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="audits" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="audits">Auditorías</TabsTrigger>
            <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
            <TabsTrigger value="compliance">Cumplimiento DPP</TabsTrigger>
          </TabsList>

          <TabsContent value="audits" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Buscar por producto, artesana o ID..."
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
                      <SelectItem value="programado">Programado</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Más Filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Audits List */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Auditorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredAudits.map((audit) => {
                    const StatusIcon = getStatusIcon(audit.status)
                    return (
                      <div
                        key={audit.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedAudit(audit.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Shield className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{audit.product_name}</h4>
                            <p className="text-sm text-gray-600">ID: {audit.id}</p>
                            <div className="flex items-center gap-4 mt-1">
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <User className="w-3 h-3" />
                                {audit.artisan}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Shield className="w-3 h-3" />
                                {audit.audit_type}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Calendar className="w-3 h-3" />
                                {audit.date}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-sm font-medium text-gray-900">{audit.auditor}</p>
                            <p className="text-xs text-gray-500">Auditor</p>
                          </div>
                          {audit.score && (
                            <div className="text-center">
                              <p className="text-sm font-medium text-green-600">{audit.score}/100</p>
                              <p className="text-xs text-gray-500">Puntuación</p>
                            </div>
                          )}
                          <Badge className={getStatusColor(audit.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {audit.status}
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
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Certificaciones por Tipo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificationTypes.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-medium text-gray-900">{cert.name}</h4>
                          <p className="text-sm text-gray-600">{cert.count} productos certificados</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{cert.compliance}%</p>
                        <p className="text-xs text-gray-500">Cumplimiento</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Cumplimiento DPP</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">Completitud Promedio</span>
                        <span className="text-sm text-gray-600">{dppMetrics.avg_completeness}%</span>
                      </div>
                      <Progress value={dppMetrics.avg_completeness} className="h-3" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">Precisión Promedio</span>
                        <span className="text-sm text-gray-600">{dppMetrics.avg_accuracy}%</span>
                      </div>
                      <Progress value={dppMetrics.avg_accuracy} className="h-3" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">Transparencia Promedio</span>
                        <span className="text-sm text-gray-600">{dppMetrics.avg_transparency}%</span>
                      </div>
                      <Progress value={dppMetrics.avg_transparency} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estado de Cumplimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="font-medium text-green-900">Productos Conformes</p>
                          <p className="text-sm text-green-700">{dppMetrics.compliant_products} productos</p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-green-600">{dppMetrics.compliance_rate}%</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-yellow-600" />
                        <div>
                          <p className="font-medium text-yellow-900">En Proceso</p>
                          <p className="text-sm text-yellow-700">
                            {dppMetrics.total_products - dppMetrics.compliant_products} productos
                          </p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-yellow-600">{100 - dppMetrics.compliance_rate}%</span>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Próximas Regulaciones</h4>
                      <p className="text-sm text-blue-800">
                        La regulación DPP de la UE entrará en vigor en 2025. Nuestro sistema ya cumple con el 95% de los
                        requisitos.
                      </p>
                    </div>
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
