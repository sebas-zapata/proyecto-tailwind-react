import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const whatsappUrl = `https://wa.me/573148436917?text=Hola, estoy interesado en tus servicios.`;
    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                left: '20px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                zIndex: 1000,
                transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <FaWhatsapp size={40} />
        </a>

    );
}

export default WhatsAppButton;