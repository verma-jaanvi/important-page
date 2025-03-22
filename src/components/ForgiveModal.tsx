
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, HeartHandshake, HeartCrack } from 'lucide-react';
import { toast } from 'sonner';
import LastButtonCase from "./LastButtonCase";

interface ForgiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onForgiven: () => void;
}

const ForgiveModal: React.FC<ForgiveModalProps> = ({
  isOpen,
  onClose,
  onForgiven
}) => {
  const [stage, setStage] = useState<'initial' | 'second' | 'third' | 'fourth' | 'fifth' | 'last' | 'forgiven'>('initial');
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const handleNoClick = () => {
    if (stage === 'initial') {
      setStage('second');
    } else if (stage === 'second') {
      setStage('third');
    } else if (stage === 'third') {
      setStage('fourth');
    } else if (stage === 'fourth') {
      setStage('fifth');
    } else if (stage === 'fifth') {
      setStage('last');
    } else {
      setStage('initial');
    }
  };

  const handleYesClick = () => {
    setStage('forgiven');

    toast.success("Thank you for forgiving me!", {
      duration: 3000,
    });

    createConfetti();

    setTimeout(() => {
      onForgiven();
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    }, 2000);
  };

  const createConfetti = () => {
    const colors = ['#FFC6D3', '#FFD6A5', '#A5D8FF', '#D8B5FF'];
    const container = document.getElementById('confetti-container');

    if (!container) return;

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = `-10px`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.animationDuration = `${3 + Math.random() * 4}s`;

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 7000);
    }
  };

  if (!isOpen) return null;

  const getMessage = () => {
    switch (stage) {
      case 'initial':
        return "Forgive me please?";
      case 'second':
        return "Are you sure? Please forgive me...";
      case 'third':
        return "I'm really sorry, one more chance?";
      case 'fourth':
        return "Last Time please?";
      case 'fifth':
        return "PLEASEEEEEEEEEEEEEEEEEEEEEEE?";
      case 'last':
        return "You have no choice";
      case 'forgiven':
        return "Thank you for forgiving me!";
      default:
        return "Forgive me please?";
    }
  };

  // Get buttons based on current stage
  const getButtons = () => {
    switch (stage) {
      case 'initial':
        return (
          <>
            <button
              onClick={handleYesClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-rose text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-glow hover:scale-105"
            >
              <Heart size={18} className="animate-heart-beat" /> Yes
            </button>
            <button
              onClick={handleNoClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-blue text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-soft hover:scale-105"
            >
              <HeartCrack size={18} /> No
            </button>
          </>
        );
      case 'second':
        return (
          <>
            <button
              onClick={handleYesClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-rose text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-glow hover:scale-105"
            >
              <Heart size={18} className="animate-heart-beat" /> Yes
            </button>
            <button
              onClick={handleNoClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-peach text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-soft hover:scale-105"
            >
              Naaa
            </button>
          </>
        );
      case 'third':
        return (
          <>
            <button
              onClick={handleYesClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-rose text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-glow hover:scale-105"
            >
              <Heart size={18} className="animate-heart-beat" /> Yes
            </button>
            <button
              onClick={handleNoClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-lavender text-white px-5 py-2 rounded-full font-medium shadow-soft transition-all hover:shadow-soft hover:scale-105 text-sm"
            >
              Still thinking...
            </button>
          </>
        );
      case 'fourth':
        return (
          <>
            <button
              onClick={handleYesClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-rose text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-glow hover:scale-105"
            >
              <Heart size={18} className="animate-heart-beat" /> Yes
            </button>
            <button
              onClick={handleNoClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-lavender text-white px-5 py-2 rounded-full font-medium shadow-soft transition-all hover:shadow-soft hover:scale-105 text-sm"
            >
              Think Again...
            </button>
          </>
        );
      case 'fifth':
        return (
          <>
            <button
              onClick={handleYesClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-rose text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-glow hover:scale-105"
            >
              <Heart size={18} className="animate-heart-beat" /> Yes
            </button>
            <button
              onClick={handleNoClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-lavender text-white px-5 py-2 rounded-full font-medium shadow-soft transition-all hover:shadow-soft hover:scale-105 text-sm"
            >
              You can't do this to me...
            </button>
          </>
        );
      case 'last':
        return (
          <>
            <LastButtonCase
              handleYesClick={handleYesClick}
              handleNoClick={handleNoClick}
            />
            {/* <button
              onClick={handleYesClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-rose text-white px-6 py-3 rounded-full font-medium shadow-soft transition-all hover:shadow-glow hover:scale-105"
            >
              <Heart size={18} className="animate-heart-beat" /> Yes
            </button>
            <button
              onClick={handleNoClick}
              className="btn-hover-effect flex items-center gap-2 bg-sorry-lavender text-white px-5 py-2 rounded-full font-medium shadow-soft transition-all hover:shadow-soft hover:scale-105 hover:translate-x-4 hover:translate-y-4 text-sm pointer-events-none"
            >
              no choice
            </button> */}

          </>
        );
      case 'forgiven':
        return (
          <div className="flex justify-center w-full">
            <HeartHandshake size={48} className="text-sorry-rose animate-bounce-gentle" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div id="confetti-container" className="fixed inset-0 pointer-events-none"></div>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={stage !== 'forgiven' ? onClose : undefined}></div>
      <div
        className={`glass z-10 p-8 rounded-3xl max-w-md w-full shadow-pop transition-all duration-500 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${stage === 'forgiven' ? 'bg-gradient-soft shadow-glow' : ''}`}
      >
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-sorry-rose">
            {getMessage()}
          </h3>

          <div className="flex justify-center items-center space-x-4 mt-8">
            {getButtons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgiveModal;
