import { Container } from "./styles";

interface ImageCardProps {
  path: string;
  text: string;
  alt: string;
}

function ImageCard({ path, text, alt }: ImageCardProps) {
  return (
    <Container>
      <img src={path} alt={alt} />
      <p>{text}</p>
    </Container>
  );
}

export default ImageCard;
