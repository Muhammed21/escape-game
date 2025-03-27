import { Container } from "../container/Container";
import { Faq } from "./faq";
import { useTranslations } from "next-intl";

export const Faq_Container = () => {
  const t = useTranslations("faq");
  const faqs = [
    "questions.1",
    "questions.2",
    "questions.3",
    "questions.4",
    "questions.5",
    "questions.6",
    "questions.7",
  ];
  return (
    <Container
      py={120}
      className="flex flex-col items-center justify-center gap-16"
    >
      {faqs.map((faq) => (
        <Faq
          key={faq}
          question={t(`${faq}.question`)}
          answer={t(`${faq}.answer`)}
        />
      ))}
    </Container>
  );
};
