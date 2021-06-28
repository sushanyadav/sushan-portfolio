import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

import Button from "components/Button";

const Project = ({
  primaryText,
  secondaryText,
  wrapperColorClass,
  projectLink,
  image,
  addToRefs,
  tech,
}) => {
  return (
    <div
      ref={addToRefs}
      className={`container overflow-hidden opacity-0 flex  items-start  justify-between w-full flex-col sm:flex-row gap-8 md:gap-16`}
    >
      <div>
        <div className="overflow-hidden">
          <h3 className="text-gray-900 font-semibold text-1.5xl md:text-4.5xl">
            {primaryText}
          </h3>
        </div>
        <div className="overflow-hidden">
          <p className="text-gray-600 text-base md:text-2xl">{secondaryText}</p>
        </div>

        <div className="mt-5 text-sm font-medium flex gap-2">
          {tech.map((techNames) => {
            return (
              <span
                style={{ cursor: "none" }}
                className="bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-extra-large inline-block"
                key={techNames}
              >
                {techNames}
              </span>
            );
          })}
        </div>
        <div className="mt-7">
          <Link href={projectLink}>
            <a className="inline-block sm:w-auto w-full">
              <Button text="View Project" outline="border border-pink-600" />
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`${wrapperColorClass} overflow-hidden p-4 md:p-8 relative image-wrapper w-full`}
      >
        <div className={`${wrapperColorClass} absolute inset-0 z-10`}></div>

        <Image
          src={image}
          alt={primaryText}
          layout="responsive"
          quality={100}
        />
      </div>
    </div>
  );
};

Project.defaultProps = {
  addToRefs: () => {},
};

Project.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  wrapperColorClass: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  addToRefs: PropTypes.func,
};

export default Project;
