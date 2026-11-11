import { Capabilities } from "@/components/sections/Capabilities";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Process } from "@/components/sections/Process";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Principles } from "@/components/sections/Principles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "WEBPI | Digital Experiences Built for What's Next",
  description:
    "WEBPI is an independent digital studio creating thoughtfully designed websites, e-commerce experiences and digital products for ambitious businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Capabilities />
      <SelectedWork />
      <Process />
      <Principles />
      <ClosingCta />
    </>
  );
}
