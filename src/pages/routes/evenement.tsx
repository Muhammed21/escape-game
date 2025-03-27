import { DescTeam } from "@/components/(id_container)/Desc_Team";
import { Container } from "@/components/container/Container";
import { Typography } from "@/ui/Typography";
import Image from "next/image";

export default function evenement() {
  return (
    <>
      <Container py={60} className="flex flex-col gap-5 h-full text-white">
        <Typography balise="h1" color="white">
          L&apos;événement
        </Typography>
        <Typography balise="h4" color="white" className="text-center">
          La surpêche et la destruction des écosystèmes marins
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
        <DescTeam
          desc="La surpêche se produit lorsque les poissons et autres organismes marins sont capturés à un rythme plus rapide que leur capacité à se reproduire. Aujourd’hui, 34% des stocks mondiaux de poissons sont surexploités, et environ 60% sont exploités à leur maximum. Certaines espèces comme le thon rouge, le cabillaud ou certaines raies sont en danger critique. Mais la surpêche ne menace pas seulement certaines espèces : elle détruit des écosystèmes entiers, bouleversant la chaîne alimentaire et fragilisant la biodiversité marine."
          align="left"
        />
        <DescTeam
          desc="Pour lutter contre la surpêche et protéger les écosystèmes marins, il est essentiel de favoriser la pêche durable en choisissant du poisson labellisé MSC ou ASC, et en consommant des espèces moins menacées, comme le maquereau plutôt que le thon rouge. La création et le respect des zones marines protégées permettent aux populations de poissons de se reconstituer naturellement. Il est également crucial d’encadrer les techniques de pêche en interdisant le chalutage profond et les filets dérivants, tout en limitant les quotas pour éviter une exploitation excessive. Enfin, soutenir la pêche artisanale et locale en privilégiant les circuits courts et les techniques respectueuses de l’environnement contribue à une gestion plus équilibrée des ressources marines."
          align="right"
        />
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
          Pourquoi c’est important ?
        </Typography>
        <Typography balise="h3" color="white" className="text-center">
          Si rien n’est fait, nos océans pourraient être vidés de leurs poissons
          d’ici 2050. Mais si nous agissons maintenant, nous pouvons préserver
          la biodiversité marine et assurer une pêche durable pour les
          générations futures.
        </Typography>
      </Container>
    </>
  );
}
