"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  QrCode,
  Leaf,
  Heart,
  Star,
  MapPin,
  Calendar,
  Recycle,
  Award,
  Camera,
  Share2,
  Download,
  ChevronRight,
  Sparkles,
  TreePine,
  Droplets,
  Users,
  Package,
  User,
  Phone,
  Mail,
  Target,
  Trophy,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react"

export default function CustomerDashboard() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [selectedArtisan, setSelectedArtisan] = useState<string | null>(null)
  const [currentProgram, setCurrentProgram] = useState<string | null>(null)

  const productos = [
    {
      id: "1",
      nombre: "Sweater Origen Natural",
      imagen: "/placeholder.svg?height=300&width=300",
      fecha_compra: "2024-01-15",
      artesana: "María González",
      artesana_id: "1",
      ubicacion: "Montevideo, Uruguay",
      materiales: ["85% Lana Merino", "15% Botones Madera"],
      co2_ahorrado: 2.3,
      agua_ahorrada: 45,
      certificaciones: ["GOTS", "Fair Trade", "Carbon Neutral"],
      historia:
        "Esta prenda fue tejida a mano por María, una artesana con 20 años de experiencia en técnicas tradicionales uruguayas. Cada punto fue cuidadosamente trabajado utilizando lana merino de ovejas criadas en pasturas naturales, sin químicos ni pesticidas.",
      puntuacion_circularidad: 92,
    },
    {
      id: "2",
      nombre: "Cardigan Artesanal",
      imagen: "/placeholder.svg?height=300&width=300",
      fecha_compra: "2024-02-20",
      artesana: "Ana Rodríguez",
      artesana_id: "2",
      ubicacion: "Punta del Este, Uruguay",
      materiales: ["100% Algodón Orgánico"],
      co2_ahorrado: 1.8,
      agua_ahorrada: 32,
      certificaciones: ["GOTS", "Organic"],
      historia:
        "Ana utiliza técnicas tradicionales transmitidas por generaciones en su familia. Este cardigan fue creado con algodón orgánico cultivado localmente, teñido con tintes naturales extraídos de plantas autóctonas.",
      puntuacion_circularidad: 88,
    },
    {
      id: "3",
      nombre: "Poncho Tradicional",
      imagen: "/placeholder.svg?height=300&width=300",
      fecha_compra: "2024-03-10",
      artesana: "Carmen Silva",
      artesana_id: "3",
      ubicacion: "Colonia, Uruguay",
      materiales: ["90% Lana Natural", "10% Fibras Recicladas"],
      co2_ahorrado: 3.1,
      agua_ahorrada: 58,
      certificaciones: ["Fair Trade", "Recycled Content"],
      historia:
        "Carmen es parte de una cooperativa de artesanas que rescata técnicas ancestrales de tejido. Este poncho incorpora fibras recicladas de prendas anteriores, dándoles una nueva vida.",
      puntuacion_circularidad: 95,
    },
  ]

  const artesanas = [
    {
      id: "1",
      nombre: "María González",
      edad: 45,
      experiencia: "20 años",
      especialidad: "Tejido en lana merino",
      ubicacion: "Montevideo, Uruguay",
      telefono: "+598 99 123 456",
      email: "maria.gonzalez@gia.com",
      biografia:
        "María es una artesana especializada en tejido tradicional uruguayo. Aprendió las técnicas de su abuela y ha perfeccionado su arte durante más de 20 años. Es reconocida por su trabajo con lana merino y su compromiso con la sostenibilidad.",
      productos_creados: 127,
      rating: 4.9,
      certificaciones: ["Artesana Certificada GIA", "Fair Trade", "Técnicas Tradicionales"],
      imagen: "/placeholder.svg?height=200&width=200",
      cooperativa: "Cooperativa Textil Montevideo",
      logros: ["Premio Artesana del Año 2023", "Certificación en Sostenibilidad", "Mentora de 15 nuevas artesanas"],
    },
    {
      id: "2",
      nombre: "Ana Rodríguez",
      edad: 38,
      experiencia: "15 años",
      especialidad: "Algodón orgánico y tintes naturales",
      ubicacion: "Punta del Este, Uruguay",
      telefono: "+598 99 234 567",
      email: "ana.rodriguez@gia.com",
      biografia:
        "Ana se especializa en el trabajo con algodón orgánico y la creación de tintes naturales a partir de plantas locales. Su trabajo combina tradición e innovación sostenible.",
      productos_creados: 89,
      rating: 4.8,
      certificaciones: ["Especialista en Tintes Naturales", "Organic Cotton", "GOTS"],
      imagen: "/placeholder.svg?height=200&width=200",
      cooperativa: "Eco Textiles del Este",
      logros: ["Innovación en Tintes Naturales 2024", "Certificación Orgánica", "Líder Comunitaria"],
    },
    {
      id: "3",
      nombre: "Carmen Silva",
      edad: 52,
      experiencia: "25 años",
      especialidad: "Técnicas ancestrales y reciclaje textil",
      ubicacion: "Colonia, Uruguay",
      telefono: "+598 99 345 678",
      email: "carmen.silva@gia.com",
      biografia:
        "Carmen es guardiana de técnicas ancestrales de tejido y pionera en el reciclaje textil. Lidera una cooperativa que rescata y reutiliza fibras para crear nuevas prendas.",
      productos_creados: 156,
      rating: 5.0,
      certificaciones: ["Maestra Artesana", "Reciclaje Textil", "Técnicas Ancestrales"],
      imagen: "/placeholder.svg?height=200&width=200",
      cooperativa: "Cooperativa Ancestral Colonia",
      logros: ["Maestra Artesana Reconocida", "Pionera en Reciclaje Textil", "Preservación Cultural"],
    },
  ]

  const programas = {
    circularidad: {
      titulo: "Programa de Circularidad GIA",
      descripcion: "Devuelve tus prendas al final de su vida útil y recibe beneficios",
      puntos_actuales: 150,
      puntos_siguiente_nivel: 250,
      nivel: "Eco Warrior",
      beneficios: [
        "15% descuento en próxima compra",
        "Acceso prioritario a nuevas colecciones",
        "Certificado de impacto ambiental personalizado",
      ],
      productos_devueltos: 2,
      co2_evitado: 4.1,
      recompensas_disponibles: [
        { nombre: "Descuento 20%", puntos: 200, disponible: false },
        { nombre: "Producto Gratis", puntos: 500, disponible: false },
        { nombre: "Experiencia Artesana", puntos: 300, disponible: false },
      ],
    },
    embajador: {
      titulo: "Embajador GIA",
      descripcion: "Comparte la misión GIA y obtén recompensas exclusivas",
      nivel: "Embajador Bronce",
      referidos: 3,
      referidos_objetivo: 5,
      puntos_embajador: 75,
      beneficios: ["10% comisión por referido", "Acceso a eventos exclusivos", "Productos de edición limitada"],
      actividades: [
        { tipo: "Referido exitoso", puntos: 25, fecha: "2024-03-15" },
        { tipo: "Post en redes sociales", puntos: 10, fecha: "2024-03-10" },
        { tipo: "Review de producto", puntos: 15, fecha: "2024-03-05" },
      ],
    },
    desafios: {
      titulo: "Desafíos Mensuales",
      descripcion: "Completa desafíos y gana puntos y premios especiales",
      mes_actual: "Marzo 2024",
      desafios_completados: 2,
      desafios_totales: 4,
      puntos_mes: 45,
      desafios: [
        {
          id: 1,
          titulo: "Comparte tu historia",
          descripcion: "Comparte la historia de uno de tus productos en redes sociales",
          puntos: 20,
          completado: true,
          fecha_completado: "2024-03-08",
        },
        {
          id: 2,
          titulo: "Recicla una prenda",
          descripcion: "Devuelve una prenda a través del programa de circularidad",
          puntos: 25,
          completado: true,
          fecha_completado: "2024-03-12",
        },
        {
          id: 3,
          titulo: "Refiere un amigo",
          descripcion: "Invita a un amigo a unirse a la comunidad GIA",
          puntos: 30,
          completado: false,
          progreso: 0,
        },
        {
          id: 4,
          titulo: "Visita un taller",
          descripcion: "Participa en un taller virtual con nuestras artesanas",
          puntos: 40,
          completado: false,
          progreso: 0,
        },
      ],
    },
  }

  const impactoTotal = {
    co2_total: productos.reduce((acc, p) => acc + p.co2_ahorrado, 0),
    agua_total: productos.reduce((acc, p) => acc + p.agua_ahorrada, 0),
    productos_count: productos.length,
    circularidad_promedio: Math.round(
      productos.reduce((acc, p) => acc + p.puntuacion_circularidad, 0) / productos.length,
    ),
  }

  // Vista de perfil de artesana
  if (selectedArtisan) {
    const artesana = artesanas.find((a) => a.id === selectedArtisan)!
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedArtisan(null)} className="text-stone-600">
              ← Volver
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir Perfil
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Seguir
              </Button>
            </div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <img
                    src={artesana.imagen || "/placeholder.svg"}
                    alt={artesana.nombre}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(artesana.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{artesana.rating}</span>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800">{artesana.especialidad}</Badge>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-stone-900 mb-2">{artesana.nombre}</h1>
                    <div className="grid grid-cols-2 gap-4 text-sm text-stone-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {artesana.ubicacion}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {artesana.experiencia} de experiencia
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {artesana.telefono}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {artesana.email}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Biografía</h3>
                    <p className="text-stone-700 leading-relaxed">{artesana.biografia}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Package className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                      <p className="text-2xl font-bold text-blue-600">{artesana.productos_creados}</p>
                      <p className="text-xs text-blue-700">Productos Creados</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Users className="w-6 h-6 mx-auto text-green-600 mb-2" />
                      <p className="text-2xl font-bold text-green-600">{artesana.cooperativa.split(" ").length}</p>
                      <p className="text-xs text-green-700">Cooperativa</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Award className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                      <p className="text-2xl font-bold text-purple-600">{artesana.certificaciones.length}</p>
                      <p className="text-xs text-purple-700">Certificaciones</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Certificaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {artesana.certificaciones.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                      <Award className="w-5 h-5 text-amber-600" />
                      <span className="font-medium text-stone-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Logros Destacados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {artesana.logros.map((logro, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium text-stone-800">{logro}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
            <CardHeader>
              <CardTitle>Cooperativa: {artesana.cooperativa}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700">
                {artesana.nombre} forma parte de {artesana.cooperativa}, una organización comprometida con el comercio
                justo y la preservación de técnicas artesanales tradicionales. La cooperativa trabaja directamente con
                comunidades locales para garantizar condiciones laborales dignas y el desarrollo sostenible de la
                región.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Vista de programas
  if (currentProgram) {
    const programa = programas[currentProgram as keyof typeof programas]

    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setCurrentProgram(null)} className="text-stone-600">
              ← Volver a Mi Colección
            </Button>
          </div>

          {currentProgram === "circularidad" && (
            <>
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Recycle className="w-16 h-16 mx-auto text-green-600 mb-4" />
                    <h1 className="text-3xl font-bold text-green-900 mb-2">{programa.titulo}</h1>
                    <p className="text-green-700">{programa.descripcion}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{programa.puntos_actuales}</p>
                      <p className="text-sm text-green-700">Puntos Actuales</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{programa.productos_devueltos}</p>
                      <p className="text-sm text-blue-700">Productos Devueltos</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{programa.co2_evitado}kg</p>
                      <p className="text-sm text-purple-700">CO₂ Evitado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Progreso hacia el siguiente nivel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Nivel Actual: {programa.nivel}</span>
                      <span className="text-sm text-gray-600">
                        {programa.puntos_actuales}/{programa.puntos_siguiente_nivel} puntos
                      </span>
                    </div>
                    <Progress
                      value={(programa.puntos_actuales / programa.puntos_siguiente_nivel) * 100}
                      className="h-3"
                    />
                    <p className="text-sm text-gray-600">
                      Te faltan {programa.puntos_siguiente_nivel - programa.puntos_actuales} puntos para el siguiente
                      nivel
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Recompensas Disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {programa.recompensas_disponibles.map((recompensa, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-lg border ${recompensa.disponible ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}
                      >
                        <div>
                          <h4 className="font-medium">{recompensa.nombre}</h4>
                          <p className="text-sm text-gray-600">{recompensa.puntos} puntos</p>
                        </div>
                        <Button
                          variant={recompensa.disponible ? "default" : "outline"}
                          disabled={!recompensa.disponible}
                          size="sm"
                        >
                          {recompensa.disponible ? "Canjear" : "Bloqueado"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {currentProgram === "embajador" && (
            <>
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Users className="w-16 h-16 mx-auto text-blue-600 mb-4" />
                    <h1 className="text-3xl font-bold text-blue-900 mb-2">{programa.titulo}</h1>
                    <p className="text-blue-700">{programa.descripcion}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{programa.nivel}</p>
                      <p className="text-sm text-blue-700">Nivel Actual</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{programa.referidos}</p>
                      <p className="text-sm text-green-700">Referidos Exitosos</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{programa.puntos_embajador}</p>
                      <p className="text-sm text-purple-700">Puntos Embajador</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Progreso hacia Embajador Plata</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Referidos</span>
                      <span className="text-sm text-gray-600">
                        {programa.referidos}/{programa.referidos_objetivo}
                      </span>
                    </div>
                    <Progress value={(programa.referidos / programa.referidos_objetivo) * 100} className="h-3" />
                    <p className="text-sm text-gray-600">
                      Te faltan {programa.referidos_objetivo - programa.referidos} referidos para el siguiente nivel
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {programa.actividades.map((actividad, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{actividad.tipo}</h4>
                          <p className="text-sm text-gray-600">{actividad.fecha}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">+{actividad.puntos} puntos</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {currentProgram === "desafios" && (
            <>
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Target className="w-16 h-16 mx-auto text-purple-600 mb-4" />
                    <h1 className="text-3xl font-bold text-purple-900 mb-2">{programa.titulo}</h1>
                    <p className="text-purple-700">{programa.descripcion}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{programa.mes_actual}</p>
                      <p className="text-sm text-purple-700">Mes Actual</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-green-600">
                        {programa.desafios_completados}/{programa.desafios_totales}
                      </p>
                      <p className="text-sm text-green-700">Desafíos Completados</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">{programa.puntos_mes}</p>
                      <p className="text-sm text-orange-700">Puntos Este Mes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Desafíos de {programa.mes_actual}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {programa.desafios.map((desafio) => (
                      <div
                        key={desafio.id}
                        className={`p-4 rounded-lg border ${desafio.completado ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {desafio.completado ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : (
                                <Clock className="w-5 h-5 text-gray-400" />
                              )}
                              <h4 className="font-medium">{desafio.titulo}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{desafio.descripcion}</p>
                            {desafio.completado && (
                              <p className="text-xs text-green-600">Completado el {desafio.fecha_completado}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <Badge
                              className={
                                desafio.completado ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                              }
                            >
                              {desafio.puntos} puntos
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    )
  }

  if (selectedProduct) {
    const producto = productos.find((p) => p.id === selectedProduct)!
    const artesana = artesanas.find((a) => a.id === producto.artesana_id)!

    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedProduct(null)} className="text-stone-600">
              ← Volver a Mi Colección
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir Historia
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Certificado Digital
              </Button>
            </div>
          </div>

          {/* Product Hero */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-stone-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="flex gap-2 flex-wrap">
                  {producto.certificaciones.map((cert) => (
                    <Badge key={cert} className="bg-green-100 text-green-800 border-green-200">
                      <Award className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-stone-900 mb-2">{producto.nombre}</h1>
                  <div className="flex items-center gap-2 text-stone-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>En tu colección desde {new Date(producto.fecha_compra).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <img
                      src={artesana.imagen || "/placeholder.svg"}
                      alt={artesana.nombre}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-amber-900">Creado por</p>
                      <p className="text-amber-700 font-semibold">{producto.artesana}</p>
                      <div className="flex items-center gap-1 text-sm text-amber-600">
                        <MapPin className="w-3 h-3" />
                        {producto.ubicacion}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedArtisan(producto.artesana_id)}
                      className="bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-300"
                    >
                      <User className="w-4 h-4 mr-1" />
                      Ver Perfil
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="text-2xl font-bold text-green-600">{producto.co2_ahorrado}kg</p>
                      <p className="text-sm text-green-700">CO₂ Evitado</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Droplets className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <p className="text-2xl font-bold text-blue-600">{producto.agua_ahorrada}L</p>
                      <p className="text-sm text-blue-700">Agua Conservada</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-purple-900">Índice de Circularidad</span>
                      <span className="text-2xl font-bold text-purple-600">{producto.puntuacion_circularidad}/100</span>
                    </div>
                    <Progress value={producto.puntuacion_circularidad} className="h-2" />
                    <p className="text-xs text-purple-700 mt-1">Excelente puntuación de sostenibilidad</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Story & Details */}
          <Tabs defaultValue="historia" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="historia">Historia</TabsTrigger>
              <TabsTrigger value="materiales">Materiales</TabsTrigger>
              <TabsTrigger value="cuidados">Cuidados</TabsTrigger>
            </TabsList>

            <TabsContent value="historia">
              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    La Historia de tu Prenda
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-700 leading-relaxed text-lg">{producto.historia}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-stone-50 rounded-lg">
                      <TreePine className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="font-medium">Materiales Naturales</p>
                      <p className="text-sm text-stone-600">100% sostenibles</p>
                    </div>
                    <div className="text-center p-4 bg-stone-50 rounded-lg">
                      <Heart className="w-8 h-8 mx-auto text-red-500 mb-2" />
                      <p className="font-medium">Hecho con Amor</p>
                      <p className="text-sm text-stone-600">Artesanía tradicional</p>
                    </div>
                    <div className="text-center p-4 bg-stone-50 rounded-lg">
                      <Award className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                      <p className="font-medium">Certificado</p>
                      <p className="text-sm text-stone-600">Calidad garantizada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materiales">
              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Composición de Materiales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {producto.materiales.map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg border">
                        <span className="font-medium text-stone-800">{material}</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <Leaf className="w-3 h-3 mr-1" />
                          Certificado
                        </Badge>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2">Origen Sostenible</h4>
                      <p className="text-blue-800 text-sm">
                        Todos los materiales provienen de fuentes certificadas y procesos que respetan el medio ambiente
                        y las comunidades locales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cuidados">
              <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
                <CardHeader>
                  <CardTitle>Cuidados y Mantenimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2">💧 Lavado</h4>
                      <p className="text-blue-800 text-sm">
                        Lavar a mano con agua fría (máx. 30°C). Usar detergente suave y ecológico.
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h4 className="font-medium text-yellow-900 mb-2">🌞 Secado</h4>
                      <p className="text-yellow-800 text-sm">
                        Secar en horizontal sobre una superficie plana. Evitar luz solar directa y fuentes de calor.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-900 mb-2">📦 Almacenamiento</h4>
                      <p className="text-green-800 text-sm">
                        Guardar doblado en lugar seco y ventilado. Usar bolsas de tela natural para proteger de
                        polillas.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-900 mb-2">✨ Mantenimiento</h4>
                      <p className="text-purple-800 text-sm">
                        Cepillar suavemente con cepillo de cerdas naturales para mantener la textura original.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Programs Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setCurrentProgram("circularidad")}
            >
              <CardContent className="p-6 text-center">
                <Recycle className="w-12 h-12 mx-auto text-green-600 mb-3" />
                <h3 className="font-bold text-green-900 mb-2">Programa de Circularidad</h3>
                <p className="text-green-700 text-sm mb-4">
                  Devuelve tu prenda al final de su vida útil y recibe beneficios especiales.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 w-full">
                  Participar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setCurrentProgram("embajador")}
            >
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                <h3 className="font-bold text-blue-900 mb-2">Embajador GIA</h3>
                <p className="text-blue-700 text-sm mb-4">Comparte la misión GIA y obtén recompensas exclusivas.</p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Unirse
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card
              className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setCurrentProgram("desafios")}
            >
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto text-purple-600 mb-3" />
                <h3 className="font-bold text-purple-900 mb-2">Desafíos Mensuales</h3>
                <p className="text-purple-700 text-sm mb-4">Completa desafíos y gana puntos y premios especiales.</p>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  Ver Desafíos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-stone-900">Mi Colección GIA</h1>
          <p className="text-stone-600 text-lg">
            Descubre la historia y el impacto de cada prenda en tu colección personal
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="productos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="productos">Mi Colección</TabsTrigger>
            <TabsTrigger value="escanear">Escanear QR</TabsTrigger>
            <TabsTrigger value="impacto">Mi Impacto</TabsTrigger>
          </TabsList>

          <TabsContent value="productos" className="space-y-6">
            {/* Collection Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Package className="w-8 h-8 mx-auto text-stone-600 mb-2" />
                  <p className="text-2xl font-bold text-stone-800">{productos.length}</p>
                  <p className="text-sm text-stone-600">Prendas</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                  <p className="text-2xl font-bold text-amber-600">{productos.length}</p>
                  <p className="text-sm text-stone-600">Artesanas</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Award className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-purple-600">{impactoTotal.circularidad_promedio}%</p>
                  <p className="text-sm text-stone-600">Circularidad</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-4">
                  <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-green-600">{impactoTotal.co2_total}kg</p>
                  <p className="text-sm text-stone-600">CO₂ Evitado</p>
                </CardContent>
              </Card>
            </div>

            {/* Programs Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4 text-center">Programas Especiales</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentProgram("circularidad")}
                >
                  <CardContent className="p-6 text-center">
                    <Recycle className="w-12 h-12 mx-auto text-green-600 mb-3" />
                    <h3 className="font-bold text-green-900 mb-2">Programa de Circularidad</h3>
                    <p className="text-green-700 text-sm mb-4">
                      Devuelve tus prendas al final de su vida útil y recibe beneficios especiales.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                      <span>150 puntos acumulados</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentProgram("embajador")}
                >
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                    <h3 className="font-bold text-blue-900 mb-2">Embajador GIA</h3>
                    <p className="text-blue-700 text-sm mb-4">Comparte la misión GIA y obtén recompensas exclusivas.</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                      <span>Nivel: Embajador Bronce</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentProgram("desafios")}
                >
                  <CardContent className="p-6 text-center">
                    <Target className="w-12 h-12 mx-auto text-purple-600 mb-3" />
                    <h3 className="font-bold text-purple-900 mb-2">Desafíos Mensuales</h3>
                    <p className="text-purple-700 text-sm mb-4">
                      Completa desafíos y gana puntos y premios especiales.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-purple-600">
                      <span>2/4 completados este mes</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos.map((producto) => (
                <Card
                  key={producto.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/80 backdrop-blur-sm border-stone-200"
                  onClick={() => setSelectedProduct(producto.id)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.nombre}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-stone-800 border-stone-200">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {producto.puntuacion_circularidad}/100
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-green-600 text-white">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(producto.fecha_compra).getFullYear()}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{producto.nombre}</h3>
                      <div className="flex items-center gap-2 text-stone-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{producto.artesana}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-stone-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        {producto.ubicacion}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1 text-green-600">
                        <Leaf className="w-4 h-4" />
                        <span>{producto.co2_ahorrado}kg CO₂</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600">
                        <Droplets className="w-4 h-4" />
                        <span>{producto.agua_ahorrada}L agua</span>
                      </div>
                    </div>
                    <Button className="w-full bg-stone-800 hover:bg-stone-900">
                      Ver Historia Completa
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="escanear" className="space-y-6">
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <QrCode className="w-6 h-6" />
                  Agregar Nueva Prenda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-stone-100 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-stone-300">
                    <Camera className="w-16 h-16 text-stone-400" />
                  </div>
                  <p className="text-stone-600 mb-4">
                    Escanea el código QR de tu nueva prenda GIA para agregarla a tu colección y descubrir su historia
                  </p>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-stone-800 hover:bg-stone-900">
                    <Camera className="w-4 h-4 mr-2" />
                    Abrir Cámara
                  </Button>
                  <div className="text-center">
                    <span className="text-stone-500 text-sm">o</span>
                  </div>
                  <Input placeholder="Ingresa el código manualmente" className="text-center" />
                  <Button variant="outline" className="w-full bg-transparent">
                    Agregar a Mi Colección
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impacto" className="space-y-6">
            {/* Impact Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Leaf className="w-12 h-12 mx-auto text-green-600 mb-4" />
                  <p className="text-3xl font-bold text-green-600">{impactoTotal.co2_total}kg</p>
                  <p className="text-stone-600">CO₂ Evitado</p>
                  <p className="text-xs text-stone-500 mt-1">vs. fast fashion</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Droplets className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <p className="text-3xl font-bold text-blue-600">{impactoTotal.agua_total}L</p>
                  <p className="text-stone-600">Agua Conservada</p>
                  <p className="text-xs text-stone-500 mt-1">en producción</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mx-auto text-amber-600 mb-4" />
                  <p className="text-3xl font-bold text-amber-600">{productos.length}</p>
                  <p className="text-stone-600">Artesanas Apoyadas</p>
                  <p className="text-xs text-stone-500 mt-1">comercio justo</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/80 backdrop-blur-sm border-stone-200">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <p className="text-3xl font-bold text-purple-600">{impactoTotal.circularidad_promedio}%</p>
                  <p className="text-stone-600">Circularidad</p>
                  <p className="text-xs text-stone-500 mt-1">promedio</p>
                </CardContent>
              </Card>
            </div>

            {/* Impact Visualization */}
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Tu Impacto Positivo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <TreePine className="w-16 h-16 mx-auto text-green-600 mb-4" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">¡Increíble Impacto!</h3>
                    <p className="text-green-700 text-lg">
                      Con tu colección consciente has evitado la emisión de{" "}
                      <span className="font-bold">{impactoTotal.co2_total}kg de CO₂</span>, equivalente a plantar{" "}
                      <span className="font-bold">{Math.round(impactoTotal.co2_total * 0.5)} árboles</span>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                        <Droplets className="w-5 h-5" />
                        Conservación de Agua
                      </h4>
                      <p className="text-blue-800">
                        Has conservado <span className="font-bold">{impactoTotal.agua_total} litros</span> de agua,
                        suficiente para llenar{" "}
                        <span className="font-bold">{Math.round(impactoTotal.agua_total / 200)}</span> bañeras estándar.
                      </p>
                    </div>
                    <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Impacto Social
                      </h4>
                      <p className="text-amber-800">
                        Has apoyado directamente a <span className="font-bold">{productos.length} artesanas</span>{" "}
                        locales, contribuyendo al desarrollo de sus comunidades.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Economía Circular
                    </h4>
                    <p className="text-purple-800 mb-4">
                      Tus productos tienen una puntuación promedio de circularidad del{" "}
                      <span className="font-bold">{impactoTotal.circularidad_promedio}%</span>, ¡excelente trabajo!
                    </p>
                    <Progress value={impactoTotal.circularidad_promedio} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader>
                <CardTitle>Tu Viaje Sostenible</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productos
                    .sort((a, b) => new Date(a.fecha_compra).getTime() - new Date(b.fecha_compra).getTime())
                    .map((producto, index) => (
                      <div key={producto.id} className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
                        <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-stone-900">{producto.nombre}</h4>
                          <p className="text-sm text-stone-600">
                            {new Date(producto.fecha_compra).toLocaleDateString()} • {producto.artesana}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-green-600 text-sm">
                            <Leaf className="w-3 h-3" />
                            {producto.co2_ahorrado}kg CO₂
                          </div>
                          <div className="flex items-center gap-1 text-blue-600 text-sm">
                            <Droplets className="w-3 h-3" />
                            {producto.agua_ahorrada}L agua
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
