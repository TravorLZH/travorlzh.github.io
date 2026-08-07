(function () {
  "use strict";

  var toc = document.querySelector("[data-post-toc]");
  var list = document.querySelector("[data-post-toc-list]");
  var content = document.querySelector(".post-content");

  if (!toc || !list || !content) {
    return;
  }

  var headings = Array.prototype.slice.call(content.querySelectorAll("h2, h3"));

  if (headings.length < 2) {
    return;
  }

  var usedIds = {};
  Array.prototype.forEach.call(document.querySelectorAll("[id]"), function (element) {
    usedIds[element.id] = (usedIds[element.id] || 0) + 1;
  });

  function ensureHeadingId(heading, index) {
    if (heading.id && usedIds[heading.id] === 1) {
      return heading.id;
    }

    var base = heading.textContent
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "section-" + (index + 1);
    var candidate = base;
    var suffix = 2;

    while (usedIds[candidate]) {
      candidate = base + "-" + suffix;
      suffix += 1;
    }

    heading.id = candidate;
    usedIds[candidate] = 1;
    return candidate;
  }

  var links = [];
  var currentSectionItem = null;
  var currentSublist = null;

  headings.forEach(function (heading, index) {
    var id = ensureHeadingId(heading, index);
    var item = document.createElement("li");
    var link = document.createElement("a");

    item.className = "post-toc__item post-toc__item--" + heading.tagName.toLowerCase();
    link.className = "post-toc__link";
    link.href = "#" + encodeURIComponent(id);
    link.textContent = heading.textContent.trim();
    item.appendChild(link);

    if (heading.tagName === "H2") {
      list.appendChild(item);
      currentSectionItem = item;
      currentSublist = null;
    } else if (currentSectionItem) {
      if (!currentSublist) {
        currentSublist = document.createElement("ol");
        currentSublist.className = "post-toc__sublist";
        currentSectionItem.appendChild(currentSublist);
      }
      currentSublist.appendChild(item);
    } else {
      list.appendChild(item);
    }

    link.addEventListener("click", function () {
      if (!desktopQuery.matches) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    links.push(link);
  });

  var toggle = toc.querySelector(".post-toc__toggle");
  var desktopQuery = window.matchMedia("(min-width: 1280px)");

  function setResponsiveState(event) {
    toggle.setAttribute("aria-expanded", event.matches ? "true" : "false");
  }

  setResponsiveState(desktopQuery);
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", setResponsiveState);
  } else {
    desktopQuery.addListener(setResponsiveState);
  }

  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });

  toc.hidden = false;

  var currentLink = null;
  var ticking = false;

  function updateCurrentSection() {
    var nextLink = null;
    var activationLine = 96;

    headings.forEach(function (heading, index) {
      if (heading.getBoundingClientRect().top <= activationLine) {
        nextLink = links[index];
      }
    });

    if (nextLink !== currentLink) {
      if (currentLink) {
        currentLink.removeAttribute("aria-current");
      }
      if (nextLink) {
        nextLink.setAttribute("aria-current", "location");
      }
      currentLink = nextLink;
    }

    ticking = false;
  }

  function scheduleCurrentSectionUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(updateCurrentSection);
      ticking = true;
    }
  }

  window.addEventListener("scroll", scheduleCurrentSectionUpdate, { passive: true });
  window.addEventListener("resize", scheduleCurrentSectionUpdate);
  window.addEventListener("load", scheduleCurrentSectionUpdate);
  window.addEventListener("popstate", scheduleCurrentSectionUpdate);
  scheduleCurrentSectionUpdate();
}());
