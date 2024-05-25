import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Search from "assets/icons/search.png";
import Popularity from "assets/icons/popularity.png";
import { Categories } from "pages/menu/Categories";
import CategoryButton from "components/CategoryButton";
import OfferCard from "components/OfferCard";
import { data } from "pages/offer/data";

const Menu = () => {
  const [selectedCategory, isSelectedCategory] = useState(Categories[0]);

  const validationSchema = Yup.object().shape({
    searchQuery: Yup.string().required("Search is required"),
    popularityQuery: Yup.string().required("Popularity is required"),
  });

  // Handle form submission (optional)
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const handleKeyPress = (event, submitForm) => {
    if (event.key === "Enter") {
      submitForm();
    }
  };

  const handleSelect = (e) => {
    isSelectedCategory(e.target.name);
  };

  return (
    <div className="bg-gradient p-8 flex">
      <div>
        <Formik
          initialValues={{ searchQuery: "", popularityQuery: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, submitForm }) => (
            <Form>
              <div className="rounded overflow-hidden shadow-lg p-3">
                <h2 className="font-poppins font-semibold text-sm">Filters</h2>
                <div className="py-4 relative">
                  <Field
                    type="text"
                    name="searchQuery"
                    className="flex py-[6px] px-[14px] text-sm items-center self-stretch focus:outline-none rounded-md border-[1.4px] border-solid border-Layout-300 bg-Layout-100"
                    placeholder="Search..."
                    onKeyPress={(e) => handleKeyPress(e, submitForm)}
                  />
                  <img
                    src={Search}
                    height={16}
                    width={16}
                    className="absolute top-6 right-5"
                  />
                </div>
                <div className="py-1 relative">
                  <Field
                    type="text"
                    name="popularityQuery"
                    className="flex py-[6px] px-[14px] text-sm items-center self-stretch focus:outline-none rounded-md border-[1.4px] border-solid border-Layout-300 bg-Layout-100"
                    placeholder="Popularity..."
                    onKeyPress={(e) => handleKeyPress(e, submitForm)}
                  />
                  <img
                    src={Popularity}
                    height={16}
                    width={16}
                    className="absolute top-3 right-5"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className=" rounded overflow-hidden shadow-lg p-3 mt-8">
          <h2 className="font-poppins font-semibold text-sm">Categories</h2>
          <div className="py-2">
            {Categories.map((c, index) => {
              return (
                <CategoryButton
                  name={c}
                  key={index}
                  selectedCategory={selectedCategory}
                  handleSelect={handleSelect}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-20 flex flex-wrap gap-6 justify-center">
        {data.map((d, index) => {
          return (
            <OfferCard
              image={d.image}
              discount={d.discount}
              title={d.title}
              price={d.price}
              originalPrice={d.originalPrice}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
