/* =========================================================
   Escritório Paraná Contabilidade — script.js
   Sem dependências externas | Vanilla JS
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Ano dinâmico no rodapé ---------- */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Acordeão do FAQ ---------- */
  var faqButtons = document.querySelectorAll('.faq-item__question');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(btn.getAttribute('aria-controls'));

      // Fecha os outros itens (comportamento tipo acordeão)
      faqButtons.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          var otherAnswer = document.getElementById(other.getAttribute('aria-controls'));
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  /* ---------- Animação ao rolar a página (scroll reveal) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Contadores animados (estatísticas) ---------- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var duration = 1400;
        var startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          el.textContent = Math.floor(progress * target).toLocaleString('pt-BR');
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target.toLocaleString('pt-BR') + (el.getAttribute('data-suffix') || '');
          }
        }
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ---------- Botão voltar ao topo ---------- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('is-active', window.scrollY > 500);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Header com sombra ao rolar ---------- */
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 16px rgba(15,23,42,.12)'
        : '0 2px 8px rgba(15,23,42,.08)';
    });
  }

  /* ---------- Validação simples do formulário de contato ---------- */
  var form = document.getElementById('contact-form');
  var feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        feedback.style.color = '#c0392b';
        return;
      }
      if (!emailPattern.test(email.value.trim())) {
        feedback.textContent = 'Informe um e-mail válido.';
        feedback.style.color = '#c0392b';
        return;
      }

      // Sem backend neste site estático: orienta o envio via e-mail.
      feedback.textContent = 'Mensagem pronta! Abrindo seu aplicativo de e-mail para concluir o envio...';
      feedback.style.color = '#1e9e5a';

      var subject = encodeURIComponent('Contato via site — ' + name.value.trim());
      var body = encodeURIComponent(message.value.trim() + '\n\nNome: ' + name.value.trim() + '\nE-mail: ' + email.value.trim());
      window.location.href = 'mailto:orgparana@gmail.com?subject=' + subject + '&body=' + body;

      form.reset();
    });
  }

})();
