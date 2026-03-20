import { HeroSection } from "@/components/hero-section";
import { ReminderSection } from "@/components/reminder-section";
import { ServicesSection } from "@/components/services-section";
import { BookingCtaSection } from "@/components/booking-cta-section";
import { ImpactSection } from "@/components/impact-section";
import { ProcessSection } from "@/components/process-section";
import { RealStoriesSection } from "@/components/real-stories-section";
import { ItAgencyStorySection } from "@/components/it-agency-story-section";
import { StartupFounderStorySection } from "@/components/startup-founder-story-section";
import { CafeStorySection } from "@/components/cafe-story-section";
import { D2cBrandStorySection } from "@/components/d2c-brand-story-section";
import { FreedomCtaSection } from "@/components/freedom-cta-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WellnessBrandStorySection } from "@/components/wellness-brand-story-section";
import { HomeDecorStorySection } from "@/components/home-decor-story-section";
import { OrganicBrandStorySection } from "@/components/organic-brand-story-section";
import { EcommerceAggregatorStorySection } from "@/components/ecommerce-aggregator-story-section";
import { FounderChatsSection } from "@/components/founder-chats-section";
import { StrategyCallSection } from "@/components/strategy-call-section";
import { FaqSection } from "@/components/faq-section";
import BookingPage from "@/components/googlecalender";
import ScrollReveal from "@/components/scroller/page";

export default async function Home() {
  return (
    <>
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <ReminderSection />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <BookingCtaSection />
      </ScrollReveal>

      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>

      <ScrollReveal>
        <RealStoriesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ItAgencyStorySection />
      </ScrollReveal>

      <ScrollReveal>
        <D2cBrandStorySection />
      </ScrollReveal>

      <ScrollReveal>
        <EcommerceAggregatorStorySection />
      </ScrollReveal>

      <ScrollReveal>
        <StrategyCallSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>
      <ScrollReveal>
        <BookingPage />
      </ScrollReveal>
      <ScrollReveal>
        <FreedomCtaSection />
      </ScrollReveal>
    </>
  );
}
