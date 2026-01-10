(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();function downloadAndOpenPDF(event) {
    event.preventDefault();
    const fileUrl = 'Jhane_Rose_Sadicon_Resume.pdf';
    window.open(fileUrl, '_blank');
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Jhane_Rose_Sadicon_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.message.value.trim()) {
      alert('Please enter a message.');
      return;
    }
    const url = form.action;
    const formData = new FormData(form);
    formData.set('_replyto', form.email.value);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        window.location.href = formData.get('_next');
      } else {
        const errorJson = await response.json();
        console.error('Form submission error:', errorJson);
        errorJson.errors.forEach(err =>
          console.error(`${err.field}: ${err.message}`)
        );
        alert(
          'Validation error:\n' +
            errorJson.errors.map(e => `${e.field}: ${e.message}`).join('\n')
        );
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error. Could not submit form.');
    }
  });
});
  const themeBtn = document.querySelector('.theme-btn');
  const icon = themeBtn.querySelector('i');

  // Apply saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });