import './App.css'

function App() {

  return (
    <>
      <form onSubmit={}>
        <p>Podaj imie</p>
        <input type={"text"}
        />
        <br/>
        <p>Podaj powod wymowki</p>
        <select>
          <option value={"spoznienie"}>Spóźnienie</option>
          <option value={"pracadomowa"}>Niedostarczenie pracy domowej</option>
          <option value={"brakodp"}>Brak odpowiedzi na wiadomość</option>
        </select>
        <br/>
        <p>Poziom wiarygodnosci</p>
        <input type={"range"} />
        <br/>
        <p>Data wydarzenia</p>
        <input type={"date"}
        />
        <br/>
        <p>Poziom kreatywnosci</p>
        <select>
            <option value="nw">nw</option>
        </select>
        <br/>
        <p>Dodatkowe szczegoly</p>
        <textarea placeholder={"Dodaj swoj komentarz"}>

        </textarea>
        <br/>
        <label>
          Pilna wymówka:
          <input type={"checkbox"}
          />

        </label>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
