import { Typography } from "@/ui/Typography";
import { Container } from "../container/Container";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Instruction = () => {
  const t = useTranslations("instrcutions");
  const steps = ["steps.1", "steps.2", "steps.3"] as const;

  // const [instruction] = useState<InstructionProps[]>(
  //   Array.isArray(steps) ? steps : []
  // );

  return (
    <Container
      py={120}
      className="flex w-full flex-col items-center justify-center gap-20"
    >
      <Typography balise="h2" color="white">
        {t("title")}
      </Typography>
      <div className="flex flex-col sm:flex-row gap-16 w-full sm:gap-[var(--margin-x)] items-center justify-between">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 sm:gap-8"
          >
            <Image
              src={t(`${item}.icon`)}
              alt={t(`${item}.nom`)}
              width={150}
              height={150}
              className="hidden md:block"
            />
            <Image
              src={t(`${item}.icon`)}
              alt={t(`${item}.nom`)}
              width={150 / 2}
              height={150 / 2}
              className="block md:hidden"
            />
            <Typography balise="h4" color="white">
              {t(`${item}.nom`)}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};
