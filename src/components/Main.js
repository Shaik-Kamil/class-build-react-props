import getAverage2 from '../Helpers/Helper';
function Main({ dogs }) {
  const average = getAverage2(dogs);
  return (
    <main>
      <h2>Class Average:{average}</h2>
      <h3>Notable performances and grades:</h3>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <span>{dog.name}:</span>
            {dog.notes}
            <span> &nbsp;Grade:</span> {dog.grade}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
