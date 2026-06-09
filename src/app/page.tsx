"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "How It Works",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="CineIQ"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "plain",
      }}
      title="Your Spoiler-Free Movie Companion"
      description="Dive deep into movie plots and characters without ruining the magic. Our intelligent AI answers your burning questions, perfectly synced to your current watch time, ensuring every revelation is on YOUR terms."
      buttons={[
        {
          text: "Discover CineIQ",
          href: "#about",
        },
        {
          text: "Start Exploring",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/couple-watching-movie-cinema-with-3d-glasses_23-2151005429.jpg"
      imageAlt="A user interacting with CineIQ on a tablet while watching a movie, with a blurred movie scene in the background."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Intelligent Q&A, Precisely Timed"
      description={[
        "CineIQ revolutionizes how you interact with films. Simply tell our AI your current timestamp in any movie, and ask away. We guarantee all answers will only include information available up to that exact moment, safeguarding your viewing pleasure from unwanted spoilers.",
        "Powered by advanced AI, CineIQ understands context and nuance, providing accurate and helpful information ranging from character backstories to plot details, historical references, and behind-the-scenes insights. It's like having a cinematic expert by your side, always respectful of your viewing progress.",
      ]}
      buttons={[
        {
          text: "See Features",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Precision Spoiler Shield",
          tags: [
            "AI-Powered",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/shield-wings-abstract-low-poly-wire-frame-background-vector-illustration_587448-963.jpg",
          imageAlt: "A digital shield icon representing spoiler protection.",
        },
        {
          id: "f2",
          title: "Contextual Answers",
          tags: [
            "Intelligent",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/workers-choosing-images-computer-screen_1170-57.jpg",
          imageAlt: "An abstract brain icon with movie reels, symbolizing contextual understanding.",
        },
        {
          id: "f3",
          title: "Vast Movie Database",
          tags: [
            "Comprehensive",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/person-suffering-from-technology-addiction-cybersickness_23-2151552595.jpg",
          imageAlt: "A server rack or database icon with filmstrip elements.",
        },
        {
          id: "f4",
          title: "Interactive Timeline",
          tags: [
            "User Control",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/rounded-icons-with-movie-players_1308-82805.jpg",
          imageAlt: "A timeline graphic with play/pause icons, indicating time control.",
        },
        {
          id: "f5",
          title: "Instant Clarity",
          tags: [
            "Real-time",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/eye-icon-front-side-with-white-background_187299-39848.jpg",
          imageAlt: "A glowing lightbulb symbolizing instant insights and clarity.",
        },
        {
          id: "f6",
          title: "Intuitive Interface",
          tags: [
            "Seamless",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/index-finger-pressing-shiny-button_1232-200.jpg",
          imageAlt: "A minimalist user interface with chat bubbles and a movie screen.",
        },
      ]}
      title="Unlock a New Dimension of Movie Discovery"
      description="CineIQ is packed with intuitive features designed for the ultimate spoiler-free film exploration."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alex P.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-jolly-man-home-feeling-happy-grateful-life_482257-123005.jpg",
          imageAlt: "Photo of Alex P.",
        },
        {
          id: "t2",
          name: "Samantha L.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",
          imageAlt: "Photo of Samantha L.",
        },
        {
          id: "t3",
          name: "Marcus R.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-model-with-curly-hair_23-2148323544.jpg",
          imageAlt: "Photo of Marcus R.",
        },
        {
          id: "t4",
          name: "Chloe G.",
          imageSrc: "http://img.b2bpic.net/free-photo/surprised-young-handsome-guy-wearing-black-shirt-grabbed-chin-isolated-yellow-wall_141793-91503.jpg",
          imageAlt: "Photo of Chloe G.",
        },
        {
          id: "t5",
          name: "Ben K.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-caucasian-girl-with-pixie-haircut-showing-thumbs-up-isolated-white-background-with-copy-space_141793-31737.jpg",
          imageAlt: "Photo of Ben K.",
        },
      ]}
      cardTitle="A Must-Have for Every Movie Fan"
      cardTag="Hear From Our Users"
      buttons={[
        {
          text: "Read More Reviews",
          href: "#",
        },
      ]}
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "How does CineIQ ensure no spoilers?",
          content: "Our advanced AI processes your movie queries against a constantly updated knowledge base, meticulously filtering out any plot details, character arcs, or thematic resolutions that occur after the timestamp you provide. You're always in control of what you learn.",
        },
        {
          id: "faq2",
          title: "What kind of questions can I ask?",
          content: "You can ask about anything from character motivations, historical context, filming locations, actor backgrounds, plot ambiguities, or even specific visual elements. As long as the information is available before your provided timestamp, the AI will provide an answer.",
        },
        {
          id: "faq3",
          title: "Is my viewing data kept private?",
          content: "Absolutely. We prioritize your privacy. CineIQ does not store your watch history or personal viewing preferences. Your timestamp input is used solely to contextualize your current question and is not retained for future tracking or data collection.",
        },
        {
          id: "faq4",
          title: "What if I accidentally input the wrong time?",
          content: "No problem! You can easily correct your timestamp at any point during your session. The AI will immediately adjust its knowledge scope to reflect the new time, ensuring continued spoiler protection.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-remote-worker-looking-green-screen-his-device-home_482257-126379.jpg"
      imageAlt="A person relaxing on a couch, holding a remote control and a tablet displaying the CineIQ interface, with a movie playing on a TV in the background."
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Your Questions, Our Expertise"
      description="Find quick answers to common inquiries about CineIQ's features and functionality."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Connect with CineIQ Support"
      description="Have a question, suggestion, or encountered a bug? Our team is ready to assist you. Fill out the form below, and we'll get back to you as soon as possible."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/set-stationery-pins-thread-top-view_23-2148510444.jpg"
      imageAlt="An abstract representation of digital communication, with interconnected nodes and glowing lines, symbolizing seamless contact."
      mediaAnimation="slide-up"
      mediaPosition="left"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="CineIQ"
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "How It Works",
              href: "#about",
            },
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 CineIQ. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
