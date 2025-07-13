"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react"

export default function AuditDPPModule() {
  const [selectedAudit, setSelectedAudit] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const dppCompliance = {
    overall_score: 94,
    total_products: 1247,
    compliant_products: 1172,
    pending_review: 45,
    non_compliant: 30,
    categories: {
      product_info: { score: 98, status: "excellent" },
      sustainability: { score: 92, status: "excellent" },
      supply_chain: { score: 89, status: "good" },
      circularity: { score: 96, status: "excellent" },
      social_impact: { score: 91, status: "excellent" },
      certifications: { score: 100, status: "excellent" }
    }
  }

  const audits = [
    {
      id: "AUD-2024-001",
      product_id: "GIA-SWE-2025-001",
      product_name: "Sweater Sol de Campo",
      auditor: "María Fernández",
      audit_date: "2024-03-15",
      status: "completed",
      score: 96,
      findings: 2,
      critical_issues: 0,
      recommendations: 3,
      next_audit: "2024-09-15",
      categories: {
        product_identification: { score: 100, status: "pass" },
        material_composition: { score: 95, status: "pass" },
        manufacturing_process: { score: 98, status: "pass" },
        environmental_impact: { score: 92, status: "pass" },
        social_compliance: { score: 94, status: "pass" },
        end_of_life: { score: 98, status: "pass" }
      },
      documents: [
        { name: "Certificado GOTS", type: "certification", status: "valid" },
        { name: "Análisis de materiales", type: "technical", status: "valid" },
        { name: "Reporte de impacto", type: "sustainability", status: "valid" }
      ]
    },
    {
      id: "AUD-2024-002",
      product_id: "GIA-CAR-2025-002",
      product_name: "Cardigan Artesanal",
      auditor: "Carlos Mendoza",
      audit_date: "2024-03-10",
      status: "in_progress",
      score: 88,
      findings: 4,
      critical_issues: 1,
      recommendations: 5,
      next_audit: "2024-09-10",
      categories: {
        product_identification: { score: 100, status: "pass" },
        material_composition: { score: 85, status: "warning" },
        manufacturing_process: { score: 90, status: "pass" },
        environmental_impact: { score: 82, status: "warning" },
        social_compliance: { score: 95, status: "pass" },
        end_of_life: { score: 88, status: "pass" }
      },
      documents: [
        { name: "Certificado Fair Trade", type: "certification", status: "valid" },
        { name: "Análisis de tintes", type: "technical", status: "pending" },
        { name: "Evaluación social", type: "social", status: "valid" }
      ]
    },
    {
      id: "AUD-2024-003",
      product_id: "GIA-PON-2025-003",
      product_name: "Poncho Tradicional",
      auditor: "Ana López",
      audit_date: "2024-03-05",
      status: "failed",
      score: 72,
      findings: 8,
      critical_issues: 3,
      recommendations: 10,
      next_audit: "2024-06-05",
      categories: {
        product_identification: { score: 95, status: "pass" },
        material_composition: { score: 70, status: "fail" },
        manufacturing_process: { score: 75, status: "warning" },
        environmental_impact: { score: 65, status: "fail" },
        social_compliance: { score: 80, status: "warning" },
        end_of_life: { score: 85, status: "pass" }
      },
      documents: [
        { name: "Certificado orgánico", type: "certification", status: "expired" },
        { name: "Análisis químico", type: "technical", status: "failed" },
        { name: "Evaluación ambiental", type: "sustainability", status: "pending" }
      ]
    }
  ]

  const dppRequirements = [
    {
      category: "Información del Producto",
      requirements: [
        { id: "PI-001", name: "Identificación única del producto", status: "compliant", coverage: 100 },
        { id: "PI-002", name: "Descripción detallada", status: "compliant", coverage: 98 },
        { id: "PI-003", name: "Especificaciones técnicas", status: "compliant", coverage: 96 },
        { id: "PI-004", name: "Instrucciones de uso", status: "compliant", coverage: 94 }
      ]
    },
    {
      category: "Sostenibilidad",
      requirements: [
        { id: "SU-001", name: "Huella de carbono", status: "compliant", coverage: 92 },
        { id: "SU-002", name: "Uso de agua", status: "compliant", coverage: 89 },
        { id: "SU-003", name: "Materiales sostenibles", status: "compliant", coverage: 95 },
        { id: "SU-004", name: "Energía renovable", status: "warning", coverage: 78 }
      ]
    },
    {
      category: "Cadena de Suministro",
      requirements: [
        { id: "SC-001", name: "Trazabilidad de materiales", status: "compliant", coverage: 91 },
        { id: "SC-002", name: "Proveedores certificados", status: "compliant", coverage: 87 },
        { id: "SC-003", name: "Condiciones laborales", status: "compliant", coverage: 94 },
        { id: "SC-004", name: "Origen geográfico", status: "warning", coverage: 82 }
      ]
    },
    {
      category: "Circularidad",
      requirements: [
        { id: "CI-001", name: "Diseño para reciclaje", status: "compliant", coverage: 96 },
        { id: "CI-002", name: "Contenido reciclado", status: "compliant", coverage: 88 },
        { id: "CI-003", name: "Programa de retorno", status: "compliant", coverage: 100 },
        { id: "CI-004", name: "Instrucciones de reciclaje", status: "compliant", coverage: 92 }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "compliant":
      case "pass":
      case "excellent":
        return "text-green-600 bg-green-100 border-green-200"
      case "in_progress":
      case "warning":
      case "good":
        return "text-yellow-600 bg-yellow-100 border-yellow-200"
      case "failed":
      case "non_compliant":
      case "fail":
      case "critical":
        return "text-red-600 bg-red-100 border-red-200"
      case "pending":
        return "text-blue-600 bg-blue-100 border-blue-200"
      default:
        return "text-gray-600 bg-gray-100 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
      case "compliant":
      case "pass":
      case "excellent":
        return <CheckCircle className="w-4 h-4" />
      case "in_progress":
      case "warning":
      case "good":
        return <AlertTriangle className="w-4 h-4" />
      case "failed":
      case "non_compliant":
      case "fail":
      case "critical":
        return <XCircle className="w-4 h-4" />
      case "pending":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const filteredAudits = audits.filter(audit => {
    const matchesStatus = filterStatus === "all" || audit.status === filterStatus
    const matchesSearch = audit.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         audit.product_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         audit.auditor.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Auditoría DPP</h1>
            <p className="text-gray-600">Digital Product Passport - Compliance y Auditorías</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">\
