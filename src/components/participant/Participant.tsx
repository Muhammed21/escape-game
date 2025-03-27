import { Container } from "../container/Container";
import { Typography } from "@/ui/Typography";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Participant = () => {
  // const [participants] = useState<ParticipantProps[]>(Participant_Data);
  const t = useTranslations("participant");
  const participants = ["1", "2", "3", "4"] as const;

  return (
    <Container className="relative w-full h-max flex items-center justify-between">
      <Image
        src="/img/png/participant_screen.png"
        alt="bg screen"
        fill
        className="object-cover z-0"
      />
      <div className="hidden md:flex items-center max-w-[500px] w-full h-max justify-center gap-5 rotate-[-90deg]">
        <hr className="w-full border-r border-white" />
        <div className="w-max">
          <Typography balise="h3" color="white" className="w-max">
            {t("title")}
          </Typography>
        </div>
      </div>
      <div className="flex z-20 py-4 md:py-0 w-full flex-col gap-20 items-start justify-center">
        {participants.map((participant, index) => (
          <div key={index} className="flex items-center justify-center gap-8">
            <Image
              src={t(`${participant}.icon`)}
              alt={t(`${participant}.nom`)}
              width={120}
              height={120}
              className="hidden md:block"
            />
            {/* FOR MD SCREEN */}
            <Image
              src={t(`${participant}.icon`)}
              alt={t(`${participant}.nom`)}
              width={120 / 2}
              height={120 / 2}
              className="block md:hidden"
            />
            <Typography balise="h4" color="white">
              {t(`${participant}.nom`)}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};
