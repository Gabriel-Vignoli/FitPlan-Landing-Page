import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#19191b] to-[#17191d] text-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-bold text-primary sm:text-xl">
              Montanini Academy
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <p>
                  Coronel Fabiano, 133, Centro
                  <br />
                  Arceburgo, Minas Gerais
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base font-semibold sm:text-lg">Contato</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="tel:+5535999138692"
                  className="break-all transition hover:text-primary"
                >
                  (35) 99913-8692
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:montanini911@gmail.com"
                  className="break-all transition hover:text-primary"
                >
                  montanini911@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-base font-semibold sm:text-lg">Navegação</h3>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300 sm:flex-col sm:space-y-2">
              <a href="#para-quem-e" className="transition hover:text-primary">
                Para quem é
              </a>
              <a href="#sobre" className="transition hover:text-primary">
                Sobre
              </a>
              <a href="#metodologia" className="transition hover:text-primary">
                Metodologia
              </a>
              <a href="#app" className="transition hover:text-primary">
                APP
              </a>
              <a href="#planos" className="transition hover:text-primary">
                Planos
              </a>
              <a href="#faq" className="transition hover:text-primary">
                FAQ
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 border-t border-gray-700 pt-4 sm:mt-8 sm:pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-400 sm:flex-row sm:gap-4 sm:text-sm">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Montanini Academy. Todos os direitos
              reservados.
            </p>
            <p className="flex flex-wrap items-center justify-center gap-1 text-center sm:gap-2 sm:text-left">
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                Desenvolvido por
              </span>
              <a
                href="mailto:pessoalvignoli123@gmail.com"
                className="break-all text-primary hover:underline"
              >
                pessoalvignoli123@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
