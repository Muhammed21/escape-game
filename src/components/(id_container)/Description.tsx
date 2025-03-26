import { CTA } from "@/ui/CTA";
import { Typography } from "@/ui/Typography";
import Image from "next/image";
import { Container } from "../container/Container";

interface DescProps {
    desc: string;
    reserveLink: string;
}

export const Description = ({ desc, reserveLink }: DescProps) => {
   return(
    <Container className="flex flex-col md:flex-row gap-4 w-full h-max items-start justify-between">
        <Typography balise="h4" color="white">{desc}</Typography>
        <div className="flex flex-col gap-6 items-center justify-center">
            <div className="relative w-[186px] aspect-square">
                <Image src="/img/png/boat2.png" alt="boat2" fill className="abolute object-cover"/>
            </div>
            <CTA variant="tertiary" rounded="full" href={reserveLink}>Réserver</CTA>
        </div>
    </Container>
   ) 
}