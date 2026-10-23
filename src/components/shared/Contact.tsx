import { useId, useState, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import SectionHead from "@/components/shared/SectionHead";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import site from "@/data/site";

const links = [
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", href: site.github, icon: GitHub },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedIn },
];

const messages = {
  name: "Add your name.",
  email: "Enter an email address, like name@example.com.",
  message: "Write a short message.",
};

type FieldName = keyof typeof messages;

const Contact = () => {
  const headingId = useId();
  const [invalid, setInvalid] = useState<FieldName[]>([]);

  const errorFor = (name: FieldName) =>
    invalid.includes(name) ? messages[name] : undefined;

  // No server, so the message opens in the visitor's email app
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = event.currentTarget.elements;
    const found = (Object.keys(messages) as FieldName[]).filter(
      (name) => !(fields.namedItem(name) as HTMLInputElement).checkValidity(),
    );
    setInvalid(found);
    if (found.length > 0) {
      (fields.namedItem(found[0]) as HTMLInputElement).focus();
      return;
    }

    const form = new FormData(event.currentTarget);
    const subject = `Message from ${form.get("name")}`;
    const body = `${form.get("message")}\n\n${form.get("name")} · ${form.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // A field's error clears once it's typed in
  const handleInput = (event: FormEvent<HTMLFormElement>) => {
    const { name } = event.target as HTMLInputElement;
    setInvalid((fields) => fields.filter((field) => field !== name));
  };

  return (
    <section
      aria-labelledby={headingId}
      className="px-page py-20 lg:py-28 snap-start"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:gap-20">
        <SectionHead id={headingId} title="Get in touch.">
          Let's build something people will actually use.
        </SectionHead>

        <div className="flex flex-col gap-16 lg:flex-row 2xl:gap-24">
          <form
            noValidate
            onSubmit={handleSubmit}
            onInput={handleInput}
            className="flex flex-1 flex-col gap-6"
          >
            <div className="grid items-start gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                error={errorFor("name")}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                error={errorFor("email")}
              />
            </div>
            <Field
              label="Message"
              name="message"
              placeholder="Tell me about the role or project…"
              multiline
              error={errorFor("message")}
            />
            <Button type="submit" arrow className="self-start">
              Send message
            </Button>
          </form>

          <div className="flex shrink-0 flex-col gap-12 lg:w-80 xl:w-96 2xl:w-108">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Contact information
              </h3>
              <ul className="mt-4 -mb-2 flex flex-col">
                {links.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group -mx-2 flex rounded-card p-2 text-base transition-colors hover:bg-surface focus-ring"
                    >
                      <span className="flex items-center gap-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
                        <span className="flex size-10 items-center justify-center rounded-full bg-surface-strong transition-colors group-hover:bg-ink/8">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Location</h3>
              <p className="mt-4 flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" aria-hidden="true" />
                {site.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
