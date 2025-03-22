import React, { useState, useEffect, useRef } from "react";
import { Heart } from 'lucide-react';

interface LastButtonCaseProps {
    handleYesClick: () => void;
    handleNoClick: () => void;
}

const LastButtonCase: React.FC<LastButtonCaseProps> = ({ handleYesClick, handleNoClick }) => {
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const noButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleMouseOver = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const newX = Math.random() * (screenWidth - 150);
            const newY = Math.random() * (screenHeight - 100);

            setPosition({ top: `${newY}px`, left: `${newX}px` });
        };

        const button = noButtonRef.current;
        if (button) {
            button.addEventListener("mouseover", handleMouseOver);
        }

        return () => {
            if (button) {
                button.removeEventListener("mouseover", handleMouseOver);
            }
        };
    }, []);

    return (
        <>
            {/* Yes Button */}
            <button
                onClick={handleYesClick}
                className="btn-hover-effect flex items-center gap-2 bg-sorry-rose text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-glow hover:scale-105"
            >
                <Heart size={18} className="animate-heart-beat" /> Yes
            </button>

            {/* No Choice Button */}
            <button
                ref={noButtonRef}
                onClick={handleNoClick}
                className="btn-hover-effect flex items-center gap-2 bg-sorry-lavender text-white px-5 py-2 rounded-full font-medium shadow-soft transition-all text-sm absolute"
                style={{ top: position.top, left: position.left, position: "absolute", transition: "top 0.5s, left 0.5s" }}
            >
                no choice
            </button>
        </>
    );
};

export default LastButtonCase;
