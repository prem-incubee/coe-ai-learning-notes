# Code Ownership and Licensing

## The Big Question

Who owns AI-generated code? Nobody knows for sure. This creates real legal risks.

**Traditional ownership**: You write code → You (or your employer) own it

**AI-generated**: Unclear. You? The AI company? The original code authors in training data?

**Current status**: US Copyright Office says purely AI-created works lack human authorship and may not be copyrightable.

## The Real Risks

### 1. GPL Contamination (Biggest Risk)

AI models train on millions of public repos, including GPL-licensed code.

**GPL requires**:
- Derivative works must also be GPL
- You must share your source code
- Users get the same freedoms

**The risk**: If AI reproduces GPL code in your proprietary product, you might be forced to:
- Open source your entire codebase
- Face legal action

**Real case**: Class-action lawsuit against GitHub Copilot for reproducing licensed code without attribution.

### 2. No Attribution

AI doesn't tell you where code came from. Most open source licenses require:
- Credit to original authors
- License text included

You can't provide attribution if you don't know the source.

### 3. Copyright Infringement

Studies show AI sometimes reproduces code verbatim from training data, including comments and license headers.

## What AI Tools Say

All tools say "you own the output" BUT "we're not responsible if someone sues you."

- **GitHub Copilot**: Offers duplicate detection (turn it on!)
- **ChatGPT**: May train on your prompts unless you opt out
- **Claude**: No training on your data by default

## What You Should Do

1. **Always modify AI suggestions** - More changes = stronger ownership claim
2. **Check for duplicates** - Search suspicious code on GitHub
3. **Use license scanning tools** - FOSSology, ScanCode
4. **Document AI usage** - Note in commits: "AI-assisted, reviewed and modified"
5. **When in doubt, rewrite** - If it looks too perfect, redo it yourself

## Risk Assessment

**Lower risk**:
- ✅ Common patterns (loops, error handling)
- ✅ Boilerplate code
- ✅ Code you heavily modify

**Higher risk**:
- ❌ Exact complex logic reproductions
- ❌ Very specific implementations
- ❌ Commercial products without review

## Key Takeaways

1. Ownership is legally unclear
2. GPL contamination is the biggest risk
3. You're responsible regardless - "AI did it" isn't a defense
4. Modify code substantially
5. Check for duplicates
6. Assume AI code might have licensing issues

**Golden rule**: If AI code looks suspiciously perfect or specific, be extra careful.
