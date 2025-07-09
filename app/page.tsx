"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BarChart3,
  Package,
  Leaf,
  QrCode,
  Shield,
  Sparkles,
  ArrowRight,
  Globe,
  Heart,
  Award,
} from "lucide-react"

// Import components
import CustomerDashboard from "./customer-dashboard"
import BackofficeDashboard from "./backoffice-dashboard"
import EcodesignModule from "./ecodesign-module"

export default function HomePage() {
  const [currentView, setCurrentView] = useState<"home" | "customer" | "backoffice" | "ecodesign">("home")

  if (currentView === "customer") {
    return <CustomerDashboard />
  }

  if (currentView === "backoffice") {
    return <BackofficeDashboard />
  }

  if (currentView === "ecodesign") {
    return <EcodesignModule />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">GIA</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-stone-900">GIA Trazabilidad</h1>
              <p className="text-stone-600">Sistema Integral de Trazabilidad y Sostenibilidad</p>
            </div>
          </div>
        </div>

        {/* Dashboard Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Dashboard */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/80 backdrop-blur-sm border-stone-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl text-stone-900">Dashboard Cliente</CardTitle>
              <p className="text-stone-600">Para usuarios de giastore.uy</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <QrCode className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Escaneo de productos</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <Sparkles className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Historia de productos</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <Leaf className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Impacto ambiental personal</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <Award className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Programa de reciclaje</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-stone-600">Características</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">Diseño Premium</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Storytelling</Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">Mobile-First</Badge>
                </div>
              </div>

              <Button
                className="w-full bg-stone-800 hover:bg-stone-900 group"
                onClick={() => setCurrentView("customer")}
              >
                Acceder como Cliente
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Backoffice Dashboard */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/80 backdrop-blur-sm border-stone-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-slate-600" />
              </div>
              <CardTitle className="text-2xl text-stone-900">Dashboard Backoffice</CardTitle>
              <p className="text-stone-600">Para empleados y administradores</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <Package className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Gestión de productos</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <Users className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Administración de usuarios</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <Shield className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Auditorías y compliance</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-stone-600" />
                  <span className="text-sm text-stone-700">Analytics avanzados</span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-stone-600">Características</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-100 text-slate-800 border-slate-200">Sidebar Navigation</Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-200">Alertas</Badge>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">KPIs</Badge>
                </div>
              </div>

              <Button
                className="w-full bg-slate-800 hover:bg-slate-900 group"
                onClick={() => setCurrentView("backoffice")}
              >
                Acceder como Admin
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Modules */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Módulos Especializados</h2>
            <p className="text-stone-600">Herramientas avanzadas para sostenibilidad y ecodiseño</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto bg-green-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Simulador de Ecodiseño</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600 mb-4">
                  Analiza el impacto ambiental de tus productos y recibe sugerencias de IA para mejorar la
                  sostenibilidad.
                </p>
                <Button
                  variant="outline"
                  className="w-full group bg-transparent"
                  onClick={() => setCurrentView("ecodesign")}
                >
                  Abrir Simulador
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">ESG Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600 mb-4">
                  Métricas ambientales, sociales y de gobernanza para reportes de sostenibilidad corporativa.
                </p>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/80 backdrop-blur-sm border-stone-200">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto bg-purple-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Auditoría DPP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600 mb-4">
                  Cumplimiento de Digital Product Passport y regulaciones europeas de sostenibilidad.
                </p>
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-stone-200">
          <p className="text-stone-500 text-sm">
            © 2024 GIA Trazabilidad. Sistema integral de trazabilidad y sostenibilidad para la industria textil.
          </p>
        </div>
      </div>
    </div>
  )
}
