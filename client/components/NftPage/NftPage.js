import { useAllTokens } from '../../queries'

const NftPage = () => {
  const { data } = useAllTokens()

  return (
    // Grid

    // <div className="grid grid-cols-4">
    //   {data?.map(({ image, name }) => (
    //     <div className="m-5 rounded-md text-black h-auto w-auto bg-white box-border">
    //       <img src={image} alt={name} className="rounded-md" />
    //       <div className="">
    //         <div className="flex justify-between pt-4 font-gallery">
    //           <h3 className="pl-3.5 font-bold leading-7">{name}</h3>
    //           <h1 className="pr-3.5 leading-6">1.99 ETH</h1>
    //         </div>
    //         <p className="pl-3.5 py-5 font-normal">Account</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // FlexBox

    <div className="flex flex-wrap ">
      {data?.map(({ image, name }) => (
        <div className="shadow-xl relative m-5 rounded-md w-auto h-[32rem] text-black bg-white box-border font-gallery dark:bg-[#0D0A1C] dark:text-[#ECEFF1]">
          <img src={image} alt={name} className="w-72 rounded-md" />

          <div className="absolute bottom-0 w-full flex flex-col content-end">
            <div className="flex justify-between pt-4">
              <h3 className="pl-3.5 font-bold leading-7 ">{name}</h3>
              <h1 className="pr-3.5 leading-6">1.99 ETH</h1>
            </div>
            <p className="pl-3.5 py-5">Account</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NftPage
