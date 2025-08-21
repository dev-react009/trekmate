'use client';

import {
  Accordion,
  AccordionItem,
  Badge,
  Button
} from "@heroui/react";
import { MessageCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "How does offline navigation work?",
      answer:
        "Trekmate allows you to download detailed topographic maps for any region before your hike. Once downloaded, you can access full GPS navigation, trail information, and safety features without any cellular connection. Maps are regularly updated and optimized for battery efficiency.",
    },
    {
      question: "Is my location data secure?",
      answer:
        "Your privacy is our priority. Location data is encrypted and stored locally on your device. You have full control over what information to share with the community, and can choose to keep your hikes completely private or share them with selected friends.",
    },
    {
      question: "Can I use Trekmate internationally?",
      answer:
        "Yes! Trekmate has trail data and maps for over 50 countries. You can download maps for international destinations and use all features offline. We're constantly expanding our global coverage based on user requests.",
    },
    {
      question: "What emergency features does Trekmate include?",
      answer:
        "Trekmate includes an SOS feature that can send your location to emergency contacts and local rescue services. It works even in areas with poor cell coverage by using satellite communication. You can also set up automatic check-ins and emergency alerts.",
    },
    {
      question: "How accurate is the trail difficulty rating?",
      answer:
        "Our difficulty ratings are based on multiple factors including elevation gain, technical difficulty, weather conditions, and user feedback. We use a standardized system and constantly update ratings based on current trail conditions and community input.",
    },
    {
      question: "Can I create custom routes?",
      answer:
        "Pro users can create custom routes using our advanced planning tools. The AI-powered system considers factors like fitness level, weather, and trail conditions to suggest optimal routes. You can also modify existing trails and share your custom routes with the community.",
    },
    {
      question: "What if I need help during my trial?",
      answer:
        "We offer comprehensive support during your free trial, including live chat, detailed tutorials, and community forums. Our support team consists of experienced hikers who understand your needs and can help you get the most out of Trekmate.",
    },
    {
      question: "How do group features work?",
      answer:
        "Group leaders can invite team members, share real-time locations, set waypoints, and communicate through the app. Everyone in the group can see the planned route, current positions, and important updates. It's perfect for hiking clubs, guided tours, and family adventures.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="shadow" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Trekmate
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          variant="bordered"
          selectionMode="multiple"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={faq.question}
              title={
                <span className="text-lg text-gray-900">{faq.question}</span>
              }
              className="bg-white rounded-lg px-6 border shadow-sm"
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Support Call-to-Action */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-sm">
          <MessageCircle className="h-12 w-12 text-[#38e078] mx-auto mb-4" />
          <h3 className="text-xl mb-2 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you get started
          </p>
          <Button className="bg-[#38e078] hover:bg-[#32c96d] text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
