import { Link } from "react-router-dom";
import "../nav-card/nav-card.css";

type NavCardProps = {
  image: string;
  title: string;
  to: string;
};

export default function NavCard({ image, title, to }: NavCardProps) {
  return (
    <Link to={to} className="navCard-container">
      <img className="navCard_img" src={image} alt={title} />
      <p className="navCard_title">{title}</p>
    </Link>
  );
}
