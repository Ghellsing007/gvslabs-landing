export const dynamic = 'force-dynamic'

export default function TermsPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Al acceder y utilizar los servicios de GVSlabs, aceptas estar sujeto a estos términos y condiciones.
              Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder a nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              2. Servicios Ofrecidos
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              GVSlabs ofrece servicios de desarrollo de software, hosting, consultoría tecnológica y soluciones
              empresariales. Nos reservamos el derecho de modificar o discontinuar cualquier servicio en cualquier momento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              3. Propiedad Intelectual
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Todo el contenido, características y funcionalidad de nuestros servicios son propiedad de GVSlabs
              o sus licenciantes y están protegidos por leyes de propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              4. Limitación de Responsabilidad
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              GVSlabs no será responsable por daños indirectos, incidentales o consecuentes que surjan del
              uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por el cliente
              en los últimos 12 meses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              5. Modificaciones
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán
              en vigor inmediatamente después de su publicación en nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              6. Contacto
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Si tienes preguntas sobre estos términos, puedes contactarnos en admin@gvslabs.cloud
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}