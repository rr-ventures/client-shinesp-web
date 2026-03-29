import os
import shutil

pages = [
    "paediatric-speech-therapy-sydney-nsw",
    "adult-speech-therapy-sydney-nsw",
    "mobile-speech-therapy-sydney-nsw",
    "telehealth-speech-therapy-sydney-nsw",
    "school-based-speech-therapy-sydney-nsw",
    "speech-therapy-assessment-sydney-nsw",
    "speech-therapy-reports-sydney-nsw",
    "parent-coaching-speech-therapy-sydney-nsw",
    "speech-therapy-autism-sydney-nsw",
    "speech-therapy-adhd-sydney-nsw",
    "speech-therapy-language-delay-sydney-nsw",
    "speech-therapy-speech-sounds-sydney-nsw",
    "speech-therapy-stuttering-sydney-nsw",
    "speech-therapy-literacy-sydney-nsw",
    "speech-therapy-aphasia-sydney-nsw",
    "ndis-speech-therapy-sydney-nsw",
    "medicare-speech-therapy-sydney-nsw",
    "private-speech-therapy-sydney-nsw",
    "home-care-package-speech-therapy-sydney-nsw",
    "dva-speech-therapy-sydney-nsw",
    "fees",
    "speech-pathologist-burwood-nsw",
    "speech-pathologist-hurstville-nsw",
    "speech-pathologist-strathfield-nsw",
    "speech-pathologist-canterbury-bankstown-nsw",
    "speech-pathologist-campsie-nsw",
    "speech-pathologist-rockdale-nsw",
    "speech-pathologist-kogarah-nsw",
    "speech-pathologist-marrickville-nsw",
    "speech-pathologist-arncliffe-nsw",
    "speech-pathologist-inner-west-sydney-nsw",
    "speech-pathologist-st-george-nsw",
    "about",
    "how-it-works",
    "for-support-coordinators",
    "refer-a-client",
    "thank-you",
    "zh"
]

base_dir = "v3/src/app"

for page in pages:
    dir_path = os.path.join(base_dir, page)
    os.makedirs(dir_path, exist_ok=True)
    
    title = page.replace("-", " ").title()
    
    content = f"""import React from 'react';

export const metadata = {{
  title: '{title} | Shine and Speak',
  description: 'Content coming soon for {title}. Mobile & telehealth speech therapy in Sydney.',
}};

export default function Page() {{
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-navy-blue mb-6">{title}</h1>
      <p>Content coming soon</p>
    </main>
  );
}}
"""
    with open(os.path.join(dir_path, "page.tsx"), "w") as f:
        f.write(content)

print("Pages generated!")
