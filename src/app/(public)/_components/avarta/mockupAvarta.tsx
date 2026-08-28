import Avarta from "./Avarta";

async function mockupGetGitHubProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  return data.avatar_url as string;
}

export default async function MockupAvarta() {
    const avartaUrl = await mockupGetGitHubProfile("octocat")
  return (
    <>
      <Avarta profile={avartaUrl} />
    </>
  );
}
