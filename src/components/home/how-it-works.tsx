import { ArrowRight } from "lucide-react";

const steps = [
  {
    name: "Submit Report",
    description:
      "Fill out the anonymous reporting form with details about the issue, location, and any supporting evidence.",
  },
  {
    name: "Verification",
    description:
      "Your report is reviewed by our team to ensure it contains sufficient information for action.",
  },
  {
    name: "Official Review",
    description:
      "Relevant authorities review the report and determine appropriate actions while maintaining your anonymity.",
  },
  {
    name: "Action & Updates",
    description:
      "Track the status of your report as officials work to address the issue. All updates are publicly visible.",
  },
  {
    name: "Resolution",
    description:
      "Once resolved, the report is marked complete with documentation of actions taken to address the issue.",
  },
];

export function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How the reporting system works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From submission to resolution, our transparent process ensures your voice is heard
            while maintaining your complete anonymity.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <ol className="relative border-l border-gray-200">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-red-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                    <span className="text-xs font-bold text-white">{stepIdx + 1}</span>
                  </span>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  {step.name}
                  {stepIdx < steps.length - 1 && (
                    <span className="hidden sm:flex items-center ml-3 text-red-600">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-600 max-w-xl">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}