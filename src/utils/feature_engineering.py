import pandas as pd
    
    

def calculate_battle_strength(df):
    """
    Function to calculate the Battle Strength for each Pokémon.
    Battle Strength is a weighted sum of various stats.
    
    Parameters:
    df (pandas.DataFrame): The Pokémon dataset.

    Returns:
    pandas.DataFrame: Updated DataFrame with the Battle_Strength column.
    """
    df['Battle_Strength'] = (
        df['Attack'] * 0.4 +
        df['Defense'] * 0.3 +
        df['Speed'] * 0.2 +
        df['HP'] * 0.1
    )
    return df
