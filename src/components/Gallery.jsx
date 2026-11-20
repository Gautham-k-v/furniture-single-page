import { asset } from "../utils/asset";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "./Gallery.css";

const images = [
  {
    src: asset("images/gallery-living.jpg"),
    caption: "Living room",
    alt: "Open living room with a pale sofa, timber wall, and a view to the kitchen",
    layout: "tall",
  },
  {
    src: asset("images/gallery-bedroom.jpg"),
    caption: "Timber bedroom",
    alt: "Upholstered bed in a dark bedroom with a brass chandelier",
    layout: "regular",
  },
  {
    src: asset("images/gallery-dining.jpg"),
    caption: "Dining space",
    alt: "Dining table set with green velvet chairs and a round mirror",
    layout: "regular",
  },
  {
    src: asset("images/gallery-wardrobe.jpg"),
    caption: "Custom wardrobe",
    alt: "Warm timber wardrobe with two doors and drawers",
    layout: "regular",
  },
  {
    src: asset("images/gallery-modern.jpg"),
    caption: "Modern furniture",
    alt: "Modern white living room with a low sofa and timber accents",
    layout: "regular",
  },
  {
    src: asset("images/gallery-craft.jpg"),
    caption: "Wood craftsmanship",
    alt: "Grey upholstered chair with a wooden frame",
    layout: "wide",
  },
];

export default function Gallery() {
  return (
    <section className="section section--cream" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="The showroom"
            id="gallery-title"
            title="Spaces That Inspire"
          />
          <div className="gallery-grid">
            {images.map((image) => (
              <figure key={image.src} className={`gallery-item gallery-item--${image.layout}`}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
