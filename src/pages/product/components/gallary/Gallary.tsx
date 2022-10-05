import {useState} from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import {IconButton} from "@mui/material";

import {productMedia} from "../../types";

import {VideoJsPlayer} from "../../../../components/";

interface componentProps {
  media: productMedia;
}

const ProductGalary = ({media}: componentProps) => {
  const [mediaType, setMediaType] = useState("image");
  const [transform, setTransform] = useState(0);

  const handleNextImageButton = () => {
    const imagesLength = media?.images.length || 0;
    setTransform(prev => (prev === -100 * (imagesLength - 1) ? 0 : prev - 100));
  };

  const handlePrevImageButton = () => {
    const imagesLength = media?.images.length || 0;
    setTransform(prev => (prev === 0 ? -100 * (imagesLength - 1) : prev + 100));
  };

  const handleSelectImage = (index: number) => {
    setTransform(index * -100);
    setMediaType("image");
  };

  const handlePlayCatwalkVideo = () => {
    setMediaType("video");
  };

  const videoOptions = {
    //fill: true,
    //fluid: true,
    autoplay: true,
    controls: true,
    muted: true,
    // preload: "metadata",
    sources: [
      {
        src: `https://${media?.catwalk[0].url}.m3u8`,
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <div className="product-gallary-container">
      <div className="gallary-aside-media-container">
        <div className="media-links-container">
          {media?.images.map((image, index) => {
            return (
              <div
                className="each-media-link"
                key={index}
                onClick={() => handleSelectImage(index)}
              >
                <img src={`https://${image.url}`} alt="" />
              </div>
            );
          })}

          {media?.catwalk?.length > 0 && (
            <div
              className="each-media-link is-video"
              onClick={handlePlayCatwalkVideo}
            >
              <PlayArrowOutlinedIcon />
              <span>VIDEO</span>
            </div>
          )}
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
          media?.images.map((image, index) => {
            return (
              <img
                src={`https://${image.url}`}
                alt=""
                key={index}
                style={{transform: `translateX(${transform}%)`}}
                className="carousel-image"
              />
            );
          })
        ) : (
          <VideoJsPlayer videoJsOptions={videoOptions} />
        )}
      </div>
    </div>
  );
};

export default ProductGalary;
