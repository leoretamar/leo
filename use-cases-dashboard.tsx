"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  QrCode,
  Users,
  Store,
  Award,
  TrendingUp,
  Eye,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  ShoppingCart,
  Camera,
  Globe,
  TreePine,
  Droplets,
} from "lucide-react"

export default function UseCasesDashboard() {
  const [selectedUseCase, setSelectedUseCase] = useState("consumer")

  const useCases = {
    consumer: {
      title: "Experiencia del Consumidor",
      description: "Cómo los consumidores interactúan con los productos GIA",
      icon: Users,
      color: "blue",
      steps: [
        {
          id: 1,
          title: "Descubrimiento",
          description: "El consumidor encuentra el producto en GIA Store",
          icon: Store,
          details: "Navegación por catálogo, filtros por sostenibilidad, recomendaciones personalizadas",
        },
        {
          id: 2,
          title: "Escaneo QR",
          description: "Escanea el código QR del producto",
          icon: QrCode,
          details: "Acceso instantáneo a la historia completa del producto y su artesana",
        },
        {
          id: 3,
          title: "Historia del Producto",
          description: "Descubre la historia y el impacto",
          icon: Eye,
          details: "Información detallada sobre materiales, proceso de creación y impacto ambiental",
        },
        {
          id: 4,
          title: "Conexión Emocional",
          description: "Se conecta con la artesana y la historia",
          icon: Heart,
          details: "Fotos del proceso, video de la artesana, historia personal y técnicas tradicionales",
        },
        {
          id: 5,
          title: "Compra Consciente",
          description: "Realiza la compra informada",
          icon: ShoppingCart,
          details: "Decisión basada en valores, impacto positivo y calidad artesanal",
        },
      ],
    },
    artisan: {
      title: "Flujo de la Artesana",
      description: "Proceso de registro y seguimiento para artesanas",
      icon: Users,
      color: "green",
      steps: [
        {
          id: 1,
          title: "Registro de Producto",
          description: "La artesana registra su nuevo producto",
          icon: Package,
          details: "Formulario completo con información del producto, materiales y proceso",
        },
        {
          id: 2,
          title: "Documentación",
          description: "Sube fotos y documentos de certificación",
          icon: Camera,
          details: "Imágenes del proceso, producto terminado y certificados de sostenibilidad",
        },
        {
          id: 3,
          title: "Generación QR",
          description: "El sistema genera el código QR único",
          icon: QrCode,
          details: "Código único vinculado a toda la información del producto y trazabilidad",
        },
        {
          id: 4,
          title: "Seguimiento",
          description: "Monitorea el impacto y las interacciones",
          icon: TrendingUp,
          details: "Dashboard con métricas de engagement, escaneos y feedback de consumidores",
        },
        {
          id: 5,
          title: "Reconocimiento",
          description: "Recibe reconocimiento por su trabajo sostenible",
          icon: Award,
          details: "Badges de sostenibilidad, testimonios de clientes y crecimiento de su marca personal",
        },
      ],
    },
    business: {
      title: "Gestión Empresarial",
      description: "Cómo las empresas utilizan el sistema GIA",
      icon: TrendingUp,
      color: "purple",
      steps: [
        {
          id: 1,
          title: "Onboarding",
          description: "Integración inicial con el sistema GIA",
          icon: CheckCircle,
          details: "Configuración de cuenta, integración con sistemas existentes y capacitación del equipo",
        },
        {
          id: 2,
          title: "Gestión de Inventario",
          description: "Administra productos y artesanas",
          icon: Package,
          details: "Dashboard centralizado para gestionar productos, artesanas y certificaciones",
        },
        {
          id: 3,
          title: "Analytics y Reportes",
          description: "Monitorea métricas de sostenibilidad",
          icon: TrendingUp,
          details: "KPIs de impacto ambiental, engagement de consumidores y performance de artesanas",
        },
        {
          id: 4,
          title: "Certificaciones",
          description: "Gestiona certificaciones y auditorías",
          icon: Award,
          details: "Seguimiento de certificaciones, programación de auditorías y reportes de compliance",
        },
        {
          id: 5,
          title: "Impacto ESG",
          description: "Reportes de sostenibilidad para stakeholders",
          icon: Globe,
          details: "Informes detallados de impacto ambiental y social para inversores y reguladores",
        },
      ],
    },
  }

  const currentUseCase = useCases[selectedUseCase]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Casos de Uso GIA</h1>
          <p className="text-xl text-gray-600">
            Descubre cómo diferentes usuarios interactúan con el sistema de trazabilidad
          </p>
        </div>

        {/* Use Case Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(useCases).map(([key, useCase]) => (
            <Card
              key={key}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedUseCase === key ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedUseCase(key)}
            >
              <CardContent className="p-6 text-center">
                <useCase.icon className={`w-12 h-12 mx-auto mb-4 text-${useCase.color}-600`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Use Case Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <currentUseCase.icon className={`w-8 h-8 text-${currentUseCase.color}-600`} />
              {currentUseCase.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Process Flow */}
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  {currentUseCase.steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center relative">
                      {/* Connection Line */}
                      {index < currentUseCase.steps.length - 1 && (
                        <div
                          className="absolute top-6 left-12 w-full h-0.5 bg-gray-300 z-0"
                          style={{ width: "calc(100vw / 5)" }}
                        />
                      )}

                      {/* Step Circle */}
                      <div
                        className={`w-12 h-12 rounded-full bg-${currentUseCase.color}-100 border-2 border-${currentUseCase.color}-500 flex items-center justify-center z-10 bg-white`}
                      >
                        <step.icon className={`w-6 h-6 text-${currentUseCase.color}-600`} />
                      </div>

                      {/* Step Info */}
                      <div className="text-center mt-4 max-w-32">
                        <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentUseCase.steps.map((step) => (
                  <Card key={step.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-full bg-${currentUseCase.color}-100 flex items-center justify-center`}
                        >
                          <step.icon className={`w-5 h-5 text-${currentUseCase.color}-600`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="text-xs">
                            Paso {step.id}
                          </Badge>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                      <p className="text-xs text-gray-500">{step.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Beneficios Clave</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Transparencia Total</h4>
                    <p className="text-sm text-gray-600">
                      Acceso completo a la cadena de suministro y proceso de creación
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Impacto Medible</h4>
                    <p className="text-sm text-gray-600">Métricas precisas de sostenibilidad y impacto ambiental</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Conexión Humana</h4>
                    <p className="text-sm text-gray-600">Vínculo directo entre consumidores y artesanas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Certificación Digital</h4>
                    <p className="text-sm text-gray-600">Validación automática de estándares de sostenibilidad</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Métricas de Impacto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TreePine className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-green-600">2,845kg</p>
                  <p className="text-sm text-green-700">CO₂ Evitado</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Droplets className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                    <p className="text-xl font-bold text-blue-600">15,420L</p>
                    <p className="text-xs text-blue-700">Agua Conservada</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Users className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                    <p className="text-xl font-bold text-purple-600">89</p>
                    <p className="text-xs text-purple-700">Artesanas Activas</p>
                  </div>
                </div>

                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 mx-auto text-amber-600 mb-2" />
                  <p className="text-xl font-bold text-amber-600">4.8/5</p>
                  <p className="text-xs text-amber-700">Satisfacción del Cliente</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para implementar GIA en tu organización?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Únete a la revolución de la transparencia y sostenibilidad. Conecta con tus consumidores de manera
              auténtica y mide tu impacto real.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Comenzar Ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Agendar Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
