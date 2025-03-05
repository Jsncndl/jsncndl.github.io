import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import FormModal from "./FormModal";

interface FormProps {
  user_need: string;
  user_url?: string;
  user_email: string;
  user_name: string;
  user_object: string;
  user_message: string;
  user_phone?: string;
  user_company?: string;
  user_work?: string;
}

export default function Contact() {
  const form = useRef(null);
  const [formValue, setFormValue] = useState<FormProps>({
    user_need: "Création",
    user_email: "",
    user_name: "",
    user_object: "",
    user_message: "",
    user_phone: "",
    user_url: "",
    user_company: "",
    user_work: ""
  });

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegExp = /^\+?[0-9]{10,14}$/; // Format international avec code pays optionnel
  const urlRegExp = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    setLoading(true);
    setError("");
    setSuccess(false);

    // Validation des champs
    if (!emailRegExp.test(formValue.user_email)) {
      setError("Email incorrect");
      setLoading(false);
      return;
    }

    if (formValue.user_phone && !phoneRegExp.test(formValue.user_phone)) {
      setError("Numéro de téléphone incorrect");
      setLoading(false);
      return;
    }

    if (formValue.user_url && !urlRegExp.test(formValue.user_url)) {
      setError("URL incorrecte");
      setLoading(false);
      return;
    }

    // Envoi du formulaire avec EmailJS
    if (form.current) {
      emailjs
        .sendForm(
          "service_4i57lo1",
          "template_lzrlggc",
          form.current,
          "780HXU93LVlOKoj1u"
        )
        .then(
          () => {
            setSuccess(true);
            setLoading(false);
            setTimeout(() => {
              setSuccess(false);
              setIsSubmitted(false); // Cache le modal après 2 secondes
            }, 2000);
            setFormValue({
              user_need: "Création",
              user_email: "",
              user_name: "",
              user_object: "",
              user_message: "",
              user_phone: "",
              user_url: "",
              user_company: "",
              user_work: ""
            });
          },
          () => {
            setError(
              "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
            );
            setLoading(false);
          }
        );
    }
  };

  return (
    <section id="contact">
      <h2 className="w-2/3 text-center text-3xl">Me contacter</h2>
      <div className="flex w-full items-center justify-center">
        <form
          ref={form}
          className="form-gradient flex flex-col gap-4 rounded-[15px] border-2 border-gray-500 p-6 text-white drop-shadow-md"
          onSubmit={onSubmit}
        >
          <span className="flex flex-wrap gap-4">
            <span className="relative flex-grow">
              <label className="absolute ml-2 hidden" htmlFor="user_name">
                Votre nom
              </label>
              <input
                required
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Votre nom"
                className="border-1 w-full rounded-t-[15px] border border-b-2 border-blue-rgb border-b-white/80 bg-dark-blue-rgb p-2 focus:border-white/80 focus:outline-none"
                onChange={(event: any) =>
                  setFormValue({ ...formValue, user_name: event.target.value })
                }
              />
            </span>
            <span className="relative flex-grow">
              <label className="absolute ml-2 hidden" htmlFor="user_email">
                Votre email
              </label>
              <input
                required
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Votre email"
                className="border-1 w-full rounded-t-[15px] border border-b-2 border-blue-rgb border-b-white/80 bg-dark-blue-rgb p-2 focus:border-white/80 focus:outline-none"
                onChange={(event: any) =>
                  setFormValue({ ...formValue, user_email: event.target.value })
                }
              />
            </span>
          </span>

          <span className="flex flex-wrap gap-4">
            <span className="relative flex-grow">
              <label className="absolute ml-2 hidden" htmlFor="user_company">
                Nom de votre entreprise
              </label>
              <input
                type="text"
                name="user_company"
                id="user_company"
                placeholder="Nom de votre entreprise"
                className="border-1 w-full rounded-t-[15px] border border-b-2 border-blue-rgb border-b-white/80 bg-dark-blue-rgb p-2 focus:border-white/80 focus:outline-none"
                onChange={(event: any) =>
                  setFormValue({ ...formValue, user_company: event.target.value })
                }
              />
            </span>
            <span className="relative flex-grow">
              <label className="absolute ml-2 hidden" htmlFor="user_work">
                Votre profession
              </label>
              <input
                type="text"
                name="user_work"
                id="user_work"
                placeholder="Votre profession"
                className="border-1 w-full rounded-t-[15px] border border-b-2 border-blue-rgb border-b-white/80 bg-dark-blue-rgb p-2 focus:border-white/80 focus:outline-none"
                onChange={(event: any) =>
                  setFormValue({ ...formValue, user_work: event.target.value })
                }
              />
            </span>
          </span>

          <span className="relative flex flex-wrap gap-4">
            <span className="">
              <label htmlFor="user_phone" className="absolute ml-2 hidden">
                Votre téléphone
              </label>
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                placeholder="Votre téléphone"
                className="border-1 w-full rounded-t-[15px] border border-b-2 border-blue-rgb border-b-white/80 bg-dark-blue-rgb p-2 focus:border-white/80 focus:outline-none"
                onChange={(event: any) =>
                  setFormValue({ ...formValue, user_phone: event.target.value })
                }
              />
            </span>
          </span>
          <span className="mt-4 flex-grow">
            <label className="absolute ml-2 hidden" htmlFor="user_object">
              Objet de votre message
            </label>
            <input
              required
              type="text"
              name="user_object"
              id="user_object"
              placeholder="Objet de votre message"
              className="border-1 w-full rounded-t-[15px] border border-b-2 border-blue-rgb border-b-white/80 bg-dark-blue-rgb p-2 focus:border-white/80 focus:outline-none"
              onChange={(event: any) =>
                setFormValue({
                  ...formValue,
                  user_object: event.target.value,
                })
              }
            />
          </span>

          <span className="flex flex-col gap-2">
            <label className="absolute ml-2 hidden" htmlFor="user_message">
              Votre message
            </label>
            <textarea
              required
              name="user_message"
              id="user_message"
              placeholder="Votre message"
              className="border-1 h-60 resize-none rounded-t-[15px] border border-b-2 border-blue-rgb border-b-white/80 bg-dark-blue-rgb p-2 focus:border-white/80 focus:outline-none"
              onChange={(event: any) =>
                setFormValue({ ...formValue, user_message: event.target.value })
              }
            />
          </span>

          <button
            type="submit"
            className="m-auto rounded-[15px] border border-white bg-blue-rgb px-4 py-2 text-white shadow-md shadow-gray-500"
          >
            Envoyer
          </button>
        </form>
      </div>
      {isSubmitted && (loading || error || success) && (
        <FormModal
          error={Boolean(error)}
          errorMessage={error}
          loading={loading}
          success={success}
        />
      )}
    </section>
  );
}
