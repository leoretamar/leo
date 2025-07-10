"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Package,
  QrCode,
  Smartphone,
  Users,
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Eye,
  Share2,
  Download,
  Settings,
  BarChart3,
  Lock,
  Wifi,
  Server,
  Layers,
} from "lucide-react"

export default function SystemOverview() {
  const systemComponents = [
    {
      title: "Frontend Web",
      description: "Interfaces de usuario para diferentes roles",
      icon: Globe,
      color: "blue",
      features: [
        "Dashboard de Administración",
        "Portal de Artesanas",
        "Interfaz Pública de Productos",
        "Panel de Analytics",
      ],
    },
    {
      title: "Aplicación Móvil",
      description: "App nativa para escaneo y gestión",
      icon: Smartphone,
      color: "green",
      features: ["Escáner QR Nativo", "Gestión de Productos", "Notificaciones Push", "Modo Offline"],
    },
    {
      title: "API Backend",
      description: "Servicios y lógica de negocio",
      icon: Server,
      color: "purple",
      features: ["RESTful API", "Autenticación JWT", "Gestión de Archivos", "Integración con Blockchain"],
    },
    {
      title: "Base de Datos",
      description: "Almacenamiento de datos estructurados",
      icon: Database,
      color: "orange",
      features: ["PostgreSQL Principal", "Redis para Cache", "Backup Automático", "Replicación Multi-región"],
    },
    {
      title: "Blockchain",
      description: "Registro inmutable de trazabilidad",
      icon: Shield,
      color: "indigo",
      features: ["Smart Contracts", "Registro de Productos", "Verificación de Autenticidad", "Auditoría Transparente"],
    },
    {
      title: "Cloud Infrastructure",
      description: "Infraestructura escalable y segura",
      icon: Cloud,
      color: "gray",
      features: ["Auto-scaling", "CDN Global", "Monitoreo 24/7", "Backup Multi-región"],
    },
  ]

  const dataFlow = [
    {
      step: 1,
      title: "Registro de Producto",
      description: "Artesana registra producto en el sistema",
      icon: Package,
      details: "Información completa del producto, materiales, proceso y certificaciones",
    },
    {
      step: 2,
      title: "Generación QR",
      description: "Sistema genera código QR único",
      icon: QrCode,
      details: "Código vinculado a blockchain con toda la información de trazabilidad",
    },
    {
      step: 3,
      title: "Registro Blockchain",
      description: "Datos se registran en blockchain",
      icon: Shield,
      details: "Registro inmutable que garantiza autenticidad y transparencia",
    },
    {
      step: 4,
      title: "Escaneo Consumidor",
      description: "Consumidor escanea QR del producto",
      icon: Smartphone,
      details: "Acceso instantáneo a toda la historia y trazabilidad del producto",
    },
    {
      step: 5,
      title: "Visualización",
      description: "Muestra información completa",
      icon: Eye,
      details: "Historia de la artesana, materiales, impacto ambiental y certificaciones",
    },
  ]

  const technicalSpecs = {
    performance: [
      { metric: "Tiempo de Respuesta", value: "< 200ms", icon: Zap },
      { metric: "Disponibilidad", value: "99.9%", icon: CheckCircle },
      { metric: "Escalabilidad", value: "1M+ productos", icon: TrendingUp },
      { metric: "Usuarios Concurrentes", value: "10,000+", icon: Users },
    ],
    security: [
      { feature: "Encriptación End-to-End", status: "Implementado", icon: Lock },
      { feature: "Autenticación Multi-factor", status: "Implementado", icon: Shield },
      { feature: "Auditoría de Seguridad", status: "Mensual", icon: Eye },
      { feature: "Backup Automático", status: "Diario", icon: Database },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Arquitectura del Sistema GIA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma integral de trazabilidad que conecta artesanas, productos y consumidores a través de
            tecnología blockchain y interfaces intuitivas.
          </p>
        </div>

        {/* System Architecture */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-6 h-6" />
              Componentes del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-${component.color}-100 flex items-center justify-center`}
                      >
                        <component.icon className={`w-6 h-6 text-${component.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{component.title}</h3>
                        <p className="text-sm text-gray-600">{component.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {component.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Flow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6" />
              Flujo de Datos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Flow Steps */}
              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                {dataFlow.map((step, index) => (
                  <div key={step.step} className="flex flex-col items-center text-center max-w-xs">
                    {/* Connection Arrow (except for last item) */}
                    {index < dataFlow.length - 1 && (
                      <div
                        className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gray-300"
                        style={{
                          left: `${(index + 1) * (100 / dataFlow.length)}%`,
                          width: `${100 / dataFlow.length}%`,
                        }}
                      />
                    )}

                    {/* Step Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 border-4 border-blue-500 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>

                    {/* Step Info */}
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        Paso {step.step}
                      </Badge>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                      <p className="text-xs text-gray-500">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Métricas de Rendimiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicalSpecs.performance.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <spec.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">{spec.metric}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{spec.value}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Características de Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicalSpecs.security.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <spec.icon className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">{spec.feature}</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">{spec.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integration Capabilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="w-6 h-6" />
              Capacidades de Integración
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Globe className="w-8 h-8 mx-auto text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">APIs RESTful</h4>
                <p className="text-sm text-gray-600">Integración fácil con sistemas existentes</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Database className="w-8 h-8 mx-auto text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Webhooks</h4>
                <p className="text-sm text-gray-600">Notificaciones en tiempo real</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Settings className="w-8 h-8 mx-auto text-purple-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">SDK</h4>
                <p className="text-sm text-gray-600">Kits de desarrollo para múltiples plataformas</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Share2 className="w-8 h-8 mx-auto text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Plugins</h4>
                <p className="text-sm text-gray-600">Extensiones para e-commerce populares</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas más detalles técnicos?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nuestro equipo técnico puede proporcionarte documentación detallada, diagramas de arquitectura y
              especificaciones completas del sistema.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Descargar Documentación
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contactar Equipo Técnico
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
