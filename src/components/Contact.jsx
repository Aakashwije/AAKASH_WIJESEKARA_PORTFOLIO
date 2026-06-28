import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // ✅ Simple validation UI
    if (!name || !email || !message) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message!");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative bg-[#2b2f36] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <Toaster position="top-right" />

      <div className="mx-auto max-w-3xl">

        <h2 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl md:text-left">
          Contact <span className="text-yellow-400">Me</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="name"
            autoComplete="name"
            aria-label="Your name"
            required
            placeholder="Your Name"
            className="w-full rounded-md bg-[#1f2329] px-4 py-3.5 text-base text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400 sm:px-5 sm:py-4"
          />

          <input
            type="email"
            name="email"
            autoComplete="email"
            aria-label="Your email"
            required
            placeholder="Your Email"
            className="w-full rounded-md bg-[#1f2329] px-4 py-3.5 text-base text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400 sm:px-5 sm:py-4"
          />

          <textarea
            name="message"
            rows="6"
            aria-label="Your message"
            required
            placeholder="Your Message"
            className="w-full resize-y rounded-md bg-[#1f2329] px-4 py-3.5 text-base text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400 sm:px-5 sm:py-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex min-h-12 w-full items-center justify-center gap-3 border-2 border-yellow-400 px-4 py-3 font-semibold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 disabled:opacity-60 sm:w-auto sm:px-10 sm:py-4"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}

export { Contact };
export default Contact;
