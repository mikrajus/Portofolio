/* ==========================================================================
   Mikrajuz Sulthan — Portfolio Scripts (vanilla, dependency-free)
   ========================================================================== */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ----------------------------------------------------------------------
     Theme management (persist preference)
     ---------------------------------------------------------------------- */
  var STORAGE_KEY = "msf-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* storage unavailable */
    }
    var theme;
    if (saved === "light" || saved === "dark") {
      theme = saved;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      theme = "light";
    } else {
      theme = "dark";
    }
    applyTheme(theme);
  }

  function toggleTheme() {
    var current =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    var next = current === "light" ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* ignore */
    }
  }

  /* ----------------------------------------------------------------------
     Sticky nav — subtle border on scroll
     ---------------------------------------------------------------------- */
  function initNavScrolled() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------------------------
     Mobile menu (accessible)
     ---------------------------------------------------------------------- */
  function initMobileMenu() {
    var burger = document.querySelector(".nav__burger");
    var menu = document.querySelector(".nav__mobile");
    var body = document.body;
    if (!burger || !menu) return;

    var setOpen = function (open) {
      body.classList.toggle("menu-open", open);
      body.classList.toggle("nav-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    burger.addEventListener("click", function () {
      var isOpen = body.classList.contains("menu-open");
      setOpen(!isOpen);
    });

    // Close menu when a link is chosen
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    // Close with Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && body.classList.contains("menu-open")) {
        setOpen(false);
        burger.focus();
      }
    });

    // Close when resizing to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900 && body.classList.contains("menu-open")) {
        setOpen(false);
      }
    });
  }

  /* ----------------------------------------------------------------------
     Scroll reveal (IntersectionObserver); skipped under reduced motion
     ---------------------------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ----------------------------------------------------------------------
     Active nav link on scroll (highlight current section)
     ---------------------------------------------------------------------- */
  function initActiveNav() {
    var sections = document
      .querySelectorAll("main section[id]")
      .forEach ? document.querySelectorAll("main section[id]") : [];
    var navLinks = document.querySelectorAll('.nav__link, .nav__mobile-link');
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    var map = {};
    sections.forEach(function (s) {
      map["#" + s.id] = document.querySelector(
        '.nav__link[href="#' + s.id + '"]'
      );
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = "#" + entry.target.id;
            navLinks.forEach(function (l) {
              l.classList.toggle(
                "is-active",
                l.getAttribute("href") === id
              );
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(function (s) {
      io.observe(s);
    });
  }

  /* ----------------------------------------------------------------------
     Init
     ---------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNavScrolled();
    initMobileMenu();
    initReveal();
    initActiveNav();

    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
    }
  });
})();
