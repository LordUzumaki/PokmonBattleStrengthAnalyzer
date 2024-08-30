from flask import Flask, jsonify, render_template
import pandas as pd
from utils.feature_engineering import calculate_battle_strength

app = Flask(__name__)

# The rest of your code remains the same
# Load the cleaned dataset
df = pd.read_csv('./Data/Cleaned_pokemon_data.csv')

# Apply the feature engineering function
df = calculate_battle_strength(df)

# Route to serve the homepage
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint to get all Pokémon
@app.route('/pokemon', methods=['GET'])
def get_pokemon():
    data = df.to_dict(orient='records')
    return jsonify(data)

# API endpoint to get the top 10 Pokémon by Battle Strength
@app.route('/pokemon/top10', methods=['GET'])
def get_top_pokemon():
    top_pokemon = df.sort_values(by='Battle_Strength', ascending=False).head(10)
    data = top_pokemon.to_dict(orient='records')
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5002)
