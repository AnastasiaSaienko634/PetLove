export async function getUsers() {
  const res = await fetch("API_URL");
  return res.json();
}
