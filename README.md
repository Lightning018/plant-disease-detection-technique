# 🌱 Plant Disease Detection API 🍃

## 🚀 Overview
This project is a Flask-based API for predicting plant diseases using a deep learning model. It takes an image of a plant leaf as input, processes it, and returns the predicted disease class. The model is trained on plant disease datasets and deployed using Flask.

## 🔥 Features
- 📷 Accepts plant leaf images as input
- 🧠 Uses a trained deep learning model (TensorFlow/Keras)
- 🌎 Supports Cross-Origin Resource Sharing (CORS)
- 🌐 Hosted dynamically on GitHub Pages: [Live Demo](https://lightning018.github.io/plant-disease-detection-technique/)

## 📌 Installation & Setup
Make sure you have Python installed, then follow these steps:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/lightning018/plant-disease-detection-technique.git
cd plant-disease-detection-technique
```

### 2️⃣ Install Dependencies
Manually install the required packages:
```bash
pip install flask tensorflow numpy pillow flask-cors keras requests werkzeug
```

### 3️⃣ Run the API
```bash
python app.py
```
The API will start at `http://127.0.0.1:6699/`

## 🎯 Endpoints
- `POST /predict` → Upload an image file and receive a prediction
- `GET /` → Test if the server is running

## 🌿 How It Works
1. Receives an image via API request
2. Preprocesses the image (resizing, normalizing)
3. Uses the trained model to predict the disease
4. Returns the predicted class (e.g., Target Spot, YellowLeaf Curl Virus, Healthy)
