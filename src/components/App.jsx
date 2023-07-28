import { Profiles } from "./Profiles/Profiles";

export const App = () => {
  const obj = {
    name: 'Andriy',
    email: 'andriy-dog@gmail.com',
  }
  return <div>
    <Profiles data = {obj} />
  </div>;
};

