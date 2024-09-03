import requests
import streamlit as st

def get_response(input_text):
    try:
        # Send the request to the FastAPI server
        response = requests.post(
            "http://localhost:8000/Elderly/invoke",
            json={"input": {"question": input_text}}
        )
        response.raise_for_status()  # Raises an error for HTTP status codes 4xx/5xx

        # Parse the JSON response
        data = response.json()

        # Extract the response from the nested structure
        if 'output' in data:
            return data['output']
        else:
            return "Error: Unexpected response format."
    
    except requests.exceptions.RequestException as e:
        # Handle any request-related errors
        return f"Error: {str(e)}"

st.title('Langchain Testing with Llama 3.1')
input_text = st.text_input("What do you want to ask the AI?")

if input_text:
    response = get_response(input_text)
    st.write(response)
