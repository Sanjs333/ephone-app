self.addEventListener('message', event => {
  const data = event.data;

  if (data.type === 'show-notification') {
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon
    });
  }

  if (data.type === 'update-badge') {
    if ('setAppBadge' in navigator) {
      navigator.setAppBadge(data.count);
    }
  }
});