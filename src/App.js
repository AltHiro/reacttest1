import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

import "./styles.css";

const user = {
  name: "name",
  email: "1234@aa.com",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  phone: "090-1111-2222",
  company: {
    name: "会社"
  },
  website: "http://"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
