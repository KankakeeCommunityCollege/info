export default function loadScript(src, referrerPolicy, async) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    if (async === true) {
      script.async = true;
    }

    script.setAttribute('referrerpolicy', referrerPolicy);
    script.src = src;
    document.head.append(script);
    script.onload = e => resolve(script);
    script.onerror = e => reject(e);
  })
}