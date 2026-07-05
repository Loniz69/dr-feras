const WA_ICON = `<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.815 0 00-3.48-8.413z"/></svg>`;

const MAPS_ICON = `<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;

// Reads window.CLINIC (set by clinic-config.js) and boots the page
function boot() {
  const C = window.CLINIC;

  // SEO
  document.title = C.brand.seoTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', C.brand.seoDesc);

  // Simple text nodes
  document.querySelectorAll('.logo-text').forEach(el => el.textContent = C.brand.logo);
  document.querySelectorAll('[data-cfg="doctorName"]').forEach(el => el.textContent = C.doctor.name);
  document.querySelectorAll('[data-cfg="doctorShort"]').forEach(el => el.textContent = C.doctor.shortName);
  document.querySelectorAll('[data-cfg="address"]').forEach(el => el.textContent = C.contact.address);
  document.querySelectorAll('[data-cfg="city"]').forEach(el => el.textContent = C.contact.city);
  document.querySelectorAll('[data-cfg="heroTags"]').forEach(el => el.textContent = C.heroTags);
  document.querySelectorAll('[data-cfg="ctaTags"]').forEach(el => el.textContent = C.ctaTags);

  // Doctor bio
  document.querySelectorAll('[data-cfg="doctorBio1"]').forEach(el => el.textContent = C.doctor.bio1);
  document.querySelectorAll('[data-cfg="doctorBio2"]').forEach(el => el.textContent = C.doctor.bio2);

  // Doctor image
  const doctorImg = document.querySelector('.about img');
  if (doctorImg) doctorImg.src = C.doctor.photo;

  // WhatsApp links + icons
  document.querySelectorAll('.wa-link').forEach(a => {
    a.href = `https://wa.me/${C.contact.whatsapp}`;
  });
  document.querySelectorAll('.btn.wa-link').forEach(btn => {
    if (!btn.querySelector('.btn-icon')) btn.insertAdjacentHTML('afterbegin', WA_ICON);
  });

  // Maps links + icons
  document.querySelectorAll('.maps-link').forEach(a => {
    a.href = C.contact.mapsUrl;
    if (a.classList.contains('btn') && !a.querySelector('.btn-icon')) {
      a.insertAdjacentHTML('afterbegin', MAPS_ICON);
    }
  });

  // Booking form submit WhatsApp icon
  const submitBtn = document.querySelector('#bookingForm button[type="submit"]');
  if (submitBtn && !submitBtn.querySelector('.btn-icon')) {
    submitBtn.insertAdjacentHTML('afterbegin', WA_ICON);
  }

  // Phone links
  document.querySelectorAll('.phone-link').forEach(a => {
    a.href = `tel:${C.contact.phone}`;
    a.textContent = C.contact.phone;
  });

  // Marquee (double-track for seamless CSS loop)
  const track = document.querySelector('.marquee-track');
  if (track) {
    const items = [...C.marquee, ...C.marquee];
    track.innerHTML = items.map(t => `<span>${t}</span>`).join('');
  }

  // Hero stats
  const statGrid = document.querySelector('.stat-grid');
  if (statGrid) {
    statGrid.innerHTML = C.stats.map(s =>
      `<div class="stat-card"><div class="num">${s.num}</div><div class="label">${s.label}</div></div>`
    ).join('');
  }

  // Trust strip
  const trustGrid = document.querySelector('.trust-grid');
  if (trustGrid) {
    trustGrid.innerHTML = C.trust.map(t =>
      `<div class="trust-item reveal"><h3>${t.h}</h3><p>${t.p}</p></div>`
    ).join('');
  }

  // Service list
  const serviceList = document.getElementById('serviceList');
  if (serviceList) {
    serviceList.innerHTML = C.services.map((s, i) =>
      `<div class="service-row${i === 0 ? ' active' : ''}" data-key="${s.key}">
        <span class="s-name">${s.name}</span>
        <span class="s-price">${s.price}</span>
      </div>`
    ).join('');
  }

  // Doctor tags
  const aboutTags = document.querySelector('.about-tags');
  if (aboutTags) {
    aboutTags.innerHTML = C.doctor.tags.map(t => `<span>${t}</span>`).join('');
  }

  // Pricing cards
  const pricingGrid = document.querySelector('.pricing-grid');
  if (pricingGrid) {
    pricingGrid.innerHTML = C.pricing.map(p => `
      <div class="price-card${p.popular ? ' popular' : ''}">
        <h3>${p.name}</h3>
        <div class="price">${p.price}</div>
        <div class="sub">${p.sub}</div>
        <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <a href="#booking" class="link-arrow">Book now →</a>
      </div>`
    ).join('');
  }

  // Testimonials
  const tGrid = document.querySelector('.t-grid');
  if (tGrid) {
    tGrid.innerHTML = C.testimonials.map(t => `
      <div class="t-card reveal">
        <p class="quote">"${t.quote}"</p>
        <div class="who">${t.name}</div>
        <div class="verified">Verified Google Review</div>
      </div>`
    ).join('');
  }

  // Hours — findus display
  document.querySelectorAll('[data-cfg="hours"]').forEach(el => {
    el.innerHTML = C.hours.join('<br>');
  });

  // Hours — footer list
  const hoursFooter = document.querySelector('[data-cfg="hoursFooter"]');
  if (hoursFooter) {
    hoursFooter.innerHTML = C.hours.map(h => `<li>${h}</li>`).join('');
  }
}

// Service preview panel (reads from CLINIC.services)
function renderService(key) {
  const C = window.CLINIC;
  const s = C.services.find(svc => svc.key === key);
  const preview = document.getElementById('servicePreview');
  if (!s || !preview) return;
  preview.innerHTML = `
    <div>
      <div class="sp-tag">${s.tag}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <ul class="sp-features">${s.features.map(f => `<li><span>›</span> ${f}</li>`).join('')}</ul>
    </div>
    <div class="sp-actions">
      <a href="#pricing" class="btn btn-outline-light">Learn more →</a>
      <a href="https://wa.me/${C.contact.whatsapp}" target="_blank" class="btn btn-gold wa-link">${WA_ICON}Book</a>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  boot();

  // Service tabs (after boot() inserted the rows)
  const rows = document.querySelectorAll('.service-row');
  rows.forEach(row => {
    row.addEventListener('click', () => {
      rows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');
      renderService(row.dataset.key);
    });
  });
  if (rows.length) renderService(rows[0].dataset.key);

  // Scroll reveal (observe elements boot() added)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Booking form → WhatsApp
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const C = window.CLINIC;
      const name      = document.getElementById('f-name').value.trim();
      const phone     = document.getElementById('f-phone').value.trim();
      const treatment = document.getElementById('f-treatment').value;
      const date      = document.getElementById('f-date').value;
      let msg = `Hi ${C.doctor.shortName}, I'd like to book an appointment.\nName: ${name}\nPhone: ${phone}`;
      if (treatment) msg += `\nTreatment: ${treatment}`;
      if (date)      msg += `\nPreferred date: ${date}`;
      window.open(`https://wa.me/${C.contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks   = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.cssText += 'flex-direction:column; position:absolute; top:64px; left:0; right:0; background:var(--bg); padding:20px 24px; border-bottom:1px solid var(--border);';
    });
  }

  // Sticky header shadow
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,0.06)' : 'none';
    });
  }
});
