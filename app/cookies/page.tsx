
export default function CookiesPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              1. ¿Qué son las Cookies?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
              nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y a proporcionar funcionalidades personalizadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              2. Tipos de Cookies que Utilizamos
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Cookies Esenciales
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Necesarias para el funcionamiento básico del sitio web, como la navegación y el acceso a áreas seguras.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Cookies de Rendimiento
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nos ayudan a entender cómo interactúas con nuestro sitio web para mejorar su rendimiento.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Cookies de Funcionalidad
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Permiten recordar tus preferencias y personalizar tu experiencia en el sitio.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              3. Control de Cookies
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Puedes controlar y gestionar las cookies a través de la configuración de tu navegador.
              Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              4. Cookies de Terceros
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Utilizamos servicios de terceros que pueden instalar sus propias cookies, como Google Analytics
              para análisis de tráfico. Estas cookies están sujetas a las políticas de privacidad de dichos terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              5. Cambios a esta Política
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Podemos actualizar esta política de cookies periódicamente. Los cambios serán publicados
              en esta página con la fecha de actualización correspondiente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              6. Contacto
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Si tienes preguntas sobre el uso de cookies, puedes contactarnos en admin@gvslabs.cloud
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}