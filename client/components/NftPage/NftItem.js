import { useAllTokens } from '../../queries'

const NftItem = () => {
  const { data } = useAllTokens()
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map(({ image, name }) => (
        <div className="2xl:shadow-xl relative m-2 xl:m-3 2xl:m-5 rounded-md w-auto h-auto xl:h-[16rem] 2xl:h-[32rem] ">
          <img
            src={image}
            alt={name}
            className="w-32 xl:w-48 2xl:w-72 rounded-md"
          />
          {/* как сделать выезжающее меню при наведении? */}
          <div className="hidden text-sm xl:text-md 2xl:text-lg 2xl:inline text-black bg-white box-border font-gallery dark:bg-[#0D0A1C] dark:text-[#ECEFF1]">
            <div className="absolute bottom-0 w-full hidden md:flex flex-col content-end ">
              <div className="flex justify-between pt-4">
                <h3 className="pl-3.5 font-bold leading-7 ">{name}</h3>
                <h1 className="pr-3.5 leading-6">1.99 ETH</h1>
              </div>
              <p className="pl-3.5 py-5">Account</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default NftItem
