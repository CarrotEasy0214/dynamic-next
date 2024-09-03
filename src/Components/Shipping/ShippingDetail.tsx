const ShippingDetail = () => {
  return (
    <div className="flex px-[3rem] lg:px-[5rem] xl:px-[7rem] mt-2 w-[100%] gap-20">
      <div className="flex-1">
        <div className="font-semibold text-center text-slate-600 px-[1rem]">Free Premium Shipping</div>
        <div className="py-1 lg:py-2 xl:py-4 text-center text-sm px-[2rem] xxl:px-[4rem]">
          Free ground shipping on orders of $99 or more in the U.S. and $250 in Canada
        </div>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-center text-slate-600 px-[1rem]">Free Returns in 14 Days</div>
        <div className="py-1 lg:py-2 xl:py-4 text-center text-sm px-[2rem] xxl:px-[4rem]">
          We offer a generous 14-day return policy, allowing you to shop with confidence
        </div>
      </div>
      <div className="flex-1">
        <div className="font-semibold text-center text-slate-600 px-[1rem]">Product Protection</div>
        <div className="py-1 lg:py-2 xl:py-4 text-center text-sm px-[2rem] xxl:px-[4rem]">
          Rest easy with our manufacturer warranty, ensuring that your product is protected against any manufacturing
          defects or issues
        </div>
      </div>
    </div>
  );
};

export default ShippingDetail;
