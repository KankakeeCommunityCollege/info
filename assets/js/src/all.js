import '../../scss/main.scss';

document.addEventListener('DOMContentLoaded', async () => {
  const { default: loadTargetXIframe } = await import('./loadTargetXIframe');

  loadTargetXIframe();
});
