"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Leaf,
  Plus,
  Trash2,
  BarChart3,
  Lightbulb,
  TrendingDown,
  TrendingUp,
  Zap,
  Droplets,
  Recycle,
  HelpCircle,
  Info,
} from "lucide-react"

interface Material {
  nombre: string
  porcentaje: number
  impacto_co2: number
  reciclable: boolean
}

interface Proceso {
  nombre: string
  energia_kwh: number
  agua_litros: number
  emisiones_co2: number
}

interface SimulacionResultado {
  huella_carbono_total: number
  consumo_agua_total: number
  porcentaje_reciclable: number
  puntuacion_circularidad: number
  sugerencias_ia: string[]
}

export default function EcodesignModule() {
  const [currentView, setCurrentView] = useState<"simulator" | "dashboard" | "comparator">("simulator")
  const [materiales, setMateriales] = useState<Material[]>([
    { nombre: "Lana Merino", porcentaje: 85, impacto_co2: 2.1, reciclable: true },
    { nombre: "Botones Madera", porcentaje: 15, impacto_co2: 0.2, reciclable: true },
  ])
  const [procesos, setProcesos] = useState<Proceso[]>([
    { nombre: "Tejido Manual", energia_kwh: 0.5, agua_litros: 50, emisiones_co2: 0.3 },
    { nombre: "Acabado", energia_kwh: 0.2, agua_litros: 20, emisiones_co2: 0.1 },
  ])
  const [simulacionActual, setSimulacionActual] = useState<SimulacionResultado | null>(null)

  const agregarMaterial = () => {
    setMateriales([...materiales, { nombre: "", porcentaje: 0, impacto_co2: 0, reciclable: false }])
  }

  const eliminarMaterial = (index: number) => {
    setMateriales(materiales.filter((_, i) => i !== index))
  }

  const actualizarMaterial = (index: number, campo: keyof Material, valor: any) => {
    const nuevos = [...materiales]
    nuevos[index] = { ...nuevos[index], [campo]: valor }
    setMateriales(nuevos)
  }

  const agregarProceso = () => {
    setProcesos([...procesos, { nombre: "", energia_kwh: 0, agua_litros: 0, emisiones_co2: 0 }])
  }

  const eliminarProceso = (index: number) => {
    setProcesos(procesos.filter((_, i) => i !== index))
  }

  const actualizarProceso = (index: number, campo: keyof Proceso, valor: any) => {
    const nuevos = [...procesos]
    nuevos[index] = { ...nuevos[index], [campo]: valor }
    setProcesos(nuevos)
  }

  const simularImpacto = () => {
    // Simulación de cálculo de impacto
    const huella_carbono_total =
      materiales.reduce((acc, m) => acc + m.impacto_co2, 0) + procesos.reduce((acc, p) => acc + p.emisiones_co2, 0)
    const consumo_agua_total = procesos.reduce((acc, p) => acc + p.agua_litros, 0)
    const porcentaje_reciclable = materiales.filter((m) => m.reciclable).reduce((acc, m) => acc + m.porcentaje, 0)
    const puntuacion_circularidad = Math.min(100, porcentaje_reciclable + (huella_carbono_total < 3 ? 20 : 0))

    const sugerencias_ia = [
      "Considera usar 100% lana orgánica certificada para reducir 15% la huella de carbono",
      "El proceso de tejido manual es excelente para minimizar el consumo energético",
      "Reemplazar botones de madera por botones de coco reduciría 0.1kg CO₂",
      "Implementar captación de agua de lluvia podría reducir 30% el consumo hídrico",
    ]

    setSimulacionActual({
      huella_carbono_total,
      consumo_agua_total,
      porcentaje_reciclable,
      puntuacion_circularidad,
      sugerencias_ia,
    })
  }

  if (currentView === "dashboard") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard de Impacto Ambiental</h1>
              <p className="text-gray-600">Métricas globales de sostenibilidad y circularidad</p>
            </div>
            <Button variant="outline" onClick={() => setCurrentView("simulator")}>
              ← Volver al Simulador
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold">2.4kg</p>
                    <p className="text-sm text-gray-600">CO₂ Promedio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Droplets className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">125L</p>
                    <p className="text-sm text-gray-600">Agua Promedio</p>
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
                    <p className="text-sm text-gray-600">Circularidad</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                  <div>
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-sm text-gray-600">Simulaciones</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Evolución de Huella de Carbono</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-500">Gráfico de evolución temporal</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución de Materiales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-500">Gráfico circular de materiales</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (currentView === "comparator") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Comparador de Alternativas</h1>
              <p className="text-gray-600">Compara diferentes variantes de diseño</p>
            </div>
            <Button variant="outline" onClick={() => setCurrentView("simulator")}>
              ← Volver al Simulador
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Alternativa A: Lana Orgánica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Huella de Carbono</span>
                    <span className="font-bold text-green-600">1.8kg CO₂</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Consumo de Agua</span>
                    <span className="font-bold">95L</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Circularidad</span>
                    <span className="font-bold text-green-600">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <Badge className="bg-green-100 text-green-800">Recomendado</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600">Alternativa B: Mezcla Sintética</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Huella de Carbono</span>
                    <span className="font-bold text-orange-600">3.2kg CO₂</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Consumo de Agua</span>
                    <span className="font-bold">180L</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Circularidad</span>
                    <span className="font-bold text-orange-600">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <Badge className="bg-orange-100 text-orange-800">Menos sostenible</Badge>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Análisis Comparativo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">
                    La Alternativa A reduce 44% la huella de carbono vs Alternativa B
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800">Ahorro de 85L de agua por unidad producida</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Recycle className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-800">50% mayor circularidad en materiales</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Simulador de Ecodiseño</h1>
              <p className="text-gray-600">Analiza el impacto ambiental de tus productos</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setCurrentView("dashboard")}>
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button variant="outline" onClick={() => setCurrentView("comparator")}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Comparador
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    Composición de Materiales
                  </CardTitle>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Guía de campos:</p>
                        <ul className="space-y-1 text-xs">
                          <li>
                            <strong>Material:</strong> Nombre del material (ej: Lana Merino, Algodón Orgánico)
                          </li>
                          <li>
                            <strong>%:</strong> Porcentaje del material en el producto total
                          </li>
                          <li>
                            <strong>CO₂:</strong> Kilogramos de CO₂ por kilogramo de material
                          </li>
                          <li>
                            <strong>Reciclable:</strong> Si el material puede ser reciclado al final de su vida útil
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Headers */}
                  <div className="grid grid-cols-12 gap-2 items-center text-sm font-medium text-gray-600 pb-2 border-b">
                    <div className="col-span-4">Material</div>
                    <div className="col-span-2 flex items-center gap-1">
                      % Comp.
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-3 h-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Porcentaje de composición del material en el producto</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="col-span-3 flex items-center gap-1">
                      CO₂ (kg/kg)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-3 h-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Kilogramos de CO₂ emitidos por kilogramo de material</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="col-span-2 flex items-center gap-1">
                      Reciclable
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-3 h-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>¿Puede ser reciclado al final de su vida útil?</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="col-span-1"></div>
                  </div>

                  {materiales.map((material, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-4">
                        <Input
                          placeholder="ej: Lana Merino"
                          value={material.nombre}
                          onChange={(e) => actualizarMaterial(index, "nombre", e.target.value)}
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          placeholder="85"
                          min="0"
                          max="100"
                          value={material.porcentaje}
                          onChange={(e) => actualizarMaterial(index, "porcentaje", Number(e.target.value))}
                        />
                      </div>
                      <div className="col-span-3">
                        <Input
                          type="number"
                          step="0.1"
                          placeholder="2.1"
                          min="0"
                          value={material.impacto_co2}
                          onChange={(e) => actualizarMaterial(index, "impacto_co2", Number(e.target.value))}
                        />
                      </div>
                      <div className="col-span-2">
                        <Select
                          value={material.reciclable ? "si" : "no"}
                          onValueChange={(value) => actualizarMaterial(index, "reciclable", value === "si")}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="si">Sí</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="sm" onClick={() => eliminarMaterial(index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" onClick={agregarMaterial} className="w-full bg-transparent">
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Material
                  </Button>

                  {/* Validation */}
                  {materiales.length > 0 && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span>Total composición:</span>
                        <span
                          className={`font-bold ${
                            materiales.reduce((acc, m) => acc + m.porcentaje, 0) === 100
                              ? "text-green-600"
                              : "text-orange-600"
                          }`}
                        >
                          {materiales.reduce((acc, m) => acc + m.porcentaje, 0)}%
                        </span>
                      </div>
                      {materiales.reduce((acc, m) => acc + m.porcentaje, 0) !== 100 && (
                        <p className="text-xs text-orange-600 mt-1">⚠️ La composición debe sumar 100%</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Procesos de Producción
                  </CardTitle>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="text-sm text-green-800">
                        <p className="font-medium mb-1">Guía de campos:</p>
                        <ul className="space-y-1 text-xs">
                          <li>
                            <strong>Proceso:</strong> Nombre del proceso (ej: Tejido Manual, Teñido)
                          </li>
                          <li>
                            <strong>kWh:</strong> Kilowatios-hora de energía consumida por unidad
                          </li>
                          <li>
                            <strong>Litros:</strong> Litros de agua consumida por unidad
                          </li>
                          <li>
                            <strong>CO₂:</strong> Kilogramos de CO₂ emitidos por el proceso
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Headers */}
                  <div className="grid grid-cols-12 gap-2 items-center text-sm font-medium text-gray-600 pb-2 border-b">
                    <div className="col-span-4">Proceso</div>
                    <div className="col-span-2 flex items-center gap-1">
                      Energía (kWh)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-3 h-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Kilowatios-hora consumidos por unidad producida</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="col-span-2 flex items-center gap-1">
                      Agua (L)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-3 h-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Litros de agua consumidos por unidad producida</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="col-span-3 flex items-center gap-1">
                      CO₂ (kg)
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-3 h-3" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Kilogramos de CO₂ emitidos por el proceso</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="col-span-1"></div>
                  </div>

                  {procesos.map((proceso, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-4">
                        <Input
                          placeholder="ej: Tejido Manual"
                          value={proceso.nombre}
                          onChange={(e) => actualizarProceso(index, "nombre", e.target.value)}
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          step="0.1"
                          placeholder="0.5"
                          min="0"
                          value={proceso.energia_kwh}
                          onChange={(e) => actualizarProceso(index, "energia_kwh", Number(e.target.value))}
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          placeholder="50"
                          min="0"
                          value={proceso.agua_litros}
                          onChange={(e) => actualizarProceso(index, "agua_litros", Number(e.target.value))}
                        />
                      </div>
                      <div className="col-span-3">
                        <Input
                          type="number"
                          step="0.1"
                          placeholder="0.3"
                          min="0"
                          value={proceso.emisiones_co2}
                          onChange={(e) => actualizarProceso(index, "emisiones_co2", Number(e.target.value))}
                        />
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="sm" onClick={() => eliminarProceso(index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" onClick={agregarProceso} className="w-full bg-transparent">
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Proceso
                  </Button>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button onClick={simularImpacto} className="flex-1">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Simular Impacto
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Sugerencias IA
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {simulacionActual ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" />
                        Resultados de Simulación
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-red-50 rounded-lg">
                          <Leaf className="w-8 h-8 mx-auto text-red-600 mb-2" />
                          <p className="text-2xl font-bold text-red-600">
                            {simulacionActual.huella_carbono_total.toFixed(1)}kg
                          </p>
                          <p className="text-sm text-gray-600">CO₂ Total</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Droplets className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                          <p className="text-2xl font-bold text-blue-600">{simulacionActual.consumo_agua_total}L</p>
                          <p className="text-sm text-gray-600">Agua Total</p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <Recycle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                          <p className="text-2xl font-bold text-green-600">{simulacionActual.porcentaje_reciclable}%</p>
                          <p className="text-sm text-gray-600">Reciclable</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <BarChart3 className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                          <p className="text-2xl font-bold text-purple-600">
                            {simulacionActual.puntuacion_circularidad}/100
                          </p>
                          <p className="text-sm text-gray-600">Circularidad</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5" />
                        Sugerencias de IA
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {simulacionActual.sugerencias_ia.map((sugerencia, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                            <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
                            <span className="text-sm text-yellow-800">{sugerencia}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <BarChart3 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-600 mb-2">Ejecuta una simulación</h3>
                    <p className="text-gray-500">
                      Completa los materiales y procesos, luego haz clic en "Simular Impacto" para ver los resultados
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Examples Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Ejemplos de Materiales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-4 gap-2 font-medium text-gray-600 pb-2 border-b">
                      <span>Material</span>
                      <span>% Típico</span>
                      <span>CO₂ (kg/kg)</span>
                      <span>Reciclable</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <span>Lana Merino</span>
                      <span>70-90%</span>
                      <span>2.1</span>
                      <span className="text-green-600">Sí</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <span>Algodón Orgánico</span>
                      <span>80-100%</span>
                      <span>1.8</span>
                      <span className="text-green-600">Sí</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <span>Poliéster</span>
                      <span>50-100%</span>
                      <span>3.4</span>
                      <span className="text-orange-600">Limitado</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <span>Botones Madera</span>
                      <span>5-15%</span>
                      <span>0.2</span>
                      <span className="text-green-600">Sí</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
