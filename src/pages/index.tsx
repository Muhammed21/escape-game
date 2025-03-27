import { Faq_Container } from "@/components/faq_container/Faq_Container";
import { FaqHeader } from "@/components/faq_container/Faq_Header";
import { Carrousel } from "@/components/header/Carrousel";
import { Instruction } from "@/components/instruction/Insctruction";
import FlowingMenu from "@/components/navigations/flowing_menu/Flowing_Menu";
import { Participant } from "@/components/participant/Participant";
import { demoItems } from "@/utils/flowing_menu_data/Flowing_Menu_Data";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("faq");
  return (
    <>
      <Carrousel />
      {/* <Boat /> */}
      <FaqHeader t={t} />
      <div className="h-20">
        <FlowingMenu items={demoItems} />
      </div>
      <Instruction />
      <Participant />
      <Faq_Container />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
