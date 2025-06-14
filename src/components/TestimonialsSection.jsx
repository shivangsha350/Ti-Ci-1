import React from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `"Our garden was in desperate need of a makeover, and this team exceeded all our expectations. They listened carefully to our ideas and transformed our outdoor space into a peaceful retreat we now enjoy every day."`,
  },
  {
    name: "John Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: `"Our garden was in desperate need of a makeover, and this team exceeded all our expectations. They listened carefully to our ideas and transformed our outdoor space into a peaceful retreat we now enjoy every day."`,
  },
  {
    name: "John Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    text: `"Our garden was in desperate need of a makeover, and this team exceeded all our expectations. They listened carefully to our ideas and transformed our outdoor space into a peaceful retreat we now enjoy every day."`,
  },
  {
    name: "John Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: `"Our garden was in desperate need of a makeover, and this team exceeded all our expectations. They listened carefully to our ideas and transformed our outdoor space into a peaceful retreat we now enjoy every day."`,
  },
];

const TestimonialsSection = () => {
  return (
    <div
      className="bg-cover bg-center py-20 px-4 sm:px-8"
      style={{
        backgroundImage:
          "url('/3.webp')", 
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-white flex flex-col justify-between h-full"
          >
            <div className="text-4xl mb-4">“</div>
            <p className="text-lg leading-relaxed mb-6">{testimonial.text}</p>

            <div className="flex items-center space-x-1 mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.3a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.3c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.3a1 1 0 00-.364-1.118L2.98 8.727c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.07-3.3z" />
                  </svg>
                ))}
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm opacity-80">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
