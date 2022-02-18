import { SplitScreen } from "./LayoutComponents/SplitScreen";
import { ResourceLoader } from "./ContainerComponents/ResourceLoader";
import { UserInfo } from "./ContainerComponents/UserInfo";
import { PostsList } from "./ContainerComponents/PostsList";

const JASON_PLACEHOLDER_API_URL = "https://jsonplaceholder.typicode.com";

const LeftHandComponent = () => {
  return (
    <ResourceLoader resourceUrl={`${JASON_PLACEHOLDER_API_URL}/users`} resourceName="users">
      <UserInfo />
    </ResourceLoader>
  );
};

const RightHandComponent = () => {
  return (
    <ResourceLoader resourceUrl={`${JASON_PLACEHOLDER_API_URL}/users/1/posts`} resourceName="posts">
      <PostsList />
    </ResourceLoader>
  );
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
