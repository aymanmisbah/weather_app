
const WeatherIcon = ({iconNumber}) => {
    const iconPath = `/weather.icons/${iconNumber}.png`;
    return (
        <img  src={iconPath} alt={`Weather Icon ${iconNumber}`} />
    )
}

export default WeatherIcon 