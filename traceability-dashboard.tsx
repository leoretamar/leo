"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  QrCode,
  MapPin,
  Calendar,
  User,
  Leaf,
  Award,
  Download,
  Share2,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react"

export default function TraceabilityDashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const products = [
    {
      id: "GIA-2024-001",
      name: "Sweater Artesanal Merino",
      artisan: "María González",
      location: "Montevideo, Uruguay",
      status: "Completado",
      created: "2024-01-15",
      qr_scans: 45,
      impact: {
        co2_saved: 2.3,
        water_saved: 45,
        circularity_score: 92
      },
      traceability: {
        materials: [
          { name: "Lana Merino", percentage: 85, origin: "Estancia La Esperanza, Tacuarembó" },
          { name: "Botones Madera", percentage: 15, origin: "Carpintería Local, Montevideo" }
        ],
        process_steps: [
          { step: "Esquila", date: "2024-01-05", location: "Tacuarembó", responsible: "Estancia La Esperanza" },
          { step: "Lavado y Cardado", date: "2024-01-08", location: "Montevideo", responsible: "Textil Cooperativa" },
          { step: "Hilado", date: "2024-01-10", location: "Montevideo", responsible: "María González" },
          { step: "Tejido", date: "2024-01-12", location: "Montevideo", responsible: "María González" },
          { step: "Acabado", date: "2024-01-15", location: "Montevideo", responsible: "María González" }
        ],
        certifications: ["GOTS", "Fair Trade", "Carbon Neutral"]
      }
    },
    {
      id: "GIA-2024-002",
      name: "Cardigan Algodón Orgánico",
      artisan: "Ana Rodríguez",
      location: "Punta del Este, Uruguay",
      status: "En Proceso",
      created: "2024-01-20",
      qr_scans: 23,
      impact: {
        co2_saved: 1.8,
        water_saved: 32,
        circularity_score: 88
      },
      traceability: {
        materials: [
          { name: "Algodón Orgánico", percentage: 100, origin: "Finca Orgánica, Canelones" }
        ],
        process_steps: [
          { step: "Cosecha", date: "2024-01-10", location: "Canelones", responsible: "Finca Orgánica" },
          { step: "Desmotado", date: "2024-01-12", location: "Canelones", responsible: "Cooperativa Textil" },
          { step: "Hilado", date: "2024-01-15", location: "Punta del Este", responsible: "Ana Rodríguez" },
          { step: "Tejido", date: "2024-01-18", location: "Punta del Este", responsible: "Ana Rodríguez" }
        ],
        certifications: ["GOTS", "Organic"]
      }
    },
    {
      id: "GIA-2024-003",
      name: "Poncho Tradicional",
      artisan: "Carmen Silva",
      location: "Colonia, Uruguay",
      status: "Completado",
      created: "2024-01-25",
      qr_scans: 67,
      impact: {
        co2_saved: 3.1,
        water_saved: 58,
        circularity_score: 95
      },
      traceability: {
        materials: [
          { name: "Lana Natural", percentage: 90, origin: "Estancia San José, Colonia" },
          { name: "Fibras Recicladas", percentage: 10, origin: "Programa de Reciclaje GIA" }
        ],
        process_steps: [
          { step: "Recolección Lana", date: "2024-01-15", location: "Colonia", responsible: "Estancia San José" },
          { step: "Procesamiento", date: "2024-01-18", location: "Colonia", responsible: "Carmen Silva" },
          { step: "Incorporación Reciclados", date: "2024-01-20", location: "Colonia", responsible: "Carmen Silva" },
          { step: "Tejido Tradicional", date: "2024-01-22", location: "Colonia", responsible: "Carmen Silva" },
          { step: "Acabado Final", date: "2024-01-25", location: "Colonia", responsible: "Carmen Silva" }
        ],
        certifications: ["Fair Trade", "Recycled Content"]
      }
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || product.status.toLowerCase().includes(filterStatus.toLowerCase())
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "Completado": return "bg-green-100 text-green-800"
      case "En Proceso": return "bg-yellow-100 text-yellow-800"
      case "Pendiente": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completado": return CheckCircle
      case "En Proceso": return Clock
      case "Pendiente": return AlertTriangle
      default: return Clock
    }
  }

  if (selectedProduct) {
    const product = products.find(p => p.id === selectedProduct)
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => setSelectedProduct(null)}>
              ← Volver al Dashboard
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Product Header */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                      <p className="text-gray-600">ID: {product.id}</p>
                    </div>
                    <Badge className={getStatusColor(product.status)}>
                      {product.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.artisan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.created}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{product.qr_scans} escaneos</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {product.traceability.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="bg-green-50 text-green-700">
                        <Award className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
                    <p className="text-2xl font-bold text-green-600">{product.impact.co2_saved}kg</p>
                    <p className="text-sm text-green-700">CO₂ Ahorrado</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-2xl">💧</span>
                    <p className="text-2xl font-bold text-blue-600 mt-2">{product.impact.water_saved}L</p>
                    <p className="text-sm text-blue-700">Agua Ahorrada</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Award className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                    <p className="text-2xl font-bold text-purple-600">{product.impact.circularity_score}%</p>
                    <p className="text-sm text-purple-700">Circularidad</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Traceability Details */}
          <Tabs defaultValue="process" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="process">Proceso de Creación</TabsTrigger>
              \
