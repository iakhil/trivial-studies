import CountryFactStudyPage from "../components/CountryFactStudyPage";

export default function CountryCapitalsPage() {
  return (
    <CountryFactStudyPage
      title="Countries & Capitals"
      intro="Flip each card to connect every country with its capital city."
      factLabel="Capital"
      note="Tap a card to flip it."
      getFactValue={(country) => country.capital}
    />
  );
}
