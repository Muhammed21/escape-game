import { Typography } from "@/ui/Typography";
import { Container } from "../container/Container";

interface TeamProps {
  key?: number;
  desc: string;
  align: "left" | "right";
}

export const DescTeam = ({ desc, align }: TeamProps) => {
  let alignStyle: string = "";

  switch (align) {
    case "left":
      alignStyle = "text-start z-10";
      break;
    case "right":
      alignStyle = "text-end z-10";
      break;
  }
  return (
    <Container py={10}>
      <Typography balise="h4" color="white" className={alignStyle}>
        {desc}
      </Typography>
    </Container>
  );
};
