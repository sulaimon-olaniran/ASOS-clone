import {useState} from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import {IconButton} from "@mui/material";

interface componentProps {
  media: {
    images: string[];
    catwalk: string[];
  };
}

const ProductGalary = ({media}: componentProps) => {
  const [mediaType, setMediaType] = useState("image");
  const [transform, setTransform] = useState(0);

  const test_medias = [
    "https://images.asos-media.com/products/asos-design-trainers-in-white/201819256-1-white?$n_640w$&wid=513&fit=constrain",
    "https://images.asos-media.com/products/asos-design-trainers-in-white/201819256-2?$n_960w$&wid=952&fit=constrain",
    "https://images.asos-media.com/products/asos-design-trainers-in-white/201819256-3?$n_960w$&wid=952&fit=constrain",
    "https://images.asos-media.com/products/asos-design-trainers-in-white/201819256-4?$n_960w$&wid=952&fit=constrain",
  ];

  const handleNextImageButton = () => {
    const imagesLength = test_medias.length;
    setTransform(prev => (prev === -100 * (imagesLength - 1) ? 0 : prev - 100));
  };

  const handlePrevImageButton = () => {
    const imagesLength = test_medias.length;
    setTransform(prev => (prev === 0 ? -100 * (imagesLength - 1) : prev + 100));
  };

  const handleSelectImage = (index: number) => {
    setTransform(index * -100);
    setMediaType("image");
  };

  const handlePlayCatwalkVideo = () => {
    setMediaType("video");
  };

  return (
    <div className="product-gallary-container">
      <div className="gallary-aside-media-container">
        <div className="media-links-container">
          {test_medias.map((item, index) => {
            return (
              <div
                className="each-media-link"
                key={index}
                onClick={() => handleSelectImage(index)}
              >
                <img src={item} alt="" />
              </div>
            );
          })}

          <div
            className="each-media-link is-video"
            onClick={handlePlayCatwalkVideo}
          >
            <PlayArrowOutlinedIcon />
            <span>VIDEO</span>
          </div>
        </div>

        <div className="product-share-icon-container">
          <IconButton>
            <IosShareOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="gallary-displayed-media-container">
        {mediaType === "image" && (
          <>
            <div className="carousel-button prev-image-button">
              <IconButton onClick={handlePrevImageButton}>
                <ArrowBackIosNewOutlinedIcon />
              </IconButton>
            </div>

            <div className="carousel-button next-image-button">
              <IconButton onClick={handleNextImageButton}>
                <ArrowForwardIosOutlinedIcon />
              </IconButton>
            </div>
          </>
        )}

        <div className="product-saved-count">
          <span>2k</span>
          <img
            src="https://cdn.optimizely.com/img/19065870423/3c221ba74acf47969022b74bb9b1ffd0.svg"
            alt=""
          />
        </div>

        {mediaType === "image" ? (
          test_medias.map((item, index) => {
            return (
              <img
                src={item}
                alt=""
                key={index}
                style={{transform: `translateX(${transform}%)`}}
                className="carousel-image"
              />
            );
          })
        ) : (
          <video controls autoPlay muted>
            <source src="https://video.asos-media.com/products/ASOS/_media_/f64/f640f979-cc56-4da3-a99d-dc1a1147d8ce.mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

export default ProductGalary;
