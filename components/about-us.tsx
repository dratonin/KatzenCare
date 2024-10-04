import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Cat } from "lucide-react"

export default function AboutUs() {
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
          <h1 className="text-3xl font-bold mb-6 text-orange-700">Über PawPals</h1>
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">Unsere Geschichte</h2>
              <p className="mb-4">
                PawPals wurde 2024 von einem leidenschaftlichen Katzen- und Hundeliebhaber in Solingen gegründet: Daniel. 
                Die gemeinsame Liebe zu Katzen und der Wunsch, Katzen- und Hundebesitzer das Leben zu erleichtern.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">Unsere Mission</h2>
              <p>
                Bei PawPals ist es unser Ziel, Katzen- und Hundebesitzer mit vertrauenswürdigen und liebevollen Betreuern 
                zu verbinden. Wir möchten sicherstellen, dass jedes Haustier die bestmögliche Betreuung erhält, auch wenn 
                ihre Besitzer einmal nicht da sein können. Gleichzeitig schaffen wir eine Plattform für Haustierliebhaber, 
                die ihre Leidenschaft zum Beruf machen möchten.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">Das Team hinter KatzenCare</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Daniel Tatonin", role: "CEO & Produktentwicklung", image: "/placeholder.svg?height=200&width=200" },
                 ].map((founder) => (
                  <div key={founder.name} className="flex flex-col items-center">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={200}
                      height={200}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold text-orange-600">{founder.name}</h3>
                    <p className="text-sm text-gray-500">{founder.role}</p>
                  </div>
                ))}
              </div>
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