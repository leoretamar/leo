"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Trash2, Upload, QrCode, Save, Eye, Package, Leaf, Camera } from "lucide-react"

interface MaterialRow {
  material: string
  supplier: string
  lot: string
  certification: string
  observations: string
}

interface ProcessRow {
  process: string
  responsible: string
  startDate: string
  endDate: string
  technique: string
  observations: string
}

interface CertificationRow {
  certificate: string
  entity: string
  date: string
  result: string
}

interface EnvironmentalRow {
  indicator: string
  value: string
  unit: string
  comment: string
}

export default function ProductRegistrationForm() {
  const [productType, setProductType] = useState<"textile" | "leather">("textile")
  const [materials, setMaterials] = useState<MaterialRow[]>([
    { material: "", supplier: "", lot: "", certification: "", observations: "" },
  ])
  const [processes, setProcesses] = useState<ProcessRow[]>([
    { process: "", responsible: "", startDate: "", endDate: "", technique: "", observations: "" },
  ])
  const [certifications, setCertifications] = useState<CertificationRow[]>([
    { certificate: "", entity: "", date: "", result: "" },
  ])
  const [environmental, setEnvironmental] = useState<EnvironmentalRow[]>([
    { indicator: "", value: "", unit: "", comment: "" },
  ])

  const addMaterialRow = () => {
    setMaterials([...materials, { material: "", supplier: "", lot: "", certification: "", observations: "" }])
  }

  const removeMaterialRow = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index))
  }

  const updateMaterial = (index: number, field: keyof MaterialRow, value: string) => {
    const updated = [...materials]
    updated[index][field] = value
    setMaterials(updated)
  }

  const addProcessRow = () => {
    setProcesses([
      ...processes,
      { process: "", responsible: "", startDate: "", endDate: "", technique: "", observations: "" },
    ])
  }

  const removeProcessRow = (index: number) => {
    setProcesses(processes.filter((_, i) => i !== index))
  }

  const updateProcess = (index: number, field: keyof ProcessRow, value: string) => {
    const updated = [...processes]
    updated[index][field] = value
    setProcesses(updated)
  }

  const loadTemplate = (type: "sweater" | "bag") => {
    if (type === "sweater") {
      setProductType("textile")
      setMaterials([
        {
          material: "Lana Merino",
          supplier: "Lanas del Sur",
          lot: "2025-03-01",
          certification: "RWS",
          observations: "18 micras, blanco",
        },
        {
          material: "Botones Madera",
          supplier: "Maderas Eco",
          lot: "2025-02-20",
          certification: "FSC",
          observations: "Local, eucalipto",
        },
      ])
      setProcesses([
        {
          process: "Tejido",
          responsible: "María Sosa",
          startDate: "2025-03-15",
          endDate: "2025-03-20",
          technique: "Crochet",
          observations: "Punto fantasía",
        },
        {
          process: "Armado",
          responsible: "María Sosa",
          startDate: "2025-03-21",
          endDate: "2025-03-22",
          technique: "Costura",
          observations: "Manual",
        },
      ])
      setCertifications([{ certificate: "RWS", entity: "TextileCert", date: "2025-03-15", result: "OK" }])
      setEnvironmental([
        { indicator: "Huella de carbono", value: "2.3", unit: "kg CO₂e", comment: "Incluye teñido" },
        { indicator: "Consumo de agua", value: "110", unit: "litros", comment: "Sólo proceso textil" },
        { indicator: "% Material reciclado", value: "12", unit: "%", comment: "Botones" },
      ])
    } else {
      setProductType("leather")
      setMaterials([
        {
          material: "Cuero vacuno",
          supplier: "Curtidos XYZ",
          lot: "2025-03-15",
          certification: "LWG",
          observations: "Curtido vegetal",
        },
        {
          material: "Hilo de lino",
          supplier: "Hilos LaRosa",
          lot: "2025-03-20",
          certification: "OEKO-TEX",
          observations: "Natural, crudo",
        },
        {
          material: "Cierre metálico",
          supplier: "Cierres Alfa",
          lot: "2025-03-18",
          certification: "-",
          observations: "Níquel free",
        },
      ])
      setProcesses([
        {
          process: "Corte de cuero",
          responsible: "Pedro López",
          startDate: "2025-04-01",
          endDate: "2025-04-02",
          technique: "Manual",
          observations: "Patrón GIA",
        },
        {
          process: "Costura",
          responsible: "Ana Gómez",
          startDate: "2025-04-03",
          endDate: "2025-04-05",
          technique: "Máquina",
          observations: "Hilo doble",
        },
        {
          process: "Acabados",
          responsible: "Ana Gómez",
          startDate: "2025-04-06",
          endDate: "2025-04-06",
          technique: "Manual",
          observations: "Bordes encerados",
        },
      ])
      setCertifications([{ certificate: "LWG", entity: "LeatherOrg", date: "2025-03-16", result: "OK" }])
      setEnvironmental([
        { indicator: "Huella de carbono", value: "3.1", unit: "kg CO₂e", comment: "Incluye transporte" },
        { indicator: "Consumo de agua", value: "140", unit: "litros", comment: "Curtido vegetal" },
        { indicator: "% Material reciclado", value: "8", unit: "%", comment: "Hilo y etiquetas" },
      ])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Registro de Producto Artesanal</h1>
            <p className="text-gray-600">Ficha técnica completa para trazabilidad</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => loadTemplate("sweater")}>
              <Package className="w-4 h-4 mr-2" />
              Cargar Sweater
            </Button>
            <Button variant="outline" onClick={() => loadTemplate("bag")}>
              <Package className="w-4 h-4 mr-2" />
              Cargar Bolso
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Información General del Producto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productCode">Código de Producto</Label>
                <Input
                  id="productCode"
                  placeholder="GIA-SWE-2025-001"
                  defaultValue={productType === "textile" ? "GIA-SWE-2025-001" : "GIA-BOLSO-2025-002"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productName">Nombre del Producto</Label>
                <Input
                  id="productName"
                  placeholder="Sweater Sol de Campo"
                  defaultValue={productType === "textile" ? "Sweater Sol de Campo" : "Bolso Campo Claro"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="productType">Tipo de Producto</Label>
                <Select value={productType} onValueChange={(value: "textile" | "leather") => setProductType(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="textile">Prenda Tejida</SelectItem>
                    <SelectItem value="leather">Accesorio en Cuero</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="collection">Colección</Label>
                <Input
                  id="collection"
                  placeholder="Sol de Campo"
                  defaultValue={productType === "textile" ? "Sol de Campo" : "Origen de Campo"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Fecha de Inicio</Label>
                <Input
                  id="startDate"
                  type="date"
                  defaultValue={productType === "textile" ? "2025-03-15" : "2025-04-01"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">Fecha de Finalización</Label>
                <Input
                  id="endDate"
                  type="date"
                  defaultValue={productType === "textile" ? "2025-03-22" : "2025-04-06"}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="materials" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="materials">Materia Prima</TabsTrigger>
            <TabsTrigger value="processes">Procesos</TabsTrigger>
            <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
            <TabsTrigger value="environmental">Impacto Ambiental</TabsTrigger>
            <TabsTrigger value="media">Imágenes/QR</TabsTrigger>
          </TabsList>

          <TabsContent value="materials">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Materia Prima</CardTitle>
                  <Button onClick={addMaterialRow} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Agregar Material
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Material</TableHead>
                        <TableHead>Proveedor</TableHead>
                        <TableHead>Lote</TableHead>
                        <TableHead>Certificación</TableHead>
                        <TableHead>Observaciones</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {materials.map((material, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Input
                              value={material.material}
                              onChange={(e) => updateMaterial(index, "material", e.target.value)}
                              placeholder="Lana Merino"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={material.supplier}
                              onChange={(e) => updateMaterial(index, "supplier", e.target.value)}
                              placeholder="Lanas del Sur"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={material.lot}
                              onChange={(e) => updateMaterial(index, "lot", e.target.value)}
                              placeholder="2025-03-01"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={material.certification}
                              onChange={(e) => updateMaterial(index, "certification", e.target.value)}
                              placeholder="RWS"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={material.observations}
                              onChange={(e) => updateMaterial(index, "observations", e.target.value)}
                              placeholder="18 micras, blanco"
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeMaterialRow(index)}
                              disabled={materials.length === 1}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="processes">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Proceso de Producción</CardTitle>
                  <Button onClick={addProcessRow} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Agregar Proceso
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Proceso</TableHead>
                        <TableHead>Responsable</TableHead>
                        <TableHead>Fecha Inicio</TableHead>
                        <TableHead>Fecha Fin</TableHead>
                        <TableHead>Técnica</TableHead>
                        <TableHead>Observaciones</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {processes.map((process, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Input
                              value={process.process}
                              onChange={(e) => updateProcess(index, "process", e.target.value)}
                              placeholder="Tejido"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={process.responsible}
                              onChange={(e) => updateProcess(index, "responsible", e.target.value)}
                              placeholder="María Sosa"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="date"
                              value={process.startDate}
                              onChange={(e) => updateProcess(index, "startDate", e.target.value)}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              type="date"
                              value={process.endDate}
                              onChange={(e) => updateProcess(index, "endDate", e.target.value)}
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={process.technique}
                              onChange={(e) => updateProcess(index, "technique", e.target.value)}
                              placeholder="Crochet"
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              value={process.observations}
                              onChange={(e) => updateProcess(index, "observations", e.target.value)}
                              placeholder="Punto fantasía"
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeProcessRow(index)}
                              disabled={processes.length === 1}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certifications">
            <Card>
              <CardHeader>
                <CardTitle>Certificaciones y Auditorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Certificado/Auditoría</TableHead>
                        <TableHead>Entidad</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Resultado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {certifications.map((cert, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Input value={cert.certificate} placeholder="RWS" readOnly />
                          </TableCell>
                          <TableCell>
                            <Input value={cert.entity} placeholder="TextileCert" readOnly />
                          </TableCell>
                          <TableCell>
                            <Input value={cert.date} placeholder="2025-03-15" readOnly />
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-green-600">
                              {cert.result || "OK"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="environmental">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Impacto Ambiental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Indicador</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Unidad</TableHead>
                        <TableHead>Comentario</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {environmental.map((env, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Input value={env.indicator} placeholder="Huella de carbono" readOnly />
                          </TableCell>
                          <TableCell>
                            <Input value={env.value} placeholder="2.3" readOnly />
                          </TableCell>
                          <TableCell>
                            <Input value={env.unit} placeholder="kg CO₂e" readOnly />
                          </TableCell>
                          <TableCell>
                            <Input value={env.comment} placeholder="Incluye teñido" readOnly />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Imágenes y QR del Producto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Imagen del Producto</h4>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">Arrastra una imagen aquí o</p>
                      <Button variant="outline">Seleccionar archivo</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">QR del DPP</h4>
                    <div className="border rounded-lg p-8 text-center bg-gray-50">
                      <QrCode className="w-24 h-24 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-4">QR se generará automáticamente</p>
                      <Button variant="outline" disabled>
                        <QrCode className="w-4 h-4 mr-2" />
                        Generar QR
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Vista Previa
          </Button>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Guardar y Registrar
          </Button>
        </div>
      </div>
    </div>
  )
}
