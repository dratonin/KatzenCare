import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cat } from "lucide-react"

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold mb-6 text-orange-700">Nutzungsbedingungen</h1>
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">1. Akzeptanz der Bedingungen</h2>
              <p>
                Durch die Nutzung der KatzenCare-App stimmen Sie diesen Nutzungsbedingungen zu. Bitte lesen Sie diese
                sorgfältig durch, bevor Sie unsere Dienste in Anspruch nehmen.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">2. Beschreibung des Dienstes</h2>
              <p>
                KatzenCare ist eine Plattform, die Katzenbesitzer mit Katzensittern verbindet. Wir vermitteln lediglich
                den Kontakt und sind nicht verantwortlich für die tatsächliche Betreuung.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">3. Nutzerverhalten</h2>
              <p>
                Sie verpflichten sich, die App nicht für illegale Zwecke zu nutzen und die Rechte anderer Nutzer zu respektieren.
                Wir behalten uns das Recht vor, Nutzerkonten bei Verstößen zu sperren.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">4. Haftungsausschluss</h2>
              <p>
                KatzenCare übernimmt keine Haftung für Schäden, die durch die Nutzung unserer Dienste entstehen können.
                Die Auswahl und Beauftragung von Katzensittern erfolgt auf eigenes Risiko.
              </p>
            </section>
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