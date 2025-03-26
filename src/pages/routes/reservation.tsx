import { Container } from "@/components/container/Container";
import { ReservationForm } from "@/components/reservation_container/reservation_form";
import { Typography } from "@/ui/Typography";

export default function reservation() {
  return (
    <Container className="h-[93vh]">
        <Typography balise="h1" color="white">Réservation</Typography>
        <ReservationForm/>
    </Container>
  );
}