/*
Tutorial File: tutorial_javascript/assets/js/tutorial.js
Purpose: JavaScript behavior and interactivity for course examples.
Notes: Use console logs and test small edits step by step.
*/


function copySnippet(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).catch(() => {});
}

function runBasicExample(topic) {
  const output = document.getElementById('output');
  if (!output) return;
  const now = new Date().toLocaleTimeString();
  output.textContent = `Example executed for: ${topic} at ${now}`;
}

function wireIndexSearch() {
  const input = document.getElementById('topicSearch');
  if (!input) return;
  const links = [...document.querySelectorAll('.topic-link')];
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    let count = 0;
    links.forEach((link) => {
      const text = link.textContent.toLowerCase();
      const show = text.includes(q);
      link.style.display = show ? '' : 'none';
      if (show) count += 1;
    });
    const info = document.getElementById('searchCount');
    if (info) info.textContent = `Showing ${count} tutorial(s)`;
  });
}

window.addEventListener('DOMContentLoaded', wireIndexSearch);
