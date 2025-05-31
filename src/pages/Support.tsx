import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UserNavbar from "@/components/UserNavbar";
import { HelpCircle, MessageCircle, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "Come back soon!",
    });
    navigate("/");
  };

  const faqs = [
    {
      id: 1,
      question: "How do I book a bike?",
      answer: "Simply log into your account, browse available bikes near you, and click 'Book Now'. You can unlock the bike using our app when you arrive at the station."
    },
    {
      id: 2,
      question: "What are the rental rates?",
      answer: "Our standard rate is $3.50 per hour. We also offer daily passes for $15 and monthly memberships starting at $25. Students get a 20% discount!"
    },
    {
      id: 3,
      question: "How do I earn loyalty points?",
      answer: "You earn 1 point for every dollar spent on bike rentals. Bonus points are awarded for longer rides and eco-friendly challenges. Points never expire!"
    },
    {
      id: 4,
      question: "What if I encounter a problem with my bike?",
      answer: "If you experience any issues, please contact our support team immediately through the app or call our 24/7 helpline. We'll assist you right away and ensure your safety."
    },
    {
      id: 5,
      question: "Can I return the bike to any station?",
      answer: "Yes! You can return your bike to any Bikexify station across the city. Just make sure to properly dock the bike and confirm the return in our app."
    },
    {
      id: 6,
      question: "What safety equipment is provided?",
      answer: "All bikes come with built-in lights and reflectors. We also provide complimentary helmets at all stations, though we encourage bringing your own for the best fit."
    }
  ];

  const handleFaqToggle = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our friendly support team
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team</p>
              <Button className="bg-sky-600 hover:bg-sky-700 text-white">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">24/7 phone support available</p>
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">
                (555) 123-BIKE
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-sky-600" />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
                <CardDescription>
                  Quick answers to common questions about Bikexify
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => handleFaqToggle(faq.id)}
                        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {expandedFaq === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {expandedFaq === faq.id && (
                        <div className="px-4 pb-3 text-gray-600 border-t border-gray-200">
                          <p className="pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Can't find what you're looking for? Drop us a line and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        className="border-gray-300 focus:border-sky-500 focus:ring-sky-500"
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
                        onChange={handleContactChange}
                        className="border-gray-300 focus:border-sky-500 focus:ring-sky-500"
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
                      onChange={handleContactChange}
                      className="border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={handleContactChange}
                      className="border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
