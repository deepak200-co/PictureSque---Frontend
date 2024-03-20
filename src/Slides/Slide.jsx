import ImageSlider from "./Imageslider";
import "./Slide.css"
const Slide = () => {
  const slides = [
    { url: "https://images.pexels.com/photos/6166016/pexels-photo-6166016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "car" },
    { url: "https://i.natgeofe.com/n/dde3c72a-7612-451e-9796-5498d6386a04/yourshot-underwater-1869254.jpg", title: "Seabed" },
    { url: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg", title: "art" },
    { url: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "city" },
    { url: "https://images.pexels.com/photos/1468555/pexels-photo-1468555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "italy" },
  ];
  const containerStyles = {
    padding:"3.125rem",
    width: "90%",
    height: "31.25rem",
    margin: "0 auto",   
  };
  return (
    <div className="container" >
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slide;