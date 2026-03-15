import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  
  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 80%" : "top 75%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para) => {
    para.classList.add("visible");
    
    gsap.fromTo(
      para,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: para,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power3.out",
      }
    );
  });

  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: title,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
      }
    );
  });
}
