function Aside({ dogs }) {
  return (
    <aside>
      <h3>Roster:</h3>
      <ol>
        {dogs.map(
          // <li key={dog.id /*name*/}>{dog.name}</li>
          (dog) => {
            return dog.present ? <li key={dog.id}>{dog.name}</li> : null;
          }
        )}
      </ol>
    </aside>
  );
}

export default Aside;
