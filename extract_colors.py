import os
from collections import Counter
from PIL import Image

def get_dominant_colors(image_path, num_colors=5):
    try:
        img = Image.open(image_path)
        img = img.convert('RGB')
        img = img.resize((150, 150)) # Resize for speed
        pixels = list(img.getdata())
        
        # Filter out near-white and near-black to find actual colors
        filtered_pixels = []
        for r, g, b in pixels:
            if not (r > 240 and g > 240 and b > 240) and not (r < 15 and g < 15 and b < 15):
                # Quantize to reduce noise
                filtered_pixels.append((r - r%10, g - g%10, b - b%10))
                
        counter = Counter(filtered_pixels)
        most_common = counter.most_common(num_colors)
        
        print(f"Colors for {os.path.basename(image_path)}:")
        for color, count in most_common:
            hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
            print(f"  {hex_color} (approx {count} pixels)")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

versions = ['v0', 'v1', 'v2', 'v3']
for v in versions:
    print(f"\n--- {v.upper()} ---")
    for letter in ['a', 'b']:
        path = f"/workspace/client-shinesp-web/{v}/competitor_reference/{v}{letter}.png"
        if os.path.exists(path):
            get_dominant_colors(path)
