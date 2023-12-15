/\*_ @type {import('tailwindcss').Config} _/

// Define the colors
const colors = {
// Desert Tones
'desert-sand': '#D4C6AA',
'sandy-brown': '#E8CDA5',
'warm-tan': '#D9BFA8',

// Sky and Water
'azure-blue': '#00A3E0',
'deep-blue': '#004777',
'light-seafoam': '#6BC4A6',

// Accent Colors
'royal-purple': '#7E59A2',
'golden-yellow': '#FFD700',
};

export default {
theme: {
extend: {
colors: {
'desert-sand': colors['desert-sand'],
'sandy-brown': colors['sandy-brown'],
'warm-tan': colors['warm-tan'],
'azure-blue': colors['azure-blue'],
'deep-blue': colors['deep-blue'],
'light-seafoam': colors['light-seafoam'],
'royal-purple': colors['royal-purple'],
'golden-yellow': colors['golden-yellow'],
},
},
},
plugins: [],
}

<div class="flex flex-wrap justify-center items-center gap-4">
  <!-- Desert Tones -->
  <div class="w-48 h-48 bg-desert-sand text-white flex items-center justify-center">
    <span>Desert Sand</span>
  </div>
  <div class="w-48 h-48 bg-sandy-brown text-white flex items-center justify-center">
    <span>Sandy Brown</span>
  </div>
  <div class="w-48 h-48 bg-warm-tan text-white flex items-center justify-center">
    <span>Warm Tan</span>
  </div>

  <!-- Sky and Water -->
  <div class="w-48 h-48 bg-azure-blue text-white flex items-center justify-center">
    <span>Azure Blue</span>
  </div>
  <div class="w-48 h-48 bg-deep-blue text-white flex items-center justify-center">
    <span>Deep Blue</span>
  </div>
  <div class="w-48 h-48 bg-light-seafoam text-white flex items-center justify-center">
    <span>Light Seafoam</span>
  </div>

  <!-- Accent Colors -->
  <div class="w-48 h-48 bg-royal-purple text-white flex items-center justify-center">
    <span>Royal Purple</span>
  </div>
  <div class="w-48 h-48 bg-golden-yellow text-white flex items-center justify-center">
    <span>Golden Yellow</span>
  </div>
</div>
<div class="bg-deep-blue text-white">
    Content with a light font color
</div>
<div class="bg-desert-sand text-black">
    Content with a dark font color
</div>
