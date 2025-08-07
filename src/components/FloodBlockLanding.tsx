import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Shield, Clock, Wrench, Leaf, Droplets, Home, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react";

const FloodBlockLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyType: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Forms submission URL - user needs to replace with their form URL
    const googleFormUrl = "YOUR_GOOGLE_FORM_URL_HERE";
    
    try {
      // Create form data for Google Forms
      const formDataToSend = new FormData();
      formDataToSend.append("entry.NAME_FIELD", formData.name);
      formDataToSend.append("entry.EMAIL_FIELD", formData.email);
      formDataToSend.append("entry.PHONE_FIELD", formData.phone);
      formDataToSend.append("entry.MESSAGE_FIELD", formData.message);
      formDataToSend.append("entry.PROPERTY_TYPE_FIELD", formData.propertyType);

      await fetch(googleFormUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      });

      toast({
        title: "Enquiry Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", phone: "", message: "", propertyType: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send enquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const wpcBenefits = [
    {
      icon: <Droplets className="h-6 w-6 text-flood-water" />,
      title: "100% Waterproof",
      description: "WPC material is completely waterproof and won't absorb moisture"
    },
    {
      icon: <Shield className="h-6 w-6 text-protection-green" />,
      title: "Weather Resistant",
      description: "Withstands extreme weather conditions and UV exposure"
    },
    {
      icon: <Leaf className="h-6 w-6 text-protection-green" />,
      title: "Eco-Friendly",
      description: "Made from recycled wood fibers and plastic, sustainable choice"
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "Low Maintenance",
      description: "No painting, sealing, or staining required. Easy to clean"
    }
  ];

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "2-Minute Installation",
      description: "Quick and easy setup during flood emergencies"
    },
    {
      icon: <Shield className="h-8 w-8 text-protection-green" />,
      title: "Permanent Frame",
      description: "U-shaped frame stays attached to your openings"
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Universal Fit",
      description: "Suitable for doors, windows, and any openings"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-protection-green" />,
      title: "Secure Lock",
      description: "Locks firmly in place for maximum protection"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-flood-water to-accent py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Revolutionary Flood Protection
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              FloodBlock
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Protect your property in just 2 minutes with our innovative WPC flood barrier system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-[var(--shadow-cta)]">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-flood-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose FloodBlock?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced protection with minimal effort - your property's first line of defense
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-secondary rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WPC Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">WPC Material Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wood-Plastic Composite technology provides superior performance and durability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wpcBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 p-6 bg-secondary rounded-full w-fit group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-flood-blue-light to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How FloodBlock Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, effective protection in three easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Permanent Installation</h3>
              <p className="text-muted-foreground">U-shaped frame is professionally installed around your openings once</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Emergency Activation</h3>
              <p className="text-muted-foreground">When flood warning issued, simply insert the barrier into the frame</p>
            </div>
            
            <div className="text-center">
              <div className="bg-protection-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Secure Protection</h3>
              <p className="text-muted-foreground">Lock mechanism secures barrier - your property is now protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Brisbane, QLD",
                rating: 5,
                text: "FloodBlock saved our home during the last flood. Installation was quick and it worked perfectly!"
              },
              {
                name: "Michael Chen",
                location: "Sydney, NSW",
                rating: 5,
                text: "Best investment we've made. Peace of mind knowing we can protect our property in minutes."
              },
              {
                name: "Emma Williams",
                location: "Melbourne, VIC",
                rating: 5,
                text: "The WPC material is fantastic - no maintenance required and looks great too."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-[var(--shadow-card)]">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning-orange text-warning-orange" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Enquiry Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-flood-water text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
              <p className="text-xl opacity-90">
                Protect your property with FloodBlock. Fill out the form below for a personalized quote.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>1800 FLOOD BLOCK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span>info@floodblock.com.au</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>Servicing Australia Wide</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>5-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Australian made WPC material</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>24/7 emergency support</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Request Free Quote</CardTitle>
                  <CardDescription className="text-white/80">
                    Get a personalized quote for your property
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Input
                      placeholder="Property Type (e.g., Residential, Commercial)"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Textarea
                      placeholder="Tell us about your flood protection needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[100px]"
                    />
                    <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
                      Send Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">FloodBlock</h3>
          <p className="text-background/80 mb-4">Protecting Australian homes and businesses since 2024</p>
          <p className="text-sm text-background/60">
            © 2024 FloodBlock. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FloodBlockLanding;