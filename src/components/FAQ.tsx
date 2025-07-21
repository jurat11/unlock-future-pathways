import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Kimlar Accepted dasturiga kirishi mumkin?",
      answer: "Bizning dastur oliy ta'limni jiddiy ko'radigan barcha talabalarga ochiq. Qishloq yoki shahardan bo'lishingizdan qat'iy nazar, dasturimiz har qanday fonda muvaffaqiyat qozonishingizga yordam beradi."
    },
    {
      question: "Bu dastur bepul manbalardan nimasi bilan farq qiladi?",
      answer: "Biz bepul ta'limga ishonamiz, lekin Accepted dasturi shaxsiy mentorlik, jonli interaktiv sessiyalar, to'liq o'quv materiallari, test sinovlari va bepul manbalarda topilmaydigan individual yo'l-yo'riqni taklif qiladi."
    },
    {
      question: "Dasturni tugatish uchun qancha vaqt kerak?",
      answer: "To'liq dastur 16 hafta davom etadi, haftada 3 ta sessiya bilan. Har bir sessiya oldingi ustiga quriladi va qabul maqsadlaringiz uchun to'liq tayyorgarlikni ta'minlaydi."
    },
    {
      question: "To'lov rejalari yoki stipendiyalar bormi?",
      answer: "Ha! Biz moslashuvchan to'lov rejalarini va moliyaviy ehtiyojini ko'rsatgan talabalar uchun ehtiyojga asoslangan stipendiyalarni taklif qilamiz. Maqsadimiz sifatli ta'limni hammaga ochiq qilish."
    },
    {
      question: "Agar dasturdan norozi bo'lsam nima bo'ladi?",
      answer: "Biz 30 kunlik pul qaytarish kafolatini taklif qilamiz. Agar dastlabki 30 kun ichida dasturdan to'liq norozi bo'lsangiz, hech qanday savol berilmagan holda to'liq qaytarib beramiz."
    },
    {
      question: "Dastur tugagandan keyin ham yordam olaman?",
      answer: "Albatta! Sizda bizning bitiruvchilar tarmog'iga, kurs materiallariga umrbod kirish huquqi bo'ladi va qo'shimcha mentorlik sessiyalarini belgilashingiz mumkin. Biz sizning uzoq muddatli muvaffaqiyatingizga sodiqmiz."
    },
    {
      question: "Jonli sessiyalar qanday ishlaydi?",
      answer: "Jonli sessiyalar bizning ta'lim platformamiz orqali onlayn o'tkaziladi. Ular interaktiv bo'lib, real vaqtda savol berishingizga imkon beradi. Barcha sessiyalar yozib olinadi, shuning uchun keyinroq ko'rib chiqishingiz mumkin."
    },
    {
      question: "Dastur uchun qanday texnologiya kerak?",
      answer: "Sizga internet ulanishi bo'lgan kompyuter yoki planshet kerak bo'ladi. Bizning platformamiz barcha zamonaviy brauzerlarda ishlaydi va to'liq ishtirok etishingizni ta'minlash uchun texnik yordam berамiz."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ko'p <span className="text-primary">berilgan savollar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bizning Accepted dasturi haqida eng ko'p soraladigan savollarga javoblar.
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