import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who is eligible for the premium admission course?",
      answer: "Our course is open to all students who are serious about pursuing higher education. Whether you're from rural or urban areas, our program is designed to help you succeed regardless of your background."
    },
    {
      question: "What makes this course different from free resources?",
      answer: "While we believe in free education, our premium course offers personalized mentorship, live interactive sessions, comprehensive study materials, mock tests, and one-on-one guidance that you won't find in free resources."
    },
    {
      question: "How long does the course take to complete?",
      answer: "The complete program is 16 weeks long, with 3 sessions per week. Each session is designed to build upon the previous one, ensuring comprehensive preparation for your admission goals."
    },
    {
      question: "Do you offer payment plans or scholarships?",
      answer: "Yes! We offer flexible payment plans and need-based scholarships for students who demonstrate financial need. Our goal is to make quality education accessible to everyone."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "Will I get ongoing support after course completion?",
      answer: "Absolutely! You'll have lifetime access to our alumni network, course materials, and can schedule follow-up mentorship sessions. We're committed to your long-term success."
    },
    {
      question: "How do the live sessions work?",
      answer: "Live sessions are conducted online through our learning platform. They're interactive, allowing you to ask questions in real-time. All sessions are recorded, so you can review them later."
    },
    {
      question: "What technology do I need for the course?",
      answer: "You'll need a computer or tablet with internet access. Our platform works on all modern browsers, and we provide technical support to ensure you can participate fully."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our premium admission course.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;