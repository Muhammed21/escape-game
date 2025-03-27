import { DescTeam } from "@/components/(id_container)/Desc_Team";
import { Description } from "@/components/(id_container)/Description";
import { Information } from "@/components/(id_container)/Information";
import { Teams_Table } from "@/components/(id_container)/table/Teams_Table";
import { Container } from "@/components/container/Container";
import { Typography } from "@/ui/Typography";
import { demoItems } from "@/utils/flowing_menu_data/Flowing_Menu_Data";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ItemPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const t = useTranslations("saveyourbuddy.items");
  const items = [id] as const;

  const item = demoItems.find((item) => item.id === parseInt(id as string));

  if (!item) {
    return (
      <Container py={120} className="h-[73vh]">
        <h1>Item not found</h1>
      </Container>
    );
  }

  return (
    <>
      <Container py={60} className="h-full text-white">
        <Typography balise="h1" color="white" fontFamily="Serpent">
          {t(`${items}.text`)}
        </Typography>
      </Container>
      <div className="relative h-[500px]">
        <Image
          src={t(`${items}.image`)}
          alt={t(`${items}.text`)}
          fill
          className="absolute object-cover"
        />
      </div>
      <Information
        item={{
          playIcon: t(`${items}.playIcon`),
          personneIcon: t(`${items}.personneIcon`),
          difficultyIcon: t(`${items}.difficultyIcon`),
          playTime: t(`${items}.playTime`),
          numberPlayers: t(`${items}.numberPlayers`),
          difficulty: t(`${items}.difficulty`),
        }}
      />
      <Description
        desc={t(`${items}.description`)}
        reserveLink={t(`${items}.link`)}
      />
      <div className="relative w-full h-max">
        <Image
          src="/img/png/boat-and-submarine.png"
          alt="boat and submarine"
          width={550}
          height={2000}
          className="absolute hidden lg:block top-[40px] z-0 right-[10px] object-contain"
        />
        <Container className="h-full hidden lg:block text-white pb-86">
          <Typography balise="h2" color="white">
            {t(`${items}.boatTeamName`)}
          </Typography>
        </Container>
        <Container py={60} className="h-full block lg:hidden text-white">
          <Typography balise="h3" color="white">
            {t(`${items}.boatTeamName`)}
          </Typography>
        </Container>
        <DescTeam desc={t(`${items}.boatTeam`)} align="left" />
        <Container py={60} className="h-full text-white">
          <Typography
            balise="h2"
            color="white"
            className="hidden lg:block text-center"
          >
            {t(`${items}.navetteTeamName`)}
          </Typography>
          <Typography balise="h3" color="white" className="block lg:hidden">
            {t(`${items}.navetteTeamName`)}
          </Typography>
        </Container>
        <DescTeam desc={t(`${items}.navetteTeam`)} align="right" />
      </div>
      <Teams_Table />
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
