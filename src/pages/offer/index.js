import React from "react";
import OfferBanner from "assets/images/offerBanner.png";
import OfferBanner2 from "assets/images/offerBanner1.png";
import OfferVector from "assets/images/offerVector.png";
import OfferCard from "components/OfferCard";
import { data } from "pages/offer/data";

const Offer = () => {
  return (
    <div>
      <div
        className=" relative bg-cover bg-no-repeat bg-center h-80"
        style={{ backgroundImage: `url(${OfferBanner})` }}
      >
        <div className="absolute inset-0 flex justify-between">
          <div className="p-12">
            <h1 className="text-white text-4xl w-5/6 ">
              Get The Best Deals on Customized Cakes
            </h1>
            <h1 className="text-4xl text-offer-Percentage">Flat 15%</h1>
            <div className="flex mt-6 w-28 py-[6px] justify-center items-center self-stretch rounded-3xl bg-gradient-to-r from-Primary-Pinkcus to-Primary-Rosecus">
              <button className="bg-offer-Button text-white">Order Now</button>
            </div>
          </div>
          <div className="py-2 px-12">
            <img src={OfferBanner2} height={480} width={380} />
          </div>
        </div>
      </div>
      <div>
        <div className="align-middle mt-8">
          <h2 className="font-poppins font-semibold text-lg text-center">
            Offer Title
          </h2>
          <div className="flex justify-center">
            <img src={OfferVector} />
          </div>
          <p className="px-24 py-6 text-center">
            Description of the offer title you were placed Discover the joy of
            our Classic Cakes, where timeless flavors delight your taste buds,
            and indulge in our Exquisite Custom Cakes, tailor-made masterpieces
            that create unforgettable memories.
          </p>
          <div className="px-24 flex flex-wrap gap-4 justify-center">
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
      </div>
    </div>
  );
};

export default Offer;
