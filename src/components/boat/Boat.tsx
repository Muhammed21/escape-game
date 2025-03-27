import { Typography } from "@/ui/Typography";
import Image from "next/image";
import { Container } from "../container/Container";
import { useTranslations } from "next-intl";

export const Boat = () => {
  const t = useTranslations("boat");
  return (
    <Container
      py={120}
      className="flex gap-11 flex-col items-center justify-center w-full h-max"
    >
      <Typography balise="h3" color="white">
        {t("title")}
      </Typography>
      <Image
        src="/img/png/boat.png"
        alt="Boat Image"
        width={600}
        height={170}
      />
    </Container>
  );
};
