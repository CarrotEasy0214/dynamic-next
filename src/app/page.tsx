"use client";
import MySlide from "@/Components/Slide/MySlide";
import ProductPage from "@/Components/ProductPage/ProductPage";
import Card from "@/Components/Card/Card";
import CompanyGuide from "@/Components/Craft/CompanyGuide";
import Collabo from "@/Components/Collabo/Collabo";
import MandD from "@/Components/M&D/MandD";
import ShippingDetail from "@/Components/Shipping/ShippingDetail";
import SupportCenter from "@/Components/Support/SupportCenter";
import BlackContainer from "@/Components/BlackContainer/BlackContainer";
import TTest from "@/Components/BlackContainer/TTest";
// import MySlideMobile from "@/Components/Slide/MySlideMobile";

export default function Home() {
  return (
    <div>
      <MySlide></MySlide>
      <ProductPage></ProductPage>
      <Card></Card>
      <CompanyGuide></CompanyGuide>
      <Collabo></Collabo>
      <MandD></MandD>
      <ShippingDetail></ShippingDetail>
      <SupportCenter></SupportCenter>
      <BlackContainer></BlackContainer>
    </div>
  );
}
