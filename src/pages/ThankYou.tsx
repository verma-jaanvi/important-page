
import React, { useEffect, useState } from 'react';
import { Heart, Stars, Sparkles, HeartHandshake, PartyPopper } from 'lucide-react';
import FloatingElement from '../components/FloatingElement';
import AnimatedText from '../components/AnimatedText';

const ThankYou = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Create confetti animation
    const createConfetti = () => {
      const colors = ['#FFC6D3', '#FFD6A5', '#A5D8FF', '#D8B5FF'];
      const container = document.getElementById('confetti-container');
      
      if (!container) return;
      
      for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `-10px`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.animationDuration = `${5 + Math.random() * 5}s`;
        
        container.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.remove();
          }
        }, 10000);
      }
    };
    
    // Delay showing content to allow for animation
    setTimeout(() => {
      setShowContent(true);
      createConfetti();
    }, 500);
  }, []);
  
  const decorativeElements = [
    { element: <Heart className="text-sorry-pink" />, position: { top: '15%', left: '10%' }, delay: 0, size: 'md' },
    { element: <Stars className="text-sorry-peach" />, position: { top: '20%', right: '15%' }, delay: 0.5, size: 'sm' },
    { element: <Sparkles className="text-sorry-blue" />, position: { bottom: '15%', left: '20%' }, delay: 1, size: 'sm' },
    { element: <HeartHandshake className="text-sorry-rose" />, position: { bottom: '25%', right: '10%' }, delay: 1.5, size: 'md' },
    { element: <PartyPopper className="text-sorry-lavender" />, position: { top: '40%', left: '5%' }, delay: 2, size: 'sm' },
    { element: <Stars className="text-sorry-rose" />, position: { top: '45%', right: '5%' }, delay: 2.5, size: 'sm' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-soft animate-bg-shimmer"></div>
      
      {/* Confetti container */}
      <div id="confetti-container" className="fixed inset-0 pointer-events-none"></div>
      
      {/* Decorative floating elements */}
      {decorativeElements.map((item, index) => (
        <FloatingElement
          key={index}
          delay={item.delay}
          position={item.position}
          size={item.size as any}
        >
          {item.element}
        </FloatingElement>
      ))}
      
      {/* Main content */}
      <div 
        className={`z-10 max-w-3xl mx-auto transition-all duration-1000 ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="glass p-10 rounded-3xl shadow-glow">
          <div className="text-center mb-8">
            <div className="inline-block bg-sorry-rose/20 px-4 py-1.5 rounded-full text-sorry-rose text-sm font-semibold mb-6">
              <AnimatedText delay={0.5} text="Friendship restored" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-sorry-rose mb-6 leading-tight">
              <AnimatedText delay={1} text="Thank You!" />
            </h1>
            
            <div className="flex justify-center my-8">
              <div className="relative">
                <HeartHandshake size={64} className="text-sorry-rose animate-heart-beat" />
                <div className="absolute -top-2 -right-2">
                  <Sparkles size={24} className="text-sorry-peach animate-pulse-subtle" />
                </div>
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              <AnimatedText delay={1.5} text="For your forgiveness" />
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <p className="leading-relaxed">
              <AnimatedText delay={2} text="Your forgiveness means everything to me. Thank you for being so understanding and giving me another chance." />
            </p>
            
            <p className="leading-relaxed">
              <AnimatedText delay={2.5} text="I promise to be a better friend and to always treasure our special bond. You're truly the best friend anyone could ask for." />
            </p>
            
            <p className="leading-relaxed">
              <AnimatedText delay={3} text="Here's to many more wonderful memories together!" />
            </p>
            
            <div className="pt-6 flex justify-center">
              <AnimatedText delay={3.5} text="With endless gratitude, your best friend" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
