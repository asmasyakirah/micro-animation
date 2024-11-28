document.getElementById('loadingBtn').addEventListener('click', function() {
    const button = this;
    button.classList.add('loading');
    button.textContent = 'Processing...';
  
    // Simulate a loading process (2 seconds)
    setTimeout(() => {
      button.classList.remove('loading');
      button.textContent = 'Submit';
    }, 2000);
  });  