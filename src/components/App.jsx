function App() {
  const placeRows = () => [
    <tr>
      <td>Alejandro</td>
      <td>alex@mail.com</td>
      <td>alejandro.com</td>
    </tr>,
    <tr>
      <td>Juan</td>
      <td>juan@mail.com</td>
      <td>juan.com</td>
    </tr>,
  ];

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr className="padding-2">
            <th>Name:</th>
            <th>Email:</th>
            <th>Enlace:</th>
          </tr>
        </thead>
        <tbody>{placeRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
