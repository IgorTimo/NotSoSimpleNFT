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
                <h3 className="pl-3.5 pr-3.5 font-bold leading-7 text-xl xl:text-lg 2xl:text-md">
                  {name}
                </h3>
                <h1 className="pt-3.5 xl:pt-0 pr-3.5 pl-3.5 leading-6 text-xl xl:text-lg 2xl:text-md">
                  1.99 ETH
                </h1>
              </div>
              <p className="pt-3.5 xl:py-5 pl-3.5  text-lg xl:text-md 2xl:text-sm">
                Account
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default NftItem
