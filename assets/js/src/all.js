import '../../scss/main.scss';

window.addEventListener('load', async () => {
  const { default: loadTargetXIframe } = await import('./loadTargetXIframe');

  loadTargetXIframe();
});
