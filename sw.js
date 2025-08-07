self.addEventListener('message', event => {
  const data = event.data;
  if (!data) return;

  if (data.type === 'show-notification' && data.title) {
    self.registration.showNotification(data.title, {
      body: data.body || '',
      icon: data.icon || '/ephone-app/icon-192.png'
    });
  }

  if (data.type === 'update-badge') {
    if ('setAppBadge' in self) {
      self.setAppBadge(data.count);
    } else if ('setAppBadge' in navigator) {
      // 作为一个备用方案，虽然不标准，但有些浏览器可能支持
      navigator.setAppBadge(data.count);
    }
  }
});
