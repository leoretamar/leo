"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Award,
  QrCode,
  MapPin,
  User,
  Heart,
  Share2,
  ShoppingBag,
  Recycle,
  Star,
  Info,
  CheckCircle,
  Truck,
  Package,
  Globe,
  Users,
  TrendingUp,
  Search,
  Filter,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Bookmark,
  Gift,
  Shield,
  Clock,
  Target,
  Sparkles,
  Home,
} from "lucide-react"

export default function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([])
  const [currentView, setCurrentView] = useState("home")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showImpactDetails, setShowImpactDetails] = useState(false)

  const productos_destacados = [
    {
      id: "GIA-2024-001",
      nombre: "Sweater Artesanal Premium",
      precio: 120,
      imagen: "/placeholder.svg?height=300&width=300",
      artesano: "María González",
      ubicacion: "Montevideo",
      historia: "Tejido a mano con lana merino de ovejas criadas en pasturas naturales...",
      impacto_co2: 2.3,
      impacto_agua: 45,
      certificaciones: ["GOTS", "Fair Trade", "Carbon Neutral"],
      rating: 4.8,
      reviews: 24,
      disponible: true,
      tiempo_produccion: "14 días",
      materiales: ["85% Lana Merino", "15% Botones de Madera"],
      cuidados: ["Lavar a mano", "Secar al aire", "No usar blanqueador"],
      tallas: ["S", "M", "L", "XL"],
      colores: ["Natural", "Gris", "Azul Marino"],
    },
    {
      id: "GIA-2024-002",
      nombre: "Cardigan Sostenible",
      precio: 95,
      imagen: "/placeholder.svg?height=300&width=300",
      artesano: "Ana Rodríguez",
      ubicacion: "Punta del Este",
      historia: "Creado con técnicas tradicionales transmitidas por generaciones...",
      impacto_co2: 1.8,
      impacto_agua: 38,
      certificaciones: ["GOTS", "RWS"],
      rating: 4.6,
      reviews: 18,
      disponible: true,
      tiempo_produccion: "12 días",
      materiales: ["90% Lana Orgánica", "10% Fibra Reciclada"],
      cuidados: ["Lavar en frío", "Secar horizontal", "Planchar suave"],
      tallas: ["XS", "S", "M", "L"],
      colores: ["Beige", "Rosa Pálido", "Verde Salvia"],
    },
    {
      id: "GIA-2024-003",
      nombre: "Poncho Tradicional",
      precio: 85,
      imagen: "/placeholder.svg?height=300&width=300",
      artesano: "Carlos Méndez",
      ubicacion: "Colonia",
      historia: "Inspirado en diseños ancestrales uruguayos, cada poncho cuenta una historia...",
      impacto_co2: 1.5,
      impacto_agua: 32,
      certificaciones: ["GOTS", "Fair Trade", "Cradle to Cradle", "RWS"],
      rating: 4.9,
      reviews: 31,
      disponible: false,
      tiempo_produccion: "18 días",
      materiales: ["100% Lana Natural"],
      cuidados: ["Lavar a mano", "Secar al aire libre", "Guardar con lavanda"],
      tallas: ["Único"],
      colores: ["Natural", "Marrón", "Gris Carbón"],
    },
  ]

  const mi_impacto = {
    productos_comprados: 3,
    co2_ahorrado: 6.6,
    agua_ahorrada: 115,
    artesanos_apoyados: 3,
    arboles_plantados: 2,
    puntos_gia: 450,
    nivel: "Eco Warrior",
    proxima_recompensa: "Descuento 15%",
    puntos_para_recompensa: 50,
  }

  const actividad_reciente = [
    {
      id: 1,
      tipo: "compra",
      descripcion: "Compraste Sweater Artesanal Premium",
      fecha: "2024-01-15",
      puntos: 120,
    },
    {
      id: 2,
      tipo: "review",
      descripcion: "Dejaste una reseña para Cardigan Sostenible",
      fecha: "2024-01-14",
      puntos: 25,
    },
    {
      id: 3,
      tipo: "share",
      descripcion: "Compartiste la historia de María González",
      fecha: "2024-01-13",
      puntos: 10,
    },
    {
      id: 4,
      tipo: "scan",
      descripcion: "Escaneaste el QR de tu Poncho Tradicional",
      fecha: "2024-01-12",
      puntos: 5,
    },
  ]

  const noticias_sostenibilidad = [
    {
      id: 1,
      titulo: "Nueva Certificación Carbon Neutral",
      descripcion: "GIA obtiene certificación para neutralidad de carbono en toda la cadena productiva",
      fecha: "2024-01-15",
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Certificación",
    },
    {
      id: 2,
      titulo: "Programa de Reciclaje Expandido",
      descripcion: "Ahora puedes devolver cualquier prenda textil para su reciclaje responsable",
      fecha: "2024-01-12",
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Reciclaje",
    },
    {
      id: 3,
      titulo: "Nuevo Artesano en Maldonado",
      descripcion: "Laura Silva se une a nuestra red de artesanos con técnicas de teñido natural",
      fecha: "2024-01-10",
      imagen: "/placeholder.svg?height=200&width=300",
      categoria: "Artesanos",
    },
  ]

  const handleToggleFavorite = (productId: string) => {
    setFavoriteProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleViewProduct = (productId: string) => {
    setSelectedProduct(productId)
    setCurrentView("product-detail")
  }

  const handleBuyProduct = (productId: string) => {
    alert(`Redirigiendo a checkout para producto ${productId}...`)
  }

  const handleScanQR = () => {
    alert("Abriendo cámara para escanear QR...")
  }

  const handleShareProduct = (productId: string) => {
    alert(`Compartiendo producto ${productId}...`)
  }

  const handleRecycleProduct = () => {
    alert("Abriendo programa de reciclaje...")
    setCurrentView("recycle")
  }

  const handleViewArtisan = (artesano: string) => {
    alert(`Viendo perfil de ${artesano}...`)
    setCurrentView("artisan-profile")
  }

  const handleTrackOrder = () => {
    alert("Abriendo seguimiento de pedidos...")
    setCurrentView("order-tracking")
  }

  const handleViewImpact = () => {
    setCurrentView("impact-dashboard")
  }

  const handleJoinProgram = (programa: string) => {
    alert(`Uniéndose al programa: ${programa}`)
  }

  const getActivityIcon = (tipo: string) => {
    switch (tipo) {
      case "compra":
        return <ShoppingBag className="w-4 h-4 text-green-500" />
      case "review":
        return <Star className="w-4 h-4 text-yellow-500" />
      case "share":
        return <Share2 className="w-4 h-4 text-blue-500" />
      case "scan":
        return <QrCode className="w-4 h-4 text-purple-500" />
      default:
        return <Info className="w-4 h-4 text-gray-500" />
    }
  }

  const renderHomeContent = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenido a tu Dashboard GIA</h1>
          <p className="text-xl text-gray-600 mb-6">
            Descubre el impacto de tus compras conscientes y conecta con los artesanos detrás de cada producto
          </p>
          <div className="flex gap-4">
            <Button size="lg" onClick={() => setCurrentView("products")}>
              <ShoppingBag className="w-5 h-5 mr-2" />
              Explorar Productos
            </Button>
            <Button variant="outline" size="lg" onClick={handleScanQR}>
              <QrCode className="w-5 h-5 mr-2" />
              Escanear QR
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full opacity-20 transform -translate-x-24 translate-y-24"></div>
      </div>

      {/* Mi Impacto */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-600" />
            Mi Impacto Ambiental
          </CardTitle>
          <Button variant="outline" onClick={handleViewImpact}>
            Ver Detalles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <p className="text-2xl font-bold text-green-600">{mi_impacto.co2_ahorrado}kg</p>
              <p className="text-sm text-green-700">CO₂ Ahorrado</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Globe className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-2xl font-bold text-blue-600">{mi_impacto.agua_ahorrada}L</p>
              <p className="text-sm text-blue-700">Agua Ahorrada</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <p className="text-2xl font-bold text-purple-600">{mi_impacto.artesanos_apoyados}</p>
              <p className="text-sm text-purple-700">Artesanos Apoyados</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Award className="w-8 h-8 mx-auto text-yellow-600 mb-2" />
              <p className="text-2xl font-bold text-yellow-600">{mi_impacto.puntos_gia}</p>
              <p className="text-sm text-yellow-700">Puntos GIA</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Nivel: {mi_impacto.nivel}</span>
              <span className="text-sm text-gray-600">
                {mi_impacto.puntos_para_recompensa} puntos para {mi_impacto.proxima_recompensa}
              </span>
            </div>
            <Progress value={(mi_impacto.puntos_gia % 500) / 5} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Productos Destacados */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Productos Destacados</CardTitle>
          <Button variant="outline" onClick={() => setCurrentView("products")}>
            Ver Todos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos_destacados.slice(0, 3).map((producto) => (
              <div key={producto.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggleFavorite(producto.id)
                      }}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          favoriteProducts.includes(producto.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                        }`}
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleShareProduct(producto.id)
                      }}
                    >
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </Button>
                  </div>
                  {!producto.disponible && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge className="bg-red-500">Agotado</Badge>
                    </div>
                  )}
                </div>

                <div onClick={() => handleViewProduct(producto.id)}>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                    {producto.nombre}
                  </h3>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{producto.rating}</span>
                      <span className="text-sm text-gray-500">({producto.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{producto.artesano}</span>
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{producto.ubicacion}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {producto.certificaciones.slice(0, 2).map((cert) => (
                      <Badge key={cert} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                    {producto.certificaciones.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{producto.certificaciones.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-green-600">${producto.precio}</p>
                      <p className="text-sm text-gray-500">{producto.tiempo_produccion}</p>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleBuyProduct(producto.id)
                      }}
                      disabled={!producto.disponible}
                    >
                      {producto.disponible ? "Comprar" : "Agotado"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actividad Reciente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {actividad_reciente.map((actividad) => (
                <div key={actividad.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  {getActivityIcon(actividad.tipo)}
                  <div className="flex-1">
                    <p className="font-medium text-sm">{actividad.descripcion}</p>
                    <p className="text-xs text-gray-500">{actividad.fecha}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    +{actividad.puntos} pts
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Noticias de Sostenibilidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {noticias_sostenibilidad.map((noticia) => (
                <div key={noticia.id} className="flex gap-3">
                  <img
                    src={noticia.imagen || "/placeholder.svg"}
                    alt={noticia.titulo}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <Badge variant="outline" className="text-xs mb-1">
                      {noticia.categoria}
                    </Badge>
                    <h4 className="font-medium text-sm mb-1">{noticia.titulo}</h4>
                    <p className="text-xs text-gray-600 mb-1">{noticia.descripcion}</p>
                    <p className="text-xs text-gray-500">{noticia.fecha}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Programas y Recompensas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Programas y Recompensas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <Recycle className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">Programa de Reciclaje</h3>
              <p className="text-sm text-gray-600 mb-3">
                Devuelve tus prendas usadas y obtén descuentos en nuevas compras
              </p>
              <Button variant="outline" size="sm" onClick={handleRecycleProduct}>
                Participar
              </Button>
            </div>

            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Embajador GIA</h3>
              <p className="text-sm text-gray-600 mb-3">Comparte tu experiencia y gana puntos por cada referido</p>
              <Button variant="outline" size="sm" onClick={() => handleJoinProgram("Embajador")}>
                Unirse
              </Button>
            </div>

            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <Target className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2">Desafíos Mensuales</h3>
              <p className="text-sm text-gray-600 mb-3">
                Completa desafíos de sostenibilidad y gana recompensas exclusivas
              </p>
              <Button variant="outline" size="sm" onClick={() => handleJoinProgram("Desafíos")}>
                Ver Desafíos
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProductsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Catálogo de Productos</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos_destacados.map((producto) => (
          <div key={producto.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.nombre}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleToggleFavorite(producto.id)
                  }}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favoriteProducts.includes(producto.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleShareProduct(producto.id)
                  }}
                >
                  <Share2 className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
              {!producto.disponible && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge className="bg-red-500">Agotado</Badge>
                </div>
              )}
            </div>

            <div onClick={() => handleViewProduct(producto.id)}>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
                {producto.nombre}
              </h3>

              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{producto.rating}</span>
                  <span className="text-sm text-gray-500">({producto.reviews})</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{producto.artesano}</span>
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{producto.ubicacion}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {producto.certificaciones.slice(0, 2).map((cert) => (
                  <Badge key={cert} variant="outline" className="text-xs">
                    {cert}
                  </Badge>
                ))}
                {producto.certificaciones.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{producto.certificaciones.length - 2}
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                <div className="flex items-center gap-1">
                  <Leaf className="w-3 h-3 text-green-500" />
                  <span>{producto.impacto_co2}kg CO₂</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-blue-500" />
                  <span>{producto.impacto_agua}L agua</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">${producto.precio}</p>
                  <p className="text-sm text-gray-500">{producto.tiempo_produccion}</p>
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBuyProduct(producto.id)
                  }}
                  disabled={!producto.disponible}
                >
                  {producto.disponible ? "Comprar" : "Agotado"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderProductDetail = () => {
    if (!selectedProduct) return null
    const producto = productos_destacados.find((p) => p.id === selectedProduct)
    if (!producto) return null

    return (
      <div className="space-y-6">
        <Button variant="outline" onClick={() => setCurrentView("home")}>
          ← Volver al Inicio
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagen del Producto */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.nombre}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                  onClick={() => handleToggleFavorite(producto.id)}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favoriteProducts.includes(producto.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                  onClick={() => handleShareProduct(producto.id)}
                >
                  <Share2 className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
            </div>

            {/* Video de Proceso */}
            <div className="relative bg-gray-100 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center">
                <Button variant="ghost" size="lg" onClick={() => setIsVideoPlaying(!isVideoPlaying)} className="mb-2">
                  {isVideoPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                </Button>
                <p className="text-sm text-gray-600">Ver proceso de creación</p>
              </div>
              <Button variant="ghost" size="sm" className="absolute top-2 right-2" onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Información del Producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{producto.rating}</span>
                  <span className="text-gray-500">({producto.reviews} reseñas)</span>
                </div>
                <Badge className={producto.disponible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                  {producto.disponible ? "Disponible" : "Agotado"}
                </Badge>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-4">${producto.precio}</p>
            </div>

            {/* Artesano */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Creado por</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{producto.artesano}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {producto.ubicacion}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto bg-transparent"
                  onClick={() => handleViewArtisan(producto.artesano)}
                >
                  Ver Perfil
                </Button>
              </div>
            </div>

            {/* Historia del Producto */}
            <div>
              <h3 className="font-semibold mb-2">Historia del Producto</h3>
              <p className="text-gray-600">{producto.historia}</p>
            </div>

            {/* Certificaciones */}
            <div>
              <h3 className="font-semibold mb-2">Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                {producto.certificaciones.map((cert) => (
                  <Badge key={cert} className="bg-green-100 text-green-800">
                    <Award className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Impacto Ambiental */}
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Impacto Ambiental
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{producto.impacto_co2}kg</p>
                  <p className="text-sm text-green-700">CO₂ Reducido</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{producto.impacto_agua}L</p>
                  <p className="text-sm text-blue-700">Agua Ahorrada</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-3 bg-transparent"
                onClick={() => setShowImpactDetails(!showImpactDetails)}
              >
                {showImpactDetails ? "Ocultar" : "Ver"} Detalles del Impacto
              </Button>
              {showImpactDetails && (
                <div className="mt-3 p-3 bg-white rounded border text-sm">
                  <p className="mb-2">• Comparado con producción convencional</p>
                  <p className="mb-2">• Incluye transporte y empaque sostenible</p>
                  <p>• Certificado por entidades independientes</p>
                </div>
              )}
            </div>

            {/* Opciones de Compra */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Tallas Disponibles</h3>
                <div className="flex gap-2">
                  {producto.tallas.map((talla) => (
                    <Button key={talla} variant="outline" size="sm">
                      {talla}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Colores Disponibles</h3>
                <div className="flex gap-2">
                  {producto.colores.map((color) => (
                    <Button key={color} variant="outline" size="sm">
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={() => handleBuyProduct(producto.id)}
                  disabled={!producto.disponible}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {producto.disponible ? "Comprar Ahora" : "Agotado"}
                </Button>
                <Button variant="outline" size="lg">
                  <Bookmark className="w-5 h-5" />
                </Button>
              </div>

              <div className="text-center text-sm text-gray-600">
                <p className="flex items-center justify-center gap-1">
                  <Truck className="w-4 h-4" />
                  Tiempo de producción: {producto.tiempo_produccion}
                </p>
                <p className="flex items-center justify-center gap-1 mt-1">
                  <Shield className="w-4 h-4" />
                  Garantía de calidad artesanal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de Información Adicional */}
        <Tabs defaultValue="materiales" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="materiales">Materiales</TabsTrigger>
            <TabsTrigger value="cuidados">Cuidados</TabsTrigger>
            <TabsTrigger value="trazabilidad">Trazabilidad</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
          </TabsList>

          <TabsContent value="materiales">
            <Card>
              <CardHeader>
                <CardTitle>Composición de Materiales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {producto.materiales.map((material, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span>{material}</span>
                      <Badge variant="outline">Certificado</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cuidados">
            <Card>
              <CardHeader>
                <CardTitle>Instrucciones de Cuidado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {producto.cuidados.map((cuidado, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{cuidado}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trazabilidad">
            <Card>
              <CardHeader>
                <CardTitle>Trazabilidad del Producto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { etapa: "Origen de la Lana", ubicacion: "Estancia La Esperanza, Tacuarembó", fecha: "2024-01-05" },
                    { etapa: "Procesamiento", ubicacion: "Hilandería Artesanal, Montevideo", fecha: "2024-01-08" },
                    { etapa: "Tejido", ubicacion: "Taller de María González, Montevideo", fecha: "2024-01-10" },
                    { etapa: "Control de Calidad", ubicacion: "Centro GIA, Montevideo", fecha: "2024-01-14" },
                  ].map((etapa, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        {index < 3 && <div className="w-px h-8 bg-gray-200 mt-2"></div>}
                      </div>
                      <div className="flex-1 pb-4">
                        <h4 className="font-medium">{etapa.etapa}</h4>
                        <p className="text-sm text-gray-600">{etapa.ubicacion}</p>
                        <p className="text-sm text-gray-500">{etapa.fecha}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reseñas de Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      nombre: "Ana M.",
                      rating: 5,
                      comentario: "Excelente calidad y muy cómodo. Se nota el trabajo artesanal.",
                      fecha: "2024-01-10",
                    },
                    {
                      nombre: "Carlos R.",
                      rating: 5,
                      comentario: "Me encanta saber la historia detrás del producto. Muy recomendado.",
                      fecha: "2024-01-08",
                    },
                    {
                      nombre: "Laura S.",
                      rating: 4,
                      comentario: "Hermoso diseño y materiales de primera. Llegó en el tiempo prometido.",
                      fecha: "2024-01-05",
                    },
                  ].map((review, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.nombre}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.fecha}</span>
                      </div>
                      <p className="text-gray-600">{review.comentario}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  const renderImpactDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mi Dashboard de Impacto</h2>
        <Button variant="outline" onClick={() => setCurrentView("home")}>
          ← Volver al Inicio
        </Button>
      </div>

      {/* Resumen de Impacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Leaf className="w-12 h-12 mx-auto text-green-600 mb-3" />
            <p className="text-3xl font-bold text-green-600">{mi_impacto.co2_ahorrado}kg</p>
            <p className="text-sm text-green-700">CO₂ Ahorrado</p>
            <p className="text-xs text-gray-500 mt-1">Equivale a plantar {mi_impacto.arboles_plantados} árboles</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Globe className="w-12 h-12 mx-auto text-blue-600 mb-3" />
            <p className="text-3xl font-bold text-blue-600">{mi_impacto.agua_ahorrada}L</p>
            <p className="text-sm text-blue-700">Agua Ahorrada</p>
            <p className="text-xs text-gray-500 mt-1">Suficiente para 2 días de consumo</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto text-purple-600 mb-3" />
            <p className="text-3xl font-bold text-purple-600">{mi_impacto.artesanos_apoyados}</p>
            <p className="text-sm text-purple-700">Artesanos Apoyados</p>
            <p className="text-xs text-gray-500 mt-1">Familias beneficiadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 mx-auto text-yellow-600 mb-3" />
            <p className="text-3xl font-bold text-yellow-600">{mi_impacto.puntos_gia}</p>
            <p className="text-sm text-yellow-700">Puntos GIA</p>
            <p className="text-xs text-gray-500 mt-1">Nivel: {mi_impacto.nivel}</p>
          </CardContent>
        </Card>
      </div>

      {/* Progreso hacia Objetivos */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso hacia Objetivos 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Reducción de CO₂ (Meta: 10kg)</span>
                <span>{mi_impacto.co2_ahorrado}/10kg</span>
              </div>
              <Progress value={(mi_impacto.co2_ahorrado / 10) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Ahorro de Agua (Meta: 200L)</span>
                <span>{mi_impacto.agua_ahorrada}/200L</span>
              </div>
              <Progress value={(mi_impacto.agua_ahorrada / 200) * 100} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Artesanos Apoyados (Meta: 5)</span>
                <span>{mi_impacto.artesanos_apoyados}/5</span>
              </div>
              <Progress value={(mi_impacto.artesanos_apoyados / 5) * 100} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparación con Comunidad */}
      <Card>
        <CardHeader>
          <CardTitle>Comparación con la Comunidad GIA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <TrendingUp className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <p className="text-lg font-bold">Top 25%</p>
              <p className="text-sm text-green-700">En reducción de CO₂</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <p className="text-lg font-bold">Top 15%</p>
              <p className="text-sm text-blue-700">En apoyo a artesanos</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Award className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <p className="text-lg font-bold">Eco Warrior</p>
              <p className="text-sm text-purple-700">Nivel actual</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historial de Compras */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Compras Sostenibles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {productos_destacados.slice(0, mi_impacto.productos_comprados).map((producto) => (
              <div key={producto.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{producto.nombre}</h4>
                  <p className="text-sm text-gray-600">por {producto.artesano}</p>
                  <div className="flex gap-4 text-xs text-gray-500 mt-1">
                    <span>CO₂: -{producto.impacto_co2}kg</span>
                    <span>Agua: -{producto.impacto_agua}L</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${producto.precio}</p>
                  <p className="text-sm text-gray-500">Ene 2024</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderMainContent = () => {
    switch (currentView) {
      case "home":
        return renderHomeContent()
      case "products":
        return renderProductsContent()
      case "product-detail":
        return renderProductDetail()
      case "impact-dashboard":
        return renderImpactDashboard()
      default:
        return renderHomeContent()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GIA</span>
                </div>
                <div>
                  <h1 className="font-bold text-gray-900">GIA Store</h1>
                  <p className="text-xs text-gray-500">Moda Consciente</p>
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-6 ml-8">
                <Button variant={currentView === "home" ? "default" : "ghost"} onClick={() => setCurrentView("home")}>
                  <Home className="w-4 h-4 mr-2" />
                  Inicio
                </Button>
                <Button
                  variant={currentView === "products" ? "default" : "ghost"}
                  onClick={() => setCurrentView("products")}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Productos
                </Button>
                <Button
                  variant={currentView === "impact-dashboard" ? "default" : "ghost"}
                  onClick={() => setCurrentView("impact-dashboard")}
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  Mi Impacto
                </Button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={handleScanQR}>
                <QrCode className="w-5 h-5" />
              </Button>
              <Button variant="ghost" onClick={handleTrackOrder}>
                <Package className="w-5 h-5" />
              </Button>
              <Button variant="ghost">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{renderMainContent()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GIA</span>
                </div>
                <span className="font-bold">GIA Store</span>
              </div>
              <p className="text-gray-400 text-sm">
                Conectando consumidores conscientes con artesanos locales para un futuro más sostenible.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Sweaters
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cardigans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ponchos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accesorios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Sostenibilidad</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Nuestro Impacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Certificaciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Programa de Reciclaje
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Artesanos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Envíos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Devoluciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex items-center justify-between">
            <p className="text-sm text-gray-400">© 2024 GIA Store. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
