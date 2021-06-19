import Link from "next/link";
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
      className={`${backgroundColorClass} p-14 pb-0 flex lg:gap-10 xl:gap-20 rounded-3xl`}
      style={{ minHeight: "484px" }}
    >
      <div>
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

      <img
        src={image}
        alt={primaryText}
        style={{ maxHeight: "484px", minWidth: "60%" }}
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
