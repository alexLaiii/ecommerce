// import { useState } from "react";
// import { Box } from "@mui/material";
// import Setting from "components/Setting";
// import Footer from "pages-sections/landing/Footer";
// import Section1 from "pages-sections/landing/Section1";
// import Section2 from "pages-sections/landing/Section2";
// import Section3 from "pages-sections/landing/Section3";
// import Section4 from "pages-sections/landing/Section4";
// import Section6 from "pages-sections/landing/Section6";
// import Section5 from "pages-sections/landing/Section5";
// const IndexPage = () => {
//   const [filterDemo, setFilterDemo] = useState("");
//   return <Box id="top" overflow="hidden" bgcolor="background.paper">
//       <Section1 />
//       <Section6 setFilterDemo={setFilterDemo} />
//       <Section2 />
//       <Section5 />
//       <Section3 filterDemo={filterDemo} setFilterDemo={setFilterDemo} />
//       <Section4 />
//       <Footer />
//       <Setting />
//     </Box>;
// };
// export default IndexPage;


// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SEO from "components/SEO";
import Setting from "components/Setting";
import Newsletter from "components/Newsletter";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Section1 from "pages-sections/market-1/Section1";
import Section2 from "pages-sections/market-1/Section2";
import Section3 from "pages-sections/market-1/Section3";
import Section4 from "pages-sections/market-1/Section4";
import Section5 from "pages-sections/market-1/Section5";
import Section6 from "pages-sections/market-1/Section6";
import Section7 from "pages-sections/market-1/Section7";
import Section8 from "pages-sections/market-1/Section8";
import Section10 from "pages-sections/market-1/Section10";
import Section11 from "pages-sections/market-1/Section11";
import Section12 from "pages-sections/market-1/Section12";
import Section13 from "pages-sections/market-1/Section13";
import api from "utils/__api__/market-1";
import {getImageSource} from "utils/imageHelper";
// =================================================================

const MarketShop = props => {
  return (
    <ShopLayout1>
      <SEO title="Market v1" />

      {/* HERO SLIDER SECTION */}
      <Section1 carouselData={props.mainCarouselData} />

      {/* FLASH DEALS SECTION */}
      <Section2 flashDeals={props.flashDealsData} />

      {/* TOP CATEGORIES */}
      <Section3 categoryList={props.topCategories} />

      {/* TOP RATED PRODUCTS */}
      <Section4 topRatedList={props.topRatedProducts} topRatedBrands={props.topRatedBrands} />

      {/* NEW ARRIVAL LIST */}
      <Section5 newArrivalsList={props.newArrivalsList} />

      {/* BIG DISCOUNTS */}
      <Section13 bigDiscountList={props.bigDiscountList} />

      {/* CAR LIST */}
      <Section6 carBrands={props.carBrands} carList={props.carList} />

      {/* MOBILE PHONES */}
      <Section7 title="Mobile Phones" shops={props.mobileShops} brands={props.mobileBrands} productList={props.mobileList} />

      {/* PROMO BANNERS */}
      <Section8 />

      {/* OPTICS / WATHCH */}
      <Section7 title="Optics / Watch" shops={props.opticsShops} brands={props.opticsBrands} productList={props.opticsList} />

      {/* CATEGORIES */}
      <Section10 categories={props.bottomCategories} />

      {/* MORE FOR YOU */}
      <Section11 moreItems={props.moreItems} />

      {/* SERVICE CARDS */}
      <Section12 serviceList={props.serviceList} />

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter />

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      <Setting />
    </ShopLayout1>
  );
    
};
export const getStaticProps = async ({
  locale
}) => {
  const carList = await api.getCarList(); //ok
  const mobileList = await api.getMobileList(); //ok
  const opticsList = await api.getOpticsList(); // ok

  const moreItems = await api.getMoreItems(); // ok


  const mobileShops = await api.getMobileShops(); // no image not touching yet // ok
  const opticsShops = await api.getOpticsShops(); // no image not touching yet // ok


  const serviceList = await api.getServiceList(); // no image not touching yet // ok


  const unProcessedCarBrands = await api.getCarBrands(); // ok
  const carBrands = unProcessedCarBrands.map(carBrands => {
    return {
      ...carBrands,
      image: getImageSource(carBrands.image),
    };
  });


  const unProcessedMobileBrands = await api.getMobileBrands(); //ok
  const mobileBrands = unProcessedMobileBrands.map(mobileBrands => {
    return {
      ...mobileBrands,
      image: getImageSource(mobileBrands.image),
    };
  });


  const unProcessedOpticsBrands = await api.getOpticsBrands(); // ok
  const opticsBrands = unProcessedOpticsBrands.map(opticsBrand => {
    return {
      ...opticsBrand,
      image: getImageSource(opticsBrand.image),
    };
  });
  


  const unProcessedBottomCategories = await api.getCategories(); //ok
  const bottomCategories = unProcessedBottomCategories.map(category => {
    return {
      ...category,
      image: getImageSource(category.image),
    };
  });


  const unProcessedTopCategories = await api.getTopCategories(); // ok
  const topCategories = unProcessedTopCategories.map(category => {
    return {
      ...category,
      image: getImageSource(category.image),
    };
  });

  const unProcessedTopRatedBrands = await api.getTopRatedBrand(); // ok
  const topRatedBrands = unProcessedTopRatedBrands.map(brands => {
    return {
      ...brands,
      image: getImageSource(brands.image),
    };
  });

  const newArrivalsList = await api.getNewArrivalList(); // ok
  const mainCarouselData = await api.getMainCarousel(); //ok
  const bigDiscountList = await api.getBigDiscountList(); // ok
  const topRatedProducts = await api.getTopRatedProduct(); // ok
  const flashDealsData = await api.getFlashDeals(); // ok

  let locales = await serverSideTranslations(locale ?? "en", ["common"]);
  return {
    props: {
      ...locales,
      carList,
      carBrands,
      moreItems,
      mobileList,
      opticsList,
      serviceList,
      mobileShops,
      opticsShops,
      mobileBrands,
      opticsBrands,
      topCategories,
      flashDealsData,
      topRatedBrands,
      newArrivalsList,
      bigDiscountList,
      mainCarouselData,
      topRatedProducts,
      bottomCategories
    }
  };
};
export default MarketShop;