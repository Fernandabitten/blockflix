export default function SelectCategory({ category, changeCategory }) {
  return (
    <div className="grid">
      <select
        className="list--category"
        value={category}
        onChange={changeCategory}
      >
        <option value="action">Ação</option>
        <option value="adventure">Aventura</option>
        <option value="animation">Anime</option>
        <option value="comedy">Comédia</option>
        <option value="crime">Crime</option>
        <option value="drama">Drama</option>
        <option value="documentary">Documentário</option>
        <option value="family">Para toda família</option>
        <option value="fantasy">Fantasia</option>
        <option value="western">Faroeste</option>
        <option value="science fiction">Ficção Científica</option>
        <option value="war">Guerra</option>
        <option value="history">História</option>
        <option value="horror">Terror</option>
        <option value="music">Musicais</option>
        <option value="mystery">Mistério</option>
        <option value="romance">Romance</option>
      </select>
    </div>
  );
}
