import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-600" aria-hidden="true" />
              <span className="font-semibold">Barangay Watchdog</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Help improve your barangay by reporting local issues, corruption, or misconduct while keeping your identity completely anonymous and secure.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Site</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports" className="text-sm text-muted-foreground hover:text-foreground">
                      Reports
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/create-report" className="text-sm text-muted-foreground hover:text-foreground">
                      Submit Report
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Barangay Watchdog. All rights reserved. This platform is designed to protect anonymity and promote transparency.
          </p>
        </div>
      </div>
    </footer>
  );
}