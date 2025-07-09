"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart3,
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  Leaf,
  Users,
  Shield,
  Recycle,
  Building,
} from "lucide-react"

interface MetricaESG {
  categoria: "Environmental" | "Social" | "Governance"
  indicador: string
  valor: number
  unidad: string
  tendencia: "up" | "down" | "stable"
  meta: number
}

export default function ESGDashboard() {
  const [filtroFecha, setFiltroFecha] = useState("ultimo-mes")
  const [filtroColeccion, setFiltroColeccion] = useState("todas")
  const [filtroProveedor, setFiltroProveedor] = useState("todos")

  const metricas: MetricaESG[] = [
    {
      categoria: "Environmental",
      indicador: "Emisiones CO₂",
      valor: 2.3,
      unidad: "kg CO₂e/producto",
      tendencia: "down",
      meta: 2.0,
    },
    {
      categoria: "Environmental",
      indicador: "Consumo de Agua",
      valor: 125,
      unidad: "L/producto",
      tendencia: "down",
      meta: 100,
    },
    {
      categoria: "Environmental",
      indicador: "Material Reciclado",
      valor: 87,
      unidad: "%",
      tendencia: "up",
      meta: 90,
    },
    {
      categoria: "Social",
      indicador: "Artesanos Beneficiados",
      valor: 127,
      unidad: "personas",
      tendencia: "up",
      meta: 150,
    },
    {
      categoria: "Social",
      indicador: "Salario Justo",
      valor: 95,
      unidad: "% sobre mínimo",
      tendencia: "stable",
      meta: 100,
    },
    {
      categoria: "Governance",
      indicador: "Transparencia",
      valor: 92,
      unidad: "% trazabilidad",
      tendencia: "up",
      meta: 95,
    },
  ]

  const proveedores = [
    { nombre: "Lanas del Sur", productos: 45, certificaciones: ["RWS", "GOTS"], score_esg: 8.5 },
    { nombre: "Maderas Eco", productos: 23, certificaciones: ["FSC"], score_esg: 7.8 },
    { nombre: "Curtidos XYZ", productos: 18, certificaciones: ["LWG"], score_esg: 8.2 },
    { nombre: "Hilos LaRosa", productos: 31, certificaciones: ["OEKO-TEX"], score_esg: 7.9 },
  ]

  const getTendenciaIcon = (tendencia: string) => {
    switch (tendencia) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    }
  }

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case "Environmental":
        return <Leaf className="w-5 h-5 text-green-600" />
      case "Social":
        return <Users className="w-5 h-5 text-blue-600" />
      case "Governance":
        return <Shield className="w-5 h-5 text-purple-600" />
      default:
        return null
    }
  }

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Environmental":
        return "bg-green-100 text-green-800"
      case "Social":
        return "bg-blue-100 text-blue-800"
      case "Governance":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard ESG y Circularidad</h1>
            <p className="text-gray-600">Métricas de sostenibilidad ambiental, social y gobernanza</p>
          </div>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Descargar Reporte PDF
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex gap-4">
                <Select value={filtroFecha} onValueChange={setFiltroFecha}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ultimo-mes">Último mes</SelectItem>
                    <SelectItem value="ultimo-trimestre">Último trimestre</SelectItem>
                    <SelectItem value="ultimo-ano">Último año</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filtroColeccion} onValueChange={setFiltroColeccion}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas las colecciones</SelectItem>
                    <SelectItem value="sol-campo">Sol de Campo</SelectItem>
                    <SelectItem value="origen-campo">Origen de Campo</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filtroProveedor} onValueChange={setFiltroProveedor}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los proveedores</SelectItem>
                    <SelectItem value="lanas-sur">Lanas del Sur</SelectItem>
                    <SelectItem value="maderas-eco">Maderas Eco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Leaf className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">8.2</p>
                  <p className="text-sm text-gray-600">Score ESG Global</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Recycle className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-sm text-gray-600">Circularidad Promedio</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">+15%</p>
                  <p className="text-sm text-gray-600">Mejora vs Mes Anterior</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ESG Metrics Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Métricas ESG Detalladas
            </CardTitle>
            <CardDescription>Indicadores clave de sostenibilidad por categoría</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Indicador</TableHead>
                  <TableHead>Valor Actual</TableHead>
                  <TableHead>Meta</TableHead>
                  <TableHead>Tendencia</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metricas.map((metrica, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getCategoriaIcon(metrica.categoria)}
                        <Badge className={getCategoriaColor(metrica.categoria)}>{metrica.categoria}</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{metrica.indicador}</TableCell>
                    <TableCell>
                      {metrica.valor} {metrica.unidad}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {metrica.meta} {metrica.unidad}
                    </TableCell>
                    <TableCell>{getTendenciaIcon(metrica.tendencia)}</TableCell>
                    <TableCell>
                      {metrica.valor >= metrica.meta ? (
                        <Badge className="bg-green-100 text-green-800">Cumplido</Badge>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-800">En progreso</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Evolución Emisiones CO₂</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Gráfico de línea temporal</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribución por Categoría ESG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Gráfico circular ESG</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Suppliers Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              Evaluación de Proveedores
            </CardTitle>
            <CardDescription>Score ESG y certificaciones por proveedor</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Proveedor</TableHead>
                  <TableHead>Productos</TableHead>
                  <TableHead>Certificaciones</TableHead>
                  <TableHead>Score ESG</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proveedores.map((proveedor, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{proveedor.nombre}</TableCell>
                    <TableCell>{proveedor.productos}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {proveedor.certificaciones.map((cert, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{proveedor.score_esg}</span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(proveedor.score_esg / 10) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {proveedor.score_esg >= 8 ? (
                        <Badge className="bg-green-100 text-green-800">Excelente</Badge>
                      ) : proveedor.score_esg >= 7 ? (
                        <Badge className="bg-yellow-100 text-yellow-800">Bueno</Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-800">Mejorar</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
