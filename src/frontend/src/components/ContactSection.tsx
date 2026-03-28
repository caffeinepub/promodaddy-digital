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
      toast.success("Thank you! We'll contact you within 24 hours.");
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
    <section
      id="contact"
      className="py-24 bg-[#0D1426] border-t border-[rgba(255,186,8,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
              Let's Create
              <br />
              Something Great
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#FFBA08] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#FFBA08]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+918690522210"
                    className="text-white font-medium hover:text-[#FFBA08] transition-colors"
                  >
                    +91 86905 22210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#FFBA08] flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#FFBA08]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@promodaddy.in"
                    className="text-white font-medium hover:text-[#FFBA08] transition-colors"
                  >
                    info@promodaddy.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#FFBA08] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#FFBA08]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    Office
                  </p>
                  <p className="text-white font-medium">
                    Plot No. 26, Mahaveer Nagar Vistar Yojana,
                    <br />
                    Kota, Rajasthan - 324005
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            data-ocid="contact.modal"
          >
            <h3 className="text-[#F0F4FF] font-bold text-2xl mb-6">
              Get Free Consultation
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium mb-1.5 block text-gray-700"
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
                  className="border-gray-200 text-gray-900"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium mb-1.5 block text-gray-700"
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
                  className="border-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="text-sm font-medium mb-1.5 block text-gray-700"
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
                className="border-gray-200 text-gray-900"
              />
            </div>
            <div className="mb-4">
              <Label
                htmlFor="service"
                className="text-sm font-medium mb-1.5 block text-gray-700"
              >
                Service Interested In *
              </Label>
              <Select
                value={form.serviceInterest}
                onValueChange={(v) =>
                  setForm((p) => ({ ...p, serviceInterest: v }))
                }
              >
                <SelectTrigger
                  data-ocid="contact.service.select"
                  id="service"
                  className="border-gray-200 text-gray-900"
                >
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
                className="text-sm font-medium mb-1.5 block text-gray-700"
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
                className="border-gray-200 text-gray-900"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#FFBA08] hover:bg-[#E0A800] text-white font-bold py-5 rounded-none uppercase tracking-widest text-sm"
              disabled={submitContact.isPending}
              data-ocid="contact.submit.button"
            >
              {submitContact.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Get Free Consultation"
              )}
            </Button>
            {submitContact.isSuccess && (
              <p
                className="text-green-600 text-sm text-center mt-3 font-medium"
                data-ocid="contact.success_state"
              >
                ✓ Message sent! We'll reach out within 24 hours.
              </p>
            )}
            {submitContact.isError && (
              <p
                className="text-red-500 text-sm text-center mt-3"
                data-ocid="contact.error_state"
              >
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
