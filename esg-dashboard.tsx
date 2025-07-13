"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Leaf,
  Users,
  Shield,
  Download,
  Calendar,
  Award,
  Globe,
  Recycle,
  TreePine,
  Droplets,
  Building,
  FileText,
  BarChart3,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react"

export default function ESGDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024")
  const [selectedMetric, setSelectedMetric] = useState("overview")

  // ESG Data
  const esgScores = {
    environmental: 87,
    social: 92,
    governance: 85,
    overall: 88
  }

  const environmentalData = [
    { month: "Ene", co2_reduction: 120, water_saved: 2400, waste_diverted: 85 },
    { month: "Feb", co2_reduction: 140, water_saved: 2800, waste_diverted: 92 },
    { month: "Mar", co2_reduction: 130, water_saved: 2600, waste_diverted: 88 },
    { month: "Abr", co2_reduction: 165, water_saved: 3200, waste_diverted: 95 },
    { month: "May", co2_reduction: 150, water_saved: 3000, waste_diverted: 90 },
    { month: "Jun", co2_reduction: 180, water_saved: 3600, waste_diverted: 98 },
  ]

  const socialImpactData = [
    { category: "Artesanas Empleadas", value: 89, target: 100 },
    { category: "Comunidades Impactadas", value: 12, target: 15 },
    { category: "Programas de Capacitación", value: 8, target: 10 },
    { category: "Beneficiarios Directos", value: 340, target: 400 },
  ]

  const sustainabilityGoals = [
    {
      id: 1,
      title: "Neutralidad de Carbono",
      description: "Alcanzar neutralidad de carbono en toda la cadena de suministro",
      progress: 78,
      target_date: "2025",
      status: "En Progreso",
      icon: Leaf
    },
    {
      id: 2,
      title: "Economía Circular",
      description: "100% de productos con diseño circular",
      progress: 92,
      target_date: "2024",
      status: "Casi Completado",
      icon: Recycle
    },
    {
      id: 3,
      title: "Impacto Social",
      description: "Beneficiar a 500 artesanas y sus familias",
      progress: 68,
      target_date: "2025",
      status: "En Progreso",
      icon: Users
    },
    {
      id: 4,
      title: "Transparencia Total",
      description: "Trazabilidad completa en 100% de productos",
      progress: 95,
      target_date: "2024",
      status: "Casi Completado",
      icon: Shield
    }
  ]

  const certifications = [
    { name: "B Corp Certification", status: "Certificado", date: "2023", score: "95/100" },
    { name: "Fair Trade", status: "Certificado", date: "2023", score: "Excelente" },
    { name: "GOTS", status: "Certificado", date: "2024", score: "A+" },
    { name: "Carbon Trust", status: "En Proceso", date: "2024", score: "Pendiente" },
  ]

  const impactMetrics = {
    environmental: {
      co2_avoided: 2845,
      water_saved: 18420,
      waste_diverted: 567,
      renewable_energy: 85
    },
    social: {
      artisans_supported: 89,
      communities: 12,
      jobs_created: 156,
      training_hours: 2340
    },
    economic: {
      fair_trade_premium: 45000,
      local_investment: 120000,
      artisan_income_increase: 35,
      supply_chain_transparency: 98
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completado":
      case "Certificado":
      case "Casi Completado":
        return "bg-green-100 text-green-800"
      case "En Progreso":
        return "bg-yellow-100 text-yellow-800"
      case "En Proceso":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard ESG</h1>
            <p className="text-gray-600">Environmental, Social & Governance Impact</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              {selectedPeriod}
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Reporte ESG
            </Button>
          </div>
        </div>

        {/* ESG Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <Badge className="bg-green-100 text-green-800">Excelente</Badge>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Environmental</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-green-600">{esgScores.environmental}</span>
                <span className="text-sm text-green-600 mb-1">/100</span>
              </div>
              <Progress value={esgScores.environmental} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-blue-600" />
                <Badge className="bg-blue-100 text-blue-800">Excelente</Badge>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Social</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-blue-600">{esgScores.social}</span>
                <span className="text-sm text-blue-600 mb-1">/100</span>
              </div>
              <Progress value={esgScores.social} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
                <Badge className="bg-purple-100 text-purple-800">Muy Bueno</Badge>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Governance</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-purple-600">{esgScores.governance}</span>
                <span className="text-sm text-purple-600 mb-1">/100</span>
              </div>
              <Progress value={esgScores.governance} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-amber-600" />
                <Badge className="bg-amber-100 text-amber-800">Excelente</Badge>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Puntuación General</h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-amber-600">{esgScores.overall}</span>
                <span className="text-sm text-amber-600 mb-1">/100</span>
              </div>
              <Progress value={esgScores.overall} className="h-2 mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="environmental" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="environmental">Ambiental</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="governance">Gobernanza</TabsTrigger>
            <TabsTrigger value="goals">Objetivos</TabsTrigger>
          </TabsList>

          <TabsContent value="environmental" className="space-y-6">
            {/* Environmental KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">CO₂ Evitado</p>
                      <p className="text-2xl font-bold text-green-600">{impactMetrics.environmental.co2_avoided}kg</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+18% vs año anterior</span>
                      </div>
                    </div>
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Agua Conservada</p>
                      <p className="text-2xl font-bold text-blue-600">{impactMetrics.environmental.water_saved.toLocaleString()}L</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+22% vs año anterior</span>
                      </div>
                    </div>
                    <Droplets className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Residuos Desviados</p>
                      <p className="text-2xl font-bold text-orange-600">{impactMetrics.environmental.waste_diverted}kg</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+15% vs año anterior</span>
                      </div>
                    </div>
                    <Recycle className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Energía Renovable</p>
                      <p className="text-2xl font-bold text-purple-600">{impactMetrics.environmental.renewable_energy}%</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+5% vs año anterior</span>
                      </div>
                    </div>
                    <TreePine className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Environmental Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impacto Ambiental Mensual</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={environmentalData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="co2_reduction" stroke="#10b981" strokeWidth={2} name="CO₂ Reducido (kg)" />
                      <Line type="monotone" dataKey="water_saved" stroke="#3b82f6" strokeWidth={2} name="Agua Ahorrada (L)" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribución de Impacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Reducción CO₂", value: 45, color: "#10b981" },
                          { name: "Conservación Agua", value: 35, color: "#3b82f6" },
                          { name: "Gestión Residuos", value: 20, color: "#f59e0b" }
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {[
                          { name: "Reducción CO₂", value: 45, color: "#10b981" },
                          { name: "Conservación Agua", value: 35, color: "#3b82f6" },
                          { name: "Gestión Residuos", value: 20, color: "#f59e0b" }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            {/* Social KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Artesanas Apoyadas</p>
                      <p className="text-2xl font-bold text-blue-600">{impactMetrics.social.artisans_supported}</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+12% vs año anterior</span>
                      </div>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Comunidades</p>
                      <p className="text-2xl font-bold text-green-600">{impactMetrics.social.communities}</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+3 nuevas</span>
                      </div>
                    </div>
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Empleos Creados</p>
                      <p className="text-2xl font-bold text-purple-600">{impactMetrics.social.jobs_created}</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+25% vs año anterior</span>
                      </div>
                    </div>
                    <Building className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Horas de Capacitación</p>
                      <p className="text-2xl font-bold text-orange-600">{impactMetrics.social.training_hours.toLocaleString()}</p>
                      <div className="flex items-center mt-1">
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600">+30% vs año anterior</span>
                      </div>
                    </div>
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Impact Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Progreso de Impacto Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {socialImpactData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{item.category}</span>
                        <span className="text-sm text-gray-600">{item.value} / {item.target}</span>
                      </div>
                      <Progress value={(item.value / item.target) * 100} className="h-3" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Actual: {item.value}</span>
                        <span>Meta: {item.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            {/* Governance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certificaciones y Estándares</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{cert.name}</h4>
                          <p className="text-sm text-gray-600">Obtenido en {cert.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(cert.status)}>
                            {cert.status}
                          </Badge>
                          <p className="text-sm text-gray-600 mt-1">{cert.score}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transparencia y Reportes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="font-medium text-green-900">Reporte Anual ESG</p>
                          <p className="text-sm text-green-700">Publicado mensualmente</p>
                        </div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-900">Auditoría Externa</p>
                          <p className="text-sm text-blue-700">Realizada anualmente</p>
                        </div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-purple-600" />
                        <div>
                          <p className="font-medium text-purple-900">Compliance</p>
                          <p className="text-sm text-purple-700">100% cumplimiento</p>
                        </div>
                      </div>
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-orange-600" />
                        <div>
                          <p className="font-medium text-orange-900">Trazabilidad</p>
                          <p className="text-sm text-orange-700">98% de productos trazados</p>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">98%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            {/* Sustainability Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sustainabilityGoals.map((goal) => (
                <Card key={goal.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <goal.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                          <Badge className={getStatusColor(goal.status)}>
                            {goal.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{goal.description}</p>
                        <div className="space-y-2">
                          <div className\
