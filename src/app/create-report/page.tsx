import { ReportForm } from "@/components/reports/report-form";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";

export default function CreateReportPage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-red-100 p-2.5 rounded-full">
          <Shield className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Submit Anonymous Report</h1>
      </div>
      
      <p className="text-muted-foreground text-lg mb-6">
        Your identity is completely protected. No personal information is collected.
      </p>
      
      <Separator className="my-8" />
      
      <div className="rounded-lg border p-6 bg-yellow-50 text-yellow-800 mb-8">
        <h3 className="font-semibold text-base">Important Information</h3>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-sm">
          <li>Your report is completely anonymous - we do not track IP addresses or collect any identifying information</li>
          <li>Please provide as much detail as possible to help authorities address the issue</li>
          <li>You will receive a reference number to track the status of your report</li>
          <li>False reports are a violation of our terms of service</li>
        </ul>
      </div>
      
      <div className="bg-card rounded-xl border shadow-sm p-8">
        <ReportForm />
      </div>
    </div>
  );
}