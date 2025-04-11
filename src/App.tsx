import './App.css'
import {useState} from "react";

interface FormData {
  name: string;
  powod: string;
  wiarygodnosc: string;
  data: string;
  kreatywnosc: string;
  komentarz: string;
  pilna: boolean;
}


function App() {

  const Form = () => {
    const [formData, setFormData] = useState<FormData>({
      data: "",
      komentarz: "",
      kreatywnosc: "",
      pilna: false,
      wiarygodnosc: "",
      name: "", powod: "" });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Podaj imie</p>
        <input type={"text"} name={"name"}/>
        <br/>
        <p>Podaj donwod wymowki</p>
        <select name={"powod"}>
          <option selected disabled>Wybierz powód</option>
          <option value={"spoznienie"}>Spóźnienie</option>
          <option value={"pracadomowa"}>Niedostarczenie pracy domowej</option>
          <option value={"brakodp"}>Brak odpowiedzi na wiadomość</option>
        </select>
        <br/>
        <p>Poziom wiarygodnosci</p>
        <input type={"range"} name={"wiarygodnosc"} min={0} max={6}/>
        <br/>
        <p>Data wydarzenia</p>
        <input type={"date"} name={"data"}/>
        <br/>
        <p>Poziom kreatywnosci</p>
        <select value={"kreatywnosc"}>
            <option selected disabled>Wybierz poziom</option>
        </select>
        <br/>
        <p>Dodatkowe szczegoly</p>
        <textarea placeholder={"Dodaj swoj komentarz"} name={"komentarz"}/>
        <br/>
        <label>
          Pilna wymówka:
          <input type={"checkbox"} name={"pilna"}/>
        </label>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
