import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections";
import Finder from "@/components/home/Finder";
import Visualizer from "@/components/home/Visualizer";
import Journey from "@/components/home/Journey";
import Estimator from "@/components/home/Estimator";
import ExportMap from "@/components/home/ExportMap";
import { Story, Testimonials, Faq, ShowroomCta } from "@/components/home/Story";
import { Marquee } from "@/components/Reveal";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee
        items={[
          "ISO 9001:2015 Certified",
          "1200+ containers a year",
          "Italian Breton lines",
          "Pan-India logistics",
          "40+ stone colors",
          "30+ export countries",
        ]}
      />
      <div id="collections">
        <Collections />
      </div>
      <Finder />
      <Visualizer />
      <Journey />
      <Estimator />
      <ExportMap />
      <Story />
      <Testimonials />
      <Faq />
      <ShowroomCta />
    </div>
  );
}
