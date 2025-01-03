import { useRef, useState } from "react"
import { TagAction } from "../../../drawer-bot-trade/transaction/TransactionAI/Popular"
import ModalDate from "./ModalDate"
import { Typography } from "@mui/material"
import clsx from "clsx"
import CardContentPublic from "./CardContentPublic"
import DrawerProfileCoppy from "../../coppy/Simulation/drawer-profile-coppy"


const PublicContract = ({ type }: { type?: string }) => {
    const refProfileCoppy: any = useRef()
    return (
        <div className="flex flex-col gap-1">
          
            {Array.from({ length: 5 }).map((_, key) => {
                return (
                    <CardContentPublic
                        type={type}
                        onClick={() => refProfileCoppy.current.onOpen()}
                        key={key + 'card content'}
                    />
                );
            })}
           

            <DrawerProfileCoppy refProfileCoppy={refProfileCoppy} />
        </div>
    )
}
export default PublicContract