// React Imports
import React, { Fragment } from "react"
// Next Imports
import Image from "next/image"
// Assets Imports
import Logo from "@/assets/logo.png"

interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
  return (
    <Fragment>
      <div className="bg-primary_grey w-[5vw] relative justify-end">
        <div className="mt-5">
          <Image
            src={Logo}
            height={30}
            width={40}
            alt="Logo"
            className="ml-4"
          />
        </div>
        <div
          className="w-[20px] 
            absolute top-0 bottom-0 right-0
          "
          style={{
            background: "rgba(26, 27, 30, 0.5)",
            borderLeft: "2px solid rgba(255, 255, 255, 0.2)",
          }}
        />

        <div
          className="h-[50vh] bg-red-400 z-10  border-radius-[0px 0px 0px 50px]"
          style={{
            clipPath:
              "polygon(0 162.00px,162.00px 0,100% 0,100% 100%,162.00px 100%,0 calc(100% - 162.00px))",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          Hello
        </div>
      </div>
    </Fragment>
  )
}

export default SideBar
