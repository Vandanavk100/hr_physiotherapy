"use client";

const Banner = () => {
  const offers = [
    "Free Consultation Offer! Visit us now.",
    "फ्री कंसल्टेशन ऑफर!",
    "139 M Road near Leher Apartment, Bhupalpura, Udaipur, Rajasthan.",
    "📞 Contact: 8107324399",
    "Dr. Abhishek Kumawat Bpt, MPT (MSK)",
  ];

  return (
    <div className="relative overflow-hidden bg-primary text-white py-2">
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {offers.map((offer, index) => (
          <span
            key={index}
            className="mx-4 text-sm sm:text-base font-medium"
          >
            {offer}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite; /* Adjusted speed */
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
