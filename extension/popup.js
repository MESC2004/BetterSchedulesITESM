document.addEventListener('DOMContentLoaded', function() {
  const callPythonButton = document.getElementById('callPython');
  const resultDiv = document.getElementById('result');
  
  callPythonButton.addEventListener('click', function() {
    resultDiv.textContent = 'Calling Python script...';
    
    fetch('http://127.0.0.1:5000/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        resultDiv.textContent = data.message;
      })
      .catch(error => {
        resultDiv.textContent = 'Error: ' + error.message + 
          '\n\nMake sure the Python server is running: python file-processing/hello_world.py';
      });
  });
});
