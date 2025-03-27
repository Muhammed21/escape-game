import { Typography } from "@/ui/Typography";
import { Container } from "../container/Container";
import { CTA } from "@/ui/CTA";

interface FaqHeaderProps {
  t: (key: string) => string;
}

export const FaqHeader = ({ t }: FaqHeaderProps) => {
  return (
    <Container
      py={60}
      className="flex flex-col items-center justify-center gap-8"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <Typography balise="h2" color="white">
          {t("title")}
        </Typography>
        <Typography balise="h3" color="white" className="w-full">
          {t("description")}
        </Typography>
      </div>
      <CTA
        variant="tertiary"
        rounded="basic"
        href="https://bit.ly/SaveYourBuddy"
      >
        Prendre ma place
      </CTA>
    </Container>
  );
};
