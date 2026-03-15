import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const landingElements = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
  
  gsap.fromTo(
    landingElements,
    { opacity: 0, y: 50, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 1,
    }
  );

  LoopText(".landing-h2-info", ".landing-h2-info-1");
}

function LoopText(selector1: string, selector2: string) {
  const el1 = document.querySelector(selector1);
  const el2 = document.querySelector(selector2);
  if (!el1 || !el2) return;

  const tl = gsap.timeline({ repeat: -1 });
  const duration = 1;
  const stayTime = 3;

  tl.set(el2, { opacity: 0, y: 20, display: "none" })
    .fromTo(el1, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration, ease: "power2.out" })
    .to(el1, { opacity: 0, y: -20, duration, ease: "power2.in", delay: stayTime })
    .set(el1, { display: "none" })
    .set(el2, { display: "block" })
    .fromTo(el2, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration, ease: "power2.out" })
    .to(el2, { opacity: 0, y: -20, duration, ease: "power2.in", delay: stayTime })
    .set(el2, { display: "none" })
    .set(el1, { display: "block" });
}
