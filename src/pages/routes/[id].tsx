import { Container } from "@/components/container/Container"
import { demoItems } from "@/utils/flowing_menu_data/Flowing_Menu_Data"
import { useSearchParams } from "next/navigation";

export default function ItemPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

  const item = demoItems.find(item => item.id === parseInt(id as string))
  console.log(id)
  console.log(item)

  if (!item) {
    return(
        <Container py={120} className="h-[73vh]">
          <h1>Item not found</h1>
        </Container>
    )
  }

  return (
    <Container py={120} className="h-full text-white">
      <h1>{item.text}</h1>
      <img src={item.image} alt={item.text} />
      <p>Link: {item.link}</p>
      <p>playTime: {item.playTime}</p>
      <p>numberPlayers: {item.numberPlayers}</p>
      <p>difficulty: {item.difficulty}</p>
      <p>Description: {item.description}</p>
      <p>boatTeam: {item.boatTeam}</p>
      <p>navetteTeam: {item.navetteTeam}</p>
    </Container>
  )
}