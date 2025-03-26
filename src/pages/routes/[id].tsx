import { DescTeam } from "@/components/(id_container)/Desc_Team";
import { Description } from "@/components/(id_container)/Description";
import { Information } from "@/components/(id_container)/Information";
import { Teams_Table } from "@/components/(id_container)/table/Teams_Table";
import { Container } from "@/components/container/Container"
import { Typography } from "@/ui/Typography";
import { demoItems } from "@/utils/flowing_menu_data/Flowing_Menu_Data"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ItemPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const item = demoItems.find(item => item.id === parseInt(id as string))

    if (!item) {
        return (
            <Container py={120} className="h-[73vh]">
                <h1>Item not found</h1>
            </Container>
        )
    }

    return (
        <>
            <Container py={60} className="h-full text-white">
                <Typography balise="h1" color="white" fontFamily="Serpent">{item.text}</Typography>
            </Container>
            <div className="relative h-[500px]">
                <Image src={item.image} alt={item.text} fill className="absolute object-cover" />
            </div>
            <Information item={item} />
            <Description desc={item.description} reserveLink={item.link} />
            <div className="relative w-full h-max">
            <Image src="/img/png/boat-and-submarine.png" alt="boat and submarine" width={550} height={2000} className="absolute hidden lg:block top-[40px] z-0 right-[10px] object-contain" />
            <Container className="h-full hidden lg:block text-white pb-86">
                <Typography balise="h2" color="white">Équipe du bateau</Typography>
            </Container>
            <Container py={60} className="h-full block lg:hidden text-white">
                <Typography balise="h3" color="white">Équipe du bateau</Typography>
            </Container>
            <DescTeam desc={item.boatTeam} align="left"/>
            <Container py={60} className="h-full text-white">
                <Typography balise="h2" color="white" className="hidden lg:block text-center">Équipe de la navette</Typography>
                <Typography balise="h3" color="white" className="block lg:hidden">Équipe de la navette</Typography>
            </Container>
            <DescTeam desc={item.navetteTeam} align="right"/>
            </div>
            <Teams_Table/>
        </>
    )
}

{/* <p>Link: {item.link}</p>
<p>playTime: {item.playTime}</p>
<p>numberPlayers: {item.numberPlayers}</p>
<p>difficulty: {item.difficulty}</p>
<p>Description: {item.description}</p>
<p>boatTeam: {item.boatTeam}</p>
<p>navetteTeam: {item.navetteTeam}</p> */}