const testimonials = [
  {
    body: "Thanks to Barangay Watchdog, our community finally got the street lights fixed after months of requests to the local office were ignored. The anonymous reporting made it safe to speak up.",
    author: {
      name: "Community Member",
      location: "Manila",
    },
  },
  {
    body: "I reported corruption at our local health center where staff were charging for free medicine. Within weeks, there was an investigation and new protocols were established. Real change happened.",
    author: {
      name: "Concerned Citizen",
      location: "Quezon City",
    },
  },
  {
    body: "The transparency of seeing reports and project updates gives me hope that our system can work. As a former government employee, I appreciate the accountability this creates.",
    author: {
      name: "Former Public Servant",
      location: "Pasig",
    },
  },
];

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real voices, real impact
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-foreground sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author.name}
              className="rounded-2xl bg-card p-6 shadow-lg ring-1 ring-muted/10"
            >
              <blockquote className="text-foreground">
                <p>{`"${testimonial.body}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4 border-t border-muted pt-4">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                  <div className="text-muted-foreground">{testimonial.author.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}