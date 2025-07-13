"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Users,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Target,
  Award,
  Globe,
  Factory,
  Droplets,
  Zap,
  TreePine,
  Recycle,
  Heart,
  Scale,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react"

export default function ESGDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)

  const esgScores = {
    environmental: {
      score: 87,
      trend: "up",
      change: 5.2,
      metrics: {
        carbon_footprint: { value: 2.3, unit: "tCO2e", target: 2.0, status: "warning" },
        water_usage: { value: 1250, unit: "L/producto", target: 1000, status: "warning" },
        renewable_energy: { value: 78, unit: "%", target: 85, status: "good" },
        waste_reduction: { value: 92, unit: "%", target: 90, status: "excellent" },
        circular_materials: { value: 85, unit: "%", target: 80, status: "excellent" },
        biodiversity_impact: { value: 4.2, unit: "/5", target: 4.0, status: "excellent" },
      },
    },
    social: {
      score: 92,
      trend: "up",
      change: 3.1,
      metrics: {
        fair_wages: { value: 98, unit: "%", target: 95, status: "excellent" },
        worker_safety: { value: 96, unit: "%", target: 95, status: "excellent" },
        community_investment: { value: 2.5, unit: "% ingresos", target: 2.0, status: "excellent" },
        gender_equality: { value: 89, unit: "%", target: 85, status: "excellent" },
        training_hours: { value: 45, unit: "h/empleado", target: 40, status: "excellent" },
        local_sourcing: { value: 76, unit: "%", target: 70, status: "excellent" },
      },
    },
    governance: {
      score: 85,
      trend: "stable",
      change: 0.8,
      metrics: {
        transparency: { value: 88, unit: "%", target: 85, status: "excellent" },
        compliance: { value: 100, unit: "%", target: 100, status: "excellent" },
        ethics_training: { value: 94, unit: "%", target: 90, status: "excellent" },
        board_diversity: { value: 67, unit: "%", target: 70, status: "warning" },
        risk_management: { value: 91, unit: "%", target: 85, status: "excellent" },
        stakeholder_engagement: { value: 83, unit: "%", target: 80, status: "excellent" },
      },
    },
  }

  const certifications = [
    {
      name: "B Corp Certification",
      status: "active",
      expiry: "2025-12-31",
      score: 94,
      category: "governance",
    },
    {
      name: "GOTS (Global Organic Textile Standard)",
      status: "active",
      expiry: "2025-06-30",
      score: 96,
      category: "environmental",
    },
    {
      name: "Fair Trade Certified",
      status: "active",
      expiry: "2025-09-15",
      score: 98,
      category: "social",
    },
    {
      name: "Cradle to Cradle Certified",
      status: "pending",
      expiry: "2024-12-31",
      score: 85,
      category: "environmental",
    },
    {
      name: "SA8000 Social Accountability",
      status: "active",
      expiry: "2025-03-20",
      score: 92,
      category: "social",
    },
  ]

  const initiatives = [
    {
      id: 1,
      title: "Programa de Energía Renovable",
      description: "Transición completa a energía solar y eólica en todas las instalaciones",
      category: "environmental",
      progress: 78,
      target_date: "2024-12-31",
      investment: 250000,
      impact: "Reducción de 45% en emisiones de CO2",
      status: "in_progress",
    },
    {
      id: 2,
      title: "Cooperativa de Artesanas",
      description: "Expansión del programa de cooperativas locales",
      category: "social",
      progress: 92,
      target_date: "2024-06-30",
      investment: 180000,
      impact: "150 nuevas artesanas beneficiadas",
      status: "in_progress",
    },
    {
      id: 3,
      title: "Sistema de Trazabilidad Blockchain",
      description: "Implementación de blockchain para transparencia total",
      category: "governance",
      progress: 65,
      target_date: "2025-03-31",
      investment: 320000,
      impact: "100% trazabilidad de productos",
      status: "in_progress",
    },
    {
      id: 4,
      title: "Programa de Reciclaje Textil",
      description: "Sistema de economía circular para productos al final de vida útil",
      category: "environmental",
      progress: 100,
      target_date: "2024-01-31",
      investment: 150000,
      impact: "95% de productos reciclables",
      status: "completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600 bg-green-100"
      case "good":
        return "text-blue-600 bg-blue-100"
      case "warning":
        return "text-yellow-600 bg-yellow-100"
      case "critical":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="w-4 h-4" />
      case "good":
        return <CheckCircle className="w-4 h-4" />
      case "warning":
        return <AlertTriangle className="w-4 h-4" />
      case "critical":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Target className="w-4 h-4" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "environmental":
        return <Leaf className="w-5 h-5" />
      case "social":
        return <Users className="w-5 h-5" />
      case "governance":
        return <Shield className="w-5 h-5" />
      default:
        return <Target className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "environmental":
        return "text-green-600 bg-green-100"
      case "social":
        return "text-blue-600 bg-blue-100"
      case "governance":
        return "text-purple-600 bg-purple-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard ESG</h1>
            <p className="text-gray-600">Monitoreo de métricas ambientales, sociales y de gobernanza</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualizar
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* ESG Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Ambiental</h3>
                    <p className="text-sm text-green-700">Environmental</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-600">{esgScores.environmental.score}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-600">+{esgScores.environmental.change}%</span>
                  </div>
                </div>
              </div>
              <Progress value={esgScores.environmental.score} className="h-2" />
              <p className="text-xs text-green-700 mt-2">Excelente desempeño ambiental</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">Social</h3>
                    <p className="text-sm text-blue-700">Social</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{esgScores.social.score}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-600">+{esgScores.social.change}%</span>
                  </div>
                </div>
              </div>
              <Progress value={esgScores.social.score} className="h-2" />
              <p className="text-xs text-blue-700 mt-2">Liderazgo en impacto social</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">Gobernanza</h3>
                    <p className="text-sm text-purple-700">Governance</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-purple-600">{esgScores.governance.score}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-600">+{esgScores.governance.change}%</span>
                  </div>
                </div>
              </div>
              <Progress value={esgScores.governance.score} className="h-2" />
              <p className="text-xs text-purple-700 mt-2">Sólida estructura de gobernanza</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics */}
        <Tabs defaultValue="environmental" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="environmental">Ambiental</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="governance">Gobernanza</TabsTrigger>
            <TabsTrigger value="initiatives">Iniciativas</TabsTrigger>
          </TabsList>

          <TabsContent value="environmental" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(esgScores.environmental.metrics).map(([key, metric]) => (
                <Card key={key} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {key === "carbon_footprint" && <Factory className="w-5 h-5 text-gray-600" />}
                        {key === "water_usage" && <Droplets className="w-5 h-5 text-blue-600" />}
                        {key === "renewable_energy" && <Zap className="w-5 h-5 text-yellow-600" />}
                        {key === "waste_reduction" && <Recycle className="w-5 h-5 text-green-600" />}
                        {key === "circular_materials" && <Recycle className="w-5 h-5 text-purple-600" />}
                        {key === "biodiversity_impact" && <TreePine className="w-5 h-5 text-green-600" />}
                        <h4 className="font-medium capitalize">{key.replace("_", " ")}</h4>
                      </div>
                      <Badge className={getStatusColor(metric.status)}>{getStatusIcon(metric.status)}</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{metric.value}</span>
                        <span className="text-sm text-gray-600">{metric.unit}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>
                            Objetivo: {metric.target} {metric.unit}
                          </span>
                          <span className={metric.value <= metric.target ? "text-green-600" : "text-red-600"}>
                            {metric.value <= metric.target ? "✓" : "⚠"}
                          </span>
                        </div>
                        <Progress
                          value={
                            key === "carbon_footprint" || key === "water_usage"
                              ? Math.max(0, 100 - (metric.value / metric.target) * 100)
                              : (metric.value / metric.target) * 100
                          }
                          className="h-2"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(esgScores.social.metrics).map(([key, metric]) => (
                <Card key={key} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {key === "fair_wages" && <Scale className="w-5 h-5 text-green-600" />}
                        {key === "worker_safety" && <Shield className="w-5 h-5 text-blue-600" />}
                        {key === "community_investment" && <Heart className="w-5 h-5 text-red-600" />}
                        {key === "gender_equality" && <Users className="w-5 h-5 text-purple-600" />}
                        {key === "training_hours" && <Award className="w-5 h-5 text-orange-600" />}
                        {key === "local_sourcing" && <Globe className="w-5 h-5 text-teal-600" />}
                        <h4 className="font-medium capitalize">{key.replace("_", " ")}</h4>
                      </div>
                      <Badge className={getStatusColor(metric.status)}>{getStatusIcon(metric.status)}</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{metric.value}</span>
                        <span className="text-sm text-gray-600">{metric.unit}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>
                            Objetivo: {metric.target} {metric.unit}
                          </span>
                          <span className={metric.value >= metric.target ? "text-green-600" : "text-red-600"}>
                            {metric.value >= metric.target ? "✓" : "⚠"}
                          </span>
                        </div>
                        <Progress value={(metric.value / metric.target) * 100} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(esgScores.governance.metrics).map(([key, metric]) => (
                <Card key={key} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {key === "transparency" && <Globe className="w-5 h-5 text-blue-600" />}
                        {key === "compliance" && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {key === "ethics_training" && <Award className="w-5 h-5 text-purple-600" />}
                        {key === "board_diversity" && <Users className="w-5 h-5 text-orange-600" />}
                        {key === "risk_management" && <Shield className="w-5 h-5 text-red-600" />}
                        {key === "stakeholder_engagement" && <Heart className="w-5 h-5 text-pink-600" />}
                        <h4 className="font-medium capitalize">{key.replace("_", " ")}</h4>
                      </div>
                      <Badge className={getStatusColor(metric.status)}>{getStatusIcon(metric.status)}</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{metric.value}</span>
                        <span className="text-sm text-gray-600">{metric.unit}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>
                            Objetivo: {metric.target} {metric.unit}
                          </span>
                          <span className={metric.value >= metric.target ? "text-green-600" : "text-red-600"}>
                            {metric.value >= metric.target ? "✓" : "⚠"}
                          </span>
                        </div>
                        <Progress value={(metric.value / metric.target) * 100} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="initiatives" className="space-y-6">
            <div className="space-y-6">
              {initiatives.map((initiative) => (
                <Card key={initiative.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${getCategoryColor(initiative.category)}`}>
                          {getCategoryIcon(initiative.category)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
                          <p className="text-gray-600 mb-3">{initiative.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Inversión:</span>
                              <p className="text-gray-600">${initiative.investment.toLocaleString()}</p>
                            </div>
                            <div>
                              <span className="font-medium">Fecha objetivo:</span>
                              <p className="text-gray-600">{initiative.target_date}</p>
                            </div>
                            <div>
                              <span className="font-medium">Impacto esperado:</span>
                              <p className="text-gray-600">{initiative.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge
                        className={
                          initiative.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : initiative.status === "in_progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }
                      >
                        {initiative.status === "completed"
                          ? "Completado"
                          : initiative.status === "in_progress"
                            ? "En progreso"
                            : "Pendiente"}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>{initiative.progress}%</span>
                      </div>
                      <Progress value={initiative.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certificaciones ESG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(cert.category)}>
                      {getCategoryIcon(cert.category)}
                      <span className="ml-1 capitalize">{cert.category}</span>
                    </Badge>
                    <Badge
                      className={
                        cert.status === "active"
                          ? "bg-green-100 text-green-800"
                          : cert.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {cert.status === "active" ? "Activa" : cert.status === "pending" ? "Pendiente" : "Vencida"}
                    </Badge>
                  </div>
                  <h4 className="font-medium mb-2">{cert.name}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Puntuación:</span>
                      <span className="font-medium">{cert.score}/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vence:</span>
                      <span>{new Date(cert.expiry).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Progress value={cert.score} className="h-2 mt-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Acciones Recomendadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-yellow-900">Mejorar diversidad del directorio</h4>
                  <p className="text-sm text-yellow-800 mt-1">
                    La diversidad del directorio está por debajo del objetivo (67% vs 70%). Considerar incorporar más
                    diversidad en próximas designaciones.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ver detalles
                </Button>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-orange-900">Reducir huella de carbono</h4>
                  <p className="text-sm text-orange-800 mt-1">
                    Las emisiones de CO2 están por encima del objetivo (2.3 vs 2.0 tCO2e). Acelerar la implementación
                    del programa de energía renovable.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ver plan
                </Button>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900">Optimizar uso del agua</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    El consumo de agua por producto puede mejorarse (1250L vs objetivo 1000L). Implementar tecnologías
                    de reciclaje de agua.
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Ver opciones
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
