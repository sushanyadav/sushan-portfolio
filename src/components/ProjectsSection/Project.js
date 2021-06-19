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
}) => {
  return (
    <div
      className={`${backgroundColorClass} overflow-hidden p-14 pb-0 flex lg:gap-10 xl:gap-20 rounded-3xl`}
      style={{ minHeight: "484px" }}
    >
      <div className="lg:w-full xl:w-5/12">
        <h3 className="text-gray-900 font-extrabold text-4.5xl">
          {primaryText}
        </h3>
        <p className="text-black text-opacity-62 text-3.5xl font-medium mt-1">
          {secondaryText}
        </p>
        <div className="mt-6">
          <Link href={projectLink}>
            <a>
              <Button text="View Project" />
            </a>
          </Link>
        </div>
      </div>

      <Image
        src={image}
        alt={primaryText}
        height={484}
        width={676}
        className="rounded-t-lg object-cover object-center"
      />
    </div>
  );
};

Project.defaultProps = {};

Project.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  backgroundColorClass: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;
