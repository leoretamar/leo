"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Package,
  Leaf,
  BarChart3,
  Shield,
  Gift,
  BookOpen,
  Search,
  Play,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
} from "lucide-react"

interface UseCase {
  id: string
  code: string
  title: string
  module: string
  actor: string
  status: "completed" | "in-progress" | "pending"
  description: string
  precondition: string
  postcondition: string
  steps: string[]
}

export default function UseCasesDashboard() {
  const [selectedUseCase, setSelectedUseCase] = useState<string>("CU1")

  const useCases: UseCase[] = [
    {
      id: "CU1",
      code: "CU1",
      title: "Registrar Producto",
      module: "Trazabilidad",
      actor: "Artesano, Operador",
      status: "completed",
      description: "Registro completo de un nuevo producto artesanal con toda su trazabilidad",
      precondition: "Materia prima adquirida y validada",
      postcondition: "Producto registrado, trazabilidad completa visible",
      steps: [
        "Ingresar datos de materia prima",
        "Registrar etapas de proceso y responsables",
        "Adjuntar certificados y fotos",
        "Guardar registro; sistema genera ID, QR y registro en blockchain",
      ],
    },
    {
      id: "CU2",
      code: "CU2",
      title: "Consultar Trazabilidad",
      module: "Trazabilidad",
      actor: "Usuario interno, consumidor",
      status: "completed",
      description: "Consulta pública de la trazabilidad completa de un producto",
      precondition: "Producto registrado",
      postcondition: "Visualización/descarga de ficha y storytelling",
      steps: ["Buscar producto por código/QR", "Visualizar historia, origen, procesos y certificados"],
    },
    {
      id: "CU3",
      code: "CU3",
      title: "Simular Impacto Ambiental",
      module: "Ecodiseño",
      actor: "Diseñador, área I+D",
      status: "in-progress",
      description: "Simulación del impacto ambiental de un producto en fase de diseño",
      precondition: "Producto registrado en diseño",
      postcondition: "Sugerencias validadas; reporte descargable",
      steps: [
        "Ingresar composición y procesos propuestos",
        "Ejecutar simulación (IA recomienda mejoras)",
        "Analizar reporte gráfico",
      ],
    },
    {
      id: "CU4",
      code: "CU4",
      title: "Comparador de Alternativas",
      module: "Ecodiseño",
      actor: "Diseñador",
      status: "pending",
      description: "Comparación de múltiples alternativas de diseño para optimización",
      precondition: "Múltiples diseños/variantes registrados",
      postcondition: "Alternativa recomendada",
      steps: [
        "Seleccionar dos o más alternativas",
        "Ejecutar comparación",
        "Visualizar resultados y elegir opción óptima",
      ],
    },
    {
      id: "CU5",
      code: "CU5",
      title: "Visualizar Dashboard ESG",
      module: "ESG y Circularidad",
      actor: "Administrador, gestión, auditor externo",
      status: "completed",
      description: "Visualización de métricas ESG y circularidad en dashboard interactivo",
      precondition: "Datos registrados en sistema",
      postcondition: "Descarga de informe ESG/Circularidad",
      steps: [
        "Acceder a dashboard",
        "Filtrar por fechas, producto, colección, etc.",
        "Visualizar métricas clave (emisiones, circularidad, proveedores, etc.)",
      ],
    },
    {
      id: "CU6",
      code: "CU6",
      title: "Generar Pasaporte Digital (DPP)",
      module: "Auditoría y DPP",
      actor: "Responsable calidad, auditor",
      status: "completed",
      description: "Generación del Pasaporte Digital del Producto con QR",
      precondition: "Producto con trazabilidad completa",
      postcondition: "DPP generado, producto certificado",
      steps: [
        "Acceder a ficha del producto",
        "Revisar datos y aprobar generación de DPP",
        "Sistema emite PDF/QR con resumen digital",
      ],
    },
    {
      id: "CU7",
      code: "CU7",
      title: "Consultar Auditoría",
      module: "Auditoría y DPP",
      actor: "Auditor, administración",
      status: "completed",
      description: "Consulta de auditorías realizadas a productos",
      precondition: "Auditorías registradas",
      postcondition: "Auditoría consultada",
      steps: ["Buscar auditoría por producto/fecha", "Visualizar resultados y observaciones"],
    },
    {
      id: "CU8",
      code: "CU8",
      title: "Solicitar Reciclaje o Devolución",
      module: "EPR Recompensas",
      actor: "Consumidor final",
      status: "in-progress",
      description: "Proceso de devolución de productos para reciclaje con recompensas",
      precondition: "Producto con QR DPP",
      postcondition: "Producto devuelto, recompensa otorgada",
      steps: [
        "Acceder a web/app",
        "Solicitar reciclaje/devolución",
        "Sistema emite código",
        "Consumidor entrega producto en punto de recolección",
        "Operador valida y otorga recompensa",
      ],
    },
    {
      id: "CU9",
      code: "CU9",
      title: "Gestionar Entregas y Seguimiento",
      module: "EPR Recompensas",
      actor: "Operador punto de recolección",
      status: "pending",
      description: "Gestión de entregas en puntos de recolección",
      precondition: "Solicitud emitida por consumidor",
      postcondition: "Producto marcado como reciclado/reutilizado",
      steps: ["Escanear código y validar devolución", "Registrar estado en sistema"],
    },
    {
      id: "CU10",
      code: "CU10",
      title: "Generar Storytelling Personalizado",
      module: "Storytelling IA",
      actor: "Marketing, responsable digital",
      status: "in-progress",
      description: "Generación automática de narrativas digitales personalizadas",
      precondition: "Producto con ficha y proceso documentado",
      postcondition: "Storytelling disponible para consumidor",
      steps: [
        "Acceder a módulo storytelling",
        "Generar relato interactivo automático",
        "Editar/validar historia",
        "Vincular al QR/NFC del producto",
      ],
    },
  ]

  const modules = [
    { id: "traceability", name: "Trazabilidad", icon: Package, color: "bg-blue-500" },
    { id: "ecodesign", name: "Ecodiseño", icon: Leaf, color: "bg-green-500" },
    { id: "esg", name: "ESG y Circularidad", icon: BarChart3, color: "bg-purple-500" },
    { id: "audit", name: "Auditoría y DPP", icon: Shield, color: "bg-orange-500" },
    { id: "epr", name: "EPR Recompensas", icon: Gift, color: "bg-yellow-500" },
    { id: "storytelling", name: "Storytelling IA", icon: BookOpen, color: "bg-pink-500" },
  ]

  const currentUseCase = useCases.find((uc) => uc.id === selectedUseCase)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-yellow-500" />
      case "pending":
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
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Casos de Uso - GIA Trazabilidad</h1>
            <p className="text-gray-600">Gestión y seguimiento de casos de uso por módulo</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Buscar caso de uso..." className="pl-10 w-64" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-gray-600">Completados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-600">En Progreso</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-gray-500" />
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-600">Pendientes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">10</p>
                  <p className="text-sm text-gray-600">Total CU</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Use Cases List */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Casos de Uso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {useCases.map((useCase) => (
                <div
                  key={useCase.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedUseCase === useCase.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedUseCase(useCase.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(useCase.status)}
                      <span className="font-medium">{useCase.code}</span>
                    </div>
                    {getStatusBadge(useCase.status)}
                  </div>
                  <h4 className="font-medium text-sm mb-1">{useCase.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Badge variant="outline" className="text-xs">
                      {useCase.module}
                    </Badge>
                    <span>•</span>
                    <span>{useCase.actor}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Use Case Details */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {currentUseCase && getStatusIcon(currentUseCase.status)}
                    {currentUseCase?.code} - {currentUseCase?.title}
                  </CardTitle>
                  <CardDescription>
                    Módulo: {currentUseCase?.module} | Actor: {currentUseCase?.actor}
                  </CardDescription>
                </div>
                {currentUseCase && getStatusBadge(currentUseCase.status)}
              </div>
            </CardHeader>
            <CardContent>
              {currentUseCase && (
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Detalles</TabsTrigger>
                    <TabsTrigger value="flow">Flujo</TabsTrigger>
                    <TabsTrigger value="execution">Ejecución</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">Descripción</Label>
                        <p className="text-sm text-gray-600 mt-1">{currentUseCase.description}</p>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Precondición</Label>
                        <p className="text-sm text-gray-600 mt-1">{currentUseCase.precondition}</p>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Postcondición</Label>
                        <p className="text-sm text-gray-600 mt-1">{currentUseCase.postcondition}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="flow" className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-3 block">Flujo Principal</Label>
                      <div className="space-y-2">
                        {currentUseCase.steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-3 p-2 rounded border">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center font-medium mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-sm flex-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="execution" className="space-y-4">
                    <div className="text-center space-y-4">
                      <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg">
                        <Play className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h4 className="font-medium mb-2">Ejecutar Caso de Uso</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Simular la ejecución de este caso de uso en el sistema
                        </p>
                        <Button>
                          <Play className="w-4 h-4 mr-2" />
                          Iniciar Simulación
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-left">
                          <Label>Última ejecución:</Label>
                          <p className="text-gray-600">15/01/2025 14:30</p>
                        </div>
                        <div className="text-left">
                          <Label>Resultado:</Label>
                          <p className="text-green-600">Exitoso</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
