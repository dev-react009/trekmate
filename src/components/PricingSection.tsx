'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,Button ,Badge ,Switch
} from "@heroui/react";
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import { Switch } from './ui/switch';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Explorer',
      description: 'Perfect for casual hikers',
      price: { monthly: 0, annual: 0 },
      features: [
        'Basic trail maps',
        'GPS tracking',
        'Community access',
        'Up to 10 saved trails',
        'Basic weather info'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Adventurer',
      description: 'For serious outdoor enthusiasts',
      price: { monthly: 9.99, annual: 7.99 },
      features: [
        'Offline topographic maps',
        'Advanced route planning',
        'Unlimited saved trails',
        'Detailed weather forecasts',
        'Peak tracking & achievements',
        'Priority community support',
        'Photo storage (10GB)'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Pro Guide',
      description: 'For guides and expedition leaders',
      price: { monthly: 19.99, annual: 15.99 },
      features: [
        'Everything in Adventurer',
        'Group management tools',
        'Emergency SOS features',
        'Custom route creation',
        'Advanced analytics',
        'Team collaboration',
        'Photo storage (100GB)',
        'API access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section  className="py-24 px-4 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="flat" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Choose your adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and upgrade as your adventures grow. All plans include our core safety features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <Switch checked={isAnnual} onChange={(e)=>{setIsAnnual}} />
            <span className={`${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Annual</span>
            <Badge variant="faded" className="ml-2">Save 20%</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular ? 'border-[#38e078] shadow-lg scale-105' : 'border-gray-200 hover:border-[#38e078]/50'
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#38e078]">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-500">
                      /{isAnnual ? 'month' : 'year'}
                    </span>
                  )}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-[#38e078] hover:bg-[#32c96d]' : ''}`}
                  variant={plan.popular ? 'solid' : 'ghost'}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-[#38e078] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 14-day free trial</p>
          <Button variant="ghost">View Feature Comparison →</Button>
        </div>
      </div>
    </section>
  );
}