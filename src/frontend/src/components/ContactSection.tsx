import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

const SERVICES = [
  "SEO Optimization",
  "Google Ads",
  "YouTube Ads",
  "Social Media Management",
  "Brand Building",
  "Lead Generation",
  "Full-Service Package",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceInterest: "",
  });
  const submitContact = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.serviceInterest) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await submitContact.mutateAsync(form);
      toast.success("🎉 Thank you! We'll contact you within 24 hours.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        serviceInterest: "",
      });
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#F26A21] font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold text-[#111827] mt-2">
            Start Your Growth Journey
          </h2>
          <p className="text-gray-500 mt-2">
            Get a free consultation and custom strategy from our experts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#111827] mb-6">
              Let's Talk Business
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2B6FEA] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+918690522210"
                    className="text-gray-600 hover:text-[#2B6FEA]"
                  >
                    +91 86905 22210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F26A21] rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">Email</p>
                  <a
                    href="mailto:info@promodaddy.in"
                    className="text-gray-600 hover:text-[#2B6FEA]"
                  >
                    info@promodaddy.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">Office</p>
                  <p className="text-gray-600">
                    Kota, Rajasthan — 324001
                    <br />
                    Serving all of India
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-5 bg-[#0B1F3A] rounded-2xl text-white">
              <p className="font-bold text-lg mb-1">
                Free Consultation Worth ₹5,000
              </p>
              <p className="text-blue-200 text-sm">
                Fill the form and get a custom digital marketing strategy for
                your business — absolutely free.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            data-ocid="contact.modal"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  data-ocid="contact.name.input"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium mb-1.5 block"
                >
                  Phone / WhatsApp *
                </Label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  data-ocid="contact.phone.input"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="text-sm font-medium mb-1.5 block"
              >
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                data-ocid="contact.email.input"
                required
              />
            </div>
            <div className="mb-4">
              <Label
                htmlFor="service"
                className="text-sm font-medium mb-1.5 block"
              >
                Service Interested In *
              </Label>
              <Select
                value={form.serviceInterest}
                onValueChange={(v) =>
                  setForm((p) => ({ ...p, serviceInterest: v }))
                }
              >
                <SelectTrigger data-ocid="contact.service.select" id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-6">
              <Label
                htmlFor="message"
                className="text-sm font-medium mb-1.5 block"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your business and goals..."
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                data-ocid="contact.message.textarea"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#2B6FEA] hover:bg-[#1a5bd4] text-white font-semibold py-5 rounded-xl"
              disabled={submitContact.isPending}
              data-ocid="contact.submit.button"
            >
              {submitContact.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Get Free Consultation 🚀"
              )}
            </Button>
            {submitContact.isSuccess && (
              <p
                className="text-green-600 text-sm text-center mt-3 font-medium"
                data-ocid="contact.success_state"
              >
                ✅ Message sent! We'll reach out within 24 hours.
              </p>
            )}
            {submitContact.isError && (
              <p
                className="text-red-500 text-sm text-center mt-3"
                data-ocid="contact.error_state"
              >
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
