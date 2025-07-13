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
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Plus,
  Calendar,
  Globe,
  Award,
  Leaf,
  Users,
  Package,
  Database,
  RefreshCw,
} from "lucide-react"

export default function AuditDPPModule() {
  const [selectedAudit, setSelectedAudit] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const dppCompliance = {
    overall_score: 94,
    total_products: 1247,
    compliant_products: 1172,
    pending_review: 45,
    non_compliant: 30,
    categories: {
      product_info: { score: 98, status: "excellent" },
      sustainability: { score: 92, status: "excellent" },
      supply_chain: { score: 89, status: "good" },
      circularity: { score: 96, status: "excellent" },
      social_impact: { score: 91, status: "excellent" },
      certifications: { score: 100, status: "excellent" },
    },
  }

  const audits = [
    {
      id: "AUD-2024-001",
      product_id: "GIA-SWE-2025-001",
      product_name: "Sweater Sol de Campo",
      auditor: "María Fernández",
      audit_date: "2024-03-15",
      status: "completed",
      score: 96,
      findings: 2,
      critical_issues: 0,
      recommendations: 3,
      next_audit: "2024-09-15",
      categories: {
        product_identification: { score: 100, status: "pass" },
        material_composition: { score: 95, status: "pass" },
        manufacturing_process: { score: 98, status: "pass" },
        environmental_impact: { score: 92, status: "pass" },
        social_compliance: { score: 94, status: "pass" },
        end_of_life: { score: 98, status: "pass" },
      },
      documents: [
        { name: "Certificado GOTS", type: "certification", status: "valid" },
        { name: "Análisis de materiales", type: "technical", status: "valid" },
        { name: "Reporte de impacto", type: "sustainability", status: "valid" },
      ],
    },
    {
      id: "AUD-2024-002",
      product_id: "GIA-CAR-2025-002",
      product_name: "Cardigan Artesanal",
      auditor: "Carlos Mendoza",
      audit_date: "2024-03-10",
      status: "in_progress",
      score: 88,
      findings: 4,
      critical_issues: 1,
      recommendations: 5,
      next_audit: "2024-09-10",
      categories: {
        product_identification: { score: 100, status: "pass" },
        material_composition: { score: 85, status: "warning" },
        manufacturing_process: { score: 90, status: "pass" },
        environmental_impact: { score: 82, status: "warning" },
        social_compliance: { score: 95, status: "pass" },
        end_of_life: { score: 88, status: "pass" },
      },
      documents: [
        { name: "Certificado Fair Trade", type: "certification", status: "valid" },
        { name: "Análisis de tintes", type: "technical", status: "pending" },
        { name: "Evaluación social", type: "social", status: "valid" },
      ],
    },
    {
      id: "AUD-2024-003",
      product_id: "GIA-PON-2025-003",
      product_name: "Poncho Tradicional",
      auditor: "Ana López",
      audit_date: "2024-03-05",
      status: "failed",
      score: 72,
      findings: 8,
      critical_issues: 3,
      recommendations: 10,
      next_audit: "2024-06-05",
      categories: {
        product_identification: { score: 95, status: "pass" },
        material_composition: { score: 70, status: "fail" },
        manufacturing_process: { score: 75, status: "warning" },
        environmental_impact: { score: 65, status: "fail" },
        social_compliance: { score: 80, status: "warning" },
        end_of_life: { score: 85, status: "pass" },
      },
      documents: [
        { name: "Certificado orgánico", type: "certification", status: "expired" },
        { name: "Análisis químico", type: "technical", status: "failed" },
        { name: "Evaluación ambiental", type: "sustainability", status: "pending" },
      ],
    },
  ]

  const dppRequirements = [
    {
      category: "Información del Producto",
      requirements: [
        { id: "PI-001", name: "Identificación única del producto", status: "compliant", coverage: 100 },
        { id: "PI-002", name: "Descripción detallada", status: "compliant", coverage: 98 },
        { id: "PI-003", name: "Especificaciones técnicas", status: "compliant", coverage: 96 },
        { id: "PI-004", name: "Instrucciones de uso", status: "compliant", coverage: 94 },
      ],
    },
    {
      category: "Sostenibilidad",
      requirements: [
        { id: "SU-001", name: "Huella de carbono", status: "compliant", coverage: 92 },
        { id: "SU-002", name: "Uso de agua", status: "compliant", coverage: 89 },
        { id: "SU-003", name: "Materiales sostenibles", status: "compliant", coverage: 95 },
        { id: "SU-004", name: "Energía renovable", status: "warning", coverage: 78 },
      ],
    },
    {
      category: "Cadena de Suministro",
      requirements: [
        { id: "SC-001", name: "Trazabilidad de materiales", status: "compliant", coverage: 91 },
        { id: "SC-002", name: "Proveedores certificados", status: "compliant", coverage: 87 },
        { id: "SC-003", name: "Condiciones laborales", status: "compliant", coverage: 94 },
        { id: "SC-004", name: "Origen geográfico", status: "warning", coverage: 82 },
      ],
    },
    {
      category: "Circularidad",
      requirements: [
        { id: "CI-001", name: "Diseño para reciclaje", status: "compliant", coverage: 96 },
        { id: "CI-002", name: "Contenido reciclado", status: "compliant", coverage: 88 },
        { id: "CI-003", name: "Programa de retorno", status: "compliant", coverage: 100 },
        { id: "CI-004", name: "Instrucciones de reciclaje", status: "compliant", coverage: 92 },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "compliant":
      case "pass":
      case "excellent":
        return "text-green-600 bg-green-100 border-green-200"
      case "in_progress":
      case "warning":
      case "good":
        return "text-yellow-600 bg-yellow-100 border-yellow-200"
      case "failed":
      case "non_compliant":
      case "fail":
      case "critical":
        return "text-red-600 bg-red-100 border-red-200"
      case "pending":
        return "text-blue-600 bg-blue-100 border-blue-200"
      default:
        return "text-gray-600 bg-gray-100 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "compliant":
      case "pass":
      case "excellent":
        return <CheckCircle className="w-4 h-4" />
      case "in_progress":
      case "warning":
      case "good":
        return <AlertTriangle className="w-4 h-4" />
      case "failed":
      case "non_compliant":
      case "fail":
      case "critical":
        return <XCircle className="w-4 h-4" />
      case "pending":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const filteredAudits = audits.filter((audit) => {
    const matchesStatus = filterStatus === "all" || audit.status === filterStatus
    const matchesSearch =
      audit.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      audit.product_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      audit.auditor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Auditoría DPP</h1>
            <p className="text-gray-600">Digital Product Passport - Compliance y Auditorías</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Importar
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nueva Auditoría
            </Button>
          </div>
        </div>

        {/* DPP Compliance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-800">Excelente</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-green-600">{dppCompliance.overall_score}%</p>
                <p className="text-sm font-medium text-green-900">Compliance General</p>
                <Progress value={dppCompliance.overall_score} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-800">Total</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-600">{dppCompliance.total_products}</p>
                <p className="text-sm font-medium text-gray-900">Productos Totales</p>
                <p className="text-xs text-gray-600">En sistema DPP</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-800">Conformes</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-green-600">{dppCompliance.compliant_products}</p>
                <p className="text-sm font-medium text-gray-900">Productos Conformes</p>
                <p className="text-xs text-gray-600">
                  {Math.round((dppCompliance.compliant_products / dppCompliance.total_products) * 100)}% del total
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Pendientes</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-yellow-600">{dppCompliance.pending_review}</p>
                <p className="text-sm font-medium text-gray-900">En Revisión</p>
                <p className="text-xs text-gray-600">Requieren atención</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="audits" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="audits">Auditorías</TabsTrigger>
            <TabsTrigger value="compliance">Compliance DPP</TabsTrigger>
            <TabsTrigger value="requirements">Requisitos</TabsTrigger>
            <TabsTrigger value="reports">Reportes</TabsTrigger>
          </TabsList>

          <TabsContent value="audits" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Buscar por producto, ID o auditor..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="completed">Completadas</SelectItem>
                      <SelectItem value="in_progress">En progreso</SelectItem>
                      <SelectItem value="failed">Fallidas</SelectItem>
                      <SelectItem value="pending">Pendientes</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Más filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Audits List */}
            <div className="space-y-4">
              {filteredAudits.map((audit) => (
                <Card key={audit.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <FileText className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{audit.product_name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>ID: {audit.product_id}</span>
                            <span>•</span>
                            <span>Auditor: {audit.auditor}</span>
                            <span>•</span>
                            <span>{audit.audit_date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(audit.status)}>
                          {getStatusIcon(audit.status)}
                          <span className="ml-1 capitalize">
                            {audit.status === "completed"
                              ? "Completada"
                              : audit.status === "in_progress"
                                ? "En progreso"
                                : audit.status === "failed"
                                  ? "Fallida"
                                  : "Pendiente"}
                          </span>
                        </Badge>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">{audit.score}</p>
                          <p className="text-xs text-gray-600">Puntuación</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-blue-600">{audit.findings}</p>
                        <p className="text-xs text-gray-600">Hallazgos</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-red-600">{audit.critical_issues}</p>
                        <p className="text-xs text-gray-600">Críticos</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-orange-600">{audit.recommendations}</p>
                        <p className="text-xs text-gray-600">Recomendaciones</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-lg font-bold text-purple-600">{audit.next_audit}</p>
                        <p className="text-xs text-gray-600">Próxima auditoría</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver detalles
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Descargar
                        </Button>
                        {audit.status === "failed" && (
                          <Button variant="outline" size="sm">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Re-auditar
                          </Button>
                        )}
                      </div>
                      <Progress value={audit.score} className="w-32 h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(dppCompliance.categories).map(([key, category]) => (
                <Card key={key} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {key === "product_info" && <Package className="w-5 h-5 text-blue-600" />}
                        {key === "sustainability" && <Leaf className="w-5 h-5 text-green-600" />}
                        {key === "supply_chain" && <Globe className="w-5 h-5 text-purple-600" />}
                        {key === "circularity" && <RefreshCw className="w-5 h-5 text-teal-600" />}
                        {key === "social_impact" && <Users className="w-5 h-5 text-orange-600" />}
                        {key === "certifications" && <Award className="w-5 h-5 text-yellow-600" />}
                        <h4 className="font-medium capitalize">{key.replace("_", " ")}</h4>
                      </div>
                      <Badge className={getStatusColor(category.status)}>{getStatusIcon(category.status)}</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold">{category.score}%</span>
                        <span className="text-sm text-gray-600">Compliance</span>
                      </div>
                      <Progress value={category.score} className="h-3" />
                      <p className="text-xs text-gray-600">
                        {category.status === "excellent"
                          ? "Excelente cumplimiento"
                          : category.status === "good"
                            ? "Buen cumplimiento"
                            : category.status === "warning"
                              ? "Requiere atención"
                              : "Crítico"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requirements" className="space-y-6">
            <div className="space-y-6">
              {dppRequirements.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category.category === "Información del Producto" && <Package className="w-5 h-5" />}
                      {category.category === "Sostenibilidad" && <Leaf className="w-5 h-5" />}
                      {category.category === "Cadena de Suministro" && <Globe className="w-5 h-5" />}
                      {category.category === "Circularidad" && <RefreshCw className="w-5 h-5" />}
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.requirements.map((req) => (
                        <div key={req.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <Badge className={getStatusColor(req.status)}>{getStatusIcon(req.status)}</Badge>
                            <div>
                              <h4 className="font-medium">{req.name}</h4>
                              <p className="text-sm text-gray-600">ID: {req.id}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">{req.coverage}%</p>
                            <p className="text-xs text-gray-600">Cobertura</p>
                            <Progress value={req.coverage} className="w-24 h-2 mt-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Reporte de Compliance</h3>
                  <p className="text-sm text-gray-600 mb-4">Estado general de cumplimiento DPP</p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Generar
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-semibold mb-2">Reporte de Auditorías</h3>
                  <p className="text-sm text-gray-600 mb-4">Resumen de todas las auditorías</p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Generar
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-12 h-12 mx-auto text-orange-600 mb-4" />
                  <h3 className="font-semibold mb-2">Reporte de No Conformidades</h3>
                  <p className="text-sm text-gray-600 mb-4">Productos que requieren atención</p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Generar
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2">Reporte Mensual</h3>
                  <p className="text-sm text-gray-600 mb-4">Resumen mensual de actividades</p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Generar
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto text-yellow-600 mb-4" />
                  <h3 className="font-semibold mb-2">Reporte de Certificaciones</h3>
                  <p className="text-sm text-gray-600 mb-4">Estado de certificaciones DPP</p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Generar
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Database className="w-12 h-12 mx-auto text-teal-600 mb-4" />
                  <h3 className="font-semibold mb-2">Reporte Personalizado</h3>
                  <p className="text-sm text-gray-600 mb-4">Crear reporte con filtros específicos</p>
                  <Button className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Crear
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
