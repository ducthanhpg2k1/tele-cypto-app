import TableTradingPair from "./TableTradingPair"

const TradingPair = ({ valueFilterTransaction }: any) => {
    return (
        <div className="flex flex-col gap-1 pb-6">
            <TableTradingPair valueFilter={valueFilterTransaction} />
        </div>

    )
}
export default TradingPair