"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Leaf,
  BarChart3,
  Shield,
  Search,
  Home,
  FileText,
  User,
  Settings,
  LogOut,
  TrendingUp,
  QrCode,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function ModernAdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchTerm, setSearchTerm] = useState("")

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, active: true },
    { id: "charts", label: "Análisis", icon: BarChart3, badge: "2" },
    { id: "products", label: "Productos", icon: Package },
    { id: "audits", label: "Auditorías", icon: Shield },
    { id: "reports", label: "Reportes", icon: FileText },
    { id: "users", label: "Usuarios", icon: User, badge: "5" },
    { id: "settings", label: "Configuración", icon: Settings },
  ]

  const mainMetrics = [
    { label: "Productos Activos", value: 34, color: "text-blue-600", trend: "+12%" },
    { label: "Score ESG", value: 8.2, color: "text-green-600", trend: "+5%" },
    { label: "Circularidad", value: "87%", color: "text-purple-600", trend: "+3%" },
    { label: "Certificados", value: 22, color: "text-orange-600", trend: "+8%" },
  ]

  const rightSidebarMetrics = [
    { label: "Consultas QR", value: 634 },
    { label: "Usuarios Móvil", value: 541 },
    { label: "Devoluciones", value: 123 },
    { label: "Artesanos", value: 90 },
    { label: "Auditorías", value: 234 },
    { label: "Storytelling", value: 234 },
  ]

  const progressMetrics = [
    { label: "Trazabilidad Completa", value: 85, color: "bg-blue-500" },
    { label: "Certificaciones Válidas", value: 92, color: "bg-green-500" },
    { label: "Impacto Ambiental", value: 78, color: "bg-orange-500" },
    { label: "Satisfacción Usuario", value: 95, color: "bg-purple-500" },
    { label: "Adopción Móvil", value: 67, color: "bg-red-500" },
  ]

  const statusMetrics = [
    { label: "Productos Terminados", value: 89, color: "bg-green-500" },
    { label: "En Proceso", value: 76, color: "bg-yellow-500" },
    { label: "Pendiente Auditoría", value: 45, color: "bg-red-500" },
    { label: "Certificados Válidos", value: 98, color: "bg-teal-500" },
    { label: "DPPs Generados", value: 82, color: "bg-blue-500" },
    { label: "Historias Creadas", value: 34, color: "bg-pink-500" },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">GIA TRACE</h1>
              <p className="text-xs text-slate-400">Trazabilidad</p>
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
                        ? "bg-green-600 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && <Badge className="bg-green-500 text-white text-xs px-2 py-1">{item.badge}</Badge>}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Sign Out */}
        <div className="p-4 border-t border-slate-700">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span>CERRAR SESIÓN</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Buscar productos, artesanos, certificados..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Main Chart Area */}
            <div className="col-span-8 space-y-6">
              {/* Line Chart */}
              <Card className="h-80">
                <CardContent className="p-6 h-full">
                  <div className="relative h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4">
                    {/* Simulated Line Chart */}
                    <div className="relative h-full">
                      {/* Chart Lines */}
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        {/* Grid lines */}
                        <defs>
                          <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Orange line (Productos) */}
                        <path d="M 0 120 Q 100 100 200 80 T 400 60" fill="none" stroke="#f97316" strokeWidth="3" />
                        {/* Blue line (Circularidad) */}
                        <path d="M 0 140 Q 100 120 200 100 T 400 40" fill="none" stroke="#3b82f6" strokeWidth="3" />
                        {/* Red line (Emisiones) */}
                        <path d="M 0 100 Q 100 140 200 120 T 400 80" fill="none" stroke="#ef4444" strokeWidth="3" />

                        {/* Data points */}
                        <circle cx="150" cy="90" r="4" fill="#f97316" />
                        <circle cx="200" cy="120" r="4" fill="#ef4444" />
                        <circle cx="300" cy="50" r="4" fill="#3b82f6" />
                      </svg>

                      {/* Data labels */}
                      <div className="absolute top-4 left-32 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                        270
                      </div>
                      <div className="absolute top-16 left-48 bg-red-500 text-white px-2 py-1 rounded text-xs">200</div>
                      <div className="absolute top-8 right-20 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                        400
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Three Chart Cards */}
              <div className="grid grid-cols-3 gap-6">
                {/* Circular Progress */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-600">Circularidad Global</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-4">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="transparent" />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#22c55e"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 40 * 0.65} ${2 * Math.PI * 40}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">65%</span>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white">CIRCULARIDAD</Badge>
                  </CardContent>
                </Card>

                {/* Line Chart Small */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-600">Tendencia ESG</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-gray-100 rounded mb-4 relative overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 200 80">
                        <path
                          d="M 0 60 L 40 45 L 80 35 L 120 25 L 160 20 L 200 15"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="2"
                        />
                        <circle cx="40" cy="45" r="2" fill="#f59e0b" />
                        <circle cx="80" cy="35" r="2" fill="#f59e0b" />
                        <circle cx="120" cy="25" r="2" fill="#f59e0b" />
                        <circle cx="160" cy="20" r="2" fill="#f59e0b" />
                      </svg>
                      <TrendingUp className="absolute top-2 right-2 w-4 h-4 text-green-500" />
                    </div>
                    <Badge className="bg-blue-500 text-white">TENDENCIA ESG</Badge>
                  </CardContent>
                </Card>

                {/* Bar Chart Small */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-600">Módulos Activos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 flex items-end justify-center gap-2 mb-4">
                      <div className="w-6 h-8 bg-orange-400 rounded-t"></div>
                      <div className="w-6 h-12 bg-green-500 rounded-t"></div>
                      <div className="w-6 h-16 bg-blue-500 rounded-t"></div>
                      <div className="w-6 h-10 bg-red-500 rounded-t"></div>
                    </div>
                    <Badge className="bg-orange-500 text-white">MÓDULOS</Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Bottom Progress Sections */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Progress Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Métricas de Rendimiento</CardTitle>
                    <CardDescription>Indicadores clave del sistema</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {progressMetrics.map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{metric.label}</span>
                          <span className="font-medium">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${metric.color}`}
                            style={{ width: `${metric.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Right Status Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estado del Sistema</CardTitle>
                    <CardDescription>Distribución por categorías</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {statusMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{metric.label}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${metric.color}`}
                              style={{ width: `${metric.value}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium w-8">{metric.value}%</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-4 space-y-6">
              {/* Metrics Cards */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Métricas Principales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {rightSidebarMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <Badge className="bg-orange-500 text-white">{metric.value}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Bar Chart Visualization */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Actividad Mensual</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-end justify-center gap-1">
                    {[65, 45, 80, 35, 90, 55, 75, 40, 85, 60, 95, 50].map((height, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <div
                          className={`w-4 rounded-t ${
                            index % 3 === 0 ? "bg-green-500" : index % 3 === 1 ? "bg-blue-500" : "bg-orange-500"
                          }`}
                          style={{ height: `${height}px` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Circular Progress Bottom */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Adopción Global</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle cx="40" cy="40" r="32" stroke="#e5e7eb" strokeWidth="6" fill="transparent" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="#06b6d4"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 32 * 0.5} ${2 * Math.PI * 32}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold">50%</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Adopción del Sistema</h4>
                    <p className="text-sm text-gray-600">Crecimiento sostenido en todos los módulos</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="w-1/2 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-green-50 rounded">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <div className="flex-1">
                      <p className="text-xs font-medium">Producto certificado</p>
                      <p className="text-xs text-gray-500">Hace 2 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                    <QrCode className="w-4 h-4 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-xs font-medium">QR escaneado</p>
                      <p className="text-xs text-gray-500">Hace 5 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-orange-50 rounded">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <div className="flex-1">
                      <p className="text-xs font-medium">Auditoría pendiente</p>
                      <p className="text-xs text-gray-500">Hace 1 día</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
