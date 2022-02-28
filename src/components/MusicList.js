import React, { useState } from 'react';

const SongList = () => {
    const [song, setSong] = useState([
        { name: 'Boss',  subgroup: "NCT U", releaseDate: '2018', coverArt:"https://upload.wikimedia.org/wikipedia/en/6/6b/NCT_2018_Empathy_Album_Cover.jpg", like: "🤍"},

        { name: 'Domino',  subgroup: "WayV", releaseDate: '2020', coverArt:"https://www.kpoplyrics.net/wp-content/uploads/2020/06/wayv-awaken-the-world-the-1st-album-cover.jpg", like: "🤍"},

        { name: 'Limitless',  subgroup: "NCT 127", releaseDate: '2017', coverArt:"https://upload.wikimedia.org/wikipedia/en/6/66/Limitless_EP_Poster.jpg", like: "🤍"},

        { name: 'Sticker',  subgroup: "NCT 127", releaseDate: '2021', coverArt:"https://upload.wikimedia.org/wikipedia/en/1/12/NCT_127_-_Sticker.png", like: "🤍"},

        { name: 'Simon Says',  subgroup: "NCT 127", releaseDate: '2018', coverArt:"https://pbs.twimg.com/media/DsSxeJLVYAEFv2Z.jpg", like: "🤍"},

        { name: 'Lemonade',  subgroup: "NCT 127", releaseDate: '2021', coverArt:"https://upload.wikimedia.org/wikipedia/en/1/12/NCT_127_-_Sticker.png", like: "🤍"},

        { name: 'Dreaming', subgroup: "NCT Dream", releaseDate: '2021', coverArt:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2xQqYn30pgOBic3os_2OiiiHFD42LvuOZsaGx_eFdlsoja1iT2A4SFBhxSPk-wDwq1s&usqp=CAU", like: "🤍"},

        { name: 'Turn Back Time',  subgroup: "WayV", releaseDate: '2020', coverArt:"https://www.kpoplyrics.net/wp-content/uploads/2020/06/wayv-awaken-the-world-the-1st-album-cover.jpg", like: "🤍"},

        { name: 'OK!',  subgroup: "NCT U", releaseDate: '2021', coverArt:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2xQqYn30pgOBic3os_2OiiiHFD42LvuOZsaGx_eFdlsoja1iT2A4SFBhxSPk-wDwq1s&usqp=CAU", like: "🤍" }
      ])


      const handleLike = e => {
        e.preventDefault();
        if (e.target.textContent === "🤍") {
          e.target.textContent = "❤️"
        } else {
          e.target.textContent = "🤍"
        }
      };

      const renderRows = () => {
        return song.map(s => 
        <tr>
          <td>{s.name}</td>
          <td>{s.subgroup}</td>
          <td>{s.releaseDate}</td>
          <td><img src={s.coverArt} width="150"/></td>
          <td><p id={s.name} onClick={handleLike} style={{cursor: "pointer"}}>{s.like}</p></td>
        </tr>)
      }

      return (
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Sub-Unit</th>
              <th>Release Date</th>
              <th>Cover Art</th>
              <th>Like</th>
            </tr>
          </thead>
          <tbody>
            { renderRows() }
          </tbody>
        </table>
      );
}


export default SongList;
