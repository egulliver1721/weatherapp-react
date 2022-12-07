export default function WeatherOverview() {
  return (
    <ul class="weather-overview">
      <li class="weather-description" id="weather-description">
        Partly Cloudy
      </li>
      <li class="weather-information">
        <span>Humidity </span> <span id="humidity"></span>
        <span class="white-space">&nbsp;&nbsp;|&nbsp;</span>
        <span class="wind"> Wind</span>
        <span id="wind"> </span>
      </li>
      <li class="last-updated">
        last updated:
        <span class="current-date-time" id="current-date-time">
          Friday 13:35
        </span>
      </li>
    </ul>
  );
}
