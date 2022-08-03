import { useAllTokens } from '../../queries'

const NftItem = () => {
  const { data } = useAllTokens()
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map(({ image, name }) => (
        <div className=" w-96 md:w-auto m-7 rounded-xl overflow-hidden">
          <div className="flex xl:flex-col">
            <div className="md:shrink-0">
              <img
                src={image}
                alt={name}
                className="w-72 xl:w-64 2xl:w-72 rounded-md"
              />
            </div>
            <div className=" text-black bg-white box-border font-gallery rounded-r-xl dark:bg-[#0D0A1C] dark:text-[#ECEFF1] ">
              <div className="flex flex-col xl:flex-row xl:justify-between pt-4">
                <h3 className="pl-3.5 pr-3.5 font-bold leading-7 text-sm xl:text-md 2xl:text-lg">
                  {name}
                </h3>
                <h1 className="pt-3.5 xl:pt-0 pr-3.5 pl-3.5 leading-6 text-sm xl:text-md 2xl:text-lg">
                  1.99 ETH
                </h1>
              </div>
              <p className="pt-3.5 xl:py-5 pl-3.5  text-sm">Account</p>
            </div>
          </div>
        </div>
      ))}

      {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/store.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div> */}
    </>
  )
}

export default NftItem
