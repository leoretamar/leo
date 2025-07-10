"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Package,
  Leaf,
  BarChart3,
  Shield,
  Search,
  Home,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  QrCode,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  Filter,
  Download,
  Eye,
  Smartphone,
  Gift,
  BookOpen,
  Database,
  Activity,
  Bell,
} from "lucide-react"

export default function BackofficeDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchTerm, setSearchTerm] = useState("")

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, active: true },
    { id: "products", label: "Productos", icon: Package, badge: "34" },
    { id: "traceability", label: "Trazabilidad", icon: BarChart3 },
    { id: "audits", label: "Auditorías", icon: Shield, badge: "3" },
    { id: "esg", label: "ESG & Circularidad", icon: Leaf },
    { id: "epr", label: "EPR Devoluciones", icon: Gift },
    { id: "storytelling", label: "Storytelling IA", icon: BookOpen },
    { id: "users", label: "Usuarios", icon: Users, badge: "127" },
    { id: "reports", label: "Reportes", icon: FileText },
    { id: "settings", label: "Configuración", icon: Settings },
  ]

  const kpiMetrics = [
    { label: "Productos Activos", value: 34, change: "+12%", trend: "up", color: "text-blue-600" },
    { label: "Certificados Emitidos", value: 22, change: "+8%", trend: "up", color: "text-green-600" },
    { label: "Score ESG Promedio", value: 8.2, change: "+5%", trend: "up", color: "text-purple-600" },
    { label: "Circularidad Global", value: "87%", change: "+3%", trend: "up", color: "text-teal-600" },
    { label: "Devoluciones EPR", value: 8, change: "0%", trend: "stable", color: "text-orange-600" },
    { label: "Auditorías Pendientes", value: 3, change: "-25%", trend: "down", color: "text-red-600" },
  ]

  const recentProducts = [
    {
      id: "1",
      code: "GIA-SWE-2025-001",
      name: "Sweater Sol de Campo",
      status: "Terminado",
      artisan: "M. Sosa",
      date: "22/03/25",
      progress: 100,
    },
    {
      id: "2",
      code: "GIA-BOLSO-2025-002",
      name: "Bolso Campo Claro",
      status: "En Proceso",
      artisan: "A. Gómez",
      date: "01/04/25",
      progress: 75,
    },
    {
      id: "3",
      code: "GIA-CAR-2025-003",
      name: "Cardigan Alpaca Premium",
      status: "Auditoría",
      artisan: "C. Quispe",
      date: "10/04/25",
      progress: 90,
    },
  ]

  const systemAlerts = [
    {
      id: "1",
      type: "warning",
      title: "Auditoría RWS Pendiente",
      description: "Cardigan Alpaca Premium requiere auditoría",
      time: "2h",
    },
    {
      id: "2",
      type: "success",
      title: "Certificado Emitido",
      description: "DPP generado para Sweater Sol de Campo",
      time: "4h",
    },
    {
      id: "3",
      type: "info",
      title: "Nueva Devolución EPR",
      description: "Cliente solicita reciclaje de producto",
      time: "6h",
    },
  ]

  const operationalMetrics = [
    { label: "Artesanos Activos", value: 127, icon: Users, color: "bg-blue-500" },
    { label: "Consultas QR Diarias", value: 1543, icon: QrCode, color: "bg-green-500" },
    { label: "Usuarios Móvil", value: 892, icon: Smartphone, color: "bg-purple-500" },
    { label: "Historias Generadas", value: 234, icon: BookOpen, color: "bg-orange-500" },
  ]

  const moduleStatus = [
    { name: "Trazabilidad Core", status: "Activo", usage: 95, color: "bg-blue-500" },
    { name: "Ecodiseño", status: "Activo", usage: 78, color: "bg-green-500" },
    { name: "ESG Dashboard", status: "Activo", usage: 85, color: "bg-purple-500" },
    { name: "Auditoría/DPP", status: "Activo", usage: 92, color: "bg-orange-500" },
    { name: "EPR Recompensas", status: "Beta", usage: 45, color: "bg-yellow-500" },
    { name: "Storytelling IA", status: "Beta", usage: 38, color: "bg-pink-500" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Terminado":
        return <Badge className="bg-green-100 text-green-800">{status}</Badge>
      case "En Proceso":
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>
      case "Auditoría":
        return <Badge className="bg-orange-100 text-orange-800">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="w-4 h-4 text-orange-500" />
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "info":
        return <Activity className="w-4 h-4 text-blue-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">GIA BACKOFFICE</h1>
              <p className="text-xs text-slate-400">Sistema Administrativo</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="flex-1 text-left text-sm">{item.label}</span>
                    {item.badge && <Badge className="bg-red-500 text-white text-xs px-2 py-1">{item.badge}</Badge>}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* System Status */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-slate-400">Sistema Operativo</span>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">CERRAR SESIÓN</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Home className="w-4 h-4" />
                <span>Dashboard Administrativo</span>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select className="text-sm border rounded px-2 py-1">
                  <option>Último mes</option>
                  <option>Último trimestre</option>
                  <option>Último año</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Buscar productos, artesanos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Dashboard Area */}
            <div className="col-span-8 space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-3 gap-4">
                {kpiMetrics.map((metric, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                        <div className="flex items-center gap-1">
                          {metric.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : metric.trend === "down" ? (
                            <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                          ) : (
                            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                          )}
                          <span
                            className={`text-xs font-medium ${
                              metric.trend === "up"
                                ? "text-green-600"
                                : metric.trend === "down"
                                  ? "text-red-600"
                                  : "text-gray-600"
                            }`}
                          >
                            {metric.change}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Main Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Evolución del Sistema</CardTitle>
                      <CardDescription>Métricas clave de los últimos 6 meses</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Período
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Vista
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4">
                    <div className="relative h-full">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Productos line */}
                        <path d="M 0 120 Q 100 100 200 80 T 400 60" fill="none" stroke="#3b82f6" strokeWidth="3" />
                        {/* ESG line */}
                        <path d="M 0 140 Q 100 120 200 100 T 400 40" fill="none" stroke="#10b981" strokeWidth="3" />
                        {/* Circularidad line */}
                        <path d="M 0 100 Q 100 140 200 120 T 400 80" fill="none" stroke="#8b5cf6" strokeWidth="3" />

                        <circle cx="150" cy="90" r="4" fill="#3b82f6" />
                        <circle cx="200" cy="120" r="4" fill="#8b5cf6" />
                        <circle cx="300" cy="50" r="4" fill="#10b981" />
                      </svg>

                      <div className="absolute top-4 left-32 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                        Productos: 34
                      </div>
                      <div className="absolute top-16 left-48 bg-purple-500 text-white px-2 py-1 rounded text-xs">
                        Circularidad: 87%
                      </div>
                      <div className="absolute top-8 right-20 bg-green-500 text-white px-2 py-1 rounded text-xs">
                        ESG: 8.2
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Products */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Productos Recientes</CardTitle>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver todos
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentProducts.map((product) => (
                      <div key={product.id} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{product.name}</h4>
                            {getStatusBadge(product.status)}
                          </div>
                          <p className="text-sm text-gray-600">{product.code}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span>Artesano: {product.artisan}</span>
                            <span>Fecha: {product.date}</span>
                          </div>
                          <div className="mt-2">
                            <Progress value={product.progress} className="h-1" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-4 space-y-6">
              {/* System Alerts */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Alertas del Sistema</CardTitle>
                    <Badge variant="outline">{systemAlerts.length}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        {getAlertIcon(alert.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium text-sm">{alert.title}</p>
                            <span className="text-xs text-gray-500">{alert.time}</span>
                          </div>
                          <p className="text-xs text-gray-600">{alert.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Operational Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Métricas Operacionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {operationalMetrics.map((metric, index) => {
                      const IconComponent = metric.icon
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${metric.color} text-white`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{metric.value.toLocaleString()}</p>
                            <p className="text-xs text-gray-600">{metric.label}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Module Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Estado de Módulos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {moduleStatus.map((module, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{module.name}</span>
                          <div className="flex items-center gap-2">
                            <Badge
                              className={
                                module.status === "Activo"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {module.status}
                            </Badge>
                            <span className="text-xs text-gray-500">{module.usage}%</span>
                          </div>
                        </div>
                        <Progress value={module.usage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Package className="w-4 h-4 mr-2" />
                    Nuevo Producto
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Shield className="w-4 h-4 mr-2" />
                    Programar Auditoría
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    Generar Reporte
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="w-4 h-4 mr-2" />
                    Gestionar Usuarios
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
