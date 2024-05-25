import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CategoryButton = ({ key, name, handleSelect, selectedCategory }) => {
  return (
    <div key={key} className="mt-2">
      <div
        className={classNames(
          "flex py-[6px] justify-center items-center gap-[14px] self-stretch rounded-lg",
          {
            "bg-gradient-to-r from-Primary-Pinkcus to-Primary-Rosecus":
              selectedCategory === name,
            "bg-slate-300": selectedCategory !== name,
          }
        )}
      >
        <button
          className={classNames(
            "rounded  text-center font-poppins text-[12px] font-semibold leading-normal",
            {
              "text-Primary-White": selectedCategory === name,
            }
          )}
          onClick={handleSelect}
          name={name}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default CategoryButton;

CategoryButton.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  selectedCategory: PropTypes.string,
  handleSelect: PropTypes.func,
};
