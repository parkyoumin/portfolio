import Carousel from "react-bootstrap/Carousel";

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        {images.map((image, i: number) => {
          return (
            <Carousel.Item key={i}>
              <img src={image} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImageSlider;
