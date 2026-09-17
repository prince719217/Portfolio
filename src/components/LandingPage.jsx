import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const LandingPage = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // --------------------------------
      // 1. Terminal text animation
      // --------------------------------

      const split = new SplitText(".content", {
        type: "chars",
      });

      tl.from(split.chars, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.03,
      });

      // --------------------------------
      // 2. Bottom line appears
      // --------------------------------

      tl.from(".bottomLine", {
        opacity: 0,
        y: 30,
        duration: 0.4,
      });

      // --------------------------------
      // 3. Wait 0.5 seconds
      // --------------------------------

      tl.to({}, {
        duration: 0.5,
      });

      // --------------------------------
      // 4. Start rain
      // --------------------------------

      tl.call(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = "01{}[]<>/\\*+-=";
        const fontSize = 24;

        const columns = Math.floor(
          canvas.width / fontSize
        );

        const drops = Array(columns)
          .fill(0)
          .map(() => Math.random() * -30);

        let animationFrame;

        // --------------------------------
        // Rain function
        // --------------------------------

        const rain = () => {
          // Dark trail
          ctx.fillStyle = "rgba(0, 0, 0, 0.08)";

          ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
          );

          ctx.font = `${fontSize}px monospace`;

          for (let i = 0; i < drops.length; i++) {
            // Reduce symbols
            if (Math.random() > 0.65) {
              continue;
            }

            const char =
              chars[
                Math.floor(
                  Math.random() * chars.length
                )
              ];

            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillStyle = "rgba(255,255,255,0.8)";

            ctx.fillText(char, x, y);

            // Reset drops
            if (
              y > canvas.height &&
              Math.random() > 0.975
            ) {
              drops[i] = 0;
            }

            // Rain speed
            drops[i] += 1.8;
          }

          animationFrame =
            requestAnimationFrame(rain);
        };

        // --------------------------------
        // Start canvas
        // --------------------------------

        gsap.to(canvas, {
          opacity: 1,
          duration: 0.2,
        });

        rain();

        // --------------------------------
        // Stop rain after 0.8 sec
        // --------------------------------

        gsap.delayedCall(0.8, () => {
          cancelAnimationFrame(animationFrame);

          // Fade out landing page
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",

            onComplete: () => {
              // Completely hide landing page
              gsap.set(containerRef.current, {
                display: "none",
              });

              // Hide canvas
              gsap.set(canvas, {
                opacity: 0,
              });
            },
          });
        });
      });

      // --------------------------------
      // Cleanup
      // --------------------------------

      return () => {
        split.revert();
      };
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="landing-page relative flex h-screen w-full flex-col items-center justify-center bg-black"
    >
      {/* Terminal */}

      <div
        className="
          md:w-1/2
          w-[80%]
          h-[40vh]
          shadow-[0_0_50px_0_rgba(107,114,128,0.5)]
          border-gray-500
          border-2
          rounded-2xl
          bg-black
          text-white
          p-6
          leading-8
          font-semibold
        "
      >
        <h3 className="text-[#5a63be] content inline-block">
          ~/workspace
        </h3>

        <h3 className="line1">
          <span className="text-green-500 symbol">
            $
          </span>{" "}
          <span className="content inline-block">
            git init && git add .
          </span>
        </h3>

        <h3 className="line2">
          <span className="text-green-500 symbol">
            $
          </span>{" "}
          <span className="content inline-block">
            git commit -m "chore: bootstrap"
          </span>
        </h3>

        <h3 className="line3">
          <span className="text-green-500 symbol">
            $
          </span>{" "}
          <span className="content inline-block">
            pnpm i && pnpm dev
          </span>
        </h3>

        <h3 className="content">
          compiling...
        </h3>

        <h3 className="content">
          type ok . lint ok . built in 1.23s
        </h3>

        <h3 className="text-[#5a63be] content">
          localhost:5173 - ready
        </h3>
      </div>

      {/* Bottom code */}

      <h2
        className="
          text-white
          bottomLine
          md:bottom-15
          bottom-15
          left-2
          md:left-0
          md:text-[17px]
          relative
          text-[14px]
          p-6
        "
      >
        <span className="relative -bottom-40 z-10">
          <span className="text-[#5a63be]">
            const
          </span>

          {" app = "}

          <span className="text-[#5a63be]">
            init
          </span>

          {" ( skills ) => { "}

          <span className="text-[#5a63be]">
            return
          </span>

          {" skills.map(s) && deploy }"}
        </span>
      </h2>

      {/* Rain canvas */}

      <canvas
        ref={canvasRef}
        className="
          fixed
          inset-0
          z-[100]
          pointer-events-none
          opacity-0
        "
      />
    </div>
  );
};

export default LandingPage;

