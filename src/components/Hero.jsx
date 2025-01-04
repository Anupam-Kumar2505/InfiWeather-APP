import PropTypes from "prop-types";

export default function Hero(props) {
  return (
    <section
      className={
        props.className ||
        "" +
          "w-full text-center bg-[#9EC0F680] pt-4 pb-6 px-4 rounded-[3rem] max-w-[21rem]"
      }
    >
      <h2 className="text-xl">{props.title}</h2>
      <img
        className="mt-1 mb-6 w-[90%] mx-auto"
        src="/icons/hero-line.svg"
        alt="title-line"
      ></img>
      {props.children}
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
