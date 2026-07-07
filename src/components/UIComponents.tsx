import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: React.HTMLProps<HTMLDivElement> & { showRadialGradient?: boolean }) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-kaf-dark text-kaf-cream transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:linear-gradient(to_bottom,rgba(255,220,100,0.15)_0%,transparent_100%)]
            [--dark-gradient:linear-gradient(to_bottom,rgba(10,10,10,0.5)_0%,transparent_100%)]
            [--aurora:repeating-linear-gradient(100deg,var(--color-kaf-gold)_10%,var(--color-kaf-dark)_20%,var(--color-kaf-gold)_30%,var(--color-kaf-dark)_40%,var(--color-kaf-gold)_50%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] opacity-60
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed]
            pointer-events-none
            absolute -inset-[10px] will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_50%_50%,black_40%,transparent_90%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          {wordsArray.map((word, idx) => {
            return (
              <span
                key={word + idx}
                className="text-kaf-gold"
              >
                {word}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ShimmerButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }>(({
  children,
  className,
  asChild,
  ...rest
}, ref) => {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      ref={ref as any}
      className={cn(
        "group relative flex h-12 items-center justify-center overflow-hidden rounded-full px-8 font-display font-bold uppercase tracking-widest text-[#331c00] transition-all duration-300 active:scale-95",
        "bg-gradient-to-r from-[#D4AF37] via-[#FFF380] to-[#D4AF37] bg-[length:200%_auto]",
        "hover:bg-[position:right_center]",
        "border border-[#FFF8D6]/60",
        className
      )}
      {...rest}
    >
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-20deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-20deg)_translateX(150%)] transition-transform ease-in-out">
        <div className="relative h-full w-12 bg-white/5 blur-[2px]" />
      </div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
});
ShimmerButton.displayName = "ShimmerButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[36rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  key?: React.Key;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento transition duration-500 p-6 bg-white border border-gray-100 flex flex-col gap-6 overflow-hidden",
        className
      )}
    >
      <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-xl">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-1 transition duration-500 z-10 shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-[#00357A]/5">
            {icon}
          </div>
          <h3 className="font-display font-bold text-[#00357A] text-xl uppercase tracking-tight italic">
            {title}
          </h3>
        </div>
        <div className="font-medium text-gray-600 text-base leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export const ThreeDCard = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <div
      className={cn("flex items-center justify-center", containerClassName)}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative flex items-center justify-center transition-all duration-200 ease-linear",
          className
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = (item as HTMLElement).cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap items-center",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <React.Fragment key={item.name + idx}>
            <li
              className="w-[150px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[200px] bg-kaf-dark/50 flex items-center justify-center glassmorphism group"
            >
               <span className="text-xl font-display font-bold text-kaf-cream/60 group-hover:text-kaf-gold transition-colors text-center">
                 {item.name}
               </span>
            </li>
            <div className="flex-shrink-0 text-kaf-gold opacity-30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
              </svg>
            </div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    icon?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useScroll({
    container: ref,
    offset: ["start start", "end start"],
  }).scrollYProgress.on("change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[35rem] overflow-y-auto flex justify-center relative space-x-10 rounded-3xl p-10 scrollbar-hide bg-kaf-gold/5 backdrop-blur-sm"
      ref={ref}
    >
      <div className="absolute inset-0 bg-kaf-gold/5 pointer-events-none" />
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-kaf-gold/10 text-kaf-gold border border-kaf-gold/20">
                  {item.icon}
                </div>
                <h2 className="text-3xl font-display font-bold text-kaf-gold uppercase tracking-tighter">
                  {item.title}
                </h2>
              </div>
              <p className="text-lg text-kaf-cream/70 max-w-sm mt-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:block h-80 w-[400px] rounded-2xl bg-kaf-dark sticky top-10 overflow-hidden neobrutalism border-kaf-gold",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) rotate3d(${mousePosition.y / 10}, ${-mousePosition.x / 10}, 0, ${
              Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2)
            }deg)`
          : "translate3d(0px, 0px, 0) rotate3d(0, 0, 0, 0deg)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "mx-auto w-full bg-white/5 backdrop-blur-md relative rounded-3xl overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,215,0,0.15),rgba(0,0,0,0))] sm:mx-0 sm:rounded-2xl"
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0)`
              : "translate3d(0px, 0px, 0)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("h-full px-4 py-20 sm:px-10", className)}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export const FloatingNav = ({
  navItems,
  logo,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  logo?: string;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const { pathname } = useLocation();

  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (link: string) => {
    if (link === "/" && (pathname === "/" || pathname === "/index")) return true;
    return pathname === link;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto rounded-full z-[5000] pr-2 pl-8 py-3 items-center justify-center space-x-6 glass-dark border border-kaf-gold/20",
          className
        )}
      >
        {logo && (
          <Link to="/" className="flex items-center gap-2 pr-4">
            <img src={logo} alt="KAF Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
          </Link>
        )}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              to={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-kaf-cream/70 hover:text-kaf-gold transition-colors text-sm font-medium uppercase tracking-widest",
                isActive(navItem.link) && "text-kaf-gold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-kaf-gold after:rounded-full"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <a href="https://wa.me/5548991510012" target="_blank" rel="noopener noreferrer">
          <ShimmerButton className="hidden md:flex h-11 text-sm px-6">
            <MessageCircle size={18} />
            Peça no WhatsApp
          </ShimmerButton>
        </a>
        <button 
          className="md:hidden text-kaf-gold p-2 mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 inset-x-4 z-[4999] glass-dark border border-kaf-gold/20 rounded-2xl p-4 flex flex-col space-y-4 md:hidden"
          >
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`mobile-link=${idx}`}
                to={navItem.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-center text-sm font-medium uppercase tracking-widest transition-colors",
                  isActive(navItem.link) 
                    ? "bg-kaf-gold/10 text-kaf-gold border border-kaf-gold/20" 
                    : "text-kaf-cream/70 hover:text-kaf-gold hover:bg-white/5"
                )}
              >
                {navItem.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-kaf-gold/10">
              <a href="https://wa.me/5548991510012" target="_blank" rel="noopener noreferrer" className="block w-full">
                <ShimmerButton className="w-full h-12 text-sm">
                  <MessageCircle size={18} />
                  Peça no WhatsApp
                </ShimmerButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export const NumberTicker = ({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
}) => {
  const [count, setCount] = useState(direction === "up" ? 0 : value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = direction === "up" ? 0 : value;
      let end = direction === "up" ? value : 0;
      let duration = 2000;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [value, direction, delay]);

  return <span className={cn("inline-block", className)}>{count.toLocaleString()}</span>;
};

export const Lens = ({
  children,
  zoom = 2,
  lensSize = 150,
  className,
}: {
  children: React.ReactNode;
  zoom?: number;
  lensSize?: number;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn("relative overflow-hidden cursor-none", className)}
    >
      {children}
      {isHovering && (
        <div
          className="pointer-events-none absolute z-50 rounded-full border-2 border-kaf-gold/50 overflow-hidden"
          style={{
            width: lensSize,
            height: lensSize,
            left: mousePosition.x - lensSize / 2,
            top: mousePosition.y - lensSize / 2,
          }}
        >
          <div
            className="absolute"
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${(children as any).props.src})`,
              backgroundSize: `${containerRef.current?.offsetWidth! * zoom}px ${
                containerRef.current?.offsetHeight! * zoom
              }px`,
              backgroundPosition: `-${mousePosition.x * zoom - lensSize / 2}px -${
                mousePosition.y * zoom - lensSize / 2
              }px`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      )}
    </div>
  );
};

export const FoamBubbles = ({ count = 60, className }: { count?: number, className?: string }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: Math.random() * 8 + 2,
            height: Math.random() * 8 + 2,
            left: `${Math.random() * 100}%`,
            bottom: `-20px`,
          }}
          animate={{
            y: -2000,
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const BeerGlassEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-kaf-dark">
      {/* Dark Base with subtle gold tint */}
      <div className="absolute inset-0 bg-kaf-dark" />
      
      {/* Atmospheric Gold Accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(170,93,0,0.3)_0%,transparent_70%)]" />
      </div>

      {/* Global Rising Gas - Bubbles */}
      <FoamBubbles count={20} className="opacity-40" />
      
      {/* Subtle Light Rays */}
      <motion.div 
        className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0%,transparent_10%,rgba(170,93,0,0.05)_15%,transparent_20%)] bg-[length:200%_200%]"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          backgroundPosition: { duration: 25, repeat: Infinity, ease: "linear" },
          opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
};
