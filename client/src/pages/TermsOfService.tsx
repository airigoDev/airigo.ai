import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 13, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using AiriGo's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials on AiriGo's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on AiriGo's website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Information and Availability</h2>
            <p className="mb-4">
              We strive to provide accurate product information and specifications. However:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Product descriptions, images, and specifications are subject to change without notice</li>
              <li>We do not guarantee that product descriptions or other content is accurate, complete, or error-free</li>
              <li>Product availability is subject to change and we reserve the right to limit quantities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Waitlist and Pre-Orders</h2>
            <p className="mb-4">
              By joining our waitlist, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Joining the waitlist does not guarantee product availability or reservation</li>
              <li>We will notify waitlist members when the product becomes available</li>
              <li>Product specifications and pricing may change before launch</li>
              <li>You can unsubscribe from the waitlist at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by AiriGo and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Maintaining the security and confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Providing accurate and complete information</li>
            </ul>
            <p>
              We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              The materials on AiriGo's website and products are provided on an 'as is' basis. AiriGo makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Implied warranties of merchantability or fitness for any particular purpose</li>
              <li>That the service will be uninterrupted, timely, secure, or error-free</li>
              <li>That results obtained from the use of service will be accurate or reliable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              In no event shall AiriGo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use AiriGo's materials, even if AiriGo or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Warranty</h2>
            <p className="mb-4">
              AiriGo products come with the following warranty coverage:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>2-year limited warranty on hardware defects</li>
              <li>90-day warranty on accessories</li>
              <li>Warranty does not cover normal wear and tear, misuse, or unauthorized modifications</li>
              <li>Detailed warranty terms will be provided with your product</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p>
              Email: legal@airigo.com<br />
              Address: AiriGo Inc., 123 Innovation Drive, San Francisco, CA 94103
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
