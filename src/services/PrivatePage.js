export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("trackit"));

  if (auth) {
    return <>{children}</>;
  } else {
    return <h1>SEM AUTORIZAÇÃO</h1>;
  }
}
