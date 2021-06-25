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
      className={`${backgroundColorClass} overflow-hidden opacity-0 p-5 pb-0 md:p-10 xl:p-14 md:pb-0 xl:pb-0  flex flex-col sm:flex-row gap-6 md:gap-10 xl:gap-20 rounded-3xl`}
    >
      <div className="w-full xl:w-5/12">
        <div className="overflow-hidden">
          <h3 className="text-gray-900 font-extrabold text-xl md:text-2xl lg:text-4xl xl:text-4.5xl">
            {primaryText}
          </h3>
        </div>
        <div className="overflow-hidden">
          <p className="text-black text-opacity-62 text-base md:text-xl lg:text-3xl xl:text-3.5xl font-medium mt-1">
            {secondaryText}
          </p>
        </div>
        <div className="mt-6">
          <Link href={projectLink}>
            <a className="inline-block sm:w-auto w-full">
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
  image: PropTypes.object.isRequired,
  addToRefs: PropTypes.func,
};

export default Project;
