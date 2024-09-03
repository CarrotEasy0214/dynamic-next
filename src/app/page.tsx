"use client";
import MySlide from "@/Components/Slide/Myslide";
import ProductPage from "@/Components/ProductPage/ProductPage";
import Image from "next/image";
import Card from "@/Components/Card/Card";
import CompanyGuide from "@/Components/Craft/CompanyGuide";
import Collabo from "@/Components/Collabo/Collabo";
import MandD from "@/Components/M&D/MandD";
import ShippingDetail from "@/Components/Shipping/ShippingDetail";
import SupportCenter from "@/Components/Support/SupportCenter";
import BlackContainer from "@/Components/BlackContainer/BlackContainer";

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
