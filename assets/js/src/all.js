import '../../scss/main.scss';

document.addEventListener('DOMContentLoaded', async () => {
  const { default: loadTargetXIframe } = await import('./loadTargetXIframe');

  loadTargetXIframe();
});

window.addEventListener('load', async () => {
  
  if (
    document.getElementById('targetx-form') &&
    document.getElementById('hero')
  ) {
    const { default: adjustIframeHeight } = await import('./adjustIframeHeight');

    adjustIframeHeight();
  }
})
