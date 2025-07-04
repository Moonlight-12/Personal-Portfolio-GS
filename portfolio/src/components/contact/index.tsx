"use client"
import React, { useState, useEffect } from 'react';
import { ContactSectionProps } from '../../types/portfolio';
import { sendContactEmail } from '@/app/actions/contact_email';
import { toast } from "sonner";

interface FormData {
  email: string;
  message: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    if (submitStatus.type === 'success') {
      toast.success(submitStatus.message);
    } else if (submitStatus.type === 'error') {
      toast.error(submitStatus.message);
    }
    if (submitStatus.type !== null) {
      setSubmitStatus({ type: null, message: '' });
    }
  }, [submitStatus]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      toast.error('Please correct the errors in the form.');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Message cannot be empty.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
   
    try {
      const result = await sendContactEmail({
        email: formData.email,
        message: formData.message
      });

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ email: '', message: '' });
        setEmailError(null);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (field === 'email') {
      if (value.trim() === '') {
        setEmailError('Email cannot be empty.');
      } else if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError(null);
      }
    }
  };

  const isFormValid = formData.email.trim() && formData.message.trim() && emailError === null;

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
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            validationError={emailError}
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

const ContactInput: React.FC<{
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  validationError?: string | null;
}> = ({ type, placeholder, value, onChange, validationError }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none transition-colors ${
          validationError ? 'border-red-500 focus:border-red-500' : 'border-gray-700/50 focus:border-blue-500'
        }`}
        required
      />
      {validationError && (
        <p className="text-red-400 text-sm mt-1 ml-2">{validationError}</p>
      )}
    </div>
  );
};

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