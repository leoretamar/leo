"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Package,
  Leaf,
  BarChart3,
  Shield,
  Gift,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  Globe,
  Zap,
  Database,
  Smartphone,
  Award,
  Recycle,
} from "lucide-react"

export default function SystemOverview() {
  const [selectedPhase, setSelectedPhase] = useState(1)

  const modules = [
    {
      id: "traceability",
      name: "Trazabilidad Core",
      icon: Package,
      description: "Registro y seguimiento completo de productos desde materia prima hasta consumidor",
      status: "active",
      color: "bg-blue-500",
      features: [
        "Alta y edición de lotes, procesos, actores",
        "Registro de eventos y cambios de estado",
        "Consulta pública y privada de trazabilidad",
        "Tokenización de activos en blockchain",
        "Exportación de certificados de trazabilidad",
      ],
      progress: 85,
    },
    {
      id: "ecodesign",
      name: "Ecodiseño",
      icon: Leaf,
      description: "Diseño y simulación de productos considerando impactos ambientales",
      status: "active",
      color: "bg-green-500",
      features: [
        "Carga de fichas técnicas de producto",
        "Simulación de impacto ambiental",
        "Comparador de productos/ecodiseños",
        "Sugerencias automáticas de mejora con IA",
        "Dashboard gráfico",
      ],
      progress: 70,
    },
    {
      id: "esg",
      name: "ESG y Circularidad",
      icon: BarChart3,
      description: "Medición y visualización de métricas ESG y circularidad",
      status: "active",
      color: "bg-purple-500",
      features: [
        "Dashboard visual configurable",
        "Indicadores clave (emisiones, consumo energético, % circularidad)",
        "Visualización histórica y comparativa",
        "Generación de reportes",
      ],
      progress: 75,
    },
    {
      id: "audit",
      name: "Auditoría y DPP",
      icon: Shield,
      description: "Documentación y auditorías digitales, incluyendo Pasaporte Digital",
      status: "active",
      color: "bg-orange-500",
      features: [
        "Generación automática de PDFs/certificados",
        "Registro y consulta de auditorías",
        "Integración con entidades certificadoras",
      ],
      progress: 80,
    },
    {
      id: "epr",
      name: "EPR Recompensas",
      icon: Gift,
      description: "Incentivos para devolución, reciclaje o upcycling de productos",
      status: "development",
      color: "bg-yellow-500",
      features: [
        "Gestión de recompensas por devolución",
        "Registro de entregas en puntos de recolección",
        "Generación de certificados y seguimiento",
      ],
      progress: 45,
    },
    {
      id: "storytelling",
      name: "Storytelling IA",
      icon: BookOpen,
      description: "Relatos interactivos sobre el viaje e impacto del producto",
      status: "development",
      color: "bg-pink-500",
      features: [
        "Generación automática de storytelling visual/textual",
        "Integración con QR/NFC en etiquetas",
        "Panel de edición y personalización",
      ],
      progress: 40,
    },
  ]

  const roadmapPhases = [
    {
      phase: 1,
      title: "MVP Backend + GUI Principal",
      description: "Desarrollo de trazabilidad básica y visualización",
      status: "completed",
      duration: "3 meses",
      deliverables: [
        "Backend FastAPI con trazabilidad básica",
        "GUI principal con Streamlit",
        "Registro de productos y procesos",
        "Consulta básica de trazabilidad",
      ],
    },
    {
      phase: 2,
      title: "Módulos Avanzados",
      description: "Integración de ecodiseño, ESG, EPR",
      status: "in-progress",
      duration: "4 meses",
      deliverables: [
        "Módulo de Ecodiseño completo",
        "Dashboard ESG y Circularidad",
        "Sistema EPR de recompensas",
        "Integración con certificadoras",
      ],
    },
    {
      phase: 3,
      title: "Blockchain y App Móvil",
      description: "Despliegue de solución blockchain y aplicación móvil",
      status: "planned",
      duration: "3 meses",
      deliverables: [
        "Integración blockchain (Polygon)",
        "App móvil para artesanos",
        "QR/NFC para consumidores",
        "Storytelling con IA",
      ],
    },
    {
      phase: 4,
      title: "Interoperabilidad y Expansión",
      description: "Plataformas externas y expansión multirubro",
      status: "planned",
      duration: "6 meses",
      deliverables: [
        "APIs para ERPs (Odoo, SAP)",
        "Integración con marketplaces",
        "Expansión a calzado, cerámica, joyería",
        "Certificaciones internacionales",
      ],
    },
  ]

  const useCases = [
    { id: "CU1", title: "Registrar Producto", module: "Trazabilidad", status: "completed" },
    { id: "CU2", title: "Consultar Trazabilidad", module: "Trazabilidad", status: "completed" },
    { id: "CU3", title: "Simular Impacto Ambiental", module: "Ecodiseño", status: "in-progress" },
    { id: "CU4", title: "Comparador de Alternativas", module: "Ecodiseño", status: "pending" },
    { id: "CU5", title: "Visualizar Dashboard ESG", module: "ESG", status: "completed" },
    { id: "CU6", title: "Generar DPP", module: "Auditoría", status: "completed" },
    { id: "CU7", title: "Consultar Auditoría", module: "Auditoría", status: "completed" },
    { id: "CU8", title: "Solicitar Reciclaje", module: "EPR", status: "in-progress" },
    { id: "CU9", title: "Gestionar Entregas", module: "EPR", status: "pending" },
    { id: "CU10", title: "Generar Storytelling", module: "Storytelling IA", status: "in-progress" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "pending":
      case "planned":
        return <AlertCircle className="w-4 h-4 text-gray-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completado</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-100 text-yellow-800">En Progreso</Badge>
      case "pending":
        return <Badge className="bg-gray-100 text-gray-800">Pendiente</Badge>
      case "planned":
        return <Badge className="bg-blue-100 text-blue-800">Planificado</Badge>
      case "active":
        return <Badge className="bg-green-100 text-green-800">Activo</Badge>
      case "development":
        return <Badge className="bg-yellow-100 text-yellow-800">En Desarrollo</Badge>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">GIA Trazabilidad</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solución tecnológica integral que utiliza blockchain y módulos de inteligencia artificial para garantizar la
            trazabilidad, transparencia y sostenibilidad en la cadena de valor de productos artesanales
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              <Database className="w-4 h-4 mr-1" />
              Blockchain Integrado
            </Badge>
            <Badge variant="outline" className="text-purple-600 border-purple-600">
              <Zap className="w-4 h-4 mr-1" />
              IA Avanzada
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600">
              <Globe className="w-4 h-4 mr-1" />
              Escalable
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="modules" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="modules">Módulos del Sistema</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="use-cases">Casos de Uso</TabsTrigger>
            <TabsTrigger value="architecture">Arquitectura</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => {
                const IconComponent = module.icon
                return (
                  <Card key={module.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-lg ${module.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {getStatusBadge(module.status)}
                      </div>
                      <CardTitle className="text-lg">{module.name}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progreso</span>
                          <span className="font-medium">{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Funcionalidades:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {module.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {roadmapPhases.map((phase) => (
                <Card
                  key={phase.phase}
                  className={`cursor-pointer transition-all ${
                    selectedPhase === phase.phase ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedPhase(phase.phase)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                          {phase.phase}
                        </div>
                        <span className="text-sm text-gray-600">{phase.duration}</span>
                      </div>
                      {getStatusIcon(phase.status)}
                    </div>
                    <CardTitle className="text-base">{phase.title}</CardTitle>
                    <CardDescription className="text-sm">{phase.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Fase {selectedPhase}: {roadmapPhases[selectedPhase - 1]?.title}
                  {getStatusBadge(roadmapPhases[selectedPhase - 1]?.status)}
                </CardTitle>
                <CardDescription>{roadmapPhases[selectedPhase - 1]?.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Entregables:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {roadmapPhases[selectedPhase - 1]?.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="use-cases" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {useCases.map((useCase) => (
                <Card key={useCase.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-blue-600">{useCase.id}</span>
                      {getStatusIcon(useCase.status)}
                    </div>
                    <h4 className="font-medium text-sm mb-2">{useCase.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {useCase.module}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="text-sm text-gray-600">Casos Completados</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-600">3</div>
                  <div className="text-sm text-gray-600">En Progreso</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <AlertCircle className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-600">2</div>
                  <div className="text-sm text-gray-600">Pendientes</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Componentes Principales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Backend de Trazabilidad</p>
                      <p className="text-xs text-gray-600">FastAPI, integración blockchain</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">GUI Principal</p>
                      <p className="text-xs text-gray-600">Streamlit (MVP), web app amigable</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Módulos Avanzados</p>
                      <p className="text-xs text-gray-600">Ecodiseño, EPR, DPP, Auditoría, Storytelling, ESG</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Integración Móvil</p>
                      <p className="text-xs text-gray-600">Apps móviles y sistemas externos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Integraciones Previstas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Blockchain</p>
                      <p className="text-xs text-gray-600">Ethereum, Polygon, etc.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">APIs Externas</p>
                      <p className="text-xs text-gray-600">Certificadoras, marketplaces</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">ERPs</p>
                      <p className="text-xs text-gray-600">Odoo, SAP, etc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Usuarios del Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="text-center space-y-2">
                    <Users className="w-8 h-8 mx-auto text-blue-500" />
                    <p className="font-medium text-sm">Productores y Talleres</p>
                    <p className="text-xs text-gray-600">Artesanos</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Package className="w-8 h-8 mx-auto text-green-500" />
                    <p className="font-medium text-sm">Empresas y Marcas</p>
                    <p className="text-xs text-gray-600">Comercializadores</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Smartphone className="w-8 h-8 mx-auto text-purple-500" />
                    <p className="font-medium text-sm">Consumidores</p>
                    <p className="text-xs text-gray-600">Finales</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Award className="w-8 h-8 mx-auto text-orange-500" />
                    <p className="font-medium text-sm">Auditores</p>
                    <p className="text-xs text-gray-600">Certificadoras</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Globe className="w-8 h-8 mx-auto text-pink-500" />
                    <p className="font-medium text-sm">Instituciones</p>
                    <p className="text-xs text-gray-600">ONGs, Públicas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-600">Productos Piloto</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm text-gray-600">Módulos Integrados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">10</p>
                  <p className="text-sm text-gray-600">Casos de Uso</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Recycle className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-gray-600">Fases Roadmap</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
