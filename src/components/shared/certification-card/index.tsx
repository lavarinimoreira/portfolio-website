import ImageCard from '../image-card';
import { CertificationCardContainer } from './styled';

interface CertificationCardProps {
    image: string;
    certification: string;
    link: string;
}

function CertificationCard({ image, certification, link }: CertificationCardProps) {
    return (
        <CertificationCardContainer href={link} target='_blank' rel='noreferrer'>
            <ImageCard path={image} text={certification} alt={certification} />
        </CertificationCardContainer>
    );
}

export default CertificationCard;
