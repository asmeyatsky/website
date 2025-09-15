#!/bin/bash

# Calendly Integration Validation Script
# This script validates that all Calendly integrations are properly implemented

echo "🔍 Validating Calendly Integration Consistency..."

# Check if all required components exist
echo "📁 Checking for required components..."

COMPONENTS=(
  "src/components/BookCallButton.tsx"
  "src/components/CalendlySection.tsx"
  "src/components/CalendlyWidget.tsx"
  "src/components/CalendlyPopup.tsx"
  "src/context/calendly-context.tsx"
)

for component in "${COMPONENTS[@]}"; do
  if [ -f "/Users/allansmeyatsky/website/$component" ]; then
    echo "✅ $component exists"
  else
    echo "❌ $component missing"
  fi
done

# Check if CalendlyProvider is in root layout
echo -e "\n📄 Checking root layout for CalendlyProvider..."

if grep -q "CalendlyProvider" "/Users/allansmeyatsky/website/src/app/layout.tsx"; then
  echo "✅ CalendlyProvider found in root layout"
else
  echo "❌ CalendlyProvider not found in root layout"
fi

# Check if Calendly script is loaded
echo -e "\n🌐 Checking for Calendly script loading..."

if grep -q "assets.calendly.com/assets/external/widget.js" "/Users/allansmeyatsky/website/src/app/layout.tsx"; then
  echo "✅ Calendly script found in root layout"
else
  echo "❌ Calendly script not found in root layout"
fi

# Check key pages for Calendly integration
echo -e "\n📋 Checking key pages for Calendly integration..."

PAGES=(
  "src/app/page.tsx"
  "src/app/consulting/page.tsx"
  "src/app/contact/page.tsx"
  "src/app/about/page.tsx"
  "src/app/projects/page.tsx"
  "src/components/Header.tsx"
  "src/components/Footer.tsx"
)

for page in "${PAGES[@]}"; do
  if [ -f "/Users/allansmeyatsky/website/$page" ]; then
    if grep -q "Calendly\|calendly\|BookCallButton\|CalendlySection" "/Users/allansmeyatsky/website/$page"; then
      echo "✅ $page has Calendly integration"
    else
      echo "⚠️  $page may be missing Calendly integration"
    fi
  else
    echo "❌ $page not found"
  fi
done

# Check for consistent styling classes
echo -e "\n🎨 Checking for consistent styling..."

STYLING_PATTERNS=(
  "ai-button"
  "glass-effect"
  "professional-button"
)

for pattern in "${STYLING_PATTERNS[@]}"; do
  count=$(grep -r "$pattern" /Users/allansmeyatsky/website/src --include="*.tsx" | wc -l)
  echo "_FOUND $count instances of '$pattern' styling"
done

echo -e "\n✅ Calendly integration validation complete!"
echo "📝 Refer to CALPENDLY_CONSISTENCY_IMPLEMENTATION.md for detailed implementation guidelines."