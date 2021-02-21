import "../App.scss";
import logo from "../logo.svg";
import MediaCard from "./MediaCard";

const MediaList = (props) => {
  return (
    <section>
      <h1>Listado de tarjetas:</h1>
      <ul>
        <li>
          <MediaCard
            username="Sofia Murias"
            date="Martes, 16 de Febrero de 2021"
            image={logo}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
           repellendus sapiente sint ut officia molestiae incidunt facere magnam
           minus, aliquid eos animi, soluta sequi harum? Odio non in ducimus
           aspernatur. Rerum repellendus sapiente sint ut officia molestiae
           incidunt facere magnam minus, aliquid eos animi, soluta sequi harum?
           Odio non in ducimus aspernatur..."
            likes="37"
          />
        </li>
        <li>
          <MediaCard
            username="Nadia Murias"
            date="Domingo, 21 de Febrero de 2021"
            image={logo}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
           repellendus sapiente sint ut officia molestiae incidunt facere magnam
           minus, aliquid eos animi, soluta sequi harum? Odio non in ducimus
           aspernatur. Rerum repellendus sapiente sint ut officia molestiae
           incidunt facere magnam minus, aliquid eos animi, soluta sequi harum?
           Odio non in ducimus aspernatur..."
            likes="35"
          />
        </li>
        <li>
          <MediaCard
            username="Adela Garcia"
            date="Sábado, 20 de Febrero de 2021"
            image={logo}
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
           repellendus sapiente sint ut officia molestiae incidunt facere magnam
           minus, aliquid eos animi, soluta sequi harum? Odio non in ducimus
           aspernatur. Rerum repellendus sapiente sint ut officia molestiae
           incidunt facere magnam minus, aliquid eos animi, soluta sequi harum?
           Odio non in ducimus aspernatur..."
            likes="40"
          />
        </li>
      </ul>
    </section>
  );
};

export default MediaList;
