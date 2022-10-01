import "./styles.scss";

interface componentProps {
  buttonAction: () => any;
  isLiked: boolean;
}

const LikeButtonComponent = ({buttonAction, isLiked}: componentProps) => {
  return (
    <div
      className={`heartbutton ${isLiked && "heartbutton-liked"}`}
      onClick={buttonAction}
    >
      <svg
        className={`heart-icon-outline heartsize ${isLiked ? "liked" : ""}`}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="100%"
        y="100%"
        viewBox="0 0 139.9 133.5"
        xmlSpace="preserve"
      >
        <path
          d="M100.8,40.7c-3.8-3.8-8.7-5.8-14.1-5.8c-5.3,0-10.3,2.1-14.1,5.8l-1.9,1.9c-0.2,0.2-0.5,0.3-0.8,0.3s-0.5-0.1-0.8-0.3
         l-1.9-1.9c-3.8-3.8-8.7-5.8-14.1-5.8s-10.3,2.1-14.1,5.8c-3.7,3.7-5.8,8.7-5.8,14.1c0,5.3,2.1,10.3,5.8,14.1L68.4,98
         c0.3,0.3,0.7,0.5,1.1,0.6c0.1,0,0.3,0,0.4,0c0.6,0,1.1-0.2,1.5-0.6l29.2-29.3c3.7-3.7,5.8-8.7,5.8-14.1
         C106.6,49.4,104.5,44.4,100.8,40.7z M97.7,65.7l-27,27c-0.2,0.2-0.5,0.3-0.8,0.3s-0.5-0.1-0.8-0.3l-27-27c-6.1-6.1-6.1-15.9,0-22
         c2.9-2.9,6.8-4.5,11-4.5s8,1.6,11,4.5l4.2,4.2c0.4,0.4,0.9,0.6,1.5,0.6c0.6,0,1.2-0.2,1.5-0.6l4.2-4.2c2.9-2.9,6.8-4.5,11-4.5
         c4.1,0,8,1.6,11,4.5c2.9,2.9,4.5,6.8,4.5,11S100.6,62.8,97.7,65.7z"
          stroke="#2d2d2d"
          strokeWidth="4px"
        />
      </svg>

      <svg
        className={`heart-icon-filled heartsize ${
          isLiked && "stop-animation-bloom"
        }`}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 139.9 133.5"
      >
        <g>
          <title>Big Heart</title>
          <path
            className="st0"
            d="m100.902507,40.392486c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8c-5.3,0 -10.3,2.1 -14.1,5.8l-1.9,1.9c-0.2,0.2 -0.5,0.3 -0.8,0.3s-0.5,-0.1 -0.8,-0.3l-1.9,-1.9c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8s-10.3,2.1 -14.1,5.8c-3.7,3.7 -5.8,8.7 -5.8,14.1c0,5.3 2.1,10.3 5.8,14.1l29.4,29.1c0.3,0.3 0.7,0.5 1.1,0.6c0.1,0 0.3,0 0.4,0c0.6,0 1.1,-0.2 1.5,-0.6l29.2,-29.3c3.7,-3.7 5.8,-8.7 5.8,-14.1c0.2,-5.2 -1.9,-10.2 -5.6,-13.9z"
            id="svg_1"
            fill="#2d2d2d"
          />
        </g>
      </svg>

      <svg
        className={`heart-icon-animation animheartsize ${
          isLiked && "start-animation-bloom"
        }`}
        width="100% "
        height="100% "
        xmlns="http://www.w3.org/2000/svg "
        viewBox="0 0 139.9 133.5 "
      >
        <g>
          <title>Small Heart 1</title>
          <path
            className="st0 "
            d="m100.902507,40.392486c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8c-5.3,0 -10.3,2.1 -14.1,5.8l-1.9,1.9c-0.2,0.2 -0.5,0.3 -0.8,0.3s-0.5,-0.1 -0.8,-0.3l-1.9,-1.9c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8s-10.3,2.1 -14.1,5.8c-3.7,3.7 -5.8,8.7 -5.8,14.1c0,5.3 2.1,10.3 5.8,14.1l29.4,29.1c0.3,0.3 0.7,0.5 1.1,0.6c0.1,0 0.3,0 0.4,0c0.6,0 1.1,-0.2 1.5,-0.6l29.2,-29.3c3.7,-3.7 5.8,-8.7 5.8,-14.1c0.2,-5.2 -1.9,-10.2 -5.6,-13.9z "
            id="svg_1 "
            fill="#2d2d2d "
          />
        </g>
      </svg>

      <svg
        className={`heart-icon-animation2 animheartsize2 ${
          isLiked && "start-animation-bloom2"
        }`}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 139.9 133.5"
      >
        <g>
          <title>Small Heart 2</title>
          <path
            className="st0"
            d="m100.902507,40.392486c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8c-5.3,0 -10.3,2.1 -14.1,5.8l-1.9,1.9c-0.2,0.2 -0.5,0.3 -0.8,0.3s-0.5,-0.1 -0.8,-0.3l-1.9,-1.9c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8s-10.3,2.1 -14.1,5.8c-3.7,3.7 -5.8,8.7 -5.8,14.1c0,5.3 2.1,10.3 5.8,14.1l29.4,29.1c0.3,0.3 0.7,0.5 1.1,0.6c0.1,0 0.3,0 0.4,0c0.6,0 1.1,-0.2 1.5,-0.6l29.2,-29.3c3.7,-3.7 5.8,-8.7 5.8,-14.1c0.2,-5.2 -1.9,-10.2 -5.6,-13.9z"
            id="svg_1"
            fill="#2d2d2d"
          />
        </g>
      </svg>

      <svg
        className={`heart-icon-animation3 animheartsize3 ${
          isLiked && "start-animation-bloom3"
        }`}
        width="100% "
        height="100% "
        xmlns="http://www.w3.org/2000/svg "
        viewBox="0 0 139.9 133.5 "
      >
        <g>
          <title>Small Heart 3</title>
          <path
            className="st0 "
            d="m100.902507,40.392486c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8c-5.3,0 -10.3,2.1 -14.1,5.8l-1.9,1.9c-0.2,0.2 -0.5,0.3 -0.8,0.3s-0.5,-0.1 -0.8,-0.3l-1.9,-1.9c-3.8,-3.8 -8.7,-5.8 -14.1,-5.8s-10.3,2.1 -14.1,5.8c-3.7,3.7 -5.8,8.7 -5.8,14.1c0,5.3 2.1,10.3 5.8,14.1l29.4,29.1c0.3,0.3 0.7,0.5 1.1,0.6c0.1,0 0.3,0 0.4,0c0.6,0 1.1,-0.2 1.5,-0.6l29.2,-29.3c3.7,-3.7 5.8,-8.7 5.8,-14.1c0.2,-5.2 -1.9,-10.2 -5.6,-13.9z "
            id="svg_1 "
            fill="#2d2d2d "
          />
        </g>
      </svg>
    </div>
  );
};

export default LikeButtonComponent;
