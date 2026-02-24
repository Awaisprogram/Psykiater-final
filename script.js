function showTab(index) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    contents[i].classList.toggle('active', i === index);
  });
}

document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    // Close other open items
    document.querySelectorAll('.faq-content').forEach(otherContent => {
      if (otherContent !== content) {
        otherContent.style.maxHeight = null;
        otherContent.parentElement.querySelector('.faq-icon').textContent = '+';
      }
    });

    // Toggle current item
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = '−';
    }
  });
});

function showStep(index) {
  const steps = document.querySelectorAll('.step');
  const contents = document.querySelectorAll('.step-content');
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
    contents[i].classList.toggle('active', i === index);
  });
}

const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

