"use client"

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleWhatsApp = () => {
    const message = '¡Hola! Me gustaría información sobre sus servicios tecnológicos.'
    const phoneNumber = '+18298725551' // Número de GVSlabs
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Feedback háptico si está disponible
    if ('vibrate' in navigator) {
      navigator.vibrate(50)
    }

    window.open(whatsappUrl, '_blank')

    // Cerrar el tooltip después de hacer clic
    setIsExpanded(false)
  }

  const toggleTooltip = () => {
    setIsExpanded(!isExpanded)

    // Feedback háptico
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
  }

  return (
    <>
      {/* WhatsApp Button - Mobile Optimized */}
      <div className="fixed right-4 bottom-20 z-50 xs:bottom-24 xs:right-6">
        {/* Tooltip */}
        {isExpanded && (
          <div className="absolute right-0 bottom-full p-3 mx-4 mb-3 max-w-xs text-white bg-gray-900 shadow-xl xs:mb-4 xs:p-4 rounded-lg">
            <div className="leading-relaxed text-sm">
              <div className="mb-1 font-medium">¡Hola! 👋</div>
              <div>¿Necesitas información sobre nuestros servicios tecnológicos?</div>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute right-6 top-full w-0 h-0 border-t-4 border-r-4 border-l-4 border-transparent xs:right-8 border-t-gray-900"></div>
          </div>
        )}

        {/* Main Button */}
        <div className="relative">
          {/* Pulse Animation Background */}
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-ping"></div>

          {/* Main Button */}
          <button
            onClick={isExpanded ? handleWhatsApp : toggleTooltip}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="relative p-3 text-white bg-green-500 rounded-full shadow-lg transition-all duration-300 transform hover:bg-green-600 active:bg-green-700 xs:p-4 hover:shadow-xl hover:scale-105 active:scale-95"
            aria-label="Contactar por WhatsApp"
          >
            {isExpanded ? (
              <X size={20} className="xs:w-6 xs:h-6" />
            ) : (
              <MessageCircle size={20} className="xs:w-6 xs:h-6" />
            )}
          </button>

          {/* Notification Badge */}
          <div className="flex absolute -top-1 -right-1 justify-center items-center w-5 h-5 font-bold text-white bg-red-500 rounded-full text-xs xs:w-6 xs:h-6">
            !
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  )
}

export default WhatsAppFloat