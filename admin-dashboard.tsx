"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Package,
  Leaf,
  BarChart3,
  Shield,
  Gift,
  BookOpen,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Users,
  Globe,
  Calendar,
  Filter,
  Download,
  Eye,
  Smartphone,
  QrCode,
} from "lucide-react"

interface MetricaResumen {
  titulo: string
  valor: string | number
  icono: any
  color: string
  tendencia?: "up" | "down" | "stable"
  porcentaje_cambio?: number
}

interface ProductoReciente {
  id: string
  codigo: string
  nombre: string
  tipo: string
  estado: string
  fecha_registro: string
  artesano: string
  progreso: number
}

interface Alerta {
  id: string
  tipo: "auditoria" | "devolucion" | "sistema" | "certificado"
  titulo: string
  descripcion: string
  prioridad: "alta" | "media" | "baja"
  fecha: string
  estado: "pendiente" | "en_proceso" | "resuelto"
}

export default function AdminDashboard() {
  const [filtroFecha, setFiltroFecha] = useState("ultimo-mes")
  const [filtroModulo, setFiltroModulo] = useState("todos")

  const metricas: MetricaResumen[] = [
    {
      titulo: "Productos en Curso",
      valor: 34,
      icono: Package,
      color: "text-blue-600",
      tendencia: "up",
      porcentaje_cambio: 12,
    },
    {
      titulo: "Certificados Emitidos",
      valor: 22,
      icono: Shield,
      color: "text-green-600",
      tendencia: "up",
      porcentaje_cambio: 8,
    },
    {
      titulo: "Circularidad Global",
      valor: "87%",
      icono: Leaf,
      color: "text-purple-600",
      tendencia: "up",
      porcentaje_cambio: 5,
    },
    {
      titulo: "Devoluciones EPR",
      valor: 8,
      icono: Gift,
      color: "text-orange-600",
      tendencia: "stable",
    },
    {
      titulo: "Emisiones CO₂ Total",
      valor: "120kg",
      icono: BarChart3,
      color: "text-red-600",
      tendencia: "down",
      porcentaje_cambio: -15,
    },
    {
      titulo: "Auditorías Pendientes",
      valor: 3,
      icono: AlertCircle,
      color: "text-yellow-600",
      tendencia: "down",
      porcentaje_cambio: -25,
    },
  ]

  const productosRecientes: ProductoReciente[] = [
    {
      id: "1",
      codigo: "GIA-SWE-2025-001",
      nombre: "Sweater Sol de Campo",
      tipo: "Prenda Tejida",
      estado: "Terminado",
      fecha_registro: "22/03/25",
      artesano: "M. Sosa",
      progreso: 100,
    },
    {
      id: "2",
      codigo: "GIA-BOLSO-2025-002",
      nombre: "Bolso Campo Claro",
      tipo: "Accesorio Cuero",
      estado: "En Proceso",
      fecha_registro: "01/04/25",
      artesano: "A. Gómez",
      progreso: 75,
    },
    {
      id: "3",
      codigo: "GIA-CAR-2025-003",
      nombre: "Cardigan Alpaca Premium",
      tipo: "Prenda Tejida",
      estado: "Auditoría",
      fecha_registro: "10/04/25",
      artesano: "C. Quispe",
      progreso: 90,
    },
    {
      id: "4",
      codigo: "GIA-CHAL-2025-004",
      nombre: "Chal Vicuña Deluxe",
      tipo: "Accesorio Tejido",
      estado: "En Proceso",
      fecha_registro: "15/04/25",
      artesano: "L. Mamani",
      progreso: 45,
    },
  ]

  const alertas: Alerta[] = [
    {
      id: "1",
      tipo: "auditoria",
      titulo: "Auditoría RWS Pendiente",
      descripcion: "Cardigan Alpaca Premium requiere auditoría RWS",
      prioridad: "alta",
      fecha: "25/04/25",
      estado: "pendiente",
    },
    {
      id: "2",
      tipo: "devolucion",
      titulo: "Devolución EPR Procesada",
      descripcion: "Sweater Sol de Campo devuelto exitosamente",
      prioridad: "baja",
      fecha: "24/04/25",
      estado: "resuelto",
    },
    {
      id: "3",
      tipo: "certificado",
      titulo: "Certificado Fair Trade Venciendo",
      descripcion: "Renovar certificación en 30 días",
      prioridad: "media",
      fecha: "23/04/25",
      estado: "en_proceso",
    },
    {
      id: "4",
      tipo: "sistema",
      titulo: "Actualización de Blockchain",
      descripcion: "Nueva versión disponible del smart contract",
      prioridad: "media",
      fecha: "22/04/25",
      estado: "pendiente",
    },
  ]

  const modulosAccesoRapido = [
    {
      nombre: "Trazabilidad",
      icono: Package,
      color: "bg-blue-500",
      descripcion: "Gestión de productos y procesos",
      productos_activos: 34,
    },
    {
      nombre: "Ecodiseño",
      icono: Leaf,
      color: "bg-green-500",
      descripcion: "Simulación de impacto ambiental",
      simulaciones: 15,
    },
    {
      nombre: "ESG",
      icono: BarChart3,
      color: "bg-purple-500",
      descripcion: "Métricas de sostenibilidad",
      score_promedio: 8.2,
    },
    {
      nombre: "Auditoría/DPP",
      icono: Shield,
      color: "bg-orange-500",
      descripcion: "Certificaciones y pasaportes",
      dpps_generados: 22,
    },
    {
      nombre: "EPR",
      icono: Gift,
      color: "bg-yellow-500",
      descripcion: "Devoluciones y recompensas",
      devoluciones: 8,
    },
    {
      nombre: "Storytelling IA",
      icono: BookOpen,
      color: "bg-pink-500",
      descripcion: "Narrativas digitales",
      historias_generadas: 12,
    },
  ]

  const getTendenciaIcon = (tendencia?: string) => {
    switch (tendencia) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    }
  }

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "Terminado":
        return <Badge className="bg-green-100 text-green-800">{estado}</Badge>
      case "En Proceso":
        return <Badge className="bg-blue-100 text-blue-800">{estado}</Badge>
      case "Auditoría":
        return <Badge className="bg-orange-100 text-orange-800">{estado}</Badge>
      default:
        return <Badge variant="outline">{estado}</Badge>
    }
  }

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case "alta":
        return "border-l-red-500 bg-red-50"
      case "media":
        return "border-l-yellow-500 bg-yellow-50"
      case "baja":
        return "border-l-green-500 bg-green-50"
      default:
        return "border-l-gray-500 bg-gray-50"
    }
  }

  const getAlertaIcon = (tipo: string) => {
    switch (tipo) {
      case "auditoria":
        return <Shield className="w-5 h-5 text-orange-600" />
      case "devolucion":
        return <Gift className="w-5 h-5 text-purple-600" />
      case "certificado":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "sistema":
        return <AlertCircle className="w-5 h-5 text-blue-600" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">GIA Trace - Dashboard Principal</h1>
            <p className="text-gray-600">Centro de control administrativo del sistema de trazabilidad</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
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
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Exportar Reporte
            </Button>
          </div>
        </div>

        {/* Métricas Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {metricas.map((metrica, index) => {
            const IconComponent = metrica.icono
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent className={`w-6 h-6 ${metrica.color}`} />
                    {metrica.tendencia && (
                      <div className="flex items-center gap-1">
                        {getTendenciaIcon(metrica.tendencia)}
                        {metrica.porcentaje_cambio && (
                          <span
                            className={`text-xs font-medium ${
                              metrica.tendencia === "up"
                                ? "text-green-600"
                                : metrica.tendencia === "down"
                                  ? "text-red-600"
                                  : "text-gray-600"
                            }`}
                          >
                            {metrica.porcentaje_cambio > 0 ? "+" : ""}
                            {metrica.porcentaje_cambio}%
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{metrica.valor}</p>
                    <p className="text-sm text-gray-600">{metrica.titulo}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Gráfico Central */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Evolución de Producción y Circularidad</CardTitle>
                <CardDescription>Tendencias de los últimos 6 meses</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Rango de fechas
                </Button>
                <Select value={filtroModulo} onValueChange={setFiltroModulo}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="textil">Textil</SelectItem>
                    <SelectItem value="cuero">Cuero</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <BarChart3 className="w-16 h-16 mx-auto text-gray-400" />
                <div>
                  <p className="text-lg font-medium text-gray-600">Gráfico de Evolución</p>
                  <p className="text-sm text-gray-500">
                    Visualización de producción, circularidad y métricas ESG a lo largo del tiempo
                  </p>
                </div>
                <div className="flex justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Productos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Circularidad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Score ESG</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Últimos Productos Registrados */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Últimos Productos Registrados</CardTitle>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver todos
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {productosRecientes.map((producto) => (
                  <div key={producto.id} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium truncate">{producto.nombre}</p>
                        {getEstadoBadge(producto.estado)}
                      </div>
                      <p className="text-sm text-gray-600">{producto.codigo}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          {producto.artesano}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {producto.fecha_registro}
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Progreso</span>
                          <span>{producto.progreso}%</span>
                        </div>
                        <Progress value={producto.progreso} className="h-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alertas del Sistema */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Alertas del Sistema</CardTitle>
                <Badge variant="outline">{alertas.filter((a) => a.estado === "pendiente").length} pendientes</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alertas.map((alerta) => (
                  <div key={alerta.id} className={`p-3 border-l-4 rounded-r-lg ${getPrioridadColor(alerta.prioridad)}`}>
                    <div className="flex items-start gap-3">
                      {getAlertaIcon(alerta.tipo)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-sm">{alerta.titulo}</p>
                          <span className="text-xs text-gray-500">{alerta.fecha}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{alerta.descripcion}</p>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className={
                              alerta.prioridad === "alta"
                                ? "border-red-200 text-red-700"
                                : alerta.prioridad === "media"
                                  ? "border-yellow-200 text-yellow-700"
                                  : "border-green-200 text-green-700"
                            }
                          >
                            {alerta.prioridad}
                          </Badge>
                          <Badge
                            className={
                              alerta.estado === "resuelto"
                                ? "bg-green-100 text-green-800"
                                : alerta.estado === "en_proceso"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                            }
                          >
                            {alerta.estado.replace("_", " ")}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Accesos Rápidos a Módulos */}
        <Card>
          <CardHeader>
            <CardTitle>Accesos Rápidos a Módulos</CardTitle>
            <CardDescription>Navegación directa a las funcionalidades principales del sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modulosAccesoRapido.map((modulo, index) => {
                const IconComponent = modulo.icono
                return (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-all hover:scale-105">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${modulo.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{modulo.nombre}</h3>
                          <p className="text-sm text-gray-600 mb-2">{modulo.descripcion}</p>
                          <div className="text-xs text-gray-500">
                            {modulo.productos_activos && `${modulo.productos_activos} productos activos`}
                            {modulo.simulaciones && `${modulo.simulaciones} simulaciones`}
                            {modulo.score_promedio && `Score promedio: ${modulo.score_promedio}`}
                            {modulo.dpps_generados && `${modulo.dpps_generados} DPPs generados`}
                            {modulo.devoluciones && `${modulo.devoluciones} devoluciones`}
                            {modulo.historias_generadas && `${modulo.historias_generadas} historias generadas`}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Estadísticas Adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">127</p>
                  <p className="text-sm text-gray-600">Artesanos Activos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">1,543</p>
                  <p className="text-sm text-gray-600">Consultas Públicas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">892</p>
                  <p className="text-sm text-gray-600">Usuarios Móvil</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <QrCode className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">2,156</p>
                  <p className="text-sm text-gray-600">Escaneos QR</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
