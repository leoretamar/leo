"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  BarChart3,
  Users,
  Package,
  AlertTriangle,
  TrendingUp,
  Search,
  Filter,
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
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"

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

  const renderMainContent = () => {
    switch (currentView) {
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
                <p>Módulo de gestión de usuarios en desarrollo...</p>
              </CardContent>
            </Card>
          </div>
        )
      case "esg":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">ESG Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Leaf className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold">87</p>
                      <p className="text-sm text-gray-600">Score Ambiental</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">92</p>
                      <p className="text-sm text-gray-600">Score Social</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-purple-500" />
                    <div>
                      <p className="text-2xl font-bold">85</p>
                      <p className="text-sm text-gray-600">Score Gobernanza</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
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

              <Card>
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

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">CO₂ Ahorrado</p>
                      <p className="text-2xl font-bold text-gray-900">{kpis.co2_ahorrado}kg</p>
                      <div className="flex items-center gap-1 text-sm">
                        <Leaf className="w-3 h-3 text-green-500" />
                        <span className="text-green-600">Impacto positivo</span>
                      </div>
                    </div>
                    <Leaf className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Alertas Pendientes</p>
                      <p className="text-2xl font-bold text-gray-900">{kpis.alertas_pendientes}</p>
                      <div className="flex items-center gap-1 text-sm">
                        <AlertTriangle className="w-3 h-3 text-orange-500" />
                        <span className="text-orange-600">{kpis.certificaciones_vencen} críticas</span>
                      </div>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Chart Area */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Métricas de Producción</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Último mes
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-500">Gráfico de métricas de producción</p>
                        <p className="text-sm text-gray-400">Productos creados, QRs generados, certificaciones</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Productos Recientes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {productos_recientes.map((producto) => (
                        <div key={producto.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                              <Package className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{producto.nombre}</h4>
                              <p className="text-sm text-gray-500">ID: {producto.id}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge
                                  variant={producto.estado === "activo" ? "default" : "secondary"}
                                  className={
                                    producto.estado === "activo"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }
                                >
                                  {producto.estado}
                                </Badge>
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
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{producto.fecha_creacion}</p>
                            <Button variant="ghost" size="sm" className="mt-1">
                              Ver detalles
                            </Button>
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
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {alertas.map((alerta) => (
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
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-gray-500">{alerta.fecha}</span>
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
                              </div>
                            </div>
                          </div>
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
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Acciones Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button
                        className="w-full justify-start bg-transparent"
                        variant="outline"
                        onClick={() => handleMenuClick("products")}
                      >
                        <Package className="w-4 h-4 mr-2" />
                        Crear Producto
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <QrCode className="w-4 h-4 mr-2" />
                        Generar QR
                      </Button>
                      <Button className="w-full justify-start bg-transparent" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Nuevo Reporte
                      </Button>
                      <Button
                        className="w-full justify-start bg-transparent"
                        variant="outline"
                        onClick={() => handleMenuClick("user-management")}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Gestionar Usuarios
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GIA</span>
              </div>
              <div>
                <h2 className="font-bold text-gray-900">GIA Backoffice</h2>
                <p className="text-xs text-gray-500">Sistema de Gestión</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            {sidebarItems.map((section) => (
              <Collapsible
                key={section.title}
                open={!collapsedGroups.includes(section.title)}
                onOpenChange={() => toggleGroup(section.title)}
              >
                <SidebarGroup>
                  <CollapsibleTrigger asChild>
                    <SidebarGroupLabel className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md p-2">
                      <section.icon className="w-4 h-4" />
                      <span className="flex-1">{section.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${collapsedGroups.includes(section.title) ? "-rotate-90" : ""}`}
                      />
                    </SidebarGroupLabel>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {section.items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                              asChild
                              isActive={item.isActive || currentView === item.action}
                              onClick={() => item.action && handleMenuClick(item.action)}
                            >
                              <button className="w-full text-left">{item.title}</button>
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
          {/* Header */}
          <header className="flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-6">
            <SidebarTrigger />
            <div className="flex-1 flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar productos, usuarios, alertas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                {kpis.alertas_pendientes > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                    {kpis.alertas_pendientes}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">{renderMainContent()}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
