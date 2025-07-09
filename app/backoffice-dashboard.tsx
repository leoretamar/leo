"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import {
  BarChart3,
  Users,
  Package,
  AlertTriangle,
  TrendingUp,
  Search,
  Download,
  Settings,
  Bell,
  Shield,
  Leaf,
  Award,
  QrCode,
  FileText,
  Database,
  Zap,
  Globe,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Eye,
  Edit,
  Trash2,
  RefreshCw,
  Send,
  MapPin,
  User,
  Recycle,
  Monitor,
  Activity,
  DollarSign,
  ChevronDown,
  ChevronRight,
  Clock,
  Lock,
  Cog,
  Link,
  FileBarChart,
  Smartphone,
  Home,
  Star,
  Share2,
  Heart,
} from "lucide-react"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    items: [
      { title: "Resumen General", url: "dashboard", key: "dashboard" },
      { title: "Métricas en Tiempo Real", url: "metricas-tiempo-real", key: "real-time-metrics" },
      { title: "Alertas y Notificaciones", url: "alertas", key: "alerts" },
    ],
  },
  {
    title: "Productos",
    icon: Package,
    items: [
      { title: "Gestión de Productos", url: "productos", key: "products" },
      { title: "Trazabilidad", url: "trazabilidad", key: "traceability" },
      { title: "Códigos QR", url: "qr-codes", key: "qr-codes" },
      { title: "Inventario", url: "inventario", key: "inventory" },
    ],
  },
  {
    title: "App Móvil",
    icon: Smartphone,
    items: [
      { title: "Vista Previa", url: "mobile-preview", key: "mobile-preview" },
      { title: "Configuración", url: "mobile-config", key: "mobile-config" },
      { title: "Notificaciones Push", url: "push-notifications", key: "push-notifications" },
      { title: "Analytics Móvil", url: "mobile-analytics", key: "mobile-analytics" },
    ],
  },
  {
    title: "Sostenibilidad",
    icon: Leaf,
    items: [
      { title: "ESG Dashboard", url: "esg", key: "esg" },
      { title: "Ecodiseño", url: "ecodesign", key: "ecodesign" },
      { title: "Circularidad", url: "circularidad", key: "circularity" },
      { title: "Certificaciones", url: "certificaciones", key: "certifications" },
    ],
  },
  {
    title: "Auditorías",
    icon: Shield,
    items: [
      { title: "DPP Compliance", url: "dpp-compliance", key: "dpp" },
      { title: "Reportes", url: "reportes", key: "reports" },
      { title: "Certificaciones", url: "audit-certifications", key: "audit-certs" },
    ],
  },
  {
    title: "Usuarios",
    icon: Users,
    items: [
      { title: "Gestión de Usuarios", url: "user-management", key: "users" },
      { title: "Roles y Permisos", url: "roles", key: "roles" },
      { title: "Actividad", url: "user-activity", key: "user-activity" },
    ],
  },
  {
    title: "Sistema",
    icon: Settings,
    items: [
      { title: "Configuración", url: "configuracion", key: "config" },
      { title: "Integraciones", url: "integraciones", key: "integrations" },
      { title: "Logs", url: "logs", key: "logs" },
    ],
  },
]

export default function BackofficeDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentView, setCurrentView] = useState("dashboard")
  const [selectedTimeRange, setSelectedTimeRange] = useState("ultimo-mes")
  const [showNotifications, setShowNotifications] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState("todos")
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    Dashboard: false,
    Productos: true,
    "App Móvil": true,
    Sostenibilidad: true,
    Auditorías: true,
    Usuarios: true,
    Sistema: true,
  })

  const toggleSection = (sectionTitle: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }))
  }

  const handleMenuItemClick = (key: string) => {
    setCurrentView(key)
    setSelectedProduct(null)
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
    revenue_mes: 45600,
    conversion_rate: 3.2,
    nps_score: 8.7,
    uptime: 99.9,
    mobile_users: 2156,
    app_downloads: 5432,
    qr_scans_mobile: 1890,
    push_notifications_sent: 12450,
  }

  const alertas = [
    {
      id: 1,
      tipo: "error",
      titulo: "Certificación GOTS vence en 15 días",
      descripcion: "Renovar certificación para mantener compliance",
      fecha: "2024-01-15",
      prioridad: "alta",
      modulo: "Certificaciones",
      accion_requerida: "Contactar auditor",
    },
    {
      id: 2,
      tipo: "warning",
      titulo: "Stock bajo en Lana Merino",
      descripcion: "Quedan 45kg en inventario",
      fecha: "2024-01-14",
      prioridad: "media",
      modulo: "Inventario",
      accion_requerida: "Realizar pedido",
    },
    {
      id: 3,
      tipo: "info",
      titulo: "Nueva integración disponible",
      descripcion: "Blockchain Ethereum 2.0 lista para activar",
      fecha: "2024-01-13",
      prioridad: "baja",
      modulo: "Sistema",
      accion_requerida: "Revisar documentación",
    },
    {
      id: 4,
      tipo: "error",
      titulo: "Fallo en sincronización blockchain",
      descripcion: "3 transacciones pendientes de confirmación",
      fecha: "2024-01-15",
      prioridad: "alta",
      modulo: "Blockchain",
      accion_requerida: "Reintentar transacciones",
    },
    {
      id: 5,
      tipo: "warning",
      titulo: "Auditoría DPP pendiente",
      descripcion: "5 productos requieren auditoría para DPP",
      fecha: "2024-01-14",
      prioridad: "media",
      modulo: "Auditorías",
      accion_requerida: "Programar auditoría",
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
      artesano: "María González",
      ubicacion: "Montevideo",
      progreso: 100,
      precio: 120,
      stock: 15,
    },
    {
      id: "GIA-2024-002",
      nombre: "Cardigan Sostenible",
      estado: "pendiente",
      fecha_creacion: "2024-01-14",
      qr_generado: false,
      certificaciones: 2,
      artesano: "Ana Rodríguez",
      ubicacion: "Punta del Este",
      progreso: 75,
      precio: 95,
      stock: 8,
    },
    {
      id: "GIA-2024-003",
      nombre: "Poncho Tradicional",
      estado: "activo",
      fecha_creacion: "2024-01-13",
      qr_generado: true,
      certificaciones: 4,
      artesano: "Carlos Méndez",
      ubicacion: "Colonia",
      progreso: 100,
      precio: 85,
      stock: 22,
    },
    {
      id: "GIA-2024-004",
      nombre: "Bufanda Alpaca",
      estado: "revision",
      fecha_creacion: "2024-01-12",
      qr_generado: false,
      certificaciones: 1,
      artesano: "Laura Silva",
      ubicacion: "Maldonado",
      progreso: 90,
      precio: 65,
      stock: 12,
    },
  ]

  const actividad_reciente = [
    {
      id: 1,
      usuario: "Admin Sistema",
      accion: "Creó producto",
      detalle: "Sweater Artesanal Premium",
      timestamp: "2024-01-15 14:30",
      tipo: "create",
    },
    {
      id: 2,
      usuario: "María González",
      accion: "Actualizó trazabilidad",
      detalle: "Cardigan Sostenible - Etapa tejido",
      timestamp: "2024-01-15 13:45",
      tipo: "update",
    },
    {
      id: 3,
      usuario: "Sistema Blockchain",
      accion: "Registró transacción",
      detalle: "Hash: 0x1a2b3c4d...",
      timestamp: "2024-01-15 13:20",
      tipo: "blockchain",
    },
    {
      id: 4,
      usuario: "Auditor Externo",
      accion: "Completó auditoría",
      detalle: "Poncho Tradicional - GOTS aprobado",
      timestamp: "2024-01-15 12:15",
      tipo: "audit",
    },
    {
      id: 5,
      usuario: "Cliente Final",
      accion: "Escaneó QR",
      detalle: "Sweater Artesanal Premium",
      timestamp: "2024-01-15 11:30",
      tipo: "scan",
    },
  ]

  const metricas_tiempo_real = {
    productos_creados_hoy: 12,
    qr_escaneados_hoy: 89,
    usuarios_conectados: 45,
    transacciones_blockchain: 156,
    certificaciones_emitidas: 8,
    devoluciones_epr: 3,
  }

  const mobile_analytics = {
    usuarios_activos_diarios: 1250,
    sesiones_promedio: 3.2,
    tiempo_sesion_promedio: "4:32",
    productos_escaneados: 890,
    conversiones_app: 156,
    rating_app: 4.7,
    descargas_mes: 432,
    notificaciones_abiertas: "68%",
  }

  const handleCreateProduct = () => {
    alert("Redirigiendo a formulario de creación de producto...")
    setCurrentView("create-product")
  }

  const handleGenerateQR = (productId?: string) => {
    if (productId) {
      alert(`Generando QR para producto ${productId}...`)
    } else {
      alert("Abriendo generador masivo de QR...")
    }
  }

  const handleExportReport = () => {
    alert("Generando reporte PDF...")
    setTimeout(() => {
      alert("Reporte descargado exitosamente")
    }, 2000)
  }

  const handleResolveAlert = (alertId: number) => {
    alert(`Resolviendo alerta ${alertId}...`)
  }

  const handleViewProduct = (productId: string) => {
    setSelectedProduct(productId)
    setCurrentView("product-detail")
  }

  const handleEditProduct = (productId: string) => {
    alert(`Editando producto ${productId}...`)
    setCurrentView("edit-product")
  }

  const handleDeleteProduct = (productId: string) => {
    if (confirm(`¿Estás seguro de eliminar el producto ${productId}?`)) {
      alert(`Producto ${productId} eliminado`)
    }
  }

  const handleRefreshData = () => {
    alert("Actualizando datos en tiempo real...")
    setTimeout(() => {
      alert("Datos actualizados")
    }, 1500)
  }

  const getActivityIcon = (tipo: string) => {
    switch (tipo) {
      case "create":
        return <Plus className="w-4 h-4 text-green-500" />
      case "update":
        return <Edit className="w-4 h-4 text-blue-500" />
      case "blockchain":
        return <Database className="w-4 h-4 text-purple-500" />
      case "audit":
        return <Shield className="w-4 h-4 text-orange-500" />
      case "scan":
        return <QrCode className="w-4 h-4 text-gray-500" />
      default:
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (estado: string) => {
    switch (estado) {
      case "activo":
        return <Badge className="bg-green-100 text-green-800">Activo</Badge>
      case "pendiente":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>
      case "revision":
        return <Badge className="bg-blue-100 text-blue-800">En Revisión</Badge>
      case "inactivo":
        return <Badge className="bg-gray-100 text-gray-800">Inactivo</Badge>
      default:
        return <Badge variant="outline">{estado}</Badge>
    }
  }

  const getCurrentViewTitle = () => {
    const allItems = sidebarItems.flatMap((section) => section.items)
    const currentItem = allItems.find((item) => item.key === currentView)
    return currentItem?.title || "Dashboard"
  }

  const renderMainContent = () => {
    switch (currentView) {
      case "dashboard":
        return renderDashboardContent()
      case "real-time-metrics":
        return renderRealTimeMetrics()
      case "alerts":
        return renderAlertsContent()
      case "products":
        return renderProductsContent()
      case "traceability":
        return renderTraceabilityContent()
      case "qr-codes":
        return renderQRCodesContent()
      case "inventory":
        return renderInventoryContent()
      case "mobile-preview":
        return renderMobilePreviewContent()
      case "mobile-config":
        return renderMobileConfigContent()
      case "push-notifications":
        return renderPushNotificationsContent()
      case "mobile-analytics":
        return renderMobileAnalyticsContent()
      case "esg":
        return renderESGContent()
      case "ecodesign":
        return renderEcodesignContent()
      case "circularity":
        return renderCircularityContent()
      case "certifications":
        return renderCertificationsContent()
      case "dpp":
        return renderDPPContent()
      case "reports":
        return renderReportsContent()
      case "audit-certs":
        return renderAuditCertificationsContent()
      case "users":
        return renderUsersContent()
      case "roles":
        return renderRolesContent()
      case "user-activity":
        return renderUserActivityContent()
      case "config":
        return renderConfigContent()
      case "integrations":
        return renderIntegrationsContent()
      case "logs":
        return renderLogsContent()
      case "product-detail":
        return renderProductDetail()
      default:
        return renderDashboardContent()
    }
  }

  const renderDashboardContent = () => (
    <>
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Productos Activos</p>
                <p className="text-2xl font-bold text-gray-900">{kpis.productos_activos.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-green-600">+{kpis.productos_mes} este mes</span>
                </div>
              </div>
              <Package className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Usuarios Activos</p>
                <p className="text-2xl font-bold text-gray-900">{kpis.usuarios_activos.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-green-600">+{kpis.usuarios_mes} este mes</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue Mensual</p>
                <p className="text-2xl font-bold text-gray-900">${kpis.revenue_mes.toLocaleString()}</p>
                <div className="flex items-center gap-1 text-sm">
                  <DollarSign className="w-3 h-3 text-green-500" />
                  <span className="text-green-600">+{kpis.conversion_rate}% conversión</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Alertas Pendientes</p>
                <p className="text-2xl font-bold text-gray-900">{kpis.alertas_pendientes}</p>
                <div className="flex items-center gap-1 text-sm">
                  <AlertTriangle className="w-3 h-3 text-orange-500" />
                  <span className="text-orange-600">
                    {alertas.filter((a) => a.prioridad === "alta").length} críticas
                  </span>
                </div>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métricas en Tiempo Real */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Métricas en Tiempo Real
            <Badge className="bg-green-100 text-green-800 ml-2">Live</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Plus className="w-6 h-6 mx-auto text-blue-600 mb-2" />
              <p className="text-xl font-bold text-blue-600">{metricas_tiempo_real.productos_creados_hoy}</p>
              <p className="text-xs text-blue-700">Productos Hoy</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <QrCode className="w-6 h-6 mx-auto text-green-600 mb-2" />
              <p className="text-xl font-bold text-green-600">{metricas_tiempo_real.qr_escaneados_hoy}</p>
              <p className="text-xs text-green-700">QR Escaneados</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Users className="w-6 h-6 mx-auto text-purple-600 mb-2" />
              <p className="text-xl font-bold text-purple-600">{metricas_tiempo_real.usuarios_conectados}</p>
              <p className="text-xs text-purple-700">Conectados</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Database className="w-6 h-6 mx-auto text-orange-600 mb-2" />
              <p className="text-xl font-bold text-orange-600">{metricas_tiempo_real.transacciones_blockchain}</p>
              <p className="text-xs text-orange-700">Blockchain Tx</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Award className="w-6 h-6 mx-auto text-yellow-600 mb-2" />
              <p className="text-xl font-bold text-yellow-600">{metricas_tiempo_real.certificaciones_emitidas}</p>
              <p className="text-xs text-yellow-700">Certificaciones</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Recycle className="w-6 h-6 mx-auto text-red-600 mb-2" />
              <p className="text-xl font-bold text-red-600">{metricas_tiempo_real.devoluciones_epr}</p>
              <p className="text-xs text-red-700">Devoluciones</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Métricas de Producción</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedTimeRange.replace("-", " ")}
                </Button>
                <Button variant="outline" size="sm" onClick={handleExportReport}>
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 font-medium">Gráfico de métricas de producción</p>
                  <p className="text-sm text-gray-400">Productos creados, QRs generados, certificaciones</p>
                  <div className="flex justify-center gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Productos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>QR Codes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Certificaciones</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Productos Recientes</CardTitle>
              <div className="flex gap-2">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="activo">Activos</SelectItem>
                    <SelectItem value="pendiente">Pendientes</SelectItem>
                    <SelectItem value="revision">En Revisión</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={handleCreateProduct}>
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {productos_recientes
                  .filter((producto) => filterStatus === "todos" || producto.estado === filterStatus)
                  .map((producto) => (
                    <div
                      key={producto.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{producto.nombre}</h4>
                          <p className="text-sm text-gray-500">ID: {producto.id}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {getStatusBadge(producto.estado)}
                            {producto.qr_generado && (
                              <Badge variant="outline" className="text-xs">
                                <QrCode className="w-3 h-3 mr-1" />
                                QR
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              <Award className="w-3 h-3 mr-1" />
                              {producto.certificaciones}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <DollarSign className="w-3 h-3 mr-1" />${producto.precio}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {producto.artesano}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {producto.ubicacion}
                            </div>
                            <div className="flex items-center gap-1">
                              <Package className="w-3 h-3" />
                              Stock: {producto.stock}
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span>Progreso</span>
                              <span>{producto.progreso}%</span>
                            </div>
                            <Progress value={producto.progreso} className="h-1" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{producto.fecha_creacion}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" onClick={() => handleViewProduct(producto.id)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleEditProduct(producto.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleGenerateQR(producto.id)}>
                            <QrCode className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(producto.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Alertas Críticas
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-auto"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alertas.slice(0, showNotifications ? alertas.length : 3).map((alerta) => (
                  <div
                    key={alerta.id}
                    className={`p-3 rounded-lg border-l-4 ${
                      alerta.tipo === "error"
                        ? "bg-red-50 border-red-500"
                        : alerta.tipo === "warning"
                          ? "bg-yellow-50 border-yellow-500"
                          : "bg-blue-50 border-blue-500"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {alerta.tipo === "error" ? (
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      ) : alerta.tipo === "warning" ? (
                        <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{alerta.titulo}</h4>
                        <p className="text-xs text-gray-600 mt-1">{alerta.descripcion}</p>
                        <p className="text-xs text-gray-500 mt-1">Módulo: {alerta.modulo}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{alerta.fecha}</span>
                          <div className="flex gap-1">
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                alerta.prioridad === "alta"
                                  ? "border-red-200 text-red-700"
                                  : alerta.prioridad === "media"
                                    ? "border-yellow-200 text-yellow-700"
                                    : "border-blue-200 text-blue-700"
                              }`}
                            >
                              {alerta.prioridad}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2"
                              onClick={() => handleResolveAlert(alerta.id)}
                            >
                              Resolver
                            </Button>
                          </div>
                        </div>
                        <p className="text-xs text-blue-600 mt-1 font-medium">{alerta.accion_requerida}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {actividad_reciente.slice(0, 5).map((actividad) => (
                  <div key={actividad.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    {getActivityIcon(actividad.tipo)}
                    <div className="flex-1">
                      <p className="font-medium text-sm">{actividad.accion}</p>
                      <p className="text-xs text-gray-600">{actividad.detalle}</p>
                      <p className="text-xs text-gray-500">{actividad.timestamp}</p>
                    </div>
                    <span className="text-xs text-gray-500">{actividad.usuario}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estado del Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Base de Datos</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Operativo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-500" />
                    <span className="text-sm">API Gateway</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Operativo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Blockchain</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Mantenimiento</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Generador QR</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Operativo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Uptime</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{kpis.uptime}%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full justify-start bg-transparent" variant="outline" onClick={handleCreateProduct}>
                  <Package className="w-4 h-4 mr-2" />
                  Crear Producto
                </Button>
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={() => handleGenerateQR()}
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Generar QR
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline" onClick={handleExportReport}>
                  <FileText className="w-4 h-4 mr-2" />
                  Nuevo Reporte
                </Button>
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={() => handleMenuItemClick("users")}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Gestionar Usuarios
                </Button>
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={() => handleMenuItemClick("dpp")}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Auditorías
                </Button>
                <Button
                  className="w-full justify-start bg-transparent"
                  variant="outline"
                  onClick={() => handleMenuItemClick("esg")}
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  ESG Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )

  const renderRealTimeMetrics = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Métricas en Tiempo Real
            <Badge className="bg-green-100 text-green-800 ml-2">Live</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-blue-900">Productos</h3>
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Creados hoy:</span>
                  <span className="font-bold text-blue-900">{metricas_tiempo_real.productos_creados_hoy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-blue-700">Total activos:</span>
                  <span className="font-bold text-blue-900">{kpis.productos_activos}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-green-900">QR Codes</h3>
                <QrCode className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Escaneados hoy:</span>
                  <span className="font-bold text-green-900">{metricas_tiempo_real.qr_escaneados_hoy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-green-700">Generados:</span>
                  <span className="font-bold text-green-900">1,156</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-purple-900">Usuarios</h3>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-purple-700">Conectados:</span>
                  <span className="font-bold text-purple-900">{metricas_tiempo_real.usuarios_conectados}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-purple-700">Total activos:</span>
                  <span className="font-bold text-purple-900">{kpis.usuarios_activos}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Actividad del Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Gráfico de actividad en tiempo real</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderAlertsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Todas las Alertas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertas.map((alerta) => (
              <div
                key={alerta.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alerta.tipo === "error"
                    ? "bg-red-50 border-red-500"
                    : alerta.tipo === "warning"
                      ? "bg-yellow-50 border-yellow-500"
                      : "bg-blue-50 border-blue-500"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {alerta.tipo === "error" ? (
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    ) : alerta.tipo === "warning" ? (
                      <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-medium text-lg">{alerta.titulo}</h4>
                      <p className="text-gray-600 mt-1">{alerta.descripcion}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <span>Módulo: {alerta.modulo}</span>
                        <span>Fecha: {alerta.fecha}</span>
                      </div>
                      <p className="text-blue-600 mt-2 font-medium">Acción requerida: {alerta.accion_requerida}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`${
                        alerta.prioridad === "alta"
                          ? "border-red-200 text-red-700"
                          : alerta.prioridad === "media"
                            ? "border-yellow-200 text-yellow-700"
                            : "border-blue-200 text-blue-700"
                      }`}
                    >
                      {alerta.prioridad}
                    </Badge>
                    <Button onClick={() => handleResolveAlert(alerta.id)}>Resolver</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProductsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Gestión de Productos
          </CardTitle>
          <Button onClick={handleCreateProduct}>
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Producto
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Artesano</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productos_recientes.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{producto.nombre}</p>
                      <p className="text-sm text-gray-500">{producto.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(producto.estado)}</TableCell>
                  <TableCell>{producto.artesano}</TableCell>
                  <TableCell>{producto.ubicacion}</TableCell>
                  <TableCell>${producto.precio}</TableCell>
                  <TableCell>{producto.stock}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" onClick={() => handleViewProduct(producto.id)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleEditProduct(producto.id)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleGenerateQR(producto.id)}>
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
    </div>
  )

  const renderTraceabilityContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Trazabilidad de Productos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Seleccionar Producto</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Buscar producto..." />
                </SelectTrigger>
                <SelectContent>
                  {productos_recientes.map((producto) => (
                    <SelectItem key={producto.id} value={producto.id}>
                      {producto.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-500">Mapa de trazabilidad</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderQRCodesContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <QrCode className="w-5 h-5" />
            Gestión de Códigos QR
          </CardTitle>
          <Button onClick={() => handleGenerateQR()}>
            <Plus className="w-4 h-4 mr-2" />
            Generar QR
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {productos_recientes.map((producto) => (
              <div key={producto.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{producto.nombre}</h4>
                  {producto.qr_generado ? (
                    <Badge className="bg-green-100 text-green-800">Generado</Badge>
                  ) : (
                    <Badge className="bg-gray-100 text-gray-800">Pendiente</Badge>
                  )}
                </div>
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <QrCode className="w-16 h-16 text-gray-400" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Download className="w-4 h-4 mr-1" />
                    Descargar
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleGenerateQR(producto.id)}>
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderInventoryContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Control de Inventario
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Stock Total</h3>
              <p className="text-2xl font-bold text-blue-600">
                {productos_recientes.reduce((acc, p) => acc + p.stock, 0)} unidades
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Stock Bajo</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {productos_recientes.filter((p) => p.stock < 10).length} productos
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Valor Total</h3>
              <p className="text-2xl font-bold text-green-600">
                ${productos_recientes.reduce((acc, p) => acc + p.precio * p.stock, 0).toLocaleString()}
              </p>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Stock Actual</TableHead>
                <TableHead>Precio Unitario</TableHead>
                <TableHead>Valor Total</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productos_recientes.map((producto) => (
                <TableRow key={producto.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{producto.nombre}</p>
                      <p className="text-sm text-gray-500">{producto.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{producto.stock}</span>
                      {producto.stock < 10 && (
                        <Badge variant="outline" className="text-xs border-yellow-200 text-yellow-700">
                          Bajo
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>${producto.precio}</TableCell>
                  <TableCell>${(producto.precio * producto.stock).toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(producto.estado)}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )

  const renderMobilePreviewContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Vista Previa de la App Móvil
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile Preview */}
            <div className="flex justify-center">
              <div className="w-80 h-[600px] bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-900 text-white text-xs px-4 py-1 flex justify-between items-center">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-1 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-lg font-bold">GIA Trazabilidad</h1>
                        <p className="text-blue-100 text-sm">Descubre la historia de tus productos</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <Bell className="w-4 h-4" />
                        </div>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <Settings className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg text-center">
                        <QrCode className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                        <p className="text-sm font-medium">Escanear QR</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <Search className="w-8 h-8 mx-auto text-green-600 mb-2" />
                        <p className="text-sm font-medium">Buscar</p>
                      </div>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg text-center">
                      <Package className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                      <p className="text-sm font-medium">Mis Productos</p>
                    </div>
                  </div>

                  {/* Latest News */}
                  <div className="px-4 pb-4">
                    <h2 className="font-bold mb-3">Últimas novedades</h2>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Leaf className="w-6 h-6 text-green-600" />
                          <div>
                            <p className="text-sm font-medium">Nueva certificación GOTS</p>
                            <p className="text-xs text-gray-500">Hace 2 horas</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Award className="w-6 h-6 text-yellow-600" />
                          <div>
                            <p className="text-sm font-medium">Producto destacado</p>
                            <p className="text-xs text-gray-500">Hace 1 día</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
                    <div className="flex justify-around">
                      <div className="flex flex-col items-center p-2">
                        <Home className="w-5 h-5 text-blue-600" />
                        <span className="text-xs text-blue-600">Inicio</span>
                      </div>
                      <div className="flex flex-col items-center p-2">
                        <Search className="w-5 h-5 text-gray-400" />
                        <span className="text-xs text-gray-400">Buscar</span>
                      </div>
                      <div className="flex flex-col items-center p-2">
                        <QrCode className="w-5 h-5 text-gray-400" />
                        <span className="text-xs text-gray-400">Escanear</span>
                      </div>
                      <div className="flex flex-col items-center p-2">
                        <Heart className="w-5 h-5 text-gray-400" />
                        <span className="text-xs text-gray-400">Favoritos</span>
                      </div>
                      <div className="flex flex-col items-center p-2">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-xs text-gray-400">Perfil</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Analytics */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Analytics de la App Móvil</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-900">Usuarios Activos</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{mobile_analytics.usuarios_activos_diarios}</p>
                    <p className="text-sm text-blue-700">Diarios</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Download className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-900">Descargas</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{mobile_analytics.descargas_mes}</p>
                    <p className="text-sm text-green-700">Este mes</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <QrCode className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-purple-900">QR Escaneados</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{kpis.qr_scans_mobile}</p>
                    <p className="text-sm text-purple-700">Hoy</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium text-yellow-900">Rating</span>
                    </div>
                    <p className="text-2xl font-bold text-yellow-600">{mobile_analytics.rating_app}</p>
                    <p className="text-sm text-yellow-700">Promedio</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Métricas de Engagement</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sesiones promedio:</span>
                    <span className="font-medium">{mobile_analytics.sesiones_promedio}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tiempo de sesión:</span>
                    <span className="font-medium">{mobile_analytics.tiempo_sesion_promedio}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Notificaciones abiertas:</span>
                    <span className="font-medium">{mobile_analytics.notificaciones_abiertas}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Conversiones:</span>
                    <span className="font-medium">{mobile_analytics.conversiones_app}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Funcionalidades Más Usadas</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-gray-600" />
                      <span className="text-sm">Escaneo QR</span>
                    </div>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-600" />
                      <span className="text-sm">Búsqueda</span>
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-gray-600" />
                      <span className="text-sm">Favoritos</span>
                    </div>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-gray-600" />
                      <span className="text-sm">Compartir</span>
                    </div>
                    <span className="text-sm font-medium">38%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderMobileConfigContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Configuración de la App Móvil
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
              <TabsTrigger value="features">Funcionalidades</TabsTrigger>
              <TabsTrigger value="appearance">Apariencia</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nombre de la App</label>
                    <Input defaultValue="GIA Trazabilidad" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Versión</label>
                    <Input defaultValue="1.2.3" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">URL Base API</label>
                    <Input defaultValue="https://api.giastore.uy" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Idioma por defecto</label>
                    <Select defaultValue="es">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="pt">Português</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Región</label>
                    <Select defaultValue="uy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uy">Uruguay</SelectItem>
                        <SelectItem value="ar">Argentina</SelectItem>
                        <SelectItem value="br">Brasil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificaciones Push</h4>
                    <p className="text-sm text-gray-500">Habilitar notificaciones push para la app</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificaciones de Productos</h4>
                    <p className="text-sm text-gray-500">Alertas sobre nuevos productos y actualizaciones</p>
                  </div>
                  <Button variant="outline">Activado</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificaciones de Sistema</h4>
                    <p className="text-sm text-gray-500">Mantenimiento y actualizaciones del sistema</p>
                  </div>
                  <Button variant="outline">Activado</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Escáner QR</h4>
                    <p className="text-sm text-gray-500">Funcionalidad de escaneo de códigos QR</p>
                  </div>
                  <Button variant="outline">Habilitado</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Modo Offline</h4>
                    <p className="text-sm text-gray-500">Permitir uso sin conexión a internet</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Geolocalización</h4>
                    <p className="text-sm text-gray-500">Servicios basados en ubicación</p>
                  </div>
                  <Button variant="outline">Habilitado</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Compartir en Redes</h4>
                    <p className="text-sm text-gray-500">Integración con redes sociales</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Tema de la App</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center cursor-pointer hover:bg-gray-50">
                      <div className="w-full h-20 bg-white border rounded mb-2"></div>
                      <p className="text-sm">Claro</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center cursor-pointer hover:bg-gray-50 border-blue-500">
                      <div className="w-full h-20 bg-gray-800 rounded mb-2"></div>
                      <p className="text-sm">Oscuro</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center cursor-pointer hover:bg-gray-50">
                      <div className="w-full h-20 bg-gradient-to-br from-white to-gray-800 rounded mb-2"></div>
                      <p className="text-sm">Auto</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Color Principal</h4>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer border-2 border-blue-800"></div>
                    <div className="w-8 h-8 bg-green-600 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-purple-600 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-orange-600 rounded-full cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )

  const renderPushNotificationsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notificaciones Push
          </CardTitle>
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Nueva Notificación
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Enviadas Hoy</h3>
              <p className="text-2xl font-bold text-blue-600">1,245</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Tasa de Apertura</h3>
              <p className="text-2xl font-bold text-green-600">68%</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Usuarios Activos</h3>
              <p className="text-2xl font-bold text-purple-600">{kpis.mobile_users}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Notificaciones Recientes</h3>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Nuevo producto disponible</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Descubre el nuevo Sweater Artesanal Premium de María González
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>Enviado: Hoy 14:30</span>
                      <span>Destinatarios: 1,250</span>
                      <span>Abierto: 68%</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Enviado</Badge>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Certificación GOTS renovada</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Tus productos favoritos mantienen su certificación sostenible
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>Enviado: Ayer 10:15</span>
                      <span>Destinatarios: 890</span>
                      <span>Abierto: 72%</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Enviado</Badge>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">Programa de reciclaje</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Participa en nuestro nuevo programa de economía circular
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>Programado: Mañana 09:00</span>
                      <span>Destinatarios: 2,100</span>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Programado</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderMobileAnalyticsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Analytics Móvil
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-900">Usuarios Activos</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">{mobile_analytics.usuarios_activos_diarios}</p>
              <p className="text-sm text-blue-700">Diarios</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Download className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">Descargas</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{kpis.app_downloads}</p>
              <p className="text-sm text-green-700">Total</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-purple-900">Tiempo Sesión</span>
              </div>
              <p className="text-2xl font-bold text-purple-600">{mobile_analytics.tiempo_sesion_promedio}</p>
              <p className="text-sm text-purple-700">Promedio</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-yellow-900">Rating</span>
              </div>
              <p className="text-2xl font-bold text-yellow-600">{mobile_analytics.rating_app}</p>
              <p className="text-sm text-yellow-700">App Store</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Uso por Funcionalidad</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Gráfico de uso por funcionalidad</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Retención de Usuarios</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Gráfico de retención</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderESGContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            ESG Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">CO₂ Ahorrado</h3>
              <p className="text-2xl font-bold text-green-600">{kpis.co2_ahorrado} kg</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Agua Ahorrada</h3>
              <p className="text-2xl font-bold text-blue-600">{kpis.agua_ahorrada} L</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">NPS Score</h3>
              <p className="text-2xl font-bold text-purple-600">{kpis.nps_score}</p>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Leaf className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Métricas ESG detalladas</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEcodesignContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            Módulo de Ecodiseño
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Herramientas para evaluar y optimizar el impacto ambiental de los productos desde la fase de diseño.
          </p>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Leaf className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Simulador de ecodiseño</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderCircularityContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Recycle className="w-5 h-5" />
            Economía Circular
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Recycle className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Métricas de circularidad</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderCertificationsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Certificaciones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Gestión de certificaciones</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderDPPContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            DPP Compliance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Auditorías DPP</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderReportsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Reportes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Generador de reportes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderAuditCertificationsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Certificaciones de Auditoría
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Certificaciones de auditoría</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderUsersContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Gestión de Usuarios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Lista de usuarios</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderRolesContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Roles y Permisos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Lock className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Gestión de roles</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderUserActivityContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Actividad de Usuarios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Log de actividad</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderConfigContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cog className="w-5 h-5" />
            Configuración del Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Cog className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Configuración general</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderIntegrationsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="w-5 h-5" />
            Integraciones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Link className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">APIs y integraciones</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderLogsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileBarChart className="w-5 h-5" />
            Logs del Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FileBarChart className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Logs y auditoría</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProductDetail = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Detalle del Producto: {selectedProduct}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Package className="w-12 h-12 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500">Información detallada del producto</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">GIA Backoffice</h1>
                <p className="text-xs text-gray-500">Sistema de Trazabilidad</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-2">
            {sidebarItems.map((section) => (
              <Collapsible
                key={section.title}
                open={!collapsedSections[section.title]}
                onOpenChange={() => toggleSection(section.title)}
              >
                <SidebarGroup>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="w-full justify-between hover:bg-gray-100">
                      <div className="flex items-center gap-2">
                        <section.icon className="w-4 h-4" />
                        <span className="font-medium">{section.title}</span>
                      </div>
                      {collapsedSections[section.title] ? (
                        <ChevronRight className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {section.items.map((item) => (
                          <SidebarMenuItem key={item.key}>
                            <SidebarMenuButton
                              onClick={() => handleMenuItemClick(item.key)}
                              isActive={currentView === item.key}
                              className="w-full justify-start pl-6 hover:bg-gray-100"
                            >
                              <span className="text-sm">{item.title}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            ))}
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">{getCurrentViewTitle()}</h1>
                  <p className="text-sm text-gray-500">
                    {currentView === "dashboard" ? "Resumen general del sistema" : "Gestión y configuración"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm" onClick={handleRefreshData}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Actualizar
                </Button>
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          <main className="p-6 space-y-6">{renderMainContent()}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
