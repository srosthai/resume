import { useRef } from 'react';
import TiltedCard from './reactbits/TiltedCard';

export default function PortraitCard() {
  const dialogRef = useRef(null);

  const openPortrait = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  };

  const closePortrait = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
  };

  return (
    <>
      <TiltedCard
        imageSrc="/portrait.webp"
        altText="Portrait of Sros Thai"
        captionText="View portrait"
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        scaleOnHover={1.015}
        rotateAmplitude={4}
        showTooltip={false}
        radius={2}
        glare={0.16}
        glareColor="#ffffff"
        shadow={0.28}
        smoothness={0.88}
        parallax={0.4}
        intro={false}
        className="portrait-tilt"
        onClick={openPortrait}
        ariaHasPopup="dialog"
        overlayContent={<span className="portrait-hint">View portrait</span>}
        displayOverlayContent
        overlayDepth={18}
      />

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
