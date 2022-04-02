import 'bulma/css/bulma.min.css';
import ProjectCard from '../components/ui/projects/ProjectCard';
import cardioIMG from '../assets/cardio_log.jpg';
import shopIMG from '../assets/react_shop.jpg';

const Projects = () => {
  const cardioDescription = `A single-page app in vanilla JS with an interecative map to log workouts.
  Uses leaflet library but no frameworks.`;

  const shopDescription = `A dynamic single-page app in ReactJS and custom CSS. Fetches products from a Firebase Database and displays them with pagination.`;

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-centered is-max-widescreen">
          <div className="has-text-centered mb-5 is-size-5 has-text-info">
            This section is currently under construction...
          </div>

          <div className="columns mt-4">
            <ProjectCard
              projectName={'Cardio Log'}
              projectImg={cardioIMG}
              projectImgAlt={'A screenshot from the project page.'}
              projectLink={'https://vanilla-cardio-log.web.app'}
              projectDescription={cardioDescription}
            />

            <ProjectCard
              projectName={'React Shop'}
              projectImg={shopIMG}
              projectImgAlt={'A screenshot from the project page.'}
              projectLink={'https://react-login-cart.web.app'}
              projectDescription={shopDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
