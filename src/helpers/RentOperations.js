const RentOperations = ({option, days}) => {
    const hotelCalculate = () => {
        let cost = days * 50;

        if (days > 5) cost -= 25;
        else if (days > 7) cost -= 15;

        return (
            <p>Rent Hotel Cost: {cost}</p>
        );
    }

    const carCalculate = () => {
        let cost = days * 30;
        if (cost > 5) cost -= 10;
        else if (days > 7) cost -= 15;

        return (
            <p>Rent Car Cost: {cost}</p>
        );
    }

    return (
        <div>
            {option === 1 ? hotelCalculate() : option === 2 ? carCalculate() : ""}
        </div>
    );
}

export default RentOperations;