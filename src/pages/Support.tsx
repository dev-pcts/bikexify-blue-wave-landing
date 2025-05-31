
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';

const faqData = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I rent a bike?',
        answer: 'To rent a bike, simply find a nearby station on our app, select an available bike, and unlock it using your account. Payment is processed automatically through your registered payment method.'
      },
      {
        question: 'What do I need to get started?',
        answer: 'You need to create an account with a valid email, phone number, and payment method. You must be 18 years or older and agree to our terms of service.'
      },
      {
        question: 'How much does it cost?',
        answer: 'Our pricing starts at $15/hour for city bikes, $25/hour for mountain bikes, and $35/hour for electric bikes. We also offer daily and monthly passes for frequent riders.'
      }
    ]
  },
  {
    category: 'Bike Usage',
    questions: [
      {
        question: 'How do I unlock a bike?',
        answer: 'Open the Bikexify app, select a bike from the map, and tap "Unlock". The bike will automatically unlock and your ride will begin.'
      },
      {
        question: 'What if the bike is damaged?',
        answer: 'If you notice any damage before your ride, please report it through the app and select a different bike. If damage occurs during your ride, end your trip immediately and report the issue.'
      },
      {
        question: 'Can I pause my ride?',
        answer: 'Yes, you can pause your ride for up to 15 minutes without additional charges. Simply lock the bike at any designated parking area and select "Pause Ride" in the app.'
      }
    ]
  },
  {
    category: 'Payment & Billing',
    questions: [
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept all major credit cards, debit cards, PayPal, and mobile payment methods like Apple Pay and Google Pay.'
      },
      {
        question: 'When am I charged?',
        answer: 'You are charged when you end your ride. The final amount depends on the duration of your trip and the type of bike used.'
      },
      {
        question: 'What if I was overcharged?',
        answer: 'If you believe there was an error in your billing, please contact our support team with your ride details. We will investigate and process any necessary refunds within 3-5 business days.'
      }
    ]
  }
];

const Support = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Support</h1>
            <p className="text-gray-600">We're here to help you with any questions or issues</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get help via email</p>
                <p className="text-oceanblue-600 font-medium">support@bikexify.com</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-4">Call us directly</p>
                <p className="text-oceanblue-600 font-medium">1-800-BIKEXIFY</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Chat with us now</p>
                <Button className="bg-oceanblue-500 hover:bg-oceanblue-600">Start Chat</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Find answers to common questions</CardDescription>
                </CardHeader>
                <CardContent>
                  {faqData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6">
                      <h3 className="font-semibold text-lg mb-3 text-oceanblue-600">{category.category}</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Send us a message and we'll get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          className="focus:ring-2 focus:ring-oceanblue-500 focus:border-oceanblue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          className="focus:ring-2 focus:ring-oceanblue-500 focus:border-oceanblue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-oceanblue-500 focus:border-oceanblue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={contactForm.message}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-oceanblue-500 focus:border-oceanblue-500"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-oceanblue-500 hover:bg-oceanblue-600">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
