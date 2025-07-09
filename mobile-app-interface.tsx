"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

interface Product {
  id: string
  codigo: string
  nombre: string
  imagen: string
  storytelling: string
  origen: string
  artesano: string
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
}

interface DevolucionRequest {
  id: string
  producto_codigo: string
  codigo_devolucion: string
  fecha_solicitud: string
  estado: "Pendiente" | "Entregado" | "Procesado"
  recompensa: string
  punto_recoleccion?: string
}

export default function MobileAppInterface() {
  const [currentView, setCurrentView] = useState<
    "home" | "scan" | "product" | "epr" | "operator" | "profile" | "search"
  >("home")
  const [userRole, setUserRole] = useState<"consumer" | "operator" | "guest">("guest")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [language, setLanguage] = useState<"es" | "en" | "pt">("es")
  const [scannedCode, setScannedCode] = useState("")

  const products: Product[] = [
    {
      id: "1",
      codigo: "GIA-SWE-2025-001",
      nombre: "Sweater Sol de Campo",
      imagen: "/placeholder.svg?height=200&width=200",
      storytelling:
        "Este hermoso sweater fue tejido a mano por María Sosa en los Andes de Cusco, utilizando lana merino de ovejas criadas con amor y respeto por la naturaleza...",
      origen: "Cusco, Perú",
      artesano: "María Sosa",
      impacto: {
        co2: 2.3,
        agua: 110,
        reciclable: 95,
      },
      certificaciones: ["RWS", "Fair Trade", "Organic"],
      timeline: [
        { fecha: "15/03/25", evento: "Registro de lana merino", responsable: "María Sosa" },
        { fecha: "16/03/25", evento: "Inicio del tejido", responsable: "María Sosa" },
        { fecha: "20/03/25", evento: "Finalización del tejido", responsable: "María Sosa" },
        { fecha: "22/03/25", evento: "Control de calidad", responsable: "Supervisor" },
      ],
    },
  ]

  const devoluciones: DevolucionRequest[] = [
    {
      id: "1",
      producto_codigo: "GIA-SWE-2025-001",
      codigo_devolucion: "DEV-2025-001",
      fecha_solicitud: "25/03/25",
      estado: "Pendiente",
      recompensa: "15% descuento",
      punto_recoleccion: "Centro Comercial Real Plaza",
    },
  ]

  const texts = {
    es: {
      home: "Inicio",
      scan: "Escanear",
      search: "Buscar",
      profile: "Perfil",
      scanQR: "Escanear QR/NFC",
      searchProduct: "Buscar producto",
      myProducts: "Mis productos",
      latestNews: "Últimas novedades",
      productStory: "Historia del Producto",
      timeline: "Línea de Tiempo",
      environmental: "Impacto Ambiental",
      certificates: "Certificados",
      requestReturn: "Solicitar Devolución",
      returnHistory: "Historial de Devoluciones",
      validateReturn: "Validar Devolución",
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
      scanQR: "Scan QR/NFC",
      searchProduct: "Search product",
      myProducts: "My products",
      latestNews: "Latest news",
      productStory: "Product Story",
      timeline: "Timeline",
      environmental: "Environmental Impact",
      certificates: "Certificates",
      requestReturn: "Request Return",
      returnHistory: "Return History",
      validateReturn: "Validate Return",
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
      scanQR: "Escanear QR/NFC",
      searchProduct: "Buscar produto",
      myProducts: "Meus produtos",
      latestNews: "Últimas notícias",
      productStory: "História do Produto",
      timeline: "Linha do Tempo",
      environmental: "Impacto Ambiental",
      certificates: "Certificados",
      requestReturn: "Solicitar Devolução",
      returnHistory: "Histórico de Devoluções",
      validateReturn: "Validar Devolução",
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
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
            <Card className="cursor-pointer hover:shadow-md">
              <CardContent className="p-4 text-center">
                <Package className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                <p className="font-medium">{t.myProducts}</p>
              </CardContent>
            </Card>
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
              <CardDescription>Si no puedes escanear, ingresa el código manualmente</CardDescription>
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
              <Button variant="outline" className="w-full justify-start" onClick={() => handleScan("GIA-SWE-2025-001")}>
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
                      <User className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <p className="font-medium">Artesana</p>
                      <p className="text-sm text-gray-600">{selectedProduct.artesano}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <MapPin className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="font-medium">Origen</p>
                      <p className="text-sm text-gray-600">{selectedProduct.origen}</p>
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
                      <Package className="w-8 h-8 mx-auto text-blue-600 mb-2" />
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
              <Button className="w-full" onClick={() => setCurrentView("epr")}>
                <Recycle className="w-4 h-4 mr-2" />
                {t.requestReturn}
              </Button>
            </div>
          </div>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // EPR (Return/Recycling) Screen
  if (currentView === "epr") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("product")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Reciclaje y Devoluciones</h1>
          </div>

          {userRole === "guest" && (
            <Card className="mb-6">
              <CardContent className="p-4 text-center">
                <User className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="font-medium mb-2">Inicia sesión para continuar</p>
                <p className="text-sm text-gray-600 mb-4">
                  Necesitas una cuenta para solicitar devoluciones y obtener recompensas
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => setUserRole("consumer")}>
                    Iniciar Sesión
                  </Button>
                  <Button className="flex-1" onClick={() => setUserRole("consumer")}>
                    Registrarse
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {userRole !== "guest" && (
            <>
              {/* Request Return */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="w-5 h-5" />
                    Solicitar Devolución
                  </CardTitle>
                  <CardDescription>
                    {selectedProduct
                      ? `${selectedProduct.nombre} - ${selectedProduct.codigo}`
                      : "Producto seleccionado"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Gift className="w-12 h-12 mx-auto text-green-600 mb-2" />
                    <p className="font-medium text-green-800">Recompensa: 15% descuento</p>
                    <p className="text-sm text-green-700">En tu próxima compra</p>
                  </div>

                  <Button className="w-full">
                    <QrCode className="w-4 h-4 mr-2" />
                    Generar Código de Devolución
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Puntos de recolección cercanos:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>Centro Comercial Real Plaza - 2.3km</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>Tienda GIA Cusco - 5.1km</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Return History */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.returnHistory}</CardTitle>
                </CardHeader>
                <CardContent>
                  {devoluciones.length > 0 ? (
                    <div className="space-y-3">
                      {devoluciones.map((devolucion) => (
                        <div key={devolucion.id} className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-sm">{devolucion.producto_codigo}</p>
                            <Badge
                              className={
                                devolucion.estado === "Procesado"
                                  ? "bg-green-100 text-green-800"
                                  : devolucion.estado === "Entregado"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {devolucion.estado}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">Código: {devolucion.codigo_devolucion}</p>
                          <p className="text-xs text-gray-600">Recompensa: {devolucion.recompensa}</p>
                          <p className="text-xs text-gray-500">{devolucion.fecha_solicitud}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Recycle className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                      <p className="text-gray-600">No tienes devoluciones registradas</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </>
          )}
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
          <h1 className="text-xl font-bold mb-6">{t.profile}</h1>

          {userRole === "guest" ? (
            <Card>
              <CardContent className="p-6 text-center">
                <User className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h2 className="text-lg font-medium mb-2">Bienvenido a GIA</h2>
                <p className="text-gray-600 mb-6">Inicia sesión para acceder a todas las funcionalidades</p>
                <div className="space-y-3">
                  <Button className="w-full" onClick={() => setUserRole("consumer")}>
                    Iniciar Sesión
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setUserRole("consumer")}>
                    Crear Cuenta
                  </Button>
                  <Button variant="ghost" className="w-full" onClick={() => setUserRole("operator")}>
                    Acceso Operador
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* User Info */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="font-medium">
                        {userRole === "consumer" ? "Usuario Consumidor" : "Operador de Punto"}
                      </h2>
                      <p className="text-sm text-gray-600">usuario@example.com</p>
                      <Badge className="mt-1">{userRole === "consumer" ? "Consumidor" : "Operador"}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              {userRole === "consumer" && (
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Package className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                      <p className="text-lg font-bold">3</p>
                      <p className="text-sm text-gray-600">Productos Escaneados</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Recycle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                      <p className="text-lg font-bold">1</p>
                      <p className="text-sm text-gray-600">Productos Reciclados</p>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Menu Options */}
              <div className="space-y-3">
                <Card className="cursor-pointer hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-gray-600" />
                      <span className="flex-1">{t.notifications}</span>
                      <Badge variant="outline">2</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-gray-600" />
                      <span className="flex-1">{t.language}</span>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as "es" | "en" | "pt")}
                        className="text-sm border rounded px-2 py-1"
                      >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-gray-600" />
                      <span className="flex-1">{t.settings}</span>
                    </div>
                  </CardContent>
                </Card>

                {userRole === "operator" && (
                  <Card className="cursor-pointer hover:shadow-md" onClick={() => setCurrentView("operator")}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="flex-1">{t.validateReturn}</span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="cursor-pointer hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-red-600" />
                      <span className="flex-1 text-red-600" onClick={() => setUserRole("guest")}>
                        {t.logout}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>

        <MobileNavigation />
      </div>
    )
  }

  // Operator Screen
  if (currentView === "operator" && userRole === "operator") {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" onClick={() => setCurrentView("profile")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">{t.validateReturn}</h1>
          </div>

          <div className="space-y-6">
            {/* Scan Return Code */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="w-5 h-5" />
                  Validar Código de Devolución
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-white rounded-lg flex items-center justify-center">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">Escanea el código de devolución del cliente</p>

                <div className="space-y-3">
                  <Input placeholder="O ingresa el código manualmente" />
                  <Button className="w-full">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Validar Devolución
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pending Returns */}
            <Card>
              <CardHeader>
                <CardTitle>Devoluciones Pendientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {devoluciones
                    .filter((d) => d.estado === "Pendiente")
                    .map((devolucion) => (
                      <div key={devolucion.id} className="border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-sm">{devolucion.codigo_devolucion}</p>
                          <Badge className="bg-yellow-100 text-yellow-800">{devolucion.estado}</Badge>
                        </div>
                        <p className="text-xs text-gray-600">Producto: {devolucion.producto_codigo}</p>
                        <p className="text-xs text-gray-600">Recompensa: {devolucion.recompensa}</p>
                        <Button size="sm" className="mt-2 w-full">
                          Confirmar Entrega
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                  <p className="text-lg font-bold">12</p>
                  <p className="text-sm text-gray-600">Validadas Hoy</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
                  <p className="text-lg font-bold">3</p>
                  <p className="text-sm text-gray-600">Pendientes</p>
                </CardContent>
              </Card>
            </div>
          </div>
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
            <h1 className="text-xl font-bold">{t.searchProduct}</h1>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Buscar por código o nombre..." className="pl-10" />
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Productos recientes:</h3>
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="cursor-pointer hover:shadow-md"
                  onClick={() => {
                    setSelectedProduct(product)
                    setCurrentView("product")
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{product.nombre}</p>
                        <p className="text-sm text-gray-600">{product.codigo}</p>
                        <div className="flex gap-1 mt-1">
                          {product.certificaciones.slice(0, 2).map((cert, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <MobileNavigation />
      </div>
    )
  }

  return <div>Vista no encontrada</div>
}
