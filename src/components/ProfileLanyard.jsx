import { useEffect, useRef, useState } from 'react';

let lanyardPromise;

const loadLanyard = () => {
  if (!lanyardPromise) {
    lanyardPromise = import('./reactbits/Lanyard').then((module) => module.default);
  }
  return lanyardPromise;
};

export default function ProfileLanyard() {
  const dialogRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [Lanyard, setLanyard] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)');
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!enabled || Lanyard) return;
    let alive = true;
    loadLanyard().then((component) => {
      if (alive) setLanyard(() => component);
    });
    return () => {
      alive = false;
    };
  }, [enabled, Lanyard]);

  useEffect(() => {
    setReady(false);
  }, [enabled]);

  const openPortrait = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  };

  const closePortrait = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  };

  return (
    <>
      <p className="sr-only">
        Sros Thai, Full Stack Developer. Profile badge. Use View portrait to open the full photo.
      </p>

      <div className="lanyard-wrap">
        {(!enabled || !Lanyard || !ready) && (
          <div className="lanyard-static">
            <span className="lanyard-static__strap" aria-hidden="true" />
            <span className="lanyard-static__clip" aria-hidden="true" />
            <img
              src="/card-front.webp"
              alt="Sros Thai, Full Stack Developer"
              width="1024"
              height="1440"
            />
          </div>
        )}

        {enabled && Lanyard ? (
          <Lanyard
            frontImage="/card-front.webp"
            backImage="/card-back.webp"
            imageFit="cover"
            cardColor="#fbfbfb"
            orientation="portrait"
            finish="matte"
            cornerRadius={0.3}
            size={0.9}
            anchor="center"
            strapLength={0.52}
            strapColor="#111111"
            strapWidth={0.65}
            metal="graphite"
            gravity={1}
            damping={0.8}
            elasticity={0.3}
            breeze={0}
            interactive={false}
            intro={false}
            className="hero-lanyard"
            onReady={() => setReady(true)}
          />
        ) : null}
      </div>

      <button type="button" className="portrait-view" onClick={openPortrait}>
        View portrait
      </button>

      <dialog
        ref={dialogRef}
        className="portrait-dialog"
        aria-label="Portrait of Sros Thai"
        onClick={(event) => {
          if (event.target === event.currentTarget) closePortrait();
        }}
      >
        <button
          type="button"
          className="portrait-dialog__close"
          onClick={closePortrait}
          aria-label="Close portrait"
        >
          <span aria-hidden="true">×</span>
        </button>
        <img src="/portrait-full.webp" alt="Portrait of Sros Thai" width="1200" height="1200" />
      </dialog>
    </>
  );
}
