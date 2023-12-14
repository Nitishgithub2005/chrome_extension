from flask import Flask, request, jsonify

app = Flask(__name__)

def detect_phishing(domain):
    if "phishing" in domain:
        return "Phishing Detected"
    else:
        return "No Phishing Detected"

@app.route('/checkDomain', methods=['POST'])
def check_domain():
    data = request.get_json()
    domain = data.get('domain')

    # Call the detect_phishing function
    result = detect_phishing(domain)

    # Return the result as JSON
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
