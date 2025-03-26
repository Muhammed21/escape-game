import { Container } from "@/components/container/Container"
import { Typography } from "@/ui/Typography"
import { Footer_Data_Bottom, Footer_Data_Top } from "@/utils/footer/Footer_Data"
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { useState } from "react"

type FormDataType = {
    title: string,
    redirectTo: string
}

export const Footer = () => {
    const [formDataTop] = useState<FormDataType[]>(Footer_Data_Top)
    const [formDataBottom] = useState<FormDataType[]>(Footer_Data_Bottom)

    return (
        <Container py={10} className="flex flex-col gap-2.5 w-full bg-semi-black">
            <div className="flex flex-col md:flex-row w-full h-max items-center justify-between">
                {formDataTop.map((dataTop, index) => (
                    <Typography balise="a" mirror="h4" href={dataTop.redirectTo} color="white" key={index}>{dataTop.title}</Typography>
                ))}
            </div>
            <div className="flex flex-col gap-2.5 md:gap-0 md:flex-row w-full h-max items-center justify-between">
                {formDataBottom.map((dataBottom, index) => (
                    <Typography balise="a" mirror="h4" href={dataBottom.redirectTo} color="white" className="underline" key={index}>{dataBottom.title}</Typography>
                ))}
                <div className="flex gap-2.5 w-full items-center justify-center md:justify-end">
                    <Typography balise="a" mirror="h3" color="white" href="/">
                        <FaInstagram color="white" />
                    </Typography>
                    <Typography balise="a" mirror="h3" color="white" href="/">
                        <PiTiktokLogo color="white" />
                    </Typography>

                </div>
            </div>
        </Container>
    )
}