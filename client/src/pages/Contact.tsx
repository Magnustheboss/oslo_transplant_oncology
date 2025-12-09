import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Whether you are a patient, referring physician, or researcher interested in collaboration, we welcome your inquiry.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                        <p className="text-slate-600">
                          Oslo University Hospital, Rikshospitalet<br />
                          Sognsvannsveien 20<br />
                          0372 Oslo, Norway
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                        <p className="text-slate-600">
                          transplant-oncology@ous-hf.no
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          For general inquiries and research collaboration
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                        <p className="text-slate-600">
                          +47 23 07 00 00
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Main switchboard - ask for Department of Transplantation Medicine
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                        <p className="text-slate-600">
                          Monday - Friday: 08:00 - 16:00 CET
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-primary mb-3">For Patients</h3>
                <p className="text-slate-700 mb-4">
                  If you are a patient seeking evaluation for one of our trials, please have your treating physician contact us directly. Referrals should include recent imaging and medical history.
                </p>
                <Button variant="outline" className="bg-white border-blue-200 text-primary hover:bg-blue-50">
                  Patient Referral Guidelines
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-md h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Send us a Message</h3>
                  <p className="text-slate-500 mb-8">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                      <Input id="subject" placeholder="Research Collaboration Inquiry" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                    </div>

                    <Button type="submit" className="w-full h-12 text-lg font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
