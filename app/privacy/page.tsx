
export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              En GVSlabs recopilamos información personal que nos proporcionas directamente, como nombre,
              dirección de correo electrónico, número de teléfono e información de contacto cuando utilizas
              nuestros servicios o nos contactas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              2. Cómo Utilizamos tu Información
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mb-4">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Comunicarnos contigo sobre nuestros servicios</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              3. Compartir Información
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto cuando
              sea necesario para proporcionar nuestros servicios o cuando lo exija la ley.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              4. Seguridad de Datos
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu
              información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              5. Tus Derechos
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Tienes derecho a acceder, rectificar, eliminar o limitar el procesamiento de tu información
              personal. Para ejercer estos derechos, contactanos en admin@gvslabs.cloud.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              6. Cambios a esta Política
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios
              significativos publicando la nueva política en nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              7. Contacto
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en admin@gvslabs.cloud
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}