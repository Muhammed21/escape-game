import { Typography } from "@/ui/Typography";
import { Container } from "../container/Container";
import { CTA } from "@/ui/CTA";
import { Faq } from "./faq";

export const Faq_Container = () => {
  return (
    <Container
      py={120}
      className="flex flex-col items-center justify-center gap-16"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <Typography balise="h2" color="white">
          Save your buddy
        </Typography>
        <Typography balise="h3" color="white" className="w-full">
          Save your Buddy est un escape game immersif au cœur des fonds marins,
          entre bancs de poissons, épaves mystérieuses et récifs colorés... mais
          l&apos;air se fait rare et le temps s&apos;écoule plus vite que prévu !
        </Typography>
      </div>
      <CTA variant="tertiary" rounded="basic">
        Prendre ma place
      </CTA>
      <Faq question="Qu'est ce qu'un escape game ?" answer="Un escape game est un jeu d’aventure immersif où les participants sont enfermés dans une pièce ou un espace thématique. Ils doivent résoudre des énigmes, trouver des indices et accomplir des missions pour s'échapper ou atteindre un objectif dans un temps limité. C'est un mélange de réflexion, de travail d'équipe et d'exploration." />
      <Faq question="Serai-je enfermé dans une pièce ?" answer="Oui, mais pas de panique, si vous avez peur, nous pouvons vous ouvrir ou encore laisser ouvert !" />
      <Faq question="Combien de temps dure le jeu ?" answer="Chaque escape game dure 30 minutes, mais nous avons un concept un peu particulier car nous laissons l'ensemble de nos clients finir les salles (dans la mesure du possible)." />
      <Faq question="Puis-je jouer plusieurs salles ?" answer="Pour cette évènement, nous avons préparer seulement une seule salle dans un certains thème avec des épreuves en lien avec." />
      <Faq question="D'autres personnes seront-elles dans la pièce avec nous ?" answer="Non, seulement votre équipe se trouveront dans la salle, mais vous seriez aidé d’un gamemaster (maître de jeu) qui vous accompagnera le temps de votre jeu." />
      <Faq question="Dois-je apporter quelque chose ?" answer="Non, aucun objet n’est demandé. Tous vous sera fournie lors de votre expérience." />
      <Faq question="Est-ce qu'il y a une limite d'âge?" answer="Oui, nous acceptons des personnes de 6 à 70 ans, pour des mesures de sécurité et de connaissance." />
    </Container>
  );
};
