import { useState } from "react"
import { FilterAction } from "../TopRoi"
import TableVolatility from "./TableVolatility"

const Volatility = () => {
    const [valueFilter, setValueFilter] = useState<number>(1)

    return (
        <div className="flex flex-col gap-1 pt-4 pb-6">
            <FilterAction value={valueFilter} handleChangeFilter={(value) => setValueFilter(value)} />
            <TableVolatility/>
        </div>

    )
}
export default Volatility