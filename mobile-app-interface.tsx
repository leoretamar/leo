"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Smartphone,
  QrCode,
  Bell,
  Users,
  BarChart3,
  Settings,
  Download,
  Share2,
  Heart,
  Star,
  Package,
  Leaf,
  TrendingUp,
  Eye,
  Send,
  Wifi,
  Battery,
} from "lucide-react"

export default function MobileAppInterface() {
  const [selectedSection, setSelectedSection] = useState("preview")
  const [appConfig, setAppConfig] = useState({
    theme: "light",
    notifications: true,
    offline_mode: true,
    analytics: true,
    language: "es"
  })

  const mobileStats = {
    total_downloads: 15420,
    active_users: 8950,
    avg_session: "4.2 min",
    retention_rate: 78,
    app_rating: 4.8,
    qr_scans_today: 342
  }

  const notifications = [
    {
      id: 1,
      title: "Nueva colección disponible",
      message: "Descubre los últimos productos artesanales de María González",
      sent: "2024-01-20 10:30",
      status: "Enviado",
      opens: 1250,
      clicks: 89
    },
    {
      id: 2,
      title: "Tu producto favorito está en oferta",
      message: "El Sweater Artesanal Merino tiene 20% de descuento",
      sent: "2024-01-19 15:45",
      status: "Enviado",
      opens: 890,
      clicks: 156
    },
    {
      id: 3,
      title: "Impacto ambiental actualizado",
      message: "Has ahorrado 2.3kg de CO₂ con tus compras conscientes",
      sent: "2024-01-18 09:15",
      status: "Programado",
      opens: 0,
      clicks: 0
    }
  ]

  const analyticsData = {
    daily_users: [
      { day: "Lun", users: 1200 },
      { day: "Mar", users: 1350 },
      { day: "Mié", users: 1180 },
      { day: "Jue", users: 1420 },
      { day: "Vie", users: 1650 },
      { day: "Sáb", users: 1890 },
      { day: "Dom", users: 1560 }
    ],
    top_features: [
      { feature: "Escaneo QR", usage: 85 },
      { feature: "Historial de Productos", usage: 72 },
      { feature: "Impacto Personal", usage: 68 },
      { feature: "Compartir Historia", usage: 45 },
      { feature: "Favoritos", usage: 38 }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Aplicación Móvil GIA</h1>
            <p className="text-gray-600">Gestión y analytics de la app móvil</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Descargar APK
            </Button>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Configurar
            </Button>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Descargas</p>
                  <p className="text-2xl font-bold text-blue-600">{mobileStats.total_downloads.toLocaleString()}</p>
                </div>
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Usuarios Activos</p>
                  <p className="text-2xl font-bold text-green-600">{mobileStats.active_users.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sesión Promedio</p>
                  <p className="text-2xl font-bold text-purple-600">{mobileStats.avg_session}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Retención</p>
                  <p className="text-2xl font-bold text-orange-600">{mobileStats.retention_rate}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-yellow-600">{mobileStats.app_rating}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Escaneos Hoy</p>
                  <p className="text-2xl font-bold text-indigo-600">{mobileStats.qr_scans_today}</p>
                </div>
                <QrCode className="w-8 h-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="preview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="preview">Vista Previa</TabsTrigger>
            <TabsTrigger value="config">Configuración</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mobile Mockup */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <CardContent className="p-6">
                    <div className="mx-auto max-w-sm">
                      {/* Phone Frame */}
                      <div className="bg-black rounded-3xl p-2 shadow-2xl">
                        <div className="bg-white rounded-2xl overflow-hidden">
                          {/* Status Bar */}
                          <div className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center text-xs">
                            <span>9:41</span>
                            <div className="flex items-center gap-1">
                              <Wifi className="w-3 h-3" />
                              <Battery className="w-4 h-3" />
                            </div>
                          </div>
                          
                          {/* App Content */}
                          <div className="bg-gradient-to-br from-stone-50 to-amber-50 h-96 p-4">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <h2 className="text-lg font-bold text-gray-900">GIA</h2>
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <QrCode className="w-4 h-4 text-gray-600" />
                              </div>
                            </div>

                            {/* Featured Product */}
                            <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                              <div className="w-full h-24 bg-gray-100 rounded mb-2"></div>
                              <h3 className="font-medium text-gray-900 text-sm">Sweater Artesanal</h3>
                              <p className="text-xs text-gray-600">María González</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Leaf className="w-3 h-3 text-green-500" />
                                <span className="text-xs text-green-600">2.3kg CO₂ ahorrado</span>
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              <div className="bg-blue-50 rounded-lg p-2 text-center">
                                <QrCode className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                                <span className="text-xs text-blue-800">Escanear</span>
                              </div>
                              <div className="bg-green-50 rounded-lg p-2 text-center">
                                <Heart className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                <span className="text-xs text-green-800">Favoritos</span>
                              </div>
                            </div>

                            {/* Bottom Navigation */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full p-2 shadow-lg">
                              <div className="flex justify-around">
                                <div className="p-2 bg-blue-100 rounded-full">
                                  <Package className="w-4 h-4 text-blue-600" />
                                </div>
                                <QrCode className="w-6 h-6 text-gray-400" />
                                <BarChart3 className="w-6 h-6 text-gray-400" />
                                <Settings className="w-6 h-6 text-gray-400" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* App Features */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Características Principales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <QrCode className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-blue-900">Escáner QR Nativo</h4>
                          <p className="text-sm text-blue-700">Escaneo rápido y preciso de códigos QR de productos</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <Package className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-green-900">Historial Personal</h4>
                          <p className="text-sm text-green-700">Guarda y organiza todos tus productos escaneados</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-purple-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-purple-900">Impacto Personal</h4>
                          <p className="text-sm text-purple-700">Visualiza tu contribución al medio ambiente</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                        <Wifi className="w-6 h-6 text-orange-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-orange-900">Modo Offline</h4>
                          <p className="text-sm text-orange-700">Funciona sin conexión a internet</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                        <Share2 className="w-6 h-6 text-pink-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-pink-900">Compartir Historias</h4>
                          <p className="text-sm text-pink-700">Comparte las historias de productos en redes sociales</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                        <Bell className="w-6 h-6 text-indigo-600 mt-1" />
                        <div>
                          <h4 className="font-medium text-indigo-900">Notificaciones Push</h4>
                          <p className="text-sm text-indigo-700">Recibe actualizaciones sobre nuevos productos</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Funciones Más Utilizadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.top_features.map((feature, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">{feature.feature}</span>
                            <span className="text-sm text-gray-600">{feature.usage}%</span>
                          </div>
                          <Progress value={feature.usage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="config" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración General</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="app-name">Nombre de la Aplicación</Label>
                    <Input id="app-name" defaultValue="GIA Trazabilidad" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="app-version">Versión</Label>
                    <Input id="app-version" defaultValue="2.1.0" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma por Defecto</Label>
                    <Select defaultValue="es">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="pt">Português</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Modo Offline</Label>
                      <p className="text-sm text-gray-600">Permitir uso sin conexión</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Analytics</Label>
                      <p className="text-sm text-gray-600">Recopilar datos de uso</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configuración de Notificaciones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificaciones Push</Label>
                      <p className="text-sm text-gray-600">Enviar notificaciones a usuarios</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Nuevos Productos</Label>
                      <p className="text-sm text-gray-600">Notificar sobre nuevos productos</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Ofertas Especiales</Label>
                      <p className="text-sm text-gray-600">Promociones y descuentos</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Recordatorios</Label>
                      <p className="text-sm text-gray-600">Recordar escanear productos</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <Label>Frecuencia de Notificaciones</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Diario</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                        <SelectItem value="monthly">Mensual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personalización</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Tema de la Aplicación</Label>
                    <Select defaultValue="light">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Claro</SelectItem>
                        <SelectItem value="dark">Oscuro</SelectItem>
                        <SelectItem value="auto">Automático</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Color Principal</Label>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-blue-600"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Animaciones</Label>
                      <p className="text-sm text-gray-600">Efectos visuales y transiciones</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sonidos</Label>
                      <p className="text-sm text-gray-600">Efectos de sonido</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Vibración</Label>
                      <p className="text-sm text-gray-600">Feedback háptico</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Seguridad y Privacidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Autenticación Biométrica</Label>
                      <p className="text-sm text-gray-600">Huella dactilar o Face ID</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Encriptación de Datos</Label>
                      <p className="text-sm text-gray-600">Proteger información personal</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Compartir Datos de Uso</Label>
                      <p className="text-sm text-gray-600">Ayudar a mejorar la app</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label>Retención de Datos</Label>
                    <Select defaultValue="1year">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6months">6 meses</SelectItem>
                        <SelectItem value="1year">1 año</SelectItem>
                        <SelectItem value="2years">2 años</SelectItem>
                        <SelectItem value="indefinite">Indefinido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Historial de Notificaciones</CardTitle>
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Nueva Notificación
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{notification.title}</h4>
                            <p className="text-sm text-gray-600">{notification.message}</p>
                          </div>
                          <Badge className={notification.status === "Enviado" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                            {notification.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{notification.sent}</span>
                          <div className="flex gap-4">
                            <span>👁 {notification.opens} aperturas</span>
                            <span>👆 {notification.clicks} clics</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Notificaciones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Bell className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                    <p className="text-2xl font-bold text-blue-600">24</p>
                    <p className="text-sm text-blue-700">Enviadas este mes</p>
                  </div>

                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto text-green-600 mb-2" />
                    <p className="text-2xl font-bold text-green-600">78%</p>
                    <p className="text-sm text-green-700">Tasa de apertura</p>
                  </div>

                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-2xl font-bold text-purple-600">12%</p>
                    <p className="text-sm text-purple-700">Tasa de clics</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Mejores Horarios</h4>
                    <div className="text-sm text-gray-600">
                      <p>📅 Martes y Jueves</p>
                      <p>🕐 10:00 - 11:00 AM</p>
                      <p>🌆 6:00 - 7:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Usuarios Diarios</p>
                      <p className="text-2xl font-bold text-blue-600">2,340</p>
                      <p className="text-xs text-green-600">+12% vs ayer</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                \
