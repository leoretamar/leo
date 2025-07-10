"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Package,
  User,
  MapPin,
  Leaf,
  Award,
  Camera,
  Upload,
  QrCode,
  CheckCircle,
  Plus,
  X,
  Save,
  Eye,
  Download,
} from "lucide-react"

export default function ProductRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Información básica del producto
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",

    // Información de la artesana
    artesana_nombre: "",
    artesana_email: "",
    artesana_telefono: "",
    artesana_ubicacion: "",
    artesana_experiencia: "",

    // Materiales y sostenibilidad
    materiales: [],
    proceso_produccion: "",
    certificaciones: [],
    impacto_co2: "",
    impacto_agua: "",

    // Imágenes y documentación
    imagenes: [],
    documentos: [],
  })

  const [newMaterial, setNewMaterial] = useState({ nombre: "", porcentaje: "" })
  const [previewMode, setPreviewMode] = useState(false)

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const categorias = ["Sweaters", "Cardigans", "Ponchos", "Bufandas", "Gorros", "Accesorios"]

  const certificacionesDisponibles = [
    "GOTS (Global Organic Textile Standard)",
    "Fair Trade",
    "Carbon Neutral",
    "Organic Content Standard",
    "Cradle to Cradle",
    "OEKO-TEX",
  ]

  const handleAddMaterial = () => {
    if (newMaterial.nombre && newMaterial.porcentaje) {
      setFormData({
        ...formData,
        materiales: [...formData.materiales, { ...newMaterial, id: Date.now() }],
      })
      setNewMaterial({ nombre: "", porcentaje: "" })
    }
  }

  const handleRemoveMaterial = (id) => {
    setFormData({
      ...formData,
      materiales: formData.materiales.filter((m) => m.id !== id),
    })
  }

  const handleCertificationToggle = (cert) => {
    const isSelected = formData.certificaciones.includes(cert)
    if (isSelected) {
      setFormData({
        ...formData,
        certificaciones: formData.certificaciones.filter((c) => c !== cert),
      })
    } else {
      setFormData({
        ...formData,
        certificaciones: [...formData.certificaciones, cert],
      })
    }
  }

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar el formulario
    console.log("Datos del formulario:", formData)
    alert("Producto registrado exitosamente!")
  }

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setPreviewMode(false)}>
              ← Volver al Formulario
            </Button>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Descargar QR
              </Button>
              <Button>
                <Save className="w-4 h-4 mr-2" />
                Guardar Producto
              </Button>
            </div>
          </div>

          {/* Product Preview */}
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <Camera className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="flex gap-2">
                    {formData.certificaciones.map((cert) => (
                      <Badge key={cert} className="bg-green-100 text-green-800">
                        <Award className="w-3 h-3 mr-1" />
                        {cert.split(" ")[0]}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {formData.nombre || "Nombre del Producto"}
                    </h1>
                    <p className="text-gray-600">{formData.descripcion || "Descripción del producto..."}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                      <User className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-medium text-amber-900">Artesana</p>
                        <p className="text-amber-700">{formData.artesana_nombre || "Nombre de la artesana"}</p>
                        <div className="flex items-center gap-1 text-sm text-amber-600">
                          <MapPin className="w-3 h-3" />
                          {formData.artesana_ubicacion || "Ubicación"}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                        <p className="text-2xl font-bold text-green-600">{formData.impacto_co2 || "0"}kg</p>
                        <p className="text-sm text-green-700">CO₂ Ahorrado</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <span className="text-2xl">💧</span>
                        <p className="text-2xl font-bold text-blue-600 mt-2">{formData.impacto_agua || "0"}L</p>
                        <p className="text-sm text-blue-700">Agua Ahorrada</p>
                      </div>
                    </div>

                    {formData.materiales.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Materiales</h4>
                        {formData.materiales.map((material) => (
                          <div key={material.id} className="flex justify-between p-2 bg-gray-50 rounded">
                            <span>{material.nombre}</span>
                            <span className="font-medium">{material.porcentaje}%</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* QR Code */}
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <QrCode className="w-24 h-24 mx-auto text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600">Código QR del Producto</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Registro de Producto</h1>
            <p className="text-gray-600">Sistema de Trazabilidad GIA</p>
          </div>
          <Button variant="outline" onClick={() => setPreviewMode(true)}>
            <Eye className="w-4 h-4 mr-2" />
            Vista Previa
          </Button>
        </div>

        {/* Progress */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">
                Paso {currentStep} de {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Form Steps */}
        <Card>
          <CardContent className="p-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <Package className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold">Información del Producto</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre del Producto *</Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej: Sweater Artesanal de Lana"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoría *</Label>
                    <Select
                      value={formData.categoria}
                      onValueChange={(value) => setFormData({ ...formData, categoria: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {categorias.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="descripcion">Descripción *</Label>
                    <Textarea
                      id="descripcion"
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      placeholder="Describe las características, técnicas utilizadas, inspiración..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="precio">Precio (USD)</Label>
                    <Input
                      id="precio"
                      type="number"
                      value={formData.precio}
                      onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl font-semibold">Información de la Artesana</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="artesana_nombre">Nombre Completo *</Label>
                    <Input
                      id="artesana_nombre"
                      value={formData.artesana_nombre}
                      onChange={(e) => setFormData({ ...formData, artesana_nombre: e.target.value })}
                      placeholder="Nombre de la artesana"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artesana_email">Email</Label>
                    <Input
                      id="artesana_email"
                      type="email"
                      value={formData.artesana_email}
                      onChange={(e) => setFormData({ ...formData, artesana_email: e.target.value })}
                      placeholder="email@ejemplo.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artesana_telefono">Teléfono</Label>
                    <Input
                      id="artesana_telefono"
                      value={formData.artesana_telefono}
                      onChange={(e) => setFormData({ ...formData, artesana_telefono: e.target.value })}
                      placeholder="+598 99 123 456"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artesana_ubicacion">Ubicación *</Label>
                    <Input
                      id="artesana_ubicacion"
                      value={formData.artesana_ubicacion}
                      onChange={(e) => setFormData({ ...formData, artesana_ubicacion: e.target.value })}
                      placeholder="Ciudad, Departamento"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="artesana_experiencia">Experiencia y Técnicas</Label>
                    <Textarea
                      id="artesana_experiencia"
                      value={formData.artesana_experiencia}
                      onChange={(e) => setFormData({ ...formData, artesana_experiencia: e.target.value })}
                      placeholder="Describe la experiencia, técnicas tradicionales, historia personal..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-xl font-semibold">Materiales y Sostenibilidad</h2>
                </div>

                {/* Materiales */}
                <div className="space-y-4">
                  <Label>Composición de Materiales *</Label>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Nombre del material"
                      value={newMaterial.nombre}
                      onChange={(e) => setNewMaterial({ ...newMaterial, nombre: e.target.value })}
                      className="flex-1"
                    />
                    <Input
                      placeholder="% "
                      type="number"
                      value={newMaterial.porcentaje}
                      onChange={(e) => setNewMaterial({ ...newMaterial, porcentaje: e.target.value })}
                      className="w-20"
                    />
                    <Button onClick={handleAddMaterial} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  {formData.materiales.length > 0 && (
                    <div className="space-y-2">
                      {formData.materiales.map((material) => (
                        <div key={material.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span>
                            {material.nombre} - {material.porcentaje}%
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveMaterial(material.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Proceso de Producción */}
                <div className="space-y-2">
                  <Label htmlFor="proceso_produccion">Proceso de Producción</Label>
                  <Textarea
                    id="proceso_produccion"
                    value={formData.proceso_produccion}
                    onChange={(e) => setFormData({ ...formData, proceso_produccion: e.target.value })}
                    placeholder="Describe el proceso de creación, técnicas utilizadas, tiempo de elaboración..."
                    rows={3}
                  />
                </div>

                {/* Certificaciones */}
                <div className="space-y-4">
                  <Label>Certificaciones</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {certificacionesDisponibles.map((cert) => (
                      <div
                        key={cert}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          formData.certificaciones.includes(cert)
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleCertificationToggle(cert)}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              formData.certificaciones.includes(cert)
                                ? "border-green-500 bg-green-500"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.certificaciones.includes(cert) && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-sm font-medium">{cert}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impacto Ambiental */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="impacto_co2">CO₂ Ahorrado (kg)</Label>
                    <Input
                      id="impacto_co2"
                      type="number"
                      step="0.1"
                      value={formData.impacto_co2}
                      onChange={(e) => setFormData({ ...formData, impacto_co2: e.target.value })}
                      placeholder="0.0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="impacto_agua">Agua Ahorrada (L)</Label>
                    <Input
                      id="impacto_agua"
                      type="number"
                      value={formData.impacto_agua}
                      onChange={(e) => setFormData({ ...formData, impacto_agua: e.target.value })}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <Camera className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl font-semibold">Imágenes y Documentación</h2>
                </div>

                {/* Upload de Imágenes */}
                <div className="space-y-4">
                  <Label>Imágenes del Producto</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Arrastra las imágenes aquí o haz clic para seleccionar</p>
                    <p className="text-sm text-gray-500">PNG, JPG hasta 10MB cada una</p>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      Seleccionar Imágenes
                    </Button>
                  </div>
                </div>

                {/* Upload de Documentos */}
                <div className="space-y-4">
                  <Label>Documentos de Certificación (Opcional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600 mb-2">Certificados, documentos de origen, etc.</p>
                    <Button variant="outline" size="sm">
                      Seleccionar Documentos
                    </Button>
                  </div>
                </div>

                {/* Resumen Final */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-4">Resumen del Producto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>
                          <strong>Producto:</strong> {formData.nombre || "Sin especificar"}
                        </p>
                        <p>
                          <strong>Categoría:</strong> {formData.categoria || "Sin especificar"}
                        </p>
                        <p>
                          <strong>Artesana:</strong> {formData.artesana_nombre || "Sin especificar"}
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Materiales:</strong> {formData.materiales.length} especificados
                        </p>
                        <p>
                          <strong>Certificaciones:</strong> {formData.certificaciones.length} seleccionadas
                        </p>
                        <p>
                          <strong>Impacto CO₂:</strong> {formData.impacto_co2 || "0"}kg ahorrados
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Anterior
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}>Siguiente</Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Registrar Producto
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
