document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const body = document.body;

  if (!hamburger || !drawer) return;

  const openDrawer = () => {
    hamburger.classList.add('active');
    drawer.classList.add('active');
    drawer.classList.add('animating');
    body.classList.add('drawer-open');

    // アニメーション完了後にクラスを除去（リセットのため）
    setTimeout(() => {
      drawer.classList.remove('animating');
    }, 500); // アニメーションと同じ時間
  };

  const closeDrawer = () => {
    hamburger.classList.remove('active');
    drawer.classList.remove('active');
    body.classList.remove('drawer-open');
  };

  const toggleDrawer = () => {
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
      if (drawer.classList.contains('active')) {
        closeDrawer();
      }
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.business_item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  items.forEach(item => {
    observer.observe(item);
  });
});