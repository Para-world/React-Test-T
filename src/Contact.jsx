import React from "react";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Thank you ${formData.name}, we received your message!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-10">
      <h1 className="text-3xl font-bold mb-6 text-zinc-100">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-700 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            className="block text-zinc-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-600 rounded focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-zinc-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-600 rounded focus:outline-none focus:border-blue-500"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-zinc-300 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-600 rounded focus:outline-none focus:border-blue-500 h-32 resize-none"
            placeholder="Your message here..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-zinc-400 text-sm">
        <p>State Debug:</p>
        <pre className="bg-zinc-900 p-4 rounded mt-2 text-xs">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Contact;
