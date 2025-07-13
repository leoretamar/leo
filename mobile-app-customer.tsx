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
  Camera,
  Search,
  User,
  Bell,
  Settings,
  Package,
  Leaf,
  Award,
  Recycle,
  MapPin,
  Clock,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2,
  Gift,
  Globe,
  Home,
  Star,
  Droplets,
  Users,
  Target,
  Trophy,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"

interface Product {
  id: string
  codigo: string
  nombre: string
  imagen: string
  storytelling: string
  origen: string
  artesano: string
  artesano_id: string
  impacto: {
    co2: number
    agua: number
    reciclable: number
  }
  certificaciones: string[]
  timeline: Array<{
    fecha: string
    evento: string
    responsable: string
  }>
  puntuacion_circularidad: number
}

interface Artisan {
  id: string
  nombre: string
  edad: number
  experiencia: string
  especialidad: string
  ubicacion: string
  telefono: string
  email: string
  biografia: string
  productos_creados: number
  rating: number
  certificaciones: string[]
  imagen: string
  cooperativa: string
  logros: string[]
}

export default function MobileAppCustomer() {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "scan"
    | "product"
    | "artisan"
    | "profile"
    | "search"
    | "programs"
    | "circularity"
    | "ambassador"
    | "challenges"
  >("home")
  const [userRole, setUserRole] = useState<"consumer" | "guest">("guest")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null)
  const [language, setLanguage] = useState<"es" | "en" | "pt">("es")
  const [scannedCode, setScannedCode] = useState("")

  const products: Product[] = [
    {
      id: "1",
      codigo: "GIA-SWE-2025-001",
      nombre: "Sweater Sol de Campo",
      imagen: "/placeholder.svg?height=200&width=200",
      storytelling:
        "Este hermoso sweater fue tejido a mano por María González en Montevideo, utilizando lana merino de ovejas criadas con amor y respeto por la naturaleza. Cada punto cuenta una historia de tradición y sostenibilidad.",
      origen: "Montevideo, Uruguay",
      artesano: "María González",
      artesano_id: "1",
      impacto: {
        co2: 2.3,
        agua: 110,
        reciclable: 95,
      },
      certificaciones: ["GOTS", "Fair Trade", "Carbon Neutral"],
      timeline: [
        { fecha: "15/03/25", evento: "Selección de lana merino", responsable: "María González" },
        { fecha: "16/03/25", evento: "Inicio del tejido", responsable: "María González" },
        { fecha: "20/03/25", evento: "Finalización del tejido", responsable: "María González" },
        { fecha: "22/03/25", evento: "Control de calidad", responsable: "Supervisor GIA" },
      ],
      puntuacion_circularidad: 92,
    },
  ]

  const artisans: Artisan[] = [
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
        "María es una artesana especializada en tejido tradicional uruguayo. Aprendió las técnicas de su abuela y ha perfeccionado su arte durante más de 20 años.",
      productos_creados: 127,
      rating: 4.9,
      certificaciones: ["Artesana Certificada GIA", "Fair Trade", "Técnicas Tradicionales"],
      imagen: "/placeholder.svg?height=200&width=200",
      cooperativa: "Cooperativa Textil Montevideo",
      logros: ["Premio Artesana del Año 2023", "Certificación en Sostenibilidad", "Mentora de 15 nuevas artesanas"],
    },
  ]

  const programs = {
    circularity: {
      points: 150,
      level: "Eco Warrior",
      next_level: 250,
      products_returned: 2,
      co2_saved: 4.1,
      rewards: [
        { name: "Descuento 15%", points: 100, available: true },
        { name: "Descuento 20%", points: 200, available: false },
        { name: "Producto Gratis", points: 500, available: false },
      ],
    },
    ambassador: {
      level: "Embajador Bronce",
      referrals: 3,
      target_referrals: 5,
      points: 75,
      activities: [
        { type: "Referido exitoso", points: 25, date: "2024-03-15" },
        { type: "Post en redes sociales", points: 10, date: "2024-03-10" },
        { type: "Review de producto", points: 15, date: "2024-03-05" },
      ],
    },
    challenges: {
      month: "Marzo 2024",
      completed: 2,
      total: 4,
      points_month: 45,
      challenges: [
        {
          id: 1,
          title: "Comparte tu historia",
          description: "Comparte la historia de uno de tus productos en redes sociales",
          points: 20,
          completed: true,
          date_completed: "2024-03-08",
        },
        {
          id: 2,
          title: "Recicla una prenda",
          description: "Devuelve una prenda a través del programa de circularidad",
          points: 25,
          completed: true,
          date_completed: "2024-03-12",
        },
        {
          id: 3,
          title: "Refiere un amigo",
          description: "Invita a un amigo a unirse a la comunidad GIA",
          points: 30,
          completed: false,
          progress: 0,
        },
        {
          id: 4,
          title: "Visita un taller",
          description: "Participa en un taller virtual con nuestras artesanas",
          points: 40,
          completed: false,
          progress: 0,
        },
      ],
    },
  }

  const texts = {
    es: {
      home: "Inicio",
      scan: "Escanear",
      search: "Buscar",
      profile: "Perfil",
      scanQR: "Escanear QR",
      searchProduct: "Buscar producto",
      myProducts: "Mis productos",
      latestNews: "Últimas novedades",
      productStory: "Historia del Producto",
      timeline: "Línea de Tiempo",
      environmental: "Impacto Ambiental",
      certificates: "Certificados",
      programs: "Programas",
      circularity: "Circularidad",
      ambassador: "Embajador",
      challenges: "Desafíos",
      notifications: "Notificaciones",
      settings: "Configuración",
      language: "Idioma",
      logout: "Cerrar Sesión",
    },
    en: {
      home: "Home",
      scan: "Scan",
      search: "Search",
      profile: "Profile",
      scanQR: "Scan QR",
      searchProduct: "Search product",
      myProducts: "My products",
      latestNews: "Latest news",
      productStory: "Product Story",
      timeline: "Timeline",
      environmental: "Environmental Impact",
      certificates: "Certificates",
      programs: "Programs",
      circularity: "Circularity",
      ambassador: "Ambassador",
      challenges: "Challenges",
      notifications: "Notifications",
      settings: "Settings",
      language: "Language",
      logout: "Logout",
    },
    pt: {
      home: "Início",
      scan: "Escanear",
      search: "Buscar",
      profile: "Perfil",
      scanQR: "Escanear QR",
      searchProduct: "Buscar produto",
      myProducts: "Meus produtos",
      latestNews: "Últimas notícias",
      productStory: "História do Produto",
      timeline: "Linha do Tempo",
      environmental: "Impacto Ambiental",
      certificates: "Certificados",
      programs: "Programas",
      circularity: "Circularidade",
      ambassador: "Embaixador",
      challenges: "Desafios",
      notifications: "Notificações",
      settings: "Configurações",
      language: "Idioma",
      logout: "Sair",
    },
  }

  const t = texts[language]

  // Simular escaneo de QR
  const handleScan = (code: string) => {
    const product = products.find((p) => p.codigo === code)
    if (product) {
      setSelectedProduct(product)
      setCurrentView("product")
    }
  }

  // Mobile Navigation Component
  const MobileNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around">
        <Button
          variant={currentView === "home" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentView("home")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">{t.home}</span>
        </Button>
        <Button
          variant={currentView === "scan" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentView("scan")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <QrCode className="w-5 h-5" />
          <span className="text-xs">{t.scan}</span>
        </Button>
        <Button
          variant={currentView === "programs" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentView("programs")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <Gift className="w-5 h-5" />
          <span className="text-xs">{t.programs}</span>
        </Button>
        <Button
          variant={currentView === "search" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentView("search")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <Search className="w-5 h-5" />
          <span className="text-xs">{t.search}</span>
        </Button>
        <Button
          variant={currentView === "profile" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentView("profile")}
          className="flex flex-col items-center gap-1 h-auto py-2"
        >
          <User className="w-5 h-5" />
          <span className="text-xs">{t.profile}</span>
        </Button>
      </div>
    </div>
  )

  // Home Screen
  if (currentView === "home") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">GIA Trazabilidad</h1>
              <p className="text-blue-100 text-sm">Descubre la historia de tus productos</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-white">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="cursor-pointer hover:shadow-md" onClick={() => setCurrentView("scan")}>
              <CardContent className="p-4 text-center">
                <QrCode className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <p className="font-medium">{t.scanQR}</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md" onClick={() => setCurrentView("search")}>
              <CardContent className="p-4 text-center">
                <Search className="w-12 h-12 mx-auto text-green-600 mb-2" />
                <p className="font-medium">{t.searchProduct}</p>
              </CardContent>
            </Card>
          </div>

          {userRole !== "guest" && (
            <div className="grid grid-cols-2 gap-4">
              <Card className="cursor-pointer hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <Package className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                  <p className="font-medium">{t.myProducts}</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md" onClick={() => setCurrentView("programs")}>
                <CardContent className="p-4 text-center">
                  <Gift className="w-12 h-12 mx-auto text-orange-600 mb-2" />
                  <p className="font-medium">{t.programs}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Latest News */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">{t.latestNews}</h2>
          <div className="space-y-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-medium">Nueva colección sostenible</p>
                    <p className="text-sm text-gray-600">100% materiales reciclados</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Gift className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className="font-medium">Programa de recompensas</p>
                    <p className="text-sm text-gray-600">Recicla y obtén descuentos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="font-medium">Conoce a nuestras artesanas</p>
                    <p className="text-sm text-gray-600">Historias de tradición y sostenibilidad</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Scan Screen
  if (currentView === "scan") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("home")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">{t.scanQR}</h1>
          </div>

          {/* Camera Simulation */}
          <div className="relative mb-6">
            <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-white rounded-lg flex items-center justify-center">
                <Camera className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-white text-sm text-center">Apunta la cámara al código QR</p>
            </div>
          </div>

          {/* Manual Input */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ingreso Manual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Código del producto (ej: GIA-SWE-2025-001)"
                value={scannedCode}
                onChange={(e) => setScannedCode(e.target.value)}
              />
              <Button className="w-full" onClick={() => handleScan(scannedCode)} disabled={!scannedCode}>
                Buscar Producto
              </Button>
            </CardContent>
          </Card>

          {/* Quick Scan Examples */}
          <div className="mt-6">
            <h3 className="font-medium mb-3">Productos de ejemplo:</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => handleScan("GIA-SWE-2025-001")}
              >
                <QrCode className="w-4 h-4 mr-2" />
                GIA-SWE-2025-001 - Sweater Sol de Campo
              </Button>
            </div>
          </div>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Product Detail Screen
  if (currentView === "product" && selectedProduct) {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="relative">
          {/* Header with back button */}
          <div className="absolute top-4 left-4 z-10">
            <Button variant="ghost" size="sm" className="bg-white/80" onClick={() => setCurrentView("home")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>

          {/* Product Image */}
          <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <Package className="w-24 h-24 text-gray-400" />
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl font-bold">{selectedProduct.nombre}</h1>
                <p className="text-gray-600">{selectedProduct.codigo}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Artisan Info */}
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt={selectedProduct.artesano}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium">Creado por {selectedProduct.artesano}</p>
                    <p className="text-sm text-gray-600">{selectedProduct.origen}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedArtisan(artisans.find((a) => a.id === selectedProduct.artesano_id) || null)
                      setCurrentView("artisan")
                    }}
                  >
                    <User className="w-4 h-4 mr-1" />
                    Ver
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="story">Historia</TabsTrigger>
                <TabsTrigger value="timeline">Proceso</TabsTrigger>
                <TabsTrigger value="impact">Impacto</TabsTrigger>
                <TabsTrigger value="certs">Certificados</TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{t.productStory}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{selectedProduct.storytelling}</p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <MapPin className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="font-medium">Origen</p>
                      <p className="text-sm text-gray-600">{selectedProduct.origen}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Star className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
                      <p className="font-medium">Circularidad</p>
                      <p className="text-sm text-gray-600">{selectedProduct.puntuacion_circularidad}/100</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-3">
                {selectedProduct.timeline.map((event, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      {index < selectedProduct.timeline.length - 1 && <div className="w-px h-8 bg-gray-200 mt-2"></div>}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-medium text-sm">{event.evento}</p>
                      <p className="text-xs text-gray-600">{event.responsable}</p>
                      <p className="text-xs text-gray-500">{event.fecha}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="impact" className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Leaf className="w-8 h-8 mx-auto text-red-600 mb-2" />
                      <p className="text-lg font-bold">{selectedProduct.impacto.co2}kg</p>
                      <p className="text-xs text-gray-600">CO₂</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Droplets className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <p className="text-lg font-bold">{selectedProduct.impacto.agua}L</p>
                      <p className="text-xs text-gray-600">Agua</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Recycle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="text-lg font-bold">{selectedProduct.impacto.reciclable}%</p>
                      <p className="text-xs text-gray-600">Reciclable</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="certs" className="space-y-3">
                {selectedProduct.certificaciones.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-8 h-8 text-green-500" />
                        <div>
                          <p className="font-medium">{cert}</p>
                          <p className="text-sm text-gray-600">Certificado válido</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            {/* Action Button */}
            <div className="mt-6">
              <Button className="w-full" onClick={() => setCurrentView("programs")}>
                <Gift className="w-4 h-4 mr-2" />
                Ver Programas
              </Button>
            </div>
          </div>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Artisan Profile Screen
  if (currentView === "artisan" && selectedArtisan) {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("product")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Perfil de Artesana</h1>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <img
                  src={selectedArtisan.imagen || "/placeholder.svg"}
                  alt={selectedArtisan.nombre}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-bold">{selectedArtisan.nombre}</h2>
                <p className="text-gray-600">{selectedArtisan.especialidad}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(selectedArtisan.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{selectedArtisan.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600">{selectedArtisan.productos_creados}</p>
                  <p className="text-xs text-gray-600">Productos</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-green-600">{selectedArtisan.experiencia}</p>
                  <p className="text-xs text-gray-600">Experiencia</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-purple-600">{selectedArtisan.certificaciones.length}</p>
                  <p className="text-xs text-gray-600">Certificaciones</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{selectedArtisan.ubicacion}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{selectedArtisan.telefono}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{selectedArtisan.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Biografía</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed">{selectedArtisan.biografia}</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Certificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedArtisan.certificaciones.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span className="font-medium text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Logros Destacados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedArtisan.logros.map((logro, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium text-sm">{logro}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Programs Screen
  if (currentView === "programs") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("home")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">{t.programs}</h1>
          </div>

          <div className="space-y-4">
            <Card
              className="cursor-pointer hover:shadow-md bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
              onClick={() => setCurrentView("circularity")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Recycle className="w-12 h-12 text-green-600" />
                  <div className="flex-1">
                    <h3 className="font-bold text-green-900">Programa de Circularidad</h3>
                    <p className="text-sm text-green-700">Devuelve tus prendas y obtén beneficios</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm font-medium text-green-600">{programs.circularity.points} puntos</span>
                      <Badge className="bg-green-100 text-green-800">{programs.circularity.level}</Badge>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-md bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"
              onClick={() => setCurrentView("ambassador")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-900">Embajador GIA</h3>
                    <p className="text-sm text-blue-700">Comparte la misión y obtén recompensas</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm font-medium text-blue-600">{programs.ambassador.points} puntos</span>
                      <Badge className="bg-blue-100 text-blue-800">{programs.ambassador.level}</Badge>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-md bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200"
              onClick={() => setCurrentView("challenges")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Target className="w-12 h-12 text-purple-600" />
                  <div className="flex-1">
                    <h3 className="font-bold text-purple-900">Desafíos Mensuales</h3>
                    <p className="text-sm text-purple-700">Completa desafíos y gana premios</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm font-medium text-purple-600">
                        {programs.challenges.completed}/{programs.challenges.total} completados
                      </span>
                      <Badge className="bg-purple-100 text-purple-800">{programs.challenges.points_month} puntos</Badge>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Circularity Program Screen
  if (currentView === "circularity") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("programs")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Programa de Circularidad</h1>
          </div>

          <Card className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6 text-center">
              <Recycle className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <h2 className="text-xl font-bold text-green-900 mb-2">Nivel: {programs.circularity.level}</h2>
              <p className="text-green-700 mb-4">Devuelve tus prendas al final de su vida útil</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{programs.circularity.points}</p>
                  <p className="text-xs text-green-700">Puntos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{programs.circularity.products_returned}</p>
                  <p className="text-xs text-blue-700">Devueltos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{programs.circularity.co2_saved}kg</p>
                  <p className="text-xs text-purple-700">CO₂ Evitado</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Progreso al siguiente nivel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Siguiente nivel</span>
                  <span className="text-sm text-gray-600">
                    {programs.circularity.points}/{programs.circularity.next_level}
                  </span>
                </div>
                <Progress
                  value={(programs.circularity.points / programs.circularity.next_level) * 100}
                  className="h-3"
                />
                <p className="text-sm text-gray-600">
                  Te faltan {programs.circularity.next_level - programs.circularity.points} puntos
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recompensas Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {programs.circularity.rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border ${reward.available ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}
                  >
                    <div>
                      <h4 className="font-medium">{reward.name}</h4>
                      <p className="text-sm text-gray-600">{reward.points} puntos</p>
                    </div>
                    <Button variant={reward.available ? "default" : "outline"} disabled={!reward.available} size="sm">
                      {reward.available ? "Canjear" : "Bloqueado"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Ambassador Program Screen
  if (currentView === "ambassador") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("programs")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Embajador GIA</h1>
          </div>

          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <Users className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-xl font-bold text-blue-900 mb-2">{programs.ambassador.level}</h2>
              <p className="text-blue-700 mb-4">Comparte la misión GIA y obtén recompensas</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{programs.ambassador.points}</p>
                  <p className="text-xs text-blue-700">Puntos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{programs.ambassador.referrals}</p>
                  <p className="text-xs text-green-700">Referidos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{programs.ambassador.target_referrals}</p>
                  <p className="text-xs text-purple-700">Objetivo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Progreso a Embajador Plata</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Referidos</span>
                  <span className="text-sm text-gray-600">
                    {programs.ambassador.referrals}/{programs.ambassador.target_referrals}
                  </span>
                </div>
                <Progress
                  value={(programs.ambassador.referrals / programs.ambassador.target_referrals) * 100}
                  className="h-3"
                />
                <p className="text-sm text-gray-600">
                  Te faltan {programs.ambassador.target_referrals - programs.ambassador.referrals} referidos
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {programs.ambassador.activities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">{activity.type}</h4>
                      <p className="text-xs text-gray-600">{activity.date}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">+{activity.points}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Challenges Screen
  if (currentView === "challenges") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("programs")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Desafíos Mensuales</h1>
          </div>

          <Card className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <Target className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-xl font-bold text-purple-900 mb-2">{programs.challenges.month}</h2>
              <p className="text-purple-700 mb-4">Completa desafíos y gana puntos especiales</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{programs.challenges.completed}</p>
                  <p className="text-xs text-purple-700">Completados</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{programs.challenges.total}</p>
                  <p className="text-xs text-green-700">Total</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600">{programs.challenges.points_month}</p>
                  <p className="text-xs text-orange-700">Puntos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Desafíos de {programs.challenges.month}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {programs.challenges.challenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className={`p-4 rounded-lg border ${challenge.completed ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {challenge.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Clock className="w-5 h-5 text-gray-400" />
                          )}
                          <h4 className="font-medium text-sm">{challenge.title}</h4>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{challenge.description}</p>
                        {challenge.completed && (
                          <p className="text-xs text-green-600">Completado el {challenge.date_completed}</p>
                        )}
                      </div>
                      <Badge
                        className={challenge.completed ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                      >
                        {challenge.points} pts
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Search Screen
  if (currentView === "search") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("home")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">{t.search}</h1>
          </div>

          <div className="space-y-4">
            <Input placeholder="Buscar por código, nombre o artesana..." />

            <div className="text-center py-8">
              <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">Ingresa un término de búsqueda</p>
            </div>
          </div>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Profile Screen
  if (currentView === "profile") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("home")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">{t.profile}</h1>
          </div>

          {userRole === "guest" ? (
            <div className="text-center py-8">
              <User className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-xl font-bold mb-2">Únete a GIA</h2>
              <p className="text-gray-600 mb-6">Crea una cuenta para acceder a todas las funciones</p>
              <div className="space-y-3">
                <Button className="w-full" onClick={() => setUserRole("consumer")}>
                  Crear Cuenta
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Iniciar Sesión
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Usuario"
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h2 className="text-xl font-bold">Usuario GIA</h2>
                  <p className="text-gray-600">Miembro desde 2024</p>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Bell className="w-5 h-5 mr-3" />
                  {t.notifications}
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="w-5 h-5 mr-3" />
                  {t.settings}
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Globe className="w-5 h-5 mr-3" />
                  {t.language}
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 bg-transparent">
                  <ArrowLeft className="w-5 h-5 mr-3" />
                  {t.logout}
                </Button>
              </div>
            </div>
          )}
        </div>

        <MobileNavigation />
      </div>
    )
  }

  return null
}
