import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import RentalBanner from "@/components/RentalBanner";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import FindUs from "@/components/FindUs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jay Computers",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1+1 Laxmi Nivara Society, Patel Chowk",
      addressLocality: "Ghatkopar East, Mumbai",
      postalCode: "400077",
      addressCountry: "IN",
    },
    telephone: "+91 95942 43527",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <Expertise />
      <RentalBanner />
      <WhyUs />
      <Contact />
      <FindUs />
      <Reviews />
      <Footer />
    </main>
  );
}