import { useState } from "react";
import { Mail, Clock, Globe, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  newsletter: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      ageGroup: "",
      subject: "",
      message: "",
      newsletter: false,
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your question! We will get back to you within 24-48 hours.",
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  const faqs = [
    {
      question: "Do I need prior programming experience?",
      answer: "Not necessarily! We have resources for complete beginners starting with visual programming tools like Scratch."
    },
    {
      question: "Which programming language should I start with?",
      answer: "Python is highly recommended for AI due to its simplicity and extensive AI libraries."
    },
    {
      question: "How long does it take to learn AI basics?",
      answer: "With consistent effort, you can grasp fundamentals in 2-3 months. Mastery takes years of practice!"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="text-center mb-12" hidden>
          <h2 className="text-3xl font-bold text-slate-800 mb-4" hidden>
            <Mail className="inline text-secondary mr-3" />
            Have Questions? We're Here to Help!
          </h2>
          <p className="text-xl text-slate-600">
            Submit your AI-related doubts and our educational experts will get back to you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {isSubmitted ? (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-8 text-center">
                  <div className="text-green-600 mb-4">
                    <Mail className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600">
                    We'll respond to your question within 24-48 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" hidden>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          {...form.register("firstName")}
                          className="mt-2"
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          {...form.register("lastName")}
                          className="mt-2"
                        />
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        className="mt-2"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="ageGroup">Age Group *</Label>
                      <Select onValueChange={(value) => form.setValue("ageGroup", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="elementary">Grades 5-8 (Ages 10-13)</SelectItem>
                          <SelectItem value="high">Grades 9-12 (Ages 14-17)</SelectItem>
                          <SelectItem value="college">College Student</SelectItem>
                          <SelectItem value="parent">Parent/Guardian</SelectItem>
                          <SelectItem value="educator">Educator</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.ageGroup && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.ageGroup.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        {...form.register("subject")}
                        placeholder="Brief description of your question"
                        className="mt-2"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Your Question/Doubt *</Label>
                      <Textarea
                        id="message"
                        {...form.register("message")}
                        placeholder="Describe your AI-related question in detail..."
                        rows={5}
                        className="mt-2"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter"
                        checked={form.watch("newsletter")}
                        onCheckedChange={(checked) => form.setValue("newsletter", !!checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm text-slate-600">
                        I'd like to receive updates about new AI learning resources and opportunities
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={submitContactMutation.isPending}
                    >
                      {submitContactMutation.isPending ? "Sending..." : "Send Your Question"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-8">
            {/* FAQ Section */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                  <HelpCircle className="text-primary mr-3" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-slate-800">{faq.question}</h4>
                      <p className="text-sm text-slate-600 mt-1">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-secondary/10" hidden>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Mail className="text-secondary mr-3" />
                    <span>support@ailearninghub.edu</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-secondary mr-3" />
                    <span>Response Time: 24-48 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="text-secondary mr-3" />
                    <span>Available worldwide</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
