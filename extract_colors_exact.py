import os
from collections import Counter
from PIL import Image

def get_dominant_colors(image_path, num_colors=10):
    try:
        img = Image.open(image_path)
        img = img.convert('RGB')
        # Don't resize too small to keep exact colors
        img.thumbnail((300, 300))
        pixels = list(img.getdata())
        
        # Filter out pure white and pure black to find actual colors
        filtered_pixels = []
        for r, g, b in pixels:
            if not (r > 245 and g > 245 and b > 245) and not (r < 10 and g < 10 and b < 10):
                filtered_pixels.append((r, g, b))
                
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
