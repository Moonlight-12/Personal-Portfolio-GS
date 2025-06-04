"use client"
import React, { useState } from 'react';
import { ContactSectionProps } from '../../types/portfolio';

interface FormData {
  name: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name.trim() && formData.message.trim();

  return (
    <section 
      id="contact" 
      className="py-20 px-6 bg-gray-800/30"
      data-animate
    >
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          Get In Touch
        </h2>
        <div 
          className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <ContactInput
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
          />
          
          <ContactTextarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(value) => handleInputChange('message', value)}
          />
          
          <SubmitButton 
            onClick={handleSubmit}
            isLoading={isSubmitting}
            disabled={!isFormValid}
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Input Component
const ContactInput: React.FC<{
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
        required
      />
    </div>
  );
};

// Reusable Textarea Component
const ContactTextarea: React.FC<{
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
        required
      />
    </div>
  );
};

// Submit Button Component
const SubmitButton: React.FC<{
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}> = ({ onClick, isLoading, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform ${
        disabled 
          ? 'bg-gray-600 cursor-not-allowed opacity-50'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105'
      }`}
    >
      {isLoading ? 'Sending...' : 'Send Message'}
    </button>
  );
};

export default ContactSection;