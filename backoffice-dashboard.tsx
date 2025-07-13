"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  Package,
  AlertTriangle,
  TrendingUp,
  Settings,
  Shield,
  Leaf,
  Award,
  QrCode,
  FileText,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Trash2,
  Eye,
  Target,
  Activity,
  Recycle,
  Factory,
  Truck,
  Building,
  Key,
} from "lucide-react"

// Import specialized modules
import ESGDashboard from "./esg-dashboard"
import AuditDPPModule from "./audit-dpp-module"
import EcodesignModule from "./ecodesign-module"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    items: [
      { title: "Resumen General", url: "#", isActive: true, action: "dashboard" },
      { title: "Métricas en Tiempo Real", url: "#", action: "metrics" },
      { title: "Alertas y Notificaciones", url: "#", action: "alerts" },
    ],
  },
  {
    title: "Productos",
    icon: Package,
    items: [
      { title: "Gestión de Productos", url: "#", action: "products" },
      { title: "Trazabilidad", url: "#", action: "traceability" },
      { title: "Códigos QR", url: "#", action: "qr-codes" },
      { title: "Inventario", url: "#", action: "inventory" },
    ],
  },
  {
    title: "Sostenibilidad",
    icon: Leaf,
    items: [
      { title: "ESG Dashboard", url: "#", action: "esg" },
      { title: "Ecodiseño", url: "#", action: "ecodesign" },
      { title: "Circularidad", url: "#", action: "circularity" },
      { title: "Certificaciones", url: "#", action: "certifications" },
    ],
  },
  {
    title: "Auditorías",
    icon: Shield,
    items: [
      { title: "DPP Compliance", url: "#", action: "dpp" },
      { title: "Reportes", url: "#", action: "reports" },
      { title: "Certificaciones", url: "#", action: "audit-certs" },
    ],
  },
  {
    title: "Usuarios",
    icon: Users,
    items: [
      { title: "Gestión de Usuarios", url: "#", action: "user-management" },
      { title: "Roles y Permisos", url: "#", action: "roles" },
      { title: "Actividad", url: "#", action: "activity" },
    ],
  },
  {
    title: "Sistema",
    icon: Settings,
    items: [
      { title: "Configuración", url: "#", action: "config" },
      { title: "Integraciones", url: "#", action: "integrations" },
      { title: "Logs", url: "#", action: "logs" },
    ],
  },
]

export default function BackofficeDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentView, setCurrentView] = useState("dashboard")
  const [collapsedGroups, setCollapsedGroups] = useState<string[]>([])

  const toggleGroup = (groupTitle: string) => {
    setCollapsedGroups((prev) =>
      prev.includes(groupTitle) ? prev.filter((g) => g !== groupTitle) : [...prev, groupTitle],
    )
  }

  const handleMenuClick = (action: string) => {
    setCurrentView(action)
  }

  const kpis = {
    productos_activos: 1247,
    productos_mes: 89,
    usuarios_activos: 3421,
    usuarios_mes: 156,
    alertas_pendientes: 7,
    certificaciones_vencen: 3,
    co2_ahorrado: 2847,
    agua_ahorrada: 15420,
  }

  const alertas = [
    {
      id: 1,
      tipo: "error",
      titulo: "Certificación GOTS vence en 15 días",
      descripcion: "Renovar certificación para mantener compliance",
      fecha: "2024-01-15",
      prioridad: "alta",
    },
    {
      id: 2,
      tipo: "warning",
      titulo: "Stock bajo en Lana Merino",
      descripcion: "Quedan 45kg en inventario",
      fecha: "2024-01-14",
      prioridad: "media",
    },
    {
      id: 3,
      tipo: "info",
      titulo: "Nueva integración disponible",
      descripcion: "Blockchain Ethereum 2.0 lista para activar",
      fecha: "2024-01-13",
      prioridad: "baja",
    },
  ]

  const productos_recientes = [
    {
      id: "GIA-2024-001",
      nombre: "Sweater Artesanal Premium",
      estado: "activo",
      fecha_creacion: "2024-01-15",
      qr_generado: true,
      certificaciones: 3,
    },
    {
      id: "GIA-2024-002",
      nombre: "Cardigan Sostenible",
      estado: "pendiente",
      fecha_creacion: "2024-01-14",
      qr_generado: false,
      certificaciones: 2,
    },
    {
      id: "GIA-2024-003",
      nombre: "Poncho Tradicional",
      estado: "activo",
      fecha_creacion: "2024-01-13",
      qr_generado: true,
      certificaciones: 4,
    },
  ]

  const usuarios_recientes = [
    {
      id: "USR-001",
      nombre: "María González",
      email: "maria@example.com",
      rol: "Cliente",
      estado: "activo",
      ultimo_acceso: "2024-01-15",
    },
    {
      id: "USR-002",
      nombre: "Carlos Mendoza",
      email: "carlos@example.com",
      rol: "Auditor",
      estado: "activo",
      ultimo_acceso: "2024-01-14",
    },
    {
      id: "USR-003",
      nombre: "Ana López",
      email: "ana@example.com",
      rol: "Artesana",
      estado: "pendiente",
      ultimo_acceso: "2024-01-13",
    },
  ]

  const renderMainContent = () => {
    switch (currentView) {
      case "esg":
        return <ESGDashboard />
      case "dpp":
        return <AuditDPPModule />
      case "ecodesign":
        return <EcodesignModule />
      case "products":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Gestión de Productos</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Producto
              </Button>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {productos_recientes.map((producto) => (
                    <div key={producto.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{producto.nombre}</h4>
                        <p className="text-sm text-gray-500">ID: {producto.id}</p>
                        <Badge
                          className={
                            producto.estado === "activo"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {producto.estado}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "user-management":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Usuario
              </Button>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {usuarios_recientes.map((usuario) => (
                    <div key={usuario.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{usuario.nombre}</h4>
                        <p className="text-sm text-gray-500">{usuario.email}</p>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{usuario.rol}</Badge>
                          <Badge
                            className={
                              usuario.estado === "activo"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {usuario.estado}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Key className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "traceability":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Trazabilidad de Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Factory className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Origen de Materiales</h3>
                  <p className="text-sm text-gray-600">Seguimiento desde la fuente</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-semibold mb-2">Cadena de Suministro</h3>
                  <p className="text-sm text-gray-600">Monitoreo de transporte</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Building className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2">Proceso de Manufactura</h3>
                  <p className="text-sm text-gray-600">Control de calidad</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "qr-codes":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Gestión de Códigos QR</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Generar QR
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos_recientes.map((producto) => (
                <Card key={producto.id}>
                  <CardContent className="p-6 text-center">
                    <QrCode className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="font-semibold mb-2">{producto.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-4">ID: {producto.id}</p>
                    <Badge
                      className={
                        producto.qr_generado ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }
                    >
                      {producto.qr_generado ? "QR Generado" : "Pendiente"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      case "inventory":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Inventario</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Package className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-gray-600">Productos Totales</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-2xl font-bold">1,156</p>
                  <p className="text-sm text-gray-600">En Stock</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
                  <p className="text-2xl font-bold">67</p>
                  <p className="text-sm text-gray-600">Stock Bajo</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <XCircle className="w-8 h-8 mx-auto text-red-600 mb-2" />
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-gray-600">Agotado</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "metrics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Métricas en Tiempo Real</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Actividad de Usuarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <Activity className="w-16 h-16 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Productos Más Escaneados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "alerts":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Alertas y Notificaciones</h2>
            <div className="space-y-4">
              {alertas.map((alerta) => (
                <Card key={alerta.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {alerta.tipo === "error" ? (
                        <XCircle className="w-6 h-6 text-red-500 mt-1" />
                      ) : alerta.tipo === "warning" ? (
                        <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1" />
                      ) : (
                        <CheckCircle className="w-6 h-6 text-blue-500 mt-1" />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold">{alerta.titulo}</h3>
                        <p className="text-gray-600 mt-1">{alerta.descripcion}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">{alerta.fecha}</span>
                          <Badge
                            className={
                              alerta.prioridad === "alta"
                                ? "bg-red-100 text-red-800"
                                : alerta.prioridad === "media"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                            }
                          >
                            {alerta.prioridad}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Resolver
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      case "circularity":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Programa de Circularidad</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Recycle className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-semibold mb-2">Productos Reciclados</h3>
                  <p className="text-2xl font-bold">156</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Meta Anual</h3>
                  <p className="text-2xl font-bold">500</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2">Progreso</h3>
                  <p className="text-2xl font-bold">31%</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "certifications":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Certificaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["GOTS", "Fair Trade", "OEKO-TEX", "Carbon Neutral", "B Corp", "Cradle to Cradle"].map((cert) => (
                <Card key={cert}>
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto text-yellow-600 mb-4" />
                    <h3 className="font-semibold mb-2">{cert}</h3>
                    <Badge className="bg-green-100 text-green-800">Activa</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      case "reports":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Reportes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Reporte Mensual</h3>
                  <p className="text-sm text-gray-600">Resumen de actividades</p>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <h3 className="font-semibold mb-2">Analytics</h3>
                  <p className="text-sm text-gray-600">Métricas detalladas</p>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2">Compliance</h3>
                  <p className="text-sm text-gray-600">Estado de cumplimiento</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "audit-certs":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Certificaciones de Auditoría</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certificaciones Activas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["ISO 14001", "SA8000", "FSC", "PEFC"].map((cert) => (
                      <div key={cert} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">{cert}</span>
                        <Badge className="bg-green-100 text-green-800">Válida</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Próximas Renovaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["GOTS - 30 días", "Fair Trade - 45 días", "B Corp - 90 días"].map((cert) => (
                      <div key={cert} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <span className="font-medium">{cert}</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "roles":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Roles y Permisos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Administrador", "Auditor", "Artesana", "Cliente"].\
