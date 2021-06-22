import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

import Button from "components/Button";

const Project = ({
  primaryText,
  secondaryText,
  backgroundColorClass,
  projectLink,
  image,
  addToRefs,
}) => {
  return (
    <div
      ref={addToRefs}
      className={`${backgroundColorClass} overflow-hidden p-14 pb-0 flex gap-10 xl:gap-20 rounded-3xl`}
    >
      <div className="w-full xl:w-5/12">
        <div className="overflow-hidden">
          <h3 className="text-gray-900 font-extrabold md:text-2xl lg:text-4xl xl:text-4.5xl">
            {primaryText}
          </h3>
        </div>
        <div className="overflow-hidden">
          <p className="text-black text-opacity-62 md:text-xl lg:text-3xl xl:text-3.5xl font-medium mt-1">
            {secondaryText}
          </p>
        </div>
        <div className="my-6">
          <Link href={projectLink}>
            <a>
              <Button text="View Project" />
            </a>
          </Link>
        </div>
      </div>
      <div className="overflow-hidden image-wrapper rounded-t-lg w-full xl:w-8/12 relative top-2">
        <div className={`${backgroundColorClass} absolute inset-0 z-10`}></div>
        <Image
          src={image}
          alt={primaryText}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
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
  backgroundColorClass: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addToRefs: PropTypes.func,
};

export default Project;
