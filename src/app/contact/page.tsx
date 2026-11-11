"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import MobileMenu from "@/components/ui/MobileMenu";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    handleChange(e);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your preferred email service
    console.log("Form submitted:", formData);
    alert(
      "Message sent! (This is a placeholder - integrate your email service)"
    );
  };

  return (
    <PageLayout
      watermarkText="Contact."
      footerCtaText="Go Back Home"
      footerCtaHref="/"
      subtleGrid
    >
      <div className="px-8 pt-6 md:px-16 md:pt-0 lg:px-24">
        {/* Page Title */}
        <div className="flex items-start justify-between mb-6">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-6xl lg:text-7xl font-bold">
            Let&apos;s Talk.
          </h1>
          <MobileMenu />
        </div>

        {/* Contact Details */}
        <p className="text-lg mb-4">
          Ready to collaborate? Let&apos;s connect and discuss how we can build
          something amazing together.
        </p>
        <p className="text-lg mb-2">
          <a
            href="mailto:muganzijames.ai.dev@gmail.com"
            className="font-bold hover:opacity-70 transition-opacity"
          >
            muganzijames.ai.dev@gmail.com
          </a>
        </p>
        <p className="text-lg mb-2">
          <a
            href="tel:+254798848862"
            className="font-bold hover:opacity-70 transition-opacity"
          >
            +254 798 848 862
          </a>
        </p>
        <p className="text-lg mb-12 text-gray-600">
          Nairobi, Kenya || Eldoret, Kenya
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={handleMessageChange}
              required
              rows={1}
              className="form-input resize-none overflow-hidden"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
