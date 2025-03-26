import Image from "next/image"
import { Container } from "../container/Container"

interface InfoProps {
    item: any
}

export const Information = ({item}:InfoProps) => {
    return(
        <Container py={60} className="h-full text-white">
        <div className="flex w-full gap-[var(--margin-x)] items-center justify-between">
            <div className="flex flex-col items-center justify-center gap-8">
                <Image
                    src={item.playIcon}
                    alt={item.playIcon}
                    width={120}
                    height={120}
                    className="hidden sm:block"
                />
                <Image
                    src={item.playIcon}
                    alt={item.playIcon}
                    width={75}
                    height={75}
                    className="block sm:hidden"
                />
                {item.playTime}
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <Image
                    src={item.personneIcon}
                    alt={item.personneIcon}
                    width={120}
                    height={120}
                    className="hidden sm:block"
                />
                <Image
                    src={item.personneIcon}
                    alt={item.personneIcon}
                    width={75}
                    height={75}
                    className="block sm:hidden"
                />
                {item.numberPlayers}
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
                <Image
                    src={item.difficultyIcon}
                    alt={item.difficultyIcon}
                    width={120}
                    height={120}
                    className="hidden sm:block"
                />
                <Image
                    src={item.difficultyIcon}
                    alt={item.difficultyIcon}
                    width={75}
                    height={75}
                    className="block sm:hidden"
                />
                {item.difficulty}
            </div>
        </div>
    </Container>
    )
}