"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Smartphone,
  Settings,
  BarChart3,
  Users,
  Package,
  Leaf,
  Shield,
  Globe,
  Zap,
  TrendingUp,
  Activity,
  Database,
  Cloud,
  Lock,
  Wifi,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react"

export default function Dashboard() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

  const platforms = [
    {
      id: "web-customer",
      title: "Dashboard Cliente Web",
      description: "Interfaz web completa para clientes con trazabilidad y programas",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      features: ["Trazabilidad completa", "Perfiles de artesanas", "Programas de fidelización", "Impacto ambiental"],
      users: "2,847",
      growth: "+12%",
      status: "active",
    },
    {
      id: "mobile-customer",
      title: "App Móvil Cliente",
      description: "Aplicación móvil nativa para escaneo QR y experiencia optimizada",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      features: ["Scanner QR nativo", "Interfaz táctil", "Notificaciones push", "Modo offline"],
      users: "1,523",
      growth: "+28%",
      status: "active",
    },
    {
      id: "admin-control",
      title: "Centro de Control Administrativo",
      description: "Dashboard completo para administración y gestión del ecosistema",
      icon: Settings,
      color: "from-purple-500 to-indigo-500",
      features: ["Gestión de usuarios", "Analytics avanzados", "Módulos ESG", "Control de auditorías"],
      users: "89",
      growth: "+5%",
      status: "active",
    },
  ]

  const systemMetrics = {
    total_users: 4459,
    active_sessions: 342,
    products_tracked: 12847,
    co2_saved: 15420,
    uptime: 99.9,
    response_time: 145,
  }

  const specializedModules = [
    {
      id: "esg-dashboard",
      title: "Dashboard ESG",
      description: "Métricas ambientales, sociales y de gobernanza",
      icon: Leaf,
      status: "active",
      usage: 89,
    },
    {
      id: "audit-dpp",
      title: "Auditoría DPP",
      description: "Digital Product Passport compliance",
      icon: Shield,
      status: "active",
      usage: 76,
    },
    {
      id: "ecodesign",
      title: "Simulador de Ecodiseño",
      description: "Herramientas de diseño sostenible",
      icon: Zap,
      status: "active",
      usage: 92,
    },
    {
      id: "traceability",
      title: "Trazabilidad Avanzada",
      description: "Seguimiento completo de cadena de suministro",
      icon: Globe,
      status: "active",
      usage: 95,
    },
  ]

  const advancedTools = [
    {
      id: "ai-sustainability",
      title: "IA para Sostenibilidad",
      description: "Análisis predictivo de impacto ambiental",
      icon: Activity,
      status: "beta",
      usage: 67,
    },
    {
      id: "blockchain-integration",
      title: "Integración Blockchain",
      description: "Trazabilidad inmutable y transparente",
      icon: Database,
      status: "development",
      usage: 34,
    },
    {
      id: "carbon-calculator",
      title: "Calculadora de Carbono",
      description: "Medición precisa de huella de carbono",
      icon: Cloud,
      status: "active",
      usage: 88,
    },
    {
      id: "supply-chain-optimizer",
      title: "Optimizador de Cadena",
      description: "Optimización automática de rutas y procesos",
      icon: TrendingUp,
      status: "beta",
      usage: 45,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "beta":
        return "bg-yellow-100 text-yellow-800"
      case "development":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Play className="w-3 h-3" />
      case "beta":
        return <Pause className="w-3 h-3" />
      case "development":
        return <RotateCcw className="w-3 h-3" />
      default:
        return <Lock className="w-3 h-3" />
    }
  }

  if (selectedPlatform) {
    const platform = platforms.find((p) => p.id === selectedPlatform)!
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedPlatform(null)}>
              ← Volver al Dashboard Principal
            </Button>
            <Badge className={getStatusColor(platform.status)}>
              {getStatusIcon(platform.status)}
              <span className="ml-1 capitalize">{platform.status}</span>
            </Badge>
          </div>

          <Card className={`bg-gradient-to-r ${platform.color} text-white`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-lg">
                  <platform.icon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{platform.title}</h1>
                  <p className="text-white/80">{platform.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold">{platform.users}</p>
                  <p className="text-white/80">Usuarios Activos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{platform.growth}</p>
                  <p className="text-white/80">Crecimiento Mensual</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">98.5%</p>
                  <p className="text-white/80">Satisfacción</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Características Principales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {platform.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métricas de Rendimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Tiempo de Respuesta</span>
                    <span className="font-bold">142ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Disponibilidad</span>
                    <span className="font-bold">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Errores</span>
                    <span className="font-bold text-green-600">0.02%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Carga del Servidor</span>
                    <span className="font-bold">23%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Acciones Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center gap-2">
                  <Monitor className="w-6 h-6" />
                  <span>Abrir Plataforma</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                  <BarChart3 className="w-6 h-6" />
                  <span>Ver Analytics</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                  <Settings className="w-6 h-6" />
                  <span>Configuración</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">GIA Trazabilidad</h1>
          <p className="text-xl text-gray-600">Centro de Control del Ecosistema de Sostenibilidad</p>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">{systemMetrics.total_users.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Usuarios Totales</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">{systemMetrics.active_sessions}</p>
              <p className="text-sm text-gray-600">Sesiones Activas</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Package className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">{systemMetrics.products_tracked.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Productos Rastreados</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">{systemMetrics.co2_saved.toLocaleString()}kg</p>
              <p className="text-sm text-gray-600">CO₂ Ahorrado</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Wifi className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">{systemMetrics.uptime}%</p>
              <p className="text-sm text-gray-600">Disponibilidad</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
              <p className="text-2xl font-bold text-gray-900">{systemMetrics.response_time}ms</p>
              <p className="text-sm text-gray-600">Tiempo Respuesta</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Platforms */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plataformas Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Card
                key={platform.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedPlatform(platform.id)}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.title}</h3>
                  <p className="text-gray-600 mb-4">{platform.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{platform.users}</p>
                      <p className="text-xs text-gray-600">Usuarios</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-600">{platform.growth}</p>
                      <p className="text-xs text-gray-600">Crecimiento</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(platform.status)}>
                      {getStatusIcon(platform.status)}
                      <span className="ml-1 capitalize">{platform.status}</span>
                    </Badge>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialized Modules */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Módulos Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedModules.map((module) => (
              <Card key={module.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <module.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <Badge className={getStatusColor(module.status)}>{getStatusIcon(module.status)}</Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Uso</span>
                      <span>{module.usage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${module.usage}%` }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Tools */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Herramientas Avanzadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <tool.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <Badge className={getStatusColor(tool.status)}>{getStatusIcon(tool.status)}</Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progreso</span>
                      <span>{tool.usage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          tool.status === "active"
                            ? "bg-green-600"
                            : tool.status === "beta"
                              ? "bg-yellow-600"
                              : "bg-blue-600"
                        }`}
                        style={{ width: `${tool.usage}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="h-auto p-4 flex flex-col items-center gap-2">
                <Users className="w-6 h-6" />
                <span>Gestionar Usuarios</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                <BarChart3 className="w-6 h-6" />
                <span>Ver Reportes</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                <Settings className="w-6 h-6" />
                <span>Configuración</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                <Database className="w-6 h-6" />
                <span>Backup Sistema</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
