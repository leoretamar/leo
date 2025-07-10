import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomerDashboard from "../customer-dashboard"
import BackofficeDashboard from "../backoffice-dashboard"
import ModernAdminDashboard from "../modern-admin-dashboard"
import ProductRegistrationForm from "../product-registration-form"
import UseCasesDashboard from "../use-cases-dashboard"
import SystemOverview from "../system-overview"
import TraceabilityDashboard from "../traceability-dashboard"
import PublicQRInterface from "../public-qr-interface"
import EcodesignModule from "../ecodesign-module"
import ESGDashboard from "../esg-dashboard"
import AuditDPPModule from "../audit-dpp-module"
import MobileAppInterface from "../mobile-app-interface"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Tabs defaultValue="customer-dashboard" className="w-full">
        <div className="border-b bg-white">
          <div className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-12 h-12">
              <TabsTrigger value="customer-dashboard">Dashboard Cliente</TabsTrigger>
        <TabsTrigger value="backoffice-dashboard">Backoffice</TabsTrigger>
              <TabsTrigger value="modern-dashboard">Dashboard Moderno</TabsTrigger>
              <TabsTrigger value="mobile">App Móvil</TabsTrigger>
              <TabsTrigger value="traceability">Trazabilidad</TabsTrigger>
              <TabsTrigger value="registration">Registro</TabsTrigger>
              <TabsTrigger value="ecodesign">Ecodiseño</TabsTrigger>
              <TabsTrigger value="esg">ESG</TabsTrigger>
              <TabsTrigger value="audit">Auditoría</TabsTrigger>
              <TabsTrigger value="public-qr">QR Público</TabsTrigger>
              <TabsTrigger value="use-cases">Casos de Uso</TabsTrigger>
              <TabsTrigger value="system-overview">Sistema</TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="customer-dashboard" className="m-0">
          <CustomerDashboard />
        </TabsContent>

        <TabsContent value="backoffice-dashboard" className="m-0">
          <BackofficeDashboard />
        </TabsContent>

        <TabsContent value="modern-dashboard" className="m-0">
          <ModernAdminDashboard />
        </TabsContent>

        <TabsContent value="mobile" className="m-0">
          <MobileAppInterface />
        </TabsContent>

        <TabsContent value="traceability" className="m-0">
          <TraceabilityDashboard />
        </TabsContent>

        <TabsContent value="registration" className="m-0">
          <ProductRegistrationForm />
        </TabsContent>

        <TabsContent value="ecodesign" className="m-0">
          <EcodesignModule />
        </TabsContent>

        <TabsContent value="esg" className="m-0">
          <ESGDashboard />
        </TabsContent>

        <TabsContent value="audit" className="m-0">
          <AuditDPPModule />
        </TabsContent>

        <TabsContent value="public-qr" className="m-0">
          <PublicQRInterface />
        </TabsContent>

        <TabsContent value="use-cases" className="m-0">
          <UseCasesDashboard />
        </TabsContent>

        <TabsContent value="system-overview" className="m-0">
          <SystemOverview />
        </TabsContent>
      </Tabs>
    </div>
  )
}
