import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { WhyNexloom } from "@/components/sections/why-nexloom";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider variant="gradient" />
      <Services />
      <SectionDivider variant="dots" />
      <Products />
      <SectionDivider variant="gradient" />
      <WhyNexloom />
      <SectionDivider variant="dots" />
      <Process />
      <SectionDivider variant="gradient" />
      <Testimonials />
      <SectionDivider variant="dots" />
      <Contact />
      <Footer />
    </main>
  );
}
