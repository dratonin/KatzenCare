import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cat } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-orange-100">
        <Link className="flex items-center justify-center" href="/">
          <Cat className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-2xl font-bold text-orange-700">PawPals</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Zurück zur Startseite
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 bg-orange-50">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6 text-orange-700">Datenschutzerklärung</h1>
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">1. Einleitung</h2>
              <p>
                Wir bei PawPals nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung
                informiert Sie darüber, wie wir mit Ihren Daten umgehen und welche Rechte Sie haben.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">2. Datenerhebung und -verwendung</h2>
              <p>
                Wir erheben nur die Daten, die für die Nutzung unserer App notwendig sind. Dies umfasst Ihren Namen,
                Ihre E-Mail-Adresse und Informationen über Ihr Haustier.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">3. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige
                oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">4. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten.
                Kontaktieren Sie uns bei Fragen oder Anliegen bezüglich Ihrer Daten.
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-orange-100">
        <p className="text-xs text-gray-600">© 2024 PawPals. Alle Rechte vorbehalten.</p>
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