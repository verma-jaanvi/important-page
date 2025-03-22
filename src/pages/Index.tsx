
import React, { useState, useEffect } from 'react';
import AnimatedText from '../components/AnimatedText';
import FloatingElement from '../components/FloatingElement';
import ForgiveModal from '../components/ForgiveModal';
import { Heart, Stars, HeartCrack, Sparkles, Star, Music, CloudRain, Rainbow, Flower, Baby, Cake, Gift, PartyPopper } from 'lucide-react';

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [forgiven, setForgiven] = useState(false);
  const [fadeContent, setFadeContent] = useState(false);

  useEffect(() => {
    // Show the forgiveness modal after 30 seconds
    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 30000);

    return () => clearTimeout(modalTimer);
  }, []);

  const handleForgiven = () => {
    setForgiven(true);
    setShowModal(false);
    setFadeContent(true);
  };

  // Extended list of decorative elements with more variety and positions
  const decorativeElements = [
    { element: <Heart className="text-sorry-pink animate-pulse-subtle" />, position: { top: '15%', left: '10%' }, delay: 0, size: 'md' },
    { element: <Stars className="text-sorry-peach" />, position: { top: '20%', right: '15%' }, delay: 0.5, size: 'sm' },
    { element: <Sparkles className="text-sorry-blue" />, position: { bottom: '15%', left: '20%' }, delay: 1, size: 'sm' },
    { element: <HeartCrack className="text-sorry-rose" />, position: { bottom: '25%', right: '10%' }, delay: 1.5, size: 'md' },
    { element: <Heart className="text-sorry-lavender animate-pulse-subtle" />, position: { top: '40%', left: '5%' }, delay: 2, size: 'sm' },
    { element: <Stars className="text-sorry-rose" />, position: { top: '45%', right: '5%' }, delay: 2.5, size: 'sm' },
    // New decorative elements
    { element: <Star className="text-yellow-400 animate-spin-slow" />, position: { top: '25%', left: '35%' }, delay: 0.7, size: 'sm' },
    { element: <Flower className="text-pink-400 animate-bounce-gentle" />, position: { bottom: '35%', left: '12%' }, delay: 1.2, size: 'md' },
    { element: <Rainbow className="text-sorry-peach" />, position: { top: '12%', right: '25%' }, delay: 0.3, size: 'md' },
    { element: <Music className="text-sorry-blue animate-wiggle" />, position: { bottom: '20%', right: '25%' }, delay: 1.8, size: 'sm' },
    { element: <Gift className="text-sorry-pink animate-float" />, position: { top: '30%', right: '30%' }, delay: 0.9, size: 'md' },
    { element: <Heart className="text-red-400 animate-heart-beat" />, position: { bottom: '40%', right: '15%' }, delay: 1.3, size: 'sm' },
    { element: <Cake className="text-sorry-peach animate-bounce-gentle" />, position: { top: '38%', left: '25%' }, delay: 1.7, size: 'md' },
    { element: <PartyPopper className="text-sorry-blue animate-wiggle" />, position: { bottom: '30%', right: '35%' }, delay: 2.2, size: 'sm' },
  ];

  // Add emoji decorations within the text
  const emojiDecoration = (
    <span className="inline-flex gap-2 items-center mt-2">
      <span className="animate-bounce-gentle">❤️</span>
      <span className="animate-pulse-subtle">✨</span>
      <span className="animate-wiggle">🙏</span>
      <span className="animate-float">🌸</span>
      <span className="animate-pulse-subtle">🎁</span>
      <span className="animate-bounce-gentle">🧸</span>
    </span>
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-shimmer animate-bg-shimmer"></div>
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute text-pink-100 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          >
            <div className="animate-float">❤️</div>
          </div>
        ))}
      </div>
      
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
        className={`z-10 max-w-3xl mx-auto transition-opacity duration-1000 ${
          fadeContent ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="glass p-10 rounded-3xl shadow-pop">
          <div className="text-center mb-8">
            <div className="inline-block bg-sorry-pink/20 px-3 py-1 rounded-full text-sorry-rose text-sm font-medium mb-4">
              <AnimatedText delay={0.5} text="From the heart" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-sorry-rose mb-4 leading-tight">
              <AnimatedText delay={1} text="Nikhil, I'm Sorry" />
              {emojiDecoration}
            </h1>
            
            <div className="flex justify-center my-6">
              <Heart size={48} className="text-sorry-rose animate-heart-beat" />
            </div>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
              <AnimatedText delay={1.5} text="For my immature behavior" />
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <p className="leading-relaxed">
              <AnimatedText delay={2} text="Nikhil, I wanted to sincerely apologize for saying you're a creep. It was wrong, immature, and not a reflection of who you truly are." />
            </p>
            
            <p className="leading-relaxed">
              <AnimatedText delay={2.5} text="Our friendship means the world to me and I deeply regret my hurtful words. You've always been there for me, and I value your presence in my life more than words can express." />
            </p>
            
            <p className="leading-relaxed">
              <AnimatedText delay={3} text="I hope you can find it in your heart to forgive me. I promise to be more thoughtful and kind going forward, Nikhil." />
              <span className="inline-block ml-2 animate-bounce-gentle">💖</span>
            </p>
            
            <div className="pt-4 flex justify-center items-center gap-2">
              <AnimatedText delay={3.5} text="With love, your best friend" />
              <span className="animate-pulse-subtle text-xl">💕</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <AnimatedText delay={4} text="A forgiveness prompt will appear in a few moments..." />
          <span className="inline-block ml-2 animate-wiggle">⏱️</span>
        </div>
      </div>
      
      {/* Forgiveness modal */}
      <ForgiveModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        onForgiven={handleForgiven}
      />
    </div>
  );
};

export default Index;
