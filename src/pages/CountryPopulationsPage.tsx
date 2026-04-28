import CountryFactStudyPage from "../components/CountryFactStudyPage";
import { COUNTRY_FACTS_SNAPSHOT_DATE } from "../data/countryFacts";

const populationFormatter = new Intl.NumberFormat("en-US");
const populationSnapshotLabel = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
}).format(new Date(`${COUNTRY_FACTS_SNAPSHOT_DATE}T00:00:00Z`));

export default function CountryPopulationsPage() {
  return (
    <CountryFactStudyPage
      title="Countries & Populations"
      intro="Flip each card to study population size by country."
      factLabel="Population"
      note={`Population snapshot: ${populationSnapshotLabel}.`}
      getFactValue={(country) => populationFormatter.format(country.population)}
    />
  );
}
