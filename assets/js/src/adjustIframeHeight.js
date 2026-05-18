const iframe = document.getElementById('targetx-form');
const hero = document.getElementById('hero');

const getRemInPixels = () => {
  // Get the computed font-size of the <html> element
  return parseFloat(getComputedStyle(document.documentElement).fontSize);
};

function updateHeight() {
  // 1200px and up is when the TargetX form sits side-by-side with the hero graphic
  const isDesktop = window.innerWidth >= 1200;

  if (isDesktop) {
    const offset = 2.5 * getRemInPixels();
    // Continuously syncs to hero height as viewport scales
    iframe.height = `${hero.offsetHeight - offset - 7}px`;
  } else {
    // Returns to hard-coded fallback
    iframe.height = '930px';
  }
};
  
export default function adjustIframeHeight() {
  // Run once immediately to set initial state
  updateHeight();

  // Also watch window resize to catch the 1200px breakpoint toggle
  window.addEventListener('resize', updateHeight);
}
