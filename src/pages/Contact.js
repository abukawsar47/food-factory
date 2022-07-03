import React from 'react';
import ContactBanner from '../components/ContactBanner';
import ContactEmail from '../components/ContactEmail';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
    return (
        <div>
            <ContactBanner />
            <ContactInfo />
            <ContactEmail />
        </div>
    );
};

export default Contact;