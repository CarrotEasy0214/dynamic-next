import useIsMs from "@/Hook/MediaMs";

const ShippingDetail = () => {
  const isMs = useIsMs();
  return (
    <>
      {!isMs ? (
        <div className="flex px-[3rem] lg:px-[5rem] xl:px-[7rem] mt-2 w-[100%] gap-20 min-w-[1000px]">
          <div className="flex-1">
            <div className="font-semibold text-center text-slate-600 px-[1rem]">Free Premium Shipping</div>
            <div className="py-1 text-center text-sm px-[2rem]">
              Free ground shipping on orders of $99 or more in the U.S. and $250 in Canada
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-center text-slate-600 px-[1rem]">Free Returns in 14 Days</div>
            <div className="py-1 text-center text-sm px-[2rem]">
              We offer a generous 14-day return policy, allowing you to shop with confidence
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-center text-slate-600 px-[1rem]">Product Protection</div>
            <div className="py-1 text-center text-sm px-[2rem]">
              <p>
                Rest easy with our{" "}
                <a href="/" className="border-b border-black hover:border-0 transition-all">
                  manufacturer warranty
                </a>
                , ensuring that your product is protected against any manufacturing defects or issues
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-[1rem] mt-5 mb-10 w-[100%] flex flex-col gap-5">
          <div className="flex-1">
            <div className="font-semibold text-center text-slate-600 px-[1rem] pb-2 text-[0.8rem]">
              Free Premium Shipping
            </div>
            <div className="py-1 text-center text-sm px-[2rem]">
              Free ground shipping on orders of $99 or more in the U.S. and $250 in Canada
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-center text-slate-600 px-[1rem] pb-2 text-[0.8rem]">
              Free Returns in 14 Days
            </div>
            <div className="py-1 text-center text-sm px-[2rem]">
              We offer a generous 14-day return policy, allowing you to shop with confidence
            </div>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-center text-slate-600 px-[1rem] pb-2 text-[0.8rem]">
              Product Protection
            </div>
            <div className="py-1 text-center text-sm px-[2rem]">
              <p>
                Rest easy with our{" "}
                <a href="/" className="border-b border-black hover:border-0 transition-all">
                  manufacturer warranty
                </a>
                , ensuring that your product is protected against any manufacturing defects or issues
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShippingDetail;
