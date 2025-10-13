import { Link } from "wouter";
import { SiX, SiInstagram, SiFacebook } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-black border-t border-white/10 dark:border-white/10">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white dark:text-white">
              AiriGo
            </h3>
            <p className="text-sm text-white/70 dark:text-white/70 leading-relaxed">
              Your pocket-sized AI air companion, making every breath smarter.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white dark:text-white">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features-section"
                  className="text-sm text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover-elevate inline-block"
                  data-testid="link-features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#cta-section"
                  className="text-sm text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover-elevate inline-block"
                  data-testid="link-pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#specifications-section"
                  className="text-sm text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover-elevate inline-block"
                  data-testid="link-specs"
                >
                  Specifications
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white dark:text-white">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://x.com/airigo"
                className="p-2 rounded-lg hover-elevate text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white"
                data-testid="link-twitter"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="p-2 rounded-lg hover-elevate text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover-elevate text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70 dark:text-white/70">
            © {currentYear} AiriGo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover-elevate"
              data-testid="link-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white hover-elevate"
              data-testid="link-terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
