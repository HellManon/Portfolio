import React, { useEffect, useRef, useState } from "react";
import "../style/PageWrapper.css"; // Styles pour le canvas

function PageWrapper({ children, animation }) {
  const canvasRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (animation === "matrix") {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Caractères "Matrix" : chiffres, lettres majuscules et symboles ASCII
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*+-=<>";

      const fontSize = 24; // taille des caractères
      const columns = Math.floor(canvas.width / fontSize);
      // Chaque colonne a une position de départ et une vitesse aléatoire
    const drops = Array.from({ length: columns }, () => ({
        y: Math.random() * canvas.height / fontSize,
        speed: 0.02 + Math.random() * 0.05, // vitesse différente par colonne
      }));
      const speed = 0.1; // vitesse de chute

      let animationFrame;

      function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.10)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.fillStyle = "#0F0";
        ctx.font = `${fontSize}px 'CodeMatricielNFI'`;
  
        drops.forEach((drop, i) => {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));
          ctx.fillText(text, i * fontSize, drop.y * fontSize);
  
          drop.y += drop.speed;
  
          if (drop.y * fontSize > canvas.height && Math.random() > 0.975) {
            drop.y = 0; // reset au hasard
          }
        });

        animationFrame = requestAnimationFrame(draw);
      }

      draw();

      // Afficher le contenu réel après 2 secondes
      const timeout = setTimeout(() => setShowContent(true), 50000);

      // Cleanup
      return () => {
        cancelAnimationFrame(animationFrame);
        clearTimeout(timeout);
      };
    } else {
      setShowContent(true);
    }
  }, [animation]);

  return (
    <div className="page-wrapper">
      {animation === "matrix" && !showContent && (
        <canvas ref={canvasRef} className="matrix-canvas" />
      )}
      {showContent && <div className="page-content">{children}</div>}
    </div>
  );
}

export default PageWrapper;
