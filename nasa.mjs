const key = process.env.NASA_API_KEY;
const svar = await fetch(`https://api.nasa.gov/neo/rest/v1/feed/today?api_key=${key}`);
console.log("Statuskode:", svar.status);
const data = await svar.json();

const asteroider = Object.values(data.near_earth_objects).flat();
for (const a of asteroider) {
  console.log(a.name, "-", Math.round(a.estimated_diameter.meters.estimated_diameter_max), "m");
}