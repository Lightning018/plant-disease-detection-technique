const dropArea = document.getElementById("drop-area"); 
const inputFile = document.getElementById("input-file"); 
const imageView = document.getElementById("img-view"); 

inputFile.addEventListener("change",uploadImage);

function uploadImage(){ 
    let imgLink =URL.createObjectURL( inputFile.files[0]); 
    imageView.style.backgroundImage = `url(${imgLink})`;  
    imageView.textContent="";   
    imageView.style.border=0; 
    const file = inputFile.files[0];

            if (!file) {
                alert('Please select an image file.');
                return;
            }

            // Create form data and append file
            const formData = new FormData();
            formData.append('file', file);

            // Send POST request to endpoint
            fetch('http://127.0.0.1:6699/predict', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display response
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `<p>RESULT: ${data.result}</p>`;
                console.log(data.result);
            })
            .catch(error => {
                console.error('Error:', error);
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
                console.log(error.message);
            });
} 
 
dropArea.addEventListener("dragover",function(e){ 
    e.preventDefault();    
});
dropArea.addEventListener("drop", function(e){ 
    e.preventDefault();
    inputFile.files=e.dataTransfer.files; 
    uploadImage();
});