import {
  GalleryContainer,
  GalleryGrid,
  GalleryHeader,
} from "../styles/gallery";

import gallery from "../../data/gallery.json";
import { useState } from "react";

import { TImage } from "../../model";
import { AiFillCloseCircle } from "react-icons/ai";

function PortugueseGallery() {
  // const [imagesArray, setImagesArray] = useState<TImage[]>(gallery.gallery);
  const [selectedImage, setSelectedImage] = useState<TImage>({
    id: "",
    image: "",
  });
  const [showImage, setShowImage] = useState<boolean>(false);

  const goToPicture = (id: string) => {
    setSelectedImage(gallery.gallery.filter((img) => img.id === id)[0]);
    setShowImage(true);
  };

  return (
    <GalleryContainer>
      <GalleryHeader>
        <h1>Galeria</h1>
        <p>Dica: você pode selecionar uma imagem para ampliá-la.</p>
      </GalleryHeader>

      <GalleryGrid>
        {gallery.gallery.map((item) => (
          <img
            src={item.image}
            alt={item.id}
            key={item.id}
            onClick={() => goToPicture(item.id)}
          />
        ))}
      </GalleryGrid>

      {showImage ? (
        <div className="image-selected" onClick={() => setShowImage(false)}>
          <div className="image-and-exit">
            <div className="exit">
              <AiFillCloseCircle />
            </div>
            <img src={selectedImage.image} alt="Image Gallery"></img>
          </div>
        </div>
      ) : null}
    </GalleryContainer>
  );
}

export default PortugueseGallery;
