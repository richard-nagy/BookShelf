import React, { useState } from "react";
import editStyle from "./Edit.module.scss";
import bookCover from "../Pictures/BookCover.jpg";

function Edit({ exit }) {
  const [stars, setStars] = useState(3);

  return (
    <div className={editStyle.addComponent}>
      <div className={editStyle.header}>
        <div>Könyv Beállítások</div>
        <div onClick={exit} className={editStyle.xButton}>
          +
        </div>
      </div>
      <div className={editStyle.content}>
        Cím - Szerző
        <div className={editStyle.comment}>
          <div className={editStyle.wrapper}>
            <div className={editStyle.startingDate}>
              <form>
                <label for="finish">
                  <div className={editStyle.dateText}>Kezdés:</div>
                </label>
                <input type="date" name="finish" />
              </form>
            </div>
            <div className={editStyle.bookCover}>
              <img src={bookCover} alt="bookCover" />
            </div>
            <div className={editStyle.finishDate}>
              <form>
                <div className={editStyle.dateText}>Befejezve:</div>
                <label for="end" />
                <input type="date" name="end" />
              </form>
            </div>
            <div>
              <div className={editStyle.starsText}>Értékelés:</div>
              <div className={editStyle.stars}>
                <input
                  className={editStyle.input}
                  type="radio"
                  id="r5"
                  name="rg1"
                  onChange={() => setStars(5)}
                />
                <label className={editStyle.label} htmlFor="r5">
                  {stars >= 5 ? <>★</> : <>☆</>}
                </label>
                <input
                  className={editStyle.input}
                  type="radio"
                  id="r4"
                  name="rg1"
                  onChange={() => setStars(4)}
                />
                <label className={editStyle.label} htmlFor="r4">
                  {stars >= 4 ? <>★</> : <>☆</>}
                </label>
                <input
                  className={editStyle.input}
                  type="radio"
                  id="r3"
                  name="rg1"
                  onChange={() => setStars(3)}
                />
                <label className={editStyle.label} htmlFor="r3">
                  {stars >= 3 ? <>★</> : <>☆</>}
                </label>
                <input
                  className={editStyle.input}
                  type="radio"
                  id="r2"
                  name="rg1"
                  onChange={() => setStars(2)}
                />
                <label className={editStyle.label} htmlFor="r2">
                  {stars >= 2 ? <>★</> : <>☆</>}
                </label>
                <input
                  className={editStyle.input}
                  type="radio"
                  id="r1"
                  name="rg1"
                  onChange={() => setStars(1)}
                />
                <label className={editStyle.label} htmlFor="r1">
                  {stars >= 1 ? <>★</> : <>☆</>}
                </label>
                <div
                  className={editStyle.starsNull}
                  onClick={() => setStars(0)}
                >
                  Ø
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={editStyle.comment}>Megjegyzés:</div>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <div className={editStyle.footer}>
        <button>Törlés</button>
        <button>Mentés</button>
      </div>
    </div>
  );
}

export default Edit;
