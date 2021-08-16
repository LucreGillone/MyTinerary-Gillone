const InfoCities = () => {
    return (
        <div className="citiesContainer">
            {citiesInfo.map((city) => 
            <div className="cityCards"
            style={{backgroundImage: `url("${city.picture}")`}}>
                <h3>{city.city}</h3>
             </div>
            )}
        </div>
    )
}

export default InfoCities