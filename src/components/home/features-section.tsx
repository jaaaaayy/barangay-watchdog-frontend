import { Shield, FileText, Eye, BarChart4, Lock, Users } from "lucide-react";

const features = [
  {
    name: "Anonymous Reporting",
    description:
      "Submit reports without revealing your identity. Our system is designed to protect your privacy at every step.",
    icon: Lock,
  },
  {
    name: "Comprehensive Case Tracking",
    description:
      "Follow the progress of your report through our transparent status updates system.",
    icon: BarChart4,
  },
  {
    name: "Evidence Collection",
    description:
      "Securely upload photos, documents, and other evidence to support your report while maintaining anonymity.",
    icon: FileText,
  },
  {
    name: "Community Transparency",
    description:
      "View projects and initiatives launched in response to community reports and track their progress.",
    icon: Eye,
  },
  {
    name: "Multiple Categories",
    description:
      "Report various issues including corruption, misconduct, public services, infrastructure, and safety concerns.",
    icon: Shield,
  },
  {
    name: "Accountability System",
    description:
      "Officials can respond to reports and document actions taken, creating a public record of accountability.",
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Effective Reporting</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A complete system for community justice
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Barangay Watchdog provides a secure platform for citizens to report issues, 
            track responses, and see real change in their communities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}