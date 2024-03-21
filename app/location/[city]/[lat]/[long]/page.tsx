import { getClient } from '@/apollo-client';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current:
        'temperature_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m',
      longitude: long,
      latitude: lat,
      timezone: 'auto',
    },
  });

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div>
      WeatherPage: {city} {lat} {long}
    </div>
  );
}

export default WeatherPage;
