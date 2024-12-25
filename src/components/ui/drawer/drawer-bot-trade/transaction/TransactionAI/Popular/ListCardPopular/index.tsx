import CardContentTabGrid from "../../../../tab-grid/CardContentTabGrid";

const ListCardPopular = () => {
    return (
        <div className="flex flex-col gap-4">
            {Array.from({ length: 10 }).map((_, key) => {
                return (
                    <CardContentTabGrid
                        key={key + 'card content'}
                    />
                );
            })}
        </div>
    )
}
export default ListCardPopular