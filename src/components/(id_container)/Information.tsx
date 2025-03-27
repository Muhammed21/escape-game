import Image from "next/image";
import { Container } from "../container/Container";

interface InfoProps {
  item: {
    playIcon: string;
    personneIcon: string;
    difficultyIcon: string;
    playTime: string;
    numberPlayers: string;
    difficulty: string;
  };
}

export const Information = ({ item }: InfoProps) => {
  return (
    <Container py={60} className="h-full text-white">
      <div className="flex flex-col sm:flex-row w-full gap-[var(--margin-x)] items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <div className="relative w-[120px] h-[120px] hidden sm:block">
            <Image
              src={item.playIcon}
              alt={item.playIcon}
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="relative w-[75px] h-[75px] block sm:hidden">
            <Image
              src={item.playIcon}
              alt={item.playIcon}
              fill
              className="absolute object-cover"
            />
          </div>
          {item.playTime}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <div className="relative w-[150px] h-[150px] hidden sm:block">
            <Image
              src={item.personneIcon}
              alt={item.personneIcon}
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="relative w-[75px] h-[75px] block sm:hidden">
            <Image
              src={item.personneIcon}
              alt={item.personneIcon}
              fill
              className="absolute object-contain"
            />
          </div>
          {item.numberPlayers}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <div className="relative w-[120px] h-[120px] hidden sm:block">
            <Image
              src={item.difficultyIcon}
              alt={item.difficultyIcon}
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="relative w-[75px] h-[75px] block sm:hidden">
            <Image
              src={item.difficultyIcon}
              alt={item.difficultyIcon}
              fill
              className="absolute object-contain"
            />
          </div>
          {item.difficulty}
        </div>
      </div>
    </Container>
  );
};
