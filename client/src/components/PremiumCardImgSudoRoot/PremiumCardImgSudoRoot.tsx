import { useState } from "react";
import style from "./PremiumCardImgSudoRoot.module.css";

interface ImageZoomProps {
  src: string; 
  alt: string; 
  className: string;
}

function PremiumCardImgSudoRoot ({src, alt, className}: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image cliquable */}
      <img
        src={src}
        alt={alt}
        className={className}
        role="button"
        onClick={() => setIsOpen(true)}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />

      {/* Modal d'affichage en grand */}
      {isOpen && (
        <div className={style.modal} onClick={() => setIsOpen(false)}>
          <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={style.close} onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <img src={src} alt={alt} className={style.fullImage}onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}/>
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumCardImgSudoRoot;
