import { DescTeam } from "@/components/(id_container)/Desc_Team";
import { Container } from "@/components/container/Container";
import { Typography } from "@/ui/Typography";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Evenement() {
  const t = useTranslations("event");
  const discussion = ["discussion.1", "discussion.2"] as const;
  return (
    <>
      <Container py={60} className="flex flex-col gap-5 h-full text-white">
        <Typography balise="h1" color="white">
          {t("title")}
        </Typography>
        <Typography balise="h4" color="white" className="text-center">
          {t("description")}
        </Typography>
      </Container>
      <div className="relative h-[500px]">
        <Image
          src="/img/png/fish.png"
          alt="fish img"
          fill
          className="absolute object-cover"
        />
      </div>
      <div className="flex flex-col gap-10 py-14">
        {discussion.map((discussion, index) => (
          <DescTeam
            key={index}
            desc={t(`${discussion}.desc`)}
            align={t(`${discussion}.align`) as "left" | "right"}
          />
        ))}
      </div>
      <div className="relative h-[500px]">
        <Image
          src="/img/png/boat3.png"
          alt="fish img"
          fill
          className="absolute object-cover"
        />
      </div>
      <Container
        py={120}
        className="flex w-full flex-col gap-16 items-center justify-center"
      >
        <Typography balise="h2" color="white">
          {t("footerTitle")}
        </Typography>
        <Typography balise="h3" color="white" className="text-center">
          {t("footerDesc")}
        </Typography>
      </Container>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
}
