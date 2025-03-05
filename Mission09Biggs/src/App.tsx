import "./App.css";
import teams from "./CollegeBasketballTeams.json";

function Header() {
  return (
    <>
      <h1>Welcome to March Madness</h1>
      <h5>Choose your team:</h5>
    </>
  );
}

function TeamList({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <div className="TeamCard">
        <h2>Team School: {school}</h2>
        <h3>Mascot Name: {name}</h3>
        <h3>City: {city}</h3>
        <h3>State: {state}</h3>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      {teams.teams.map((oneTeam) => (
        <TeamList
          school={oneTeam.school}
          name={oneTeam.name}
          city={oneTeam.city}
          state={oneTeam.state}
        />
      ))}
    </>
  );
}

export default App;
