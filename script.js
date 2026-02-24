function showTab(index) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
      tab.classList.remove('text-[#80AB85]', 'bg-white');
      tab.classList.add('text-white', 'bg-[#80AB85]');
      contents[i].classList.remove('hidden');
    } else {
      tab.classList.remove('active');
      tab.classList.add('text-[#80AB85]', 'bg-white');
      tab.classList.remove('text-white', 'bg-[#80AB85]');
      contents[i].classList.add('hidden');
    }
  });
}

// FAQ Accordion functionality
document.querySelectorAll('#faq-section .border-b').forEach(faqItem => {
  const button = faqItem.querySelector('button');
  const content = faqItem.querySelector('.max-h-0');
  const icon = faqItem.querySelector('.text-\\[\\#30px\\]');
  
  button.addEventListener('click', () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
    
    // Close all other FAQ items
    document.querySelectorAll('#faq-section .border-b').forEach(otherItem => {
      if (otherItem !== faqItem) {
        const otherContent = otherItem.querySelector('.max-h-0');
        const otherIcon = otherItem.querySelector('.text-\\[\\#30px\\]');
        otherContent.style.maxHeight = '0';
        otherIcon.textContent = '+';
      }
    });
    
    // Toggle current item
    if (isOpen) {
      content.style.maxHeight = '0';
      icon.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.textContent = '−';
    }
  });
});

function showStep(index) {
  const steps = document.querySelectorAll('.step');
  const contents = document.querySelectorAll('.step-content');
  steps.forEach((step, i) => {
    if (i === index) {
      step.classList.add('active');
      step.classList.remove('text-[#C8D2C9]');
      step.classList.add('text-[#80AB85]');
      contents[i].classList.remove('hidden');
    } else {
      step.classList.remove('active');
      step.classList.remove('text-[#80AB85]');
      step.classList.add('text-[#C8D2C9]');
      contents[i].classList.add('hidden');
    }
  });
}

// Mobile menu toggle
const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Mobile menu functionality for the header
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileNav = document.querySelector('#mobile-nav');
const mobileCloseBtn = document.querySelector('#mobile-close-btn');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('flex');
  });
}

if (mobileCloseBtn && mobileNav) {
  mobileCloseBtn.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('flex');
  });
}

