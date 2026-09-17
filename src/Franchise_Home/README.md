# Content & Media Guidelines: Franchise_Home

The following table provides the required minimum, maximum, and recommended constraints for dynamic text and media across all sections of the Franchise pages (`Franchise_Home` and `Franchise_Home_01`). 

Adhering to these limits ensures that the UI components remain symmetrical and do not break across different device layouts.

## 1. Hero Section

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Description** | 30 words / 200 chars | 60 words / 350 chars | **40 - 50 words** | Introductory paragraph below the title. |
| **Why Choose Us Cards (4)** | 15 words / 100 chars | 30 words / 200 chars | **20 - 25 words** | **CRITICAL:** Ensure all 4 cards have matching lengths to maintain row symmetry. |
| **Hero Image/Video** | 1280x720px | 2560x1440px | **1920x1080px (16:9)** | Video: max 30s, under 10MB. WebP for images. |
| **Brand Logo** | 200x200px | 800x800px | **400x400px (1:1)** | Must be transparent PNG or SVG. |

## 2. Investment Breakdown

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Section Description** | 15 words / 100 chars | 40 words / 250 chars | **20 - 30 words** | Short intro to financial details. |
| **Breakdown Items (Text)** | 5 words / 30 chars | 15 words / 100 chars | **8 - 12 words** | E.g., "Initial Franchise Fee", "Working Capital". |
| **Item Values** | 1 char ($0) | 15 chars ($1,000,000+) | **~10 chars** | Formatted currency string. |
| **Charts/Graphics** | 600x600px | 1200x1200px | **800x800px (1:1)** | If using uploaded graphics for charts. |

## 3. Ideal Franchise Partner

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Partner Attributes (Text)** | 10 words / 60 chars | 25 words / 150 chars | **15 - 20 words** | Descriptions of who makes a good partner. |
| **Section Image** | 800x600px | 1920x1080px | **1200x900px (4:3)** | Often a lifestyle or handshake image. |

## 4. Support Sessions (Full Cycle Support)

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Support Card Titles** | 2 words / 10 chars | 6 words / 40 chars | **3 - 4 words** | E.g., "Marketing Support", "Training". |
| **Support Card Text** | 15 words / 100 chars | 30 words / 200 chars | **20 - 25 words** | Detail what the support entails. Keep symmetrical. |
| **Icons** | 64x64px | 256x256px | **SVG format** | Vector formats only for scalable icons. |

## 5. Brand Story

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Story Paragraphs** | 40 words / 250 chars | 150 words / 800 chars | **80 - 100 words** | Narrative about the brand history. |
| **Story Images (Inline)** | 800x600px | 1920x1080px | **1200x800px (3:2)** | Historical or milestone photos. |

## 6. Leadership

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Leader Name** | 2 words / 10 chars | 4 words / 30 chars | **2 - 3 words** | Full Name. |
| **Leader Role** | 1 word / 5 chars | 6 words / 45 chars | **2 - 4 words** | E.g., "Chief Executive Officer". |
| **Leader Bio** | 20 words / 130 chars | 60 words / 400 chars | **35 - 45 words** | Short professional biography. |
| **Avatar Images** | 256x256px | 1024x1024px | **512x512px (1:1)** | Must be perfectly square (1:1) to prevent stretching. |

## 7. Media Gallery

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Grid Photos** | 600x750px | 1200x1500px | **800x1000px (4:5)** | Providing a mix of 4:5, 1:1, and 16:9 creates the masonry effect. |
| **Gallery Videos** | 720p | 4K (2160p) | **1080p (16:9)** | 1-3 minutes. High compression (Vimeo/YouTube or MP4 under 30MB). |
| **Shorts / Reels** | 720x1280px | 1080x1920px | **1080x1920px (9:16)** | Mobile format. 15-60 seconds. |
| **Item Title** | 2 words / 10 chars | 8 words / 60 chars | **3 - 5 words** | E.g., "Downtown Cafe Outlet". |

## 8. Expansion Map

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Map Image / Graphic** | 1000x600px | 2560x1440px | **1920x1080px (16:9)** | Used if the map is a static image. |
| **Location Data (Text)**| 1 word / 4 chars | 4 words / 30 chars | **1 - 2 words** | City or Region name (e.g., "New York"). |

## 9. Everything You Need to Know (FAQ / Terms)

| Element | Min Limits | Max Limits | Recommended | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Questions / Titles** | 4 words / 20 chars | 15 words / 100 chars | **6 - 10 words** | FAQ question text. |
| **Answers / Details** | 20 words / 130 chars | 100 words / 600 chars | **40 - 60 words** | FAQ answer text. Should not be overwhelmingly long. |
| **Documents (PDF)** | N/A | 10 MB per file | **Under 2 MB** | E.g., FDD, Terms and Conditions. |

---

### General Recommendations
- **Lazy Loading & Formats:** Always use `.webp` for images to minimize load times.
- **Card Symmetry:** UI breakages mostly occur when horizontal items (like Cards in a row) have wildly different text lengths. Always aim for the **Recommended** limits across siblings.
