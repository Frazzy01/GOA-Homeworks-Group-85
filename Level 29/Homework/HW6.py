# 6)მომხმარებელს შემოატანინე რაიმე სტრინგი,შენი დავალებაა დაითვალო თუ რამდენი 
# ცალი ხმოვანი და რამდენი ცალი თანხმოვანი გვხვდება მის მიერ შემოყვანილ სტრინგში

text = input("Enter a string: ").lower()

vowels = "aeiou"
consonants = "bcdfghjklmnpqrstvwxyz"

vowel_count = 0
consonant_count = 0

i = 0
while i < len(text):
    if text[i] in vowels:
        vowel_count += 1
    elif text[i] in consonants:
        consonant_count += 1
    i += 1

print("Number of vowels:", vowel_count)
print("Number of consonants:", consonant_count)