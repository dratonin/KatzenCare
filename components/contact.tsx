import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Cat, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-orange-100">
        <Link className="flex items-center justify-center" href="/">
          <Cat className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-2xl font-bold text-orange-700">KatzenCare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Zurück zur Startseite
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 bg-orange-50">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6 text-orange-700">Kontakt</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-orange-600">Kontaktieren Sie uns</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" placeholder="Ihr Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                  <Input id="email" type="email" placeholder="ihre.email@beispiel.de" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
                  <Textarea id="message" placeholder="Ihre Nachricht" />
                </div>
                <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">Nachricht senden</Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-orange-600">Kontaktinformationen</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span>kontakt@katzencare.de</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>+49 123 456789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>Katzenstraße 1, 12345 Katzenstadt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-orange-100">
        <p className="text-xs text-gray-600">© 2024 KatzenCare. Alle Rechte vorbehalten.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
            Datenschutz
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/terms-of-service">
            Nutzungsbedingungen
          </Link>
        </nav>
      </footer>
    </div>
  )
}