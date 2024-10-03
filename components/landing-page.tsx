import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cat, Heart, Home, Calendar, MessageCircle } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="px-4 lg:px-6 h-16 flex items-center w-full justify-center">
        <Link className="flex items-center justify-center" href="/">
          <Cat className="h-6 w-6 text-orange-500" />
          <span className="ml-2 text-2xl font-bold text-orange-700">PawPals</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Funktionen
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Erfahrungen
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#download">
            App herunterladen
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Kontakt
          </Link>
        </nav>
      </header>
      <main className="flex-1 w-full flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-orange-50 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Liebevolle Haustierbetreuung leicht gemacht
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Finden Sie den perfekten Haustierbetreuer in Ihrer Nähe mit unserer einfach zu bedienenden App.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-orange-500 text-white hover:bg-orange-600">App herunterladen</Button>
                <Link href="/about-us">
                  <Button variant="outline">Mehr erfahren</Button>
                  </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere App-Funktionen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Home className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Lokale Betreuer</h3>
                  <p className="text-center text-gray-600">Finden Sie vertrauenswürdige Betreuer in Ihrer Nachbarschaft.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Calendar className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Einfache Buchung</h3>
                  <p className="text-center text-gray-600">Buchen Sie Betreuung mit wenigen Klicks für Ihre Wunschtermine.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <MessageCircle className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Direkter Kontakt</h3>
                  <p className="text-center text-gray-600">Kommunizieren Sie einfach mit Ihrem Haustierbetreuer über die App.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-orange-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Das sagen unsere Kunden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <p className="italic mb-4">"Ich fühle mich so viel sicherer, wenn ich verreise, weil ich weiß, dass meine Katze in guten Händen ist."</p>
                  <p className="font-bold">- Maria S.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="italic mb-4">"Die App ist super einfach zu bedienen und ich habe schnell einen zuverlässigen Hundebetreuer gefunden."</p>
                  <p className="font-bold">- Thomas K.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white flex justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit, loszulegen?</h2>
            <p className="mb-8 text-lg">Laden Sie jetzt unsere App herunter und finden Sie den perfekten Haustierbetreuer!</p>
            <Button className="bg-white text-orange-500 hover:bg-gray-100 text-lg py-6 px-8">
              App herunterladen
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t justify-center">
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