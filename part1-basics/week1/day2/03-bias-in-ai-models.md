# Bias in AI Models

## What is AI Bias?

AI reflects biases in its training data. Since models train on code from Stack Overflow and GitHub, they absorb the biases of those developers.

**Key insight**: AI mirrors the tech industry's existing biases and blind spots.

## Common Bias Types

### 1. Stereotypical Examples

AI often suggests:
```javascript
const doctor = { name: "John" };  // Always male
const nurse = { name: "Mary" };   // Always female
```

**Problem**: Reinforces gender stereotypes and usually suggests Western names.

### 2. Default Assumptions

AI assumes:
- English language
- US date formats (MM/DD/YYYY)
- Male pronouns ("he", "his")
- High-speed internet
- Western naming (First Last)

### 3. Missing Accessibility

AI-generated UI often lacks:
```html
<button onclick="submit()">Submit</button>
<img src="photo.jpg">
```

Missing: `aria-label`, `alt` text, keyboard navigation.

**Result**: Excludes users with disabilities.

### 4. Technology Popularity Bias

AI favors popular over appropriate:
- Suggests JavaScript for everything
- Recommends React by default
- Copies Stack Overflow's most upvoted answers

## Real Examples

- **Amazon hiring AI (2018)**: Penalized resumes with "women's" in them. Trained on 10 years of male-dominated resumes.
- **GitHub Copilot studies**: More likely to suggest male names and pronouns.

## How to Fix It

### 1. Diversify Examples
```javascript
const users = [
  { name: "Fatima Hassan", pronouns: "she/her" },
  { name: "Alex Kim", pronouns: "they/them" },
  { name: "José García", pronouns: "he/him" }
];
```

### 2. Add Accessibility
```html
<button aria-label="Submit form" onClick={handleSubmit}>
  Submit
</button>
<img src="chart.png" alt="Revenue growth chart 2020-2024" />
```

### 3. Support Internationalization
```javascript
const date = new Intl.DateTimeFormat(userLocale).format(new Date());
```

### 4. Use Inclusive Language
Replace:
- Master/slave → Primary/replica
- Whitelist/blacklist → Allowlist/blocklist
- Gendered pronouns → They/them or names

## Quick Bias Check

Before accepting AI code:
- [ ] Are examples diverse?
- [ ] Is accessibility included?
- [ ] Does it work internationally?
- [ ] Any stereotypical assumptions?
- [ ] Would this work for users unlike me?

## Why It Matters

Inclusive software:
- Works better for everyone
- Reaches more users
- Avoids legal issues (ADA, WCAG)
- Shows you care about all users

## Key Takeaways

1. AI learns from biased data
2. Naming and examples matter
3. Accessibility is usually missing
4. You must review and fix biased suggestions
5. Inclusive code works better for everyone

**Remember**: "AI generated it" isn't an excuse for biased, inaccessible, or non-inclusive code. You're responsible.
