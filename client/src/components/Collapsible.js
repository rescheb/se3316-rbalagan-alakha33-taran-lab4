import { useEffect, useState } from "react";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [recentPlaylists, setRecentPlaylists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/playlist/recentPlaylists", {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecentPlaylists(data);
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {recentPlaylists.length != 0
        ? recentPlaylists.map((playlist) => (
            <div className="playlistSearch">
              <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                {playlist.title +
                  " by: " +
                  playlist.username +
                  " #tracks: " +
                  playlist.song.split(",").length}
              </button>
              {isOpen && <div className="content">other stuff</div>}
            </div>
          ))
        : null}
    </div>

    // <div className="collapsible">

    //   <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
    //     {/* {props.label} */}vefve
    //   </button>
    //   {isOpen && <div className="content">{props.children}</div>}
    // </div>
  );
}

export default Collapsible;
