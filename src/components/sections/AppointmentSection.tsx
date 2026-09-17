import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { departments } from "@/data/departments";
import { Reveal } from "@/components/motion/Reveal";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = "idle" | "submitting" | "success" | "error" | "preview";

export function AppointmentSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!WEB3FORMS_KEY) {
      // No form backend configured yet — still validate the UI end-to-end for the demo.
      console.log("Appointment request (preview mode, not sent):", data);
      setStatus("preview");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, access_key: WEB3FORMS_KEY }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="appointment" className="bg-primary-900 py-24 text-cream-50 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">
            Get In Touch
          </p>
          <h2 className="mt-3 text-4xl text-cream-50 md:text-5xl">Schedule an appointment</h2>
          <p className="mt-4 text-cream-100/70">
            Fill in your details below and our team will contact you shortly to confirm your
            appointment.
          </p>

          <ul className="mt-10 space-y-5 text-sm text-cream-100/80">
            <li className="flex gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-accent-300" />
              {site.address}
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-accent-300" />
              {site.phones.join(" / ")}
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-accent-300" />
              {site.email}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-cream-50 p-8 text-ink-900 shadow-2xl md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required autoComplete="name" />
              <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />
              <Field
                label="Email (optional)"
                name="email"
                type="email"
                autoComplete="email"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">
                  Department
                </label>
                <select
                  name="department"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none ring-primary-500 focus:ring-2"
                >
                  <option value="" disabled>
                    Select a department
                  </option>
                  {departments.map((d) => (
                    <option key={d.slug} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink-700">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none ring-primary-500 focus:ring-2"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Request Appointment"}
            </button>

            {(status === "success" || status === "preview") && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-700"
              >
                <CheckCircle2 size={18} />
                {status === "success"
                  ? "Appointment requested — we'll contact you shortly to confirm."
                  : "Looks great — connect a form backend to start receiving real requests."}
              </motion.p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600">
                Something went wrong. Please call us directly at {site.phones[0]}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-ink-700">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 outline-none ring-primary-500 focus:ring-2"
      />
    </div>
  );
}
